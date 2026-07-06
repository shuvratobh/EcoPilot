/**
 * Dashboard Analysis Prompt Template
 *
 * Used by: Dashboard AI insight banner
 * Based on: docs/14_AI_COPILOT.md
 */

import type { AIMessage } from "@/lib/ai/ai.client";

interface DashboardAnalysisContext {
  organizationName: string;
  ecoScore: number;
  ecoScoreGrade: string;
  topPillar: string;
  bottomPillar: string;
  recentTrend: "improving" | "declining" | "stable";
  activeGoalCount: number;
}

export function buildDashboardAnalysisMessages(
  ctx: DashboardAnalysisContext,
): AIMessage[] {
  const systemPrompt = `You are an AI Sustainability Consultant for ${ctx.organizationName}.
Provide brief, actionable, evidence-based insights. Maximum 3 sentences.
Never fabricate data. Always label estimates. Be encouraging but honest.`;

  const userPrompt = `Current sustainability snapshot:
- EcoScore: ${ctx.ecoScore}/100 (${ctx.ecoScoreGrade})
- Best performing pillar: ${ctx.topPillar}
- Needs most attention: ${ctx.bottomPillar}
- Recent trend: ${ctx.recentTrend}
- Active goals: ${ctx.activeGoalCount}

Provide one key insight and one actionable recommendation for today.`;

  return [
    { role: "system", content: systemPrompt },
    { role: "user", content: userPrompt },
  ];
}
