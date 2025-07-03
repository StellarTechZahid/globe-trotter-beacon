import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.3';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
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

  try {
    const consultationData: ConsultationRequest = await req.json();

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

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
        budget: consultationData.budget
      }]);

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to save consultation data');
    }

    console.log('Consultation data saved successfully:', data);

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Abroad Academics <onboarding@resend.dev>",
      to: [consultationData.email],
      subject: "Your Free Consultation Request - Abroad Academics",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #ea580c, #c2410c); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${consultationData.fullName}!</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #ea580c; margin-top: 0;">Your Free Consultation Request Received</h2>
            
            <p style="color: #333; line-height: 1.6;">
              We have successfully received your consultation request for studying in <strong>${consultationData.desiredCountry}</strong>. 
              Our expert counselors will review your profile and contact you within 24 hours.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ea580c;">
              <h3 style="color: #ea580c; margin-top: 0;">Your Consultation Details:</h3>
              <ul style="color: #555; line-height: 1.8;">
                <li><strong>Desired Country:</strong> ${consultationData.desiredCountry}</li>
                <li><strong>Program Type:</strong> ${consultationData.programType}</li>
                <li><strong>Field of Study:</strong> ${consultationData.fieldOfStudy}</li>
                <li><strong>Intake:</strong> ${consultationData.intake}</li>
                <li><strong>Budget:</strong> ${consultationData.budget}</li>
              </ul>
            </div>
            
            <div style="background: #ea580c; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0;">What Happens Next?</h3>
              <p style="margin: 0;">✓ Profile Review (Within 2 hours)<br/>
              ✓ Personalized Consultation Call (Within 24 hours)<br/>
              ✓ University & Scholarship Recommendations</p>
            </div>
            
            <p style="color: #666; text-align: center; margin-top: 30px;">
              <strong>Need immediate assistance?</strong><br/>
              WhatsApp: +1 (234) 567-890 | Email: info@abroadacademics.com
            </p>
          </div>
        </div>
      `,
    });

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Abroad Academics <onboarding@resend.dev>",
      to: ["info@abroadacademics.com"],
      subject: `New Consultation Request - ${consultationData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #ea580c;">New Consultation Request</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h3>Student Information:</h3>
            <ul>
              <li><strong>Name:</strong> ${consultationData.fullName}</li>
              <li><strong>Email:</strong> ${consultationData.email}</li>
              <li><strong>Phone:</strong> ${consultationData.phoneNumber}</li>
              <li><strong>Desired Country:</strong> ${consultationData.desiredCountry}</li>
              <li><strong>Previous Education:</strong> ${consultationData.previousEducation}</li>
              <li><strong>CGPA:</strong> ${consultationData.cgpa}</li>
              <li><strong>Program Type:</strong> ${consultationData.programType}</li>
              <li><strong>Field of Study:</strong> ${consultationData.fieldOfStudy}</li>
              <li><strong>Intake:</strong> ${consultationData.intake}</li>
              <li><strong>Budget:</strong> ${consultationData.budget}</li>
            </ul>
          </div>
          
          <p style="color: #ea580c; font-weight: bold;">Please contact this student within 24 hours.</p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { userEmailResponse, adminEmailResponse });

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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);