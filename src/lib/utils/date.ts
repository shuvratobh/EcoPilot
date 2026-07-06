/**
 * Date Utilities
 */

/**
 * Format a date as a human-readable string.
 * @example formatDate(new Date()) → "Jul 6, 2026"
 */
export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

/**
 * Format a date as month + year.
 * @example formatMonthYear(new Date()) → "July 2026"
 */
export function formatMonthYear(date: Date | string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
  }).format(new Date(date));
}

/**
 * Format a date as ISO YYYY-MM-DD.
 * @example formatDateISO(new Date()) → "2026-07-06"
 */
export function formatDateISO(date: Date | string): string {
  return new Date(date).toISOString().split("T")[0] ?? "";
}

/**
 * Get the first day of a given month.
 * @example getMonthStart(new Date("2026-07-15")) → Date("2026-07-01")
 */
export function getMonthStart(date: Date | string): Date {
  const d = new Date(date);
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

/**
 * Get the last day of a given month.
 */
export function getMonthEnd(date: Date | string): Date {
  const d = new Date(date);
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}

/**
 * Get a date range for the last N months.
 */
export function getLastNMonths(n: number): { from: Date; to: Date } {
  const to = new Date();
  const from = new Date();
  from.setMonth(from.getMonth() - n);
  from.setDate(1);
  return { from, to };
}

/**
 * Calculate the difference in months between two dates.
 */
export function getMonthDiff(from: Date | string, to: Date | string): number {
  const a = new Date(from);
  const b = new Date(to);
  return (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
}

/**
 * Get relative time string.
 * @example getRelativeTime(new Date()) → "just now"
 */
export function getRelativeTime(date: Date | string): string {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const diffMs = new Date(date).getTime() - Date.now();
  const diffSecs = Math.round(diffMs / 1000);
  const diffMins = Math.round(diffSecs / 60);
  const diffHours = Math.round(diffMins / 60);
  const diffDays = Math.round(diffHours / 24);

  if (Math.abs(diffSecs) < 60) return rtf.format(diffSecs, "second");
  if (Math.abs(diffMins) < 60) return rtf.format(diffMins, "minute");
  if (Math.abs(diffHours) < 24) return rtf.format(diffHours, "hour");
  return rtf.format(diffDays, "day");
}
