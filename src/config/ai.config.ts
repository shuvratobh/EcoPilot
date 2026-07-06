/**
 * AI Configuration
 *
 * Centralizes all AI-related configuration values.
 * Based on: docs/14_AI_COPILOT.md — Context Budget, Streaming
 */

export const AI_CONFIG = {
  /** Gemini model to use */
  model: "gemini-1.5-pro",

  /** Max tokens in the AI response */
  maxOutputTokens: 8192,

  /** Temperature: 0 = deterministic, 1 = creative */
  temperature: 0.3,

  /** Max context tokens before a budget warning is issued */
  maxContextTokens: 16_000,

  /** Retry config for failed AI requests */
  retry: {
    maxAttempts: 3,
    delayMs: 1000,
    backoffMultiplier: 2,
  },

  /** Streaming timeout (ms) */
  streamTimeoutMs: 60_000,
} as const;

export type AIConfig = typeof AI_CONFIG;
