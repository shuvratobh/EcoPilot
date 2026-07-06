import { AuthError as SupabaseAuthError } from "@supabase/supabase-js";
import type { AuthError } from "../types/auth.types";

export function parseAuthError(error: unknown): AuthError {
  if (error instanceof SupabaseAuthError) {
    // Provide user-friendly messages for common Supabase errors
    switch (error.message) {
      case "Invalid login credentials":
        return { message: "Invalid email or password. Please try again." };
      case "User already registered":
        return { message: "An account with this email already exists." };
      case "Email not confirmed":
        return { message: "Please verify your email address before logging in." };
      default:
        return { message: error.message, code: error.code };
    }
  }

  if (error instanceof Error) {
    return { message: error.message };
  }

  return { message: "An unexpected error occurred during authentication." };
}
