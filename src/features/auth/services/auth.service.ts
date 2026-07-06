import { createClient } from "@/lib/supabase/client";
import type { LoginInput, RegisterInput, ForgotPasswordInput, ResetPasswordInput } from "../validation/auth.schema";

export class AuthService {
  static async login(input: LoginInput) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: input.email,
      password: input.password,
    });

    if (error) throw error;
    return data;
  }

  static async register(input: RegisterInput) {
    const supabase = createClient();
    // Registration handles user creation and will trigger backend webhooks/triggers
    // to create the Organization and OrganizationUser based on metadata.
    const { data, error } = await supabase.auth.signUp({
      email: input.email,
      password: input.password,
      options: {
        data: {
          full_name: input.fullName,
          organization_name: input.organizationName,
        },
      },
    });

    if (error) throw error;
    return data;
  }

  static async logout() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }

  static async resetPassword(input: ForgotPasswordInput) {
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(input.email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });

    if (error) throw error;
  }

  static async updatePassword(input: ResetPasswordInput) {
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({
      password: input.password,
    });

    if (error) throw error;
  }
}
