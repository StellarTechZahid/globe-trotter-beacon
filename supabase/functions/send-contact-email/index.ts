import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.3';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactData: ContactRequest = await req.json();

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    // Insert contact form data into Supabase
    const { data, error } = await supabase
      .from('contact_forms')
      .insert([{
        name: contactData.name,
        email: contactData.email,
        subject: contactData.subject,
        message: contactData.message
      }]);

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to save contact data');
    }

    console.log('Contact data saved successfully:', data);

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Abroad Academics <onboarding@resend.dev>",
      to: [contactData.email],
      subject: "Thank You for Contacting Us - Abroad Academics",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #ea580c, #c2410c); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${contactData.name}!</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #ea580c; margin-top: 0;">We Received Your Message</h2>
            
            <p style="color: #333; line-height: 1.6;">
              Thank you for reaching out to us. We have received your message regarding "<strong>${contactData.subject}</strong>" 
              and our team will get back to you within 24 hours.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ea580c;">
              <h3 style="color: #ea580c; margin-top: 0;">Your Message:</h3>
              <p style="color: #555; line-height: 1.6;">${contactData.message}</p>
            </div>
            
            <div style="background: #ea580c; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0;">Need Immediate Help?</h3>
               <p style="margin: 0;">WhatsApp: +1 (234) 567-890<br/>
               Email: ahmadzahid50100@gmail.com<br/>
              Available 24/7 for urgent queries</p>
            </div>
            
            <p style="color: #666; text-align: center; margin-top: 30px;">
              <strong>While you wait, explore our resources:</strong><br/>
              • Free University Selection Guide<br/>
              • Scholarship Database<br/>
              • Student Success Stories
            </p>
          </div>
        </div>
      `,
    });

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Abroad Academics <onboarding@resend.dev>",
      to: ["ahmadzahid50100@gmail.com"],
      subject: `New Contact Form: ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #ea580c;">New Contact Form Submission</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h3>Contact Information:</h3>
            <ul>
              <li><strong>Name:</strong> ${contactData.name}</li>
              <li><strong>Email:</strong> ${contactData.email}</li>
              <li><strong>Subject:</strong> ${contactData.subject}</li>
            </ul>
            
            <h3>Message:</h3>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #ea580c;">
              <p>${contactData.message}</p>
            </div>
          </div>
          
          <p style="color: #ea580c; font-weight: bold;">Please respond to this inquiry within 24 hours.</p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { userEmailResponse, adminEmailResponse });

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Contact form submitted successfully" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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