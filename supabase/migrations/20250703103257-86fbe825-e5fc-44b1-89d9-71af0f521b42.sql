-- Create consultation_forms table for storing consultation form submissions
CREATE TABLE public.consultation_forms (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  desired_country TEXT NOT NULL,
  previous_education TEXT NOT NULL,
  cgpa TEXT NOT NULL,
  program_type TEXT NOT NULL,
  field_of_study TEXT NOT NULL,
  intake TEXT NOT NULL,
  budget TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact_forms table for storing contact form submissions
CREATE TABLE public.contact_forms (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.consultation_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_forms ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anyone to insert data (for form submissions)
CREATE POLICY "Anyone can insert consultation forms" 
ON public.consultation_forms 
FOR INSERT 
TO anon
WITH CHECK (true);

CREATE POLICY "Anyone can insert contact forms" 
ON public.contact_forms 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_consultation_forms_updated_at
  BEFORE UPDATE ON public.consultation_forms
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contact_forms_updated_at
  BEFORE UPDATE ON public.contact_forms
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();