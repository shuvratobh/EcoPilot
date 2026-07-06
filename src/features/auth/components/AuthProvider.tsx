"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { AuthContext } from "../context/AuthContext";
import type { AuthState, AuthUser } from "../types/auth.types";
import { AuthService } from "../services/auth.service";
import type { UserRole } from "@prisma/client";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const supabase = createClient();
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    isLoading: true,
    error: null,
  });

  const fetchUserDetails = useCallback(async (userId: string): Promise<AuthUser | null> => {
    try {
      const { data, error } = await supabase
        .from("organization_users")
        .select("role, organizationId, name, avatarUrl")
        .eq("userId", userId)
        .single();
        
      if (error) {
        console.error("Failed to fetch user details:", error);
        // Fallback to basic user without role/org if query fails
        const { data: authData } = await supabase.auth.getUser();
        if (!authData.user) return null;
        return {
          ...authData.user,
          role: "Employee" as UserRole, // Safe fallback
          organizationId: "",
        };
      }
      
      const { data: authData } = await supabase.auth.getUser();
      if (!authData.user) return null;

      const authUser: AuthUser = {
        ...authData.user,
        role: data.role as UserRole,
        organizationId: data.organizationId,
        name: data.name,
        avatarUrl: data.avatarUrl,
      };
      
      return authUser;
    } catch (err) {
      console.error(err);
      return null;
    }
  }, [supabase]);

  const refreshSession = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      
      if (session?.user) {
        const userDetails = await fetchUserDetails(session.user.id);
        setState({
          session,
          user: userDetails,
          isLoading: false,
          error: null,
        });
      } else {
        setState({
          session: null,
          user: null,
          isLoading: false,
          error: null,
        });
      }
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error : new Error("Failed to refresh session"),
      }));
    }
  }, [supabase.auth, fetchUserDetails]);

  useEffect(() => {
    refreshSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_OUT") {
        setState({ user: null, session: null, isLoading: false, error: null });
      } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        if (session?.user) {
          const userDetails = await fetchUserDetails(session.user.id);
          setState({
            session,
            user: userDetails,
            isLoading: false,
            error: null,
          });
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase.auth, fetchUserDetails, refreshSession]);

  const signOut = async () => {
    await AuthService.logout();
    setState({ user: null, session: null, isLoading: false, error: null });
  };

  return (
    <AuthContext.Provider value={{ ...state, signOut, refreshSession }}>
      {children}
    </AuthContext.Provider>
  );
}
