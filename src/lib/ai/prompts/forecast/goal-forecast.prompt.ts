/**
 * Goal Forecast Prompt Template
 *
 * Used by: GET /api/v1/goals/:id/forecast
 * Based on: docs/14_AI_COPILOT.md — Predictive Analysis Mode
 */

import type { AIMessage } from "@/lib/ai/ai.client";

interface GoalForecastContext {
  organizationName: string;
  goalTitle: string;
  targetValue: number;
  currentValue: number;
  unit: string;
  startDate: string;
  endDate: string;
  progressHistory: Array<{ date: string; value: number }>;
}

export function buildGoalForecastMessages(ctx: GoalForecastContext): AIMessage[] {
  const systemPrompt = `You are an AI Sustainability Consultant for ${ctx.organizationName}.
Analyze goal progress data and provide a data-driven forecast.
Always label forecasts as estimates. Explain the basis for your prediction.
Never guarantee outcomes.`;

  const userPrompt = `Forecast progress for this sustainability goal:

Goal: ${ctx.goalTitle}
Target: ${ctx.targetValue} ${ctx.unit}
Current: ${ctx.currentValue} ${ctx.unit}
Period: ${ctx.startDate} → ${ctx.endDate}
Progress history: ${JSON.stringify(ctx.progressHistory)}

Provide:
1. Likelihood of achieving the goal (High/Medium/Low) with reasoning
2. Projected value at deadline based on current trend
3. One specific action that would most improve the outcome
4. Risk factors to watch`;

  return [
    { role: "system", content: systemPrompt },
    { role: "user", content: userPrompt },
  ];
}
