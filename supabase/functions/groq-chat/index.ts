
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const GROQ_API_KEY = Deno.env.get('GROQ_API_KEY');

    if (!GROQ_API_KEY) {
      console.error('GROQ_API_KEY is not set');
      throw new Error('GROQ_API_KEY is not configured');
    }

    console.log('Sending request to Groq API...');

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant", // Updated to latest supported model
        messages: [
          {
            role: "system",
            content: "You are an AI Study Assistant for Abroad Academics, a premier study abroad consultancy. You help students with questions about studying abroad, university applications, scholarships, visa processes, and country information. Be helpful, informative, encouraging, and professional. Keep responses concise but comprehensive (2-3 paragraphs max). Use emojis to make responses engaging. If someone needs detailed consultation, recommend they book a free consultation call with our expert counselors. Always maintain a friendly and supportive tone. Focus on practical advice and actionable steps."
          },
          ...messages
        ],
        temperature: 0.8,
        max_tokens: 1500,
        top_p: 1,
        stream: false,
      }),
    });

    if (!response.ok) {
      console.error('Groq API response not ok:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`Groq API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Successfully got response from Groq API');
    
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in groq-chat function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      choices: [{ 
        message: { 
          content: "I'm experiencing technical difficulties. Please try again in a moment or contact our support team for immediate assistance." 
        } 
      }]
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
