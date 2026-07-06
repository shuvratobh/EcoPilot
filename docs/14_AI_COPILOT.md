# EcoPilot — AI Copilot Specification

Version: 1.0

Status: Core Product Feature

Priority: Critical

Owner: AI Engineering Team

---

# Purpose

The AI Copilot is EcoPilot's flagship feature.

It is not a chatbot.

It is an AI Sustainability Consultant.

Its purpose is to transform environmental data into practical business recommendations.

The AI should help organizations understand:

• What happened

• Why it happened

• What they should do next

• Which action provides the highest impact

The AI should behave like an experienced sustainability analyst rather than a conversational assistant.

---

# Design Philosophy

The AI exists to support decision-making.

It should:

Explain

Analyze

Predict

Recommend

Summarize

Never overwhelm users.

Never hallucinate certainty.

Never invent information.

---

# Core Responsibilities

The AI should be capable of:

✓ Reading utility bills

✓ Understanding sustainability reports

✓ Identifying unusual patterns

✓ Detecting inefficiencies

✓ Explaining EcoScore

✓ Forecasting trends

✓ Recommending improvements

✓ Generating executive reports

✓ Answering sustainability questions

---

# AI Modes

The AI operates in five modes.

---

## Mode 1

Document Analysis

Input

Electricity Bills

Water Bills

Printing Reports

Waste Reports

Sustainability Reports

Output

Executive Summary

↓

Extracted Data

↓

Detected Issues

↓

Recommendations

↓

Potential Cost Savings

↓

Estimated Carbon Impact

---

## Mode 2

Data Analysis

Input

Dashboard Data

Historical Resource Logs

Goals

EcoScore

Output

Trend Analysis

↓

Risk Detection

↓

Resource Comparison

↓

Forecast

↓

Improvement Opportunities

---

## Mode 3

Question & Answer

Users may ask:

Why did electricity increase?

Why is EcoScore decreasing?

How can we reduce paper usage?

What is causing high carbon emissions?

Generate a sustainability summary.

Answers should always use organization-specific data whenever available.

---

## Mode 4

Recommendation Engine

Generate prioritized actions.

Example

Priority

High

Reason

Electricity usage increased 18%.

Estimated EcoScore Improvement

+5

Estimated Monthly Savings

৳12,500

Estimated CO₂ Reduction

42 kg

---

## Mode 5

Executive Report Generator

Generate reports suitable for management.

Structure

Executive Summary

↓

Current Sustainability Performance

↓

Resource Analysis

↓

EcoScore Breakdown

↓

AI Insights

↓

Recommendations

↓

Priority Matrix

↓

Next Steps

---

# AI Context

Every AI request receives structured context.

Never send raw database dumps.

Provide only relevant information.

Context may include:

Organization

Department

Historical Usage

Current KPIs

Goals

EcoScore

Uploaded Documents

Previous AI Analysis

Date Range

---

# Context Priority

Highest

Current Organization

↓

Current Dashboard

↓

Uploaded Document

↓

Historical Data

↓

Previous Conversation

↓

General Sustainability Knowledge

Always prioritize organization-specific data.

---

# Prompt Engineering

Every internal prompt should include:

Role

Goal

Available Data

Constraints

Expected Output

Example

Role

Senior Sustainability Consultant

Goal

Analyze the uploaded electricity bill.

Constraints

Do not invent missing values.

Clearly label estimates.

Recommend practical actions.

---

# AI Response Structure

Every response follows:

Summary

↓

Key Findings

↓

Evidence

↓

Recommendations

↓

Estimated Impact

↓

Suggested Next Step

Never return long, unstructured paragraphs.

---

# Confidence Levels

Every AI analysis includes confidence.

High

Reliable data

Complete information

Medium

Minor assumptions

Low

Insufficient information

Explain why confidence is reduced.

---

# Recommendation Prioritization

Recommendations should be ranked by:

Potential EcoScore Improvement

↓

Estimated Financial Savings

↓

Carbon Reduction

↓

Implementation Difficulty

Users should always know where to start.

---

# AI Safety Rules

The AI must never:

Invent data

Fabricate statistics

Pretend estimates are facts

Guarantee savings

Provide legal advice

Provide financial guarantees

Modify organizational data automatically

Every recommendation requires user approval before implementation.

---

# Transparency

Whenever estimates are used, state:

"Based on available information."

or

"Estimated using historical trends."

Users should always understand the limitations of AI.

---

# Explainability

Every recommendation must answer:

Why?

How?

Expected Benefit?

Supporting Evidence?

Avoid "black-box" recommendations.

---

# Carbon Estimation

Always cite the emission factor source.

Example

Estimated using Bangladesh Grid Emission Factors (2026).

Never present estimates as certified measurements.

---

# Document Analysis Pipeline

User Uploads PDF

↓

Store Document

↓

Background Job

↓

Gemini Analysis

