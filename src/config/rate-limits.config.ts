/**
 * Rate Limit Configuration
 *
 * Per-endpoint rate limits as defined in:
 * docs/13_SECURITY_GUIDELINES.md — Rate Limiting
 *
 * Unit: requests per minute
 */

export const RATE_LIMITS = {
  /** POST /api/v1/auth/* */
  authentication: {
    requests: 5,
    windowMs: 60_000, // 1 minute
  },

  /** POST /api/v1/ai/stream-*, /api/v1/ai/chat */
  aiChat: {
    requests: 20,
    windowMs: 60_000,
  },

  /** POST /api/v1/documents */
  documentUpload: {
    requests: 10,
    windowMs: 60_000,
  },

  /** POST /api/v1/reports/generate */
  reportGeneration: {
    requests: 5,
    windowMs: 60_000,
  },

  /** All other API endpoints */
  default: {
    requests: 60,
    windowMs: 60_000,
  },
} as const;

export type RateLimitConfig = typeof RATE_LIMITS;
export type RateLimitEndpoint = keyof typeof RATE_LIMITS;
