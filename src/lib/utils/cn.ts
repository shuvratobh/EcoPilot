/**
 * cn — Tailwind class name utility
 *
 * Combines clsx + tailwind-merge for conflict-free class composition.
 * Required by shadcn/ui components.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
