/**
 * Number, Currency, and Percentage Formatting Utilities
 */

import { DEFAULT_CURRENCY_SYMBOL } from "@/constants";

/**
 * Format a number with thousands separators.
 * @example formatNumber(12500) → "12,500"
 */
export function formatNumber(value: number, decimals = 0): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Format a value as BDT currency.
 * @example formatCurrency(12500) → "৳12,500"
 */
export function formatCurrency(
  value: number,
  symbol = DEFAULT_CURRENCY_SYMBOL,
  decimals = 0,
): string {
  return `${symbol}${formatNumber(value, decimals)}`;
}

/**
 * Format a percentage value.
 * @example formatPercent(0.152) → "15.2%"
 */
export function formatPercent(value: number, decimals = 1): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Format a change value with +/- sign.
 * @example formatChange(5.2) → "+5.2%"
 * @example formatChange(-3.1) → "-3.1%"
 */
export function formatChange(value: number, decimals = 1): string {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(decimals)}%`;
}

/**
 * Format CO₂ emissions with appropriate unit.
 * @example formatCarbon(1500) → "1.5 t CO₂e"
 * @example formatCarbon(450) → "450 kg CO₂e"
 */
export function formatCarbon(kgCO2e: number): string {
  if (kgCO2e >= 1000) {
    return `${(kgCO2e / 1000).toFixed(2)} t CO₂e`;
  }
  return `${formatNumber(kgCO2e, 1)} kg CO₂e`;
}

/**
 * Format a resource quantity with its unit.
 * @example formatResource(1250, "kWh") → "1,250 kWh"
 */
export function formatResource(value: number, unit: string): string {
  return `${formatNumber(value)} ${unit}`;
}

/**
 * Format an EcoScore (0-100) as a rounded integer.
 */
export function formatScore(score: number): string {
  return Math.round(score).toString();
}

/**
 * Truncate text to a given length.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3)}...`;
}
