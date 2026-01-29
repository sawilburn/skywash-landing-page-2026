import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface LeadData {
  contact_name: string;
  email: string;
  phone: string;
  type: "residential" | "commercial";
  details: string;
  company_name?: string;
}

interface ZohoTokenResponse {
  access_token: string;
  api_domain: string;
  token_type: string;
  expires_in: number;
}

async function getZohoAccessToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string
): Promise<string> {
  const tokenUrl = "https://accounts.zoho.com/oauth/v2/token";

  const params = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "refresh_token",
  });

  const response = await fetch(`${tokenUrl}?${params.toString()}`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Failed to refresh Zoho token: ${response.statusText}`);
  }

  const data: ZohoTokenResponse = await response.json();
  return data.access_token;
}

async function createZohoLead(
  accessToken: string,
  leadData: LeadData,
  region: string
): Promise<any> {
  const zohoApiUrl = `https://www.zohoapis.${region}/crm/v2/Leads`;

  const zohoLead = {
    data: [
      {
        Last_Name: leadData.contact_name,
        Email: leadData.email,
        Phone: leadData.phone,
        Company: leadData.company_name || "N/A",
        Lead_Source: "Website",
        Description: `Type: ${leadData.type}\n\n${leadData.details}`,
      },
    ],
  };

  const response = await fetch(zohoApiUrl, {
    method: "POST",
    headers: {
      "Authorization": `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(zohoLead),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to create Zoho lead: ${response.statusText} - ${errorText}`);
  }

  return await response.json();
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    console.log("Zoho CRM Sync triggered");

    const zohoClientId = Deno.env.get("ZOHO_CLIENT_ID");
    const zohoClientSecret = Deno.env.get("ZOHO_CLIENT_SECRET");
    const zohoRefreshToken = Deno.env.get("ZOHO_REFRESH_TOKEN");
    // Valid regions: com, eu, in, com.au, jp, ca
    const zohoRegion = Deno.env.get("ZOHO_REGION") || "com";

    console.log("Zoho credentials check:", {
      hasClientId: !!zohoClientId,
      hasClientSecret: !!zohoClientSecret,
      hasRefreshToken: !!zohoRefreshToken,
      region: zohoRegion
    });

    if (!zohoClientId || !zohoClientSecret || !zohoRefreshToken) {
      const missingVars = [];
      if (!zohoClientId) missingVars.push("ZOHO_CLIENT_ID");
      if (!zohoClientSecret) missingVars.push("ZOHO_CLIENT_SECRET");
      if (!zohoRefreshToken) missingVars.push("ZOHO_REFRESH_TOKEN");

      const errorMsg = `Missing Zoho CRM credentials: ${missingVars.join(", ")}`;
      console.error(errorMsg);
      throw new Error(errorMsg);
    }

    const leadData: LeadData = await req.json();
    console.log("Lead data received:", {
      type: leadData.type,
      email: leadData.email,
      hasName: !!leadData.contact_name
    });

    console.log("Requesting Zoho access token...");
    const accessToken = await getZohoAccessToken(
      zohoClientId,
      zohoClientSecret,
      zohoRefreshToken
    );
    console.log("Access token obtained successfully");

    console.log("Creating Zoho lead...");
    const result = await createZohoLead(accessToken, leadData, zohoRegion);
    console.log("Lead created successfully:", result);

    return new Response(
      JSON.stringify({
        success: true,
        zoho_response: result,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error syncing to Zoho CRM:", error);
    console.error("Error details:", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined
    });

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