↓

Extract Structured Data

↓

Validate Values

↓

Store Results

↓

Update Dashboard

↓

Notify User

AI processing must never block the upload request.

---

# Conversation Memory

Maintain short-term context.

Remember:

Current discussion

Uploaded document

Previous AI response

Do not retain unnecessary personal information.

Future versions may support long-term conversation history.

---

# Suggested Questions

Offer contextual suggestions.

Examples

Explain this month's EcoScore.

Summarize electricity usage.

Compare this month with last month.

Recommend three improvements.

Generate executive report.

Analyze uploaded bill.

---

# Report Generation

Reports should include:

Executive Summary

↓

Resource Breakdown

↓

EcoScore

↓

Department Comparison

↓

Key Findings

↓

Recommendations

↓

Priority Matrix

↓

Appendix

Reports should be suitable for business presentations.

---

# Priority Matrix

Every recommendation receives:

Impact

High / Medium / Low

Effort

High / Medium / Low

Example

LED Upgrade

Impact

High

Effort

Medium

Priority

★★★★★

---

# AI Cost Optimization

Reduce unnecessary API usage.

Strategies

Reuse previous analyses.

Cache completed document analysis.

Summarize only changed data.

Limit repeated processing.

Use background jobs.

Never send identical prompts repeatedly.

---

# AI Provider Abstraction

Application

↓

AI Service

↓

Provider Adapter

↓

Gemini

Future

↓

OpenAI

↓

Anthropic

↓

Local Models

Business logic should remain provider-independent.

---

# Prompt Templates

Maintain reusable prompt templates for:

Document Analysis

Dashboard Analysis

Executive Reports

Trend Detection

Goal Forecasting

EcoScore Explanation

This ensures consistency.

---

# Error Handling

If AI fails:

Inform the user.

Explain the issue.

Allow retry.

Do not expose provider errors.

Fallback gracefully.

---

# Privacy

Send only required data.

Never send:

Passwords

Authentication tokens

Private identifiers

Sensitive internal metadata

Minimize shared information.

---

# AI Metrics

Track internally:

Response Time

Token Usage

Estimated Cost

Success Rate

Failure Rate

User Satisfaction

These metrics help optimize future versions.

---

# Future Capabilities

Predictive Sustainability

Benchmarking

Policy Recommendations

Industry Comparisons

Meeting Summaries

Voice Assistant

IoT Integration

Enterprise ESG Reporting

---

# Definition of Done

The AI Copilot is complete when:

✓ Uses organization-specific context

✓ Produces explainable recommendations

✓ Labels estimates clearly

✓ Supports document analysis

✓ Generates executive reports

✓ Handles failures gracefully

✓ Protects user privacy

✓ Follows safety rules

✓ Optimizes API usage

✓ Improves EcoScore understanding

---

# Final Principle

The AI Copilot should behave like a trusted sustainability advisor.

Its value comes from helping organizations make informed decisions using transparent analysis, evidence-based recommendations, and practical guidance.

The AI should never replace human judgment.

It should empower it.

---

# Streaming Response Strategy

## Problem

AI report generation and document analysis can take 15–30 seconds. Blocking the user with a spinner for this duration is unacceptable UX for a flagship feature.

## Solution

Use Server-Sent Events (SSE) for all long-running AI operations.

## Streaming Endpoints

POST /api/v1/ai/stream-chat

Streams conversational AI responses token by token.

POST /api/v1/ai/stream-report

Streams executive report generation in structured sections.

POST /api/v1/ai/stream-analyze

Streams document analysis results as sections complete.

## Stream Response Format

Each SSE event carries a typed chunk:

event: chunk

data: { "type": "summary" | "finding" | "recommendation" | "complete" | "error", "content": "..." }

## Frontend Behaviour

The UI renders each chunk as it arrives.

The report appears section by section rather than all at once.

A progress indicator shows which section is currently being generated.

Users may cancel a stream at any time.

## Non-Streaming Endpoints

Lightweight AI operations (EcoScore explanation, suggested questions) continue to use standard POST endpoints with standard JSON responses.

## Fallback

If streaming is unavailable or the client does not support SSE:

Fall back to polling GET /api/v1/ai/job/:jobId every 3 seconds.

Return the full result when the job status is complete.

---

# Context Budget

To ensure predictable AI cost and quality across all organization sizes, each AI request follows a strict context budget:

| Context Type | Token Budget |
|---|---|
| Organization summary | 500 tokens |
| Recent ResourceLog data | 4,000 tokens |
| Uploaded document | 8,000 tokens |
| Goals summary | 500 tokens |
| EcoScore breakdown | 300 tokens |
| Conversation history | 2,000 tokens (summarized if longer) |
| System prompt | 800 tokens |
| Total approximate budget | ~16,000 tokens |

Older conversation history is summarized automatically before being included in context.

Raw database exports are never sent to the AI provider.