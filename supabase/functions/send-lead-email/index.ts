import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface LeadData {
  type: string;
  contact_name: string;
  email: string;
  phone: string;
  company_name?: string;
  details: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const leadData: LeadData = await req.json();
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      throw new Error("Missing Resend API key in environment variables");
    }

    const isCommercial = leadData.type === "commercial";
    const subject = isCommercial
      ? `New Commercial Lead: ${leadData.company_name || leadData.contact_name}`
      : `New Residential Lead: ${leadData.contact_name}`;

    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1a3c75; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1a3c75; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New ${isCommercial ? 'Commercial' : 'Residential'} Lead</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Contact Name:</div>
                <div class="value">${leadData.contact_name}</div>
              </div>

              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${leadData.email}</div>
              </div>

              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${leadData.phone}</div>
              </div>

              ${leadData.company_name ? `
              <div class="field">
                <div class="label">Company Name:</div>
                <div class="value">${leadData.company_name}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">Details:</div>
                <div class="value" style="white-space: pre-wrap;">${leadData.details}</div>
              </div>

              <div class="field" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
                <div class="label">Lead Type:</div>
                <div class="value">${isCommercial ? 'Commercial' : 'Residential'}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Skywash Leads <leads@skywashinnovations.com>",
        to: ["info@skywashinnovations.com"],
        subject: subject,
        html: htmlBody,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(`Resend API error: ${JSON.stringify(result)}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
        emailId: result.id,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);

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
