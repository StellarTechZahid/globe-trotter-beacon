import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.3';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ConsultationRequest {
  fullName: string;
  email: string;
  phoneNumber: string;
  desiredCountry: string;
  previousEducation: string;
  cgpa: string;
  programType: string;
  fieldOfStudy: string;
  intake: string;
  budget: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    // Validate request body exists
    const body = await req.text();
    if (!body) {
      return new Response(
        JSON.stringify({ error: "Request body is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const consultationData: ConsultationRequest = JSON.parse(body);

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phoneNumber', 'desiredCountry', 'previousEducation', 'cgpa', 'programType', 'fieldOfStudy', 'intake', 'budget'];
    const missingFields = requiredFields.filter(field => !consultationData[field as keyof ConsultationRequest]);
    
    if (missingFields.length > 0) {
      return new Response(
        JSON.stringify({ error: `Missing required fields: ${missingFields.join(', ')}` }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(consultationData.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client with service role for secure server-side insert (bypasses RLS)
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseServiceRoleKey) {
      throw new Error('Missing Supabase environment variables');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Insert consultation form data into Supabase
    const { data, error } = await supabase
      .from('consultation_forms')
      .insert([{
        full_name: consultationData.fullName,
        email: consultationData.email,
        phone_number: consultationData.phoneNumber,
        desired_country: consultationData.desiredCountry,
        previous_education: consultationData.previousEducation,
        cgpa: consultationData.cgpa,
        program_type: consultationData.programType,
        field_of_study: consultationData.fieldOfStudy,
        intake: consultationData.intake,
        budget: consultationData.budget,
        created_at: new Date().toISOString()
      }])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(`Failed to save consultation data: ${error.message}`);
    }

    console.log('Consultation data saved successfully:', data);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Consultation request submitted successfully" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in send-consultation-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Internal server error",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);