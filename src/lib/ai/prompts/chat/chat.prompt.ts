/**
 * AI Chat Prompt Template
 *
 * Used by: POST /api/v1/ai/stream-chat
 * Based on: docs/14_AI_COPILOT.md — Chat Mode
 */

import type { AIMessage } from "@/lib/ai/ai.client";

interface ChatContext {
  organizationName: string;
  ecoScore: number;
  conversationHistory: AIMessage[];
  userMessage: string;
}

export function buildChatSystemPrompt(ctx: Pick<ChatContext, "organizationName" | "ecoScore">): string {
  return `You are EcoPilot's AI Sustainability Consultant for ${ctx.organizationName}.
Current EcoScore: ${ctx.ecoScore}/100.

Your role:
- Analyze sustainability data and provide evidence-based advice
- Answer questions about resource consumption, carbon emissions, and improvement strategies
- Suggest practical, measurable actions
- Explain the EcoScore and pillar calculations transparently

Rules:
- Never fabricate data or numbers
- Always label estimates clearly ("estimated", "approximately")
- Cite data sources when making carbon calculations
- Recommend professional sustainability consultants for complex regulatory questions
- You are a consultant, not a chatbot — every response must add business value`;
}

export function buildChatMessages(ctx: ChatContext): AIMessage[] {
  const systemMessage: AIMessage = {
    role: "system",
    content: buildChatSystemPrompt(ctx),
  };

  return [
    systemMessage,
    ...ctx.conversationHistory,
    { role: "user", content: ctx.userMessage },
  ];
}
