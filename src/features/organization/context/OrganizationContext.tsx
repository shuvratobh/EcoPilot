"use client";

import { createContext } from "react";
import type { OrganizationContextState } from "../types/organization.types";

export const OrganizationContext = createContext<OrganizationContextState | undefined>(undefined);
