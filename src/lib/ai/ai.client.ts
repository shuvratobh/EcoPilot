/**
 * Provider-Agnostic AI Client
 *
 * The single entry point for all AI operations in EcoPilot.
 * Resolves the correct provider from AI_PROVIDER env var.
 *
 * Context budget enforcement and request logging happen here.
 *
 * Based on: docs/14_AI_COPILOT.md — AI Provider Abstraction, Context Budget
 */

import { GeminiAdapter } from "./providers/gemini.adapter";
import { createLogger } from "@/lib/logger";
import { AI_CONFIG } from "@/config/ai.config";
import type { IAIProvider, AIMessage, AIRequestOptions, AIResponse } from "./providers/provider.interface";

export type { AIMessage, AIRequestOptions, AIResponse };

const logger = createLogger("AIClient");

// ── Provider Resolution ───────────────────────────────────────────────────────

function resolveProvider(): IAIProvider {
  const provider = process.env.AI_PROVIDER ?? "gemini";

  switch (provider) {
    case "gemini":
      return new GeminiAdapter();
    default:
      logger.warn(`Unknown AI provider "${provider}", falling back to Gemini`);
      return new GeminiAdapter();
  }
}

// ── Context Budget Enforcement ────────────────────────────────────────────────
// Per: docs/14_AI_COPILOT.md — Context Budget (~16k tokens total)

const CONTEXT_BUDGET = {
  organizationSummary: 500,
  resourceData: 4000,
  document: 8000,
  goalsSummary: 500,
  ecoScoreBreakdown: 300,
  conversationHistory: 2000,
  systemPrompt: 800,
  totalApproximate: 16000,
} as const;

/**
 * Approximate token count (rough estimate: 1 token ≈ 4 chars).
 * Used for budget enforcement before sending to provider.
 */
function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

// ── AI Client ─────────────────────────────────────────────────────────────────

export class AIClient {
  private readonly provider: IAIProvider;

  constructor(provider?: IAIProvider) {
    this.provider = provider ?? resolveProvider();
  }

  /**
   * Send a message and receive a full response.
   */
  async send(messages: AIMessage[], options?: AIRequestOptions): Promise<AIResponse> {
    const totalTokens = messages.reduce(
      (acc, m) => acc + estimateTokens(m.content),
      0,
    );

    logger.info("AI request", {
      messageCount: messages.length,
      estimatedTokens: totalTokens,
      exceedsBudget: totalTokens > CONTEXT_BUDGET.totalApproximate,
    });

    if (totalTokens > AI_CONFIG.maxContextTokens) {
      logger.warn("Context exceeds budget — summarization should be applied upstream");
    }

    return this.provider.send(messages, options);
  }

  /**
   * Stream a response as an async generator (for SSE endpoints).
   */
  stream(
    messages: AIMessage[],
    options?: AIRequestOptions,
  ): AsyncGenerator<string, void, unknown> {
    logger.info("AI stream request", { messageCount: messages.length });
    return this.provider.stream(messages, options);
  }
}

// ── Singleton export ──────────────────────────────────────────────────────────
export const aiClient = new AIClient();

// Export context budget for reference
export { CONTEXT_BUDGET };
