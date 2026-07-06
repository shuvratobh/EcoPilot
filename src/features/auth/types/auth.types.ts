import type { UserRole } from "@prisma/client";
import type { User, Session } from "@supabase/supabase-js";

export interface AuthUser extends User {
  role: UserRole;
  organizationId: string;
  name?: string;
  avatarUrl?: string | null;
}

export interface AuthState {
  user: AuthUser | null;
  session: Session | null;
  isLoading: boolean;
  error: Error | null;
}

export interface AuthError {
  message: string;
  code?: string;
  details?: string;
}
