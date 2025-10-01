-- Fix consultation and contact forms INSERT policies to allow anonymous submissions
-- Drop existing INSERT policies if they exist
DROP POLICY IF EXISTS "Anyone can insert consultation forms" ON public.consultation_forms;
DROP POLICY IF EXISTS "Anyone can insert contact forms" ON public.contact_forms;

-- Recreate INSERT policies with explicit anon role access
CREATE POLICY "Anyone can insert consultation forms"
ON public.consultation_forms
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Anyone can insert contact forms"
ON public.contact_forms
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Update has_role function with explicit search_path for security
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;