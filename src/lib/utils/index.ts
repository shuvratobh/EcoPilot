/**
 * src/lib/utils/index.ts
 *
 * Barrel export for all utility functions.
 * Import from "@/lib/utils" instead of the individual files.
 *
 * Note: shadcn/ui expects the `cn` function at "@/lib/utils/cn" per
 * components.json configuration. This barrel is for convenience elsewhere.
 */

export { cn } from "./cn";
export * from "./format";
export * from "./date";
export * from "./response";
