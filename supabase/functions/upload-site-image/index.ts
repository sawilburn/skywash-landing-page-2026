import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase environment variables");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const formData = await req.formData();
    const file = formData.get("file") as File;
    const section = formData.get("section") as string;
    const title = formData.get("title") as string;
    const altText = formData.get("altText") as string;

    if (!file || !section || !title || !altText) {
      throw new Error("Missing required fields: file, section, title, altText");
    }

    const fileExt = file.name.split(".").pop();
    const fileName = `${section}-${Date.now()}.${fileExt}`;
    const storagePath = fileName;

    const fileBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(fileBuffer);

    const { data: storageData, error: storageError } = await supabase.storage
      .from("images")
      .upload(storagePath, uint8Array, {
        contentType: file.type,
        upsert: false,
      });

    if (storageError) {
      throw new Error(`Storage upload failed: ${storageError.message}`);
    }

    const { data: dbData, error: dbError } = await supabase
      .from("site_images")
      .insert({
        section,
        title,
        storage_path: storagePath,
        alt_text: altText,
        is_active: true,
        sort_order: 1,
      })
      .select()
      .single();

    if (dbError) {
      await supabase.storage.from("images").remove([storagePath]);
      throw new Error(`Database insert failed: ${dbError.message}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Image uploaded successfully",
        data: dbData,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error uploading image:", error);

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
