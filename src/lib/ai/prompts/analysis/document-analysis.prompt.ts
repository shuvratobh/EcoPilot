/**
 * Document Analysis Prompt Template
 *
 * Used by: POST /api/v1/ai/stream-analyze
 * Based on: docs/14_AI_COPILOT.md — Document Analysis Mode
 */

import type { AIMessage } from "@/lib/ai/ai.client";

interface DocumentAnalysisContext {
  organizationName: string;
  documentContent: string;
  documentType: string;
}

export function buildDocumentAnalysisMessages(
  ctx: DocumentAnalysisContext,
): AIMessage[] {
  const systemPrompt = `You are an expert sustainability data analyst for ${ctx.organizationName}.
Your task is to extract structured resource consumption data from utility bills and sustainability documents.

Rules:
- Extract only data that is explicitly present in the document.
- Never fabricate or estimate values.
- Label all extracted values with their source location in the document.
- If a value is ambiguous, note the ambiguity.
- Return structured JSON with extracted values.`;

  const userPrompt = `Analyze this ${ctx.documentType} document and extract all resource consumption data.

Document content:
${ctx.documentContent}

Return a JSON object with:
- resource_type: electricity | water | paper | waste | recycling
- quantity: numeric value
- unit: the unit of measurement
- period: billing period (YYYY-MM)
- cost: if present
- currency: if present
- confidence: high | medium | low
- notes: any relevant observations`;

  return [
    { role: "system", content: systemPrompt },
    { role: "user", content: userPrompt },
  ];
}
