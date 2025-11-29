export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      application_documents: {
        Row: {
          admin_feedback: string | null
          application_id: string | null
          created_at: string | null
          document_type: string
          file_name: string | null
          file_url: string | null
          id: string
          reviewed_at: string | null
          status: string | null
          updated_at: string | null
          uploaded_at: string | null
        }
        Insert: {
          admin_feedback?: string | null
          application_id?: string | null
          created_at?: string | null
          document_type: string
          file_name?: string | null
          file_url?: string | null
          id?: string
          reviewed_at?: string | null
          status?: string | null
          updated_at?: string | null
          uploaded_at?: string | null
        }
        Update: {
          admin_feedback?: string | null
          application_id?: string | null
          created_at?: string | null
          document_type?: string
          file_name?: string | null
          file_url?: string | null
          id?: string
          reviewed_at?: string | null
          status?: string | null
          updated_at?: string | null
          uploaded_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "application_documents_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      applications: {
        Row: {
          application_deadline: string | null
          assigned_counselor: string | null
          created_at: string | null
          id: string
          notes: string | null
          program_id: string | null
          program_name: string
          progress_percent: number | null
          status: string | null
          student_id: string | null
          university_name: string
          updated_at: string | null
        }
        Insert: {
          application_deadline?: string | null
          assigned_counselor?: string | null
          created_at?: string | null
          id?: string
          notes?: string | null
          program_id?: string | null
          program_name: string
          progress_percent?: number | null
          status?: string | null
          student_id?: string | null
          university_name: string
          updated_at?: string | null
        }
        Update: {
          application_deadline?: string | null
          assigned_counselor?: string | null
          created_at?: string | null
          id?: string
          notes?: string | null
          program_id?: string | null
          program_name?: string
          progress_percent?: number | null
          status?: string | null
          student_id?: string | null
          university_name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "applications_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      consultation_forms: {
        Row: {
          budget: string
          cgpa: string
          created_at: string
          desired_country: string
          email: string
          field_of_study: string
          full_name: string
          id: string
          intake: string
          phone_number: string
          previous_education: string
          program_type: string
          updated_at: string
        }
        Insert: {
          budget: string
          cgpa: string
          created_at?: string
          desired_country: string
          email: string
          field_of_study: string
          full_name: string
          id?: string
          intake: string
          phone_number: string
          previous_education: string
          program_type: string
          updated_at?: string
        }
        Update: {
          budget?: string
          cgpa?: string
          created_at?: string
          desired_country?: string
          email?: string
          field_of_study?: string
          full_name?: string
          id?: string
          intake?: string
          phone_number?: string
          previous_education?: string
          program_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_forms: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          subject: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          subject: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          subject?: string
          updated_at?: string
        }
        Relationships: []
      }
      eligibility_results: {
        Row: {
          created_at: string | null
          eligible_countries: string[] | null
          id: string
          ineligible_countries: string[] | null
          recommendations: string[] | null
          requirements_missing: string[] | null
          student_id: string | null
        }
        Insert: {
          created_at?: string | null
          eligible_countries?: string[] | null
          id?: string
          ineligible_countries?: string[] | null
          recommendations?: string[] | null
          requirements_missing?: string[] | null
          student_id?: string | null
        }
        Update: {
          created_at?: string | null
          eligible_countries?: string[] | null
          id?: string
          ineligible_countries?: string[] | null
          recommendations?: string[] | null
          requirements_missing?: string[] | null
          student_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "eligibility_results_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          budget_max: number | null
          budget_min: number | null
          created_at: string | null
          current_education: string | null
          date_of_birth: string | null
          email: string
          english_test_score: number | null
          english_test_type: string | null
          full_name: string
          gpa: number | null
          id: string
          intake_preference: string | null
          nationality: string | null
          phone_number: string | null
          preferred_countries: string[] | null
          preferred_programs: string[] | null
          profile_completion_percent: number | null
          updated_at: string | null
          work_experience_years: number | null
        }
        Insert: {
          budget_max?: number | null
          budget_min?: number | null
          created_at?: string | null
          current_education?: string | null
          date_of_birth?: string | null
          email: string
          english_test_score?: number | null
          english_test_type?: string | null
          full_name: string
          gpa?: number | null
          id: string
          intake_preference?: string | null
          nationality?: string | null
          phone_number?: string | null
          preferred_countries?: string[] | null
          preferred_programs?: string[] | null
          profile_completion_percent?: number | null
          updated_at?: string | null
          work_experience_years?: number | null
        }
        Update: {
          budget_max?: number | null
          budget_min?: number | null
          created_at?: string | null
          current_education?: string | null
          date_of_birth?: string | null
          email?: string
          english_test_score?: number | null
          english_test_type?: string | null
          full_name?: string
          gpa?: number | null
          id?: string
          intake_preference?: string | null
          nationality?: string | null
          phone_number?: string | null
          preferred_countries?: string[] | null
          preferred_programs?: string[] | null
          profile_completion_percent?: number | null
          updated_at?: string | null
          work_experience_years?: number | null
        }
        Relationships: []
      }
      programs: {
        Row: {
          application_deadline: string | null
          created_at: string | null
          currency: string | null
          degree_level: string
          description: string | null
          duration_months: number | null
          english_requirement: string | null
          field_of_study: string
          id: string
          intake_months: string[] | null
          min_english_score: number | null
          min_gpa: number | null
          name: string
          program_url: string | null
          tuition_fee_annual: number | null
          university_id: string | null
          updated_at: string | null
        }
        Insert: {
          application_deadline?: string | null
          created_at?: string | null
          currency?: string | null
          degree_level: string
          description?: string | null
          duration_months?: number | null
          english_requirement?: string | null
          field_of_study: string
          id?: string
          intake_months?: string[] | null
          min_english_score?: number | null
          min_gpa?: number | null
          name: string
          program_url?: string | null
          tuition_fee_annual?: number | null
          university_id?: string | null
          updated_at?: string | null
        }
        Update: {
          application_deadline?: string | null
          created_at?: string | null
          currency?: string | null
          degree_level?: string
          description?: string | null
          duration_months?: number | null
          english_requirement?: string | null
          field_of_study?: string
          id?: string
          intake_months?: string[] | null
          min_english_score?: number | null
          min_gpa?: number | null
          name?: string
          program_url?: string | null
          tuition_fee_annual?: number | null
          university_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "programs_university_id_fkey"
            columns: ["university_id"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["id"]
          },
        ]
      }
      scholarships: {
        Row: {
          amount_max: number | null
          amount_min: number | null
          application_url: string | null
          countries: string[] | null
          created_at: string | null
          currency: string | null
          deadline: string | null
          degree_levels: string[] | null
          description: string | null
          eligibility_criteria: string | null
          fields_of_study: string[] | null
          id: string
          min_gpa: number | null
          name: string
          nationality_restrictions: string[] | null
          provider: string
          updated_at: string | null
        }
        Insert: {
          amount_max?: number | null
          amount_min?: number | null
          application_url?: string | null
          countries?: string[] | null
          created_at?: string | null
          currency?: string | null
          deadline?: string | null
          degree_levels?: string[] | null
          description?: string | null
          eligibility_criteria?: string | null
          fields_of_study?: string[] | null
          id?: string
          min_gpa?: number | null
          name: string
          nationality_restrictions?: string[] | null
          provider: string
          updated_at?: string | null
        }
        Update: {
          amount_max?: number | null
          amount_min?: number | null
          application_url?: string | null
          countries?: string[] | null
          created_at?: string | null
          currency?: string | null
          deadline?: string | null
          degree_levels?: string[] | null
          description?: string | null
          eligibility_criteria?: string | null
          fields_of_study?: string[] | null
          id?: string
          min_gpa?: number | null
          name?: string
          nationality_restrictions?: string[] | null
          provider?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      universities: {
        Row: {
          city: string | null
          country: string
          country_ranking: number | null
          created_at: string | null
          description: string | null
          id: string
          is_partner: boolean | null
          logo_url: string | null
          name: string
          updated_at: string | null
          website_url: string | null
          world_ranking: number | null
        }
        Insert: {
          city?: string | null
          country: string
          country_ranking?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_partner?: boolean | null
          logo_url?: string | null
          name: string
          updated_at?: string | null
          website_url?: string | null
          world_ranking?: number | null
        }
        Update: {
          city?: string | null
          country?: string
          country_ranking?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_partner?: boolean | null
          logo_url?: string | null
          name?: string
          updated_at?: string | null
          website_url?: string | null
          world_ranking?: number | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
