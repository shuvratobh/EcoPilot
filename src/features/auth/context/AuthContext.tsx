"use client";

import { createContext } from "react";
import type { AuthState } from "../types/auth.types";

export interface AuthContextValue extends AuthState {
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
