/**
 * Google Gemini Provider Adapter
 *
 * Implements IAIProvider using the @google/generative-ai SDK.
 * This is the only file that should import from @google/generative-ai.
 *
 * Based on: docs/08_TECH_STACK.md — AI: Google Gemini
 * Based on: docs/14_AI_COPILOT.md — AI Provider Abstraction
 */

import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import { serverEnv } from "@/lib/env";
import { AIServiceError } from "@/lib/errors";
import { createLogger } from "@/lib/logger";
import { AI_CONFIG } from "@/config/ai.config";
import type {
  IAIProvider,
  AIMessage,
  AIRequestOptions,
  AIResponse,
} from "./provider.interface";

const logger = createLogger("GeminiAdapter");

// Safety settings aligned with business use
const SAFETY_SETTINGS = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export class GeminiAdapter implements IAIProvider {
  private readonly client: GoogleGenerativeAI;

  constructor() {
    this.client = new GoogleGenerativeAI(serverEnv.GOOGLE_GENERATIVE_AI_API_KEY);
  }

  async send(messages: AIMessage[], options?: AIRequestOptions): Promise<AIResponse> {
    try {
      const model = this.client.getGenerativeModel({
        model: AI_CONFIG.model,
        systemInstruction: options?.systemInstruction,
        safetySettings: SAFETY_SETTINGS,
        generationConfig: {
          maxOutputTokens: options?.maxOutputTokens ?? AI_CONFIG.maxOutputTokens,
          temperature: options?.temperature ?? AI_CONFIG.temperature,
        },
      });

      // Convert messages to Gemini format
      const history = messages.slice(0, -1).map((msg) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      }));

      const lastMessage = messages[messages.length - 1];
      const chat = model.startChat({ history });

      const result = await chat.sendMessage(lastMessage?.content ?? "");
      const response = result.response;
      const content = response.text();

      logger.info("AI request completed", {
        tokenCount: response.usageMetadata?.totalTokenCount,
      });

      return {
        content,
        tokenCount: response.usageMetadata?.totalTokenCount,
        finishReason: response.candidates?.[0]?.finishReason?.toString(),
      };
    } catch (error) {
      logger.error("Gemini request failed", { error: String(error) });
      throw new AIServiceError();
    }
  }

  async *stream(
    messages: AIMessage[],
    options?: AIRequestOptions,
  ): AsyncGenerator<string, void, unknown> {
    try {
      const model = this.client.getGenerativeModel({
        model: AI_CONFIG.model,
        systemInstruction: options?.systemInstruction,
        safetySettings: SAFETY_SETTINGS,
        generationConfig: {
          maxOutputTokens: options?.maxOutputTokens ?? AI_CONFIG.maxOutputTokens,
          temperature: options?.temperature ?? AI_CONFIG.temperature,
        },
      });

      const history = messages.slice(0, -1).map((msg) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      }));

      const lastMessage = messages[messages.length - 1];
      const chat = model.startChat({ history });

      const result = await chat.sendMessageStream(lastMessage?.content ?? "");

      for await (const chunk of result.stream) {
        const text = chunk.text();
        if (text) yield text;
      }
    } catch (error) {
      logger.error("Gemini stream failed", { error: String(error) });
      throw new AIServiceError();
    }
  }
}
