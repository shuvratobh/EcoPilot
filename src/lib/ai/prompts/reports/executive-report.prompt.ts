/**
 * Executive Report Prompt Template
 *
 * Used by: POST /api/v1/ai/stream-report
 * Based on: docs/14_AI_COPILOT.md — Executive Report Mode
 */

import type { AIMessage } from "@/lib/ai/ai.client";

interface ExecutiveReportContext {
  organizationName: string;
  periodLabel: string;
  ecoScore: number;
  previousEcoScore: number;
  pillarBreakdown: Record<string, number>;
  keyFindings: string[];
  activeGoals: number;
  achievedGoals: number;
}

export function buildExecutiveReportMessages(
  ctx: ExecutiveReportContext,
): AIMessage[] {
  const systemPrompt = `You are generating an executive sustainability report for ${ctx.organizationName}.
Write in a professional, data-driven tone suitable for senior leadership and board presentations.
Structure the report in clear sections. Label all estimates explicitly.
Never fabricate numbers — use only the data provided.`;

  const userPrompt = `Generate an executive sustainability report for ${ctx.periodLabel}.

Data:
- EcoScore: ${ctx.ecoScore}/100 (previous: ${ctx.previousEcoScore}/100)
- Pillar Scores: ${JSON.stringify(ctx.pillarBreakdown)}
- Active Goals: ${ctx.activeGoals} (Achieved: ${ctx.achievedGoals})
- Key Findings: ${ctx.keyFindings.join("; ")}

Generate sections in this order:
1. Executive Summary (2-3 sentences)
2. Key Findings (3-5 bullet points with data)
3. Recommendations (3 prioritized actions with estimated impact)
4. Goals Review (progress summary)
5. Next Period Priorities

Use clear headings. Be specific and actionable.`;

  return [
    { role: "system", content: systemPrompt },
    { role: "user", content: userPrompt },
  ];
}
