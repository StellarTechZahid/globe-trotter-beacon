-- Create profiles table for user data
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text,
  date_of_birth date,
  nationality text,
  current_education text,
  gpa numeric(3,2),
  english_test_type text,
  english_test_score numeric(4,1),
  work_experience_years integer DEFAULT 0,
  budget_min integer,
  budget_max integer,
  preferred_countries text[],
  preferred_programs text[],
  intake_preference text,
  profile_completion_percent integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create universities table
CREATE TABLE IF NOT EXISTS public.universities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  country text NOT NULL,
  city text,
  world_ranking integer,
  country_ranking integer,
  website_url text,
  logo_url text,
  description text,
  is_partner boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create programs table
CREATE TABLE IF NOT EXISTS public.programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  university_id uuid REFERENCES public.universities(id) ON DELETE CASCADE,
  name text NOT NULL,
  degree_level text NOT NULL,
  field_of_study text NOT NULL,
  duration_months integer,
  tuition_fee_annual integer,
  currency text DEFAULT 'USD',
  intake_months text[],
  min_gpa numeric(3,2),
  english_requirement text,
  min_english_score numeric(4,1),
  application_deadline date,
  program_url text,
  description text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create scholarships table
CREATE TABLE IF NOT EXISTS public.scholarships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  provider text NOT NULL,
  countries text[],
  amount_min integer,
  amount_max integer,
  currency text DEFAULT 'USD',
  degree_levels text[],
  fields_of_study text[],
  min_gpa numeric(3,2),
  nationality_restrictions text[],
  deadline date,
  application_url text,
  description text,
  eligibility_criteria text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create applications table
CREATE TABLE IF NOT EXISTS public.applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  program_id uuid REFERENCES public.programs(id) ON DELETE SET NULL,
  university_name text NOT NULL,
  program_name text NOT NULL,
  status text DEFAULT 'draft',
  progress_percent integer DEFAULT 0,
  application_deadline date,
  notes text,
  assigned_counselor uuid,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create application_documents table
CREATE TABLE IF NOT EXISTS public.application_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id uuid REFERENCES public.applications(id) ON DELETE CASCADE,
  document_type text NOT NULL,
  file_name text,
  file_url text,
  status text DEFAULT 'pending',
  admin_feedback text,
  uploaded_at timestamp with time zone DEFAULT now(),
  reviewed_at timestamp with time zone,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create eligibility_results table
CREATE TABLE IF NOT EXISTS public.eligibility_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  eligible_countries text[],
  ineligible_countries text[],
  requirements_missing text[],
  recommendations text[],
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.universities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scholarships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.application_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.eligibility_results ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
  ON public.profiles FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update all profiles"
  ON public.profiles FOR UPDATE
  USING (has_role(auth.uid(), 'admin'));

-- RLS Policies for universities
CREATE POLICY "Anyone can view universities"
  ON public.universities FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage universities"
  ON public.universities FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- RLS Policies for programs
CREATE POLICY "Anyone can view programs"
  ON public.programs FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage programs"
  ON public.programs FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- RLS Policies for scholarships
CREATE POLICY "Anyone can view scholarships"
  ON public.scholarships FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage scholarships"
  ON public.scholarships FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- RLS Policies for applications
CREATE POLICY "Students can view own applications"
  ON public.applications FOR SELECT
  USING (auth.uid() = student_id);

CREATE POLICY "Students can create own applications"
  ON public.applications FOR INSERT
  WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Students can update own applications"
  ON public.applications FOR UPDATE
  USING (auth.uid() = student_id);

CREATE POLICY "Admins can view all applications"
  ON public.applications FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update all applications"
  ON public.applications FOR UPDATE
  USING (has_role(auth.uid(), 'admin'));

-- RLS Policies for application_documents
CREATE POLICY "Students can view own documents"
  ON public.application_documents FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.applications
    WHERE applications.id = application_documents.application_id
    AND applications.student_id = auth.uid()
  ));

CREATE POLICY "Students can upload own documents"
  ON public.application_documents FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.applications
    WHERE applications.id = application_documents.application_id
    AND applications.student_id = auth.uid()
  ));

CREATE POLICY "Admins can manage all documents"
  ON public.application_documents FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- RLS Policies for eligibility_results
CREATE POLICY "Students can view own eligibility"
  ON public.eligibility_results FOR SELECT
  USING (auth.uid() = student_id);

CREATE POLICY "Students can create own eligibility"
  ON public.eligibility_results FOR INSERT
  WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Admins can view all eligibility"
  ON public.eligibility_results FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_universities_updated_at
  BEFORE UPDATE ON public.universities
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_programs_updated_at
  BEFORE UPDATE ON public.programs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_scholarships_updated_at
  BEFORE UPDATE ON public.scholarships
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_applications_updated_at
  BEFORE UPDATE ON public.applications
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_application_documents_updated_at
  BEFORE UPDATE ON public.application_documents
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Function to auto-create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'full_name', ''),
    new.email
  );
  RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();