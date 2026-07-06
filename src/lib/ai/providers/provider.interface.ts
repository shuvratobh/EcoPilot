/**
 * AI Provider Interface
 *
 * Defines the contract that all AI provider adapters must implement.
 * Business logic calls this interface — never a specific provider directly.
 *
 * This ensures EcoPilot remains provider-independent and can switch from
 * Gemini to OpenAI, Anthropic, or local models without changing business code.
 *
 * Based on: docs/14_AI_COPILOT.md — AI Provider Abstraction
 * Based on: docs/12_ARCHITECTURE_DECISIONS.md — ADR-005
 */

export interface AIMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface AIRequestOptions {
  /** Maximum tokens in the response */
  maxOutputTokens?: number;
  /** Temperature (0 = deterministic, 1 = creative) */
  temperature?: number;
  /** System instruction / persona */
  systemInstruction?: string;
}

export interface AIResponse {
  content: string;
  /** Approximate token count for cost tracking */
  tokenCount?: number;
  /** Finish reason from the provider */
  finishReason?: string;
}

export interface AIStreamChunk {
  type: "summary" | "finding" | "recommendation" | "complete" | "error";
  content: string;
}

/**
 * Provider-agnostic AI interface.
 * All adapters (Gemini, OpenAI, etc.) must implement this.
 */
export interface IAIProvider {
  /**
   * Send a prompt and receive a full response.
   */
  send(messages: AIMessage[], options?: AIRequestOptions): Promise<AIResponse>;

  /**
   * Send a prompt and stream the response as an async generator.
   */
  stream(
    messages: AIMessage[],
    options?: AIRequestOptions,
  ): AsyncGenerator<string, void, unknown>;
}
