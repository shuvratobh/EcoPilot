# EcoPilot — EcoScore Framework

Version: 1.0

Status: Core Product Logic

Owner: Product Team

Priority: Critical

---

# Purpose

EcoScore is EcoPilot's flagship KPI.

It provides a transparent, explainable, and measurable sustainability score that summarizes an organization's environmental performance.

Unlike arbitrary ESG scores, EcoScore is fully explainable.

Every point should be traceable to measurable sustainability metrics.

Users must always understand:

• Why they received their score

• Which factors influenced it

• How to improve it

• How much improvement is possible

The score should never appear as a mysterious AI-generated number.

---

# Philosophy

EcoScore is not designed to measure perfection.

It measures continuous improvement.

Organizations should always have opportunities to increase their score.

The system rewards positive trends, consistency, and complete reporting rather than punishing organizations for being imperfect.

---

# Overall Scale

Range

0 – 100

Classification

90 – 100

★★★★★

Excellent

Industry-leading sustainability

---

75 – 89

★★★★☆

Good

Healthy sustainability practices

---

60 – 74

★★★☆☆

Average

Several improvement opportunities

---

40 – 59

★★☆☆☆

Needs Improvement

Significant inefficiencies detected

---

0 – 39

★☆☆☆☆

Critical

Immediate action recommended

---

# EcoScore Formula

Overall Score

100 Points

The score consists of five weighted pillars.

| Category | Weight |
|----------|--------|
| Energy Efficiency | 30% |
| Water Efficiency | 15% |
| Paper Efficiency | 15% |
| Waste & Recycling | 20% |
| Carbon Impact | 20% |

Total

100%

---

# Pillar 1

Energy Efficiency

Weight

30%

Measured using

• Electricity usage

• Working hours

• Office size

• Employee count

• Historical trends

• Seasonal adjustments

Score factors

Lower electricity per employee

↓

Higher score

Large unexpected increase

↓

Lower score

Steady reduction

↓

Bonus

---

# Pillar 2

Water Efficiency

Weight

15%

Measured using

• Water consumption

• Employee count

• Historical usage

• Monthly trend

Lower water consumption per employee

↓

Higher score

---

# Pillar 3

Paper Efficiency

Weight

15%

Measured using

• Pages printed

• Duplex printing %

• Color printing %

• Digital document adoption

Higher digital adoption

↓

Higher score

---

# Pillar 4

Waste & Recycling

Weight

20%

Measured using

• Recycling rate

• Waste segregation

• Electronic waste

• Paper recycling

• Plastic recycling

Organizations recycling more receive higher scores.

---

# Pillar 5

Carbon Impact

Weight

20%

Calculated from

Energy

+

Water

+

Paper

+

Waste

Converted into

Estimated CO₂e

Lower emissions

↓

Higher score

---

# Data Completeness

A sustainability score should never pretend to be accurate when data is incomplete.

EcoPilot therefore introduces

Data Completeness

Separate from EcoScore.

Range

0–100%

Example

Energy

Complete

Water

Missing

Paper

Complete

Waste

Complete

Carbon

Estimated

Overall

76%

The dashboard should display

EcoScore

82

Data Completeness

76%

---

# Confidence Score

AI confidence is different from EcoScore.

Confidence depends on

Data completeness

Document quality

Historical consistency

Manual verification

Display

High

Medium

Low

Users should understand how trustworthy the estimate is.

---

# Trend Modifier

EcoPilot rewards improvement.

Example

Electricity reduced

8%

↓

Bonus

Paper reduced

15%

↓

Bonus

Carbon reduced

5%

↓

Bonus

Organizations showing consistent progress receive small score improvements.

---

# Penalty Rules

Minor fluctuations should not dramatically reduce EcoScore.

Penalties apply only to

Large unexpected increases

Repeated inefficiencies

Missing reports

Poor recycling

Carbon spikes

Avoid punishing seasonal variations.

---

# Bonus Rules

Bonus points

Maximum

+5

Examples

Continuous improvement

Monthly goals achieved

Excellent recycling

High reporting consistency

Bonuses encourage positive behavior.

---

# Score Transparency

Every score should be explainable.

Example

EcoScore

82

Energy

26 / 30

Water

12 / 15

Paper

11 / 15

Waste

17 / 20

Carbon

16 / 20

Users can immediately understand where improvements are needed.

---

# AI Explanation

The AI Copilot should automatically explain score changes.

Example

EcoScore increased from 78 to 82.

Primary reasons

• Electricity usage reduced by 9%.

• Recycling improved by 14%.

• Water usage remained stable.

Largest improvement opportunity

Paper consumption.

Estimated potential gain

+4 points.

---

# Department Scores

Organizations can compare departments.

Example

Engineering

91

Marketing

76

Finance

84

HR

87

Overall

84

Department scores encourage healthy competition.

---

# Monthly Trends

Track

Current Month

Previous Month

3 Months

6 Months

12 Months

Never compare only one snapshot.

---

# Benchmarking

MVP

Internal benchmarking only.

Examples

Current Month

↓

Previous Month

↓

Best Month

↓

Company Average

Future versions may include industry benchmarks.

---

# Carbon Methodology

All carbon estimates must reference published emission factors.

Examples

Government databases

IPCC

Regional energy authorities

EcoPilot should cite the emission factor source used.

Display

Estimated using 2026 Bangladesh Grid Emission Factors.

Never imply exact measurements.

---

# AI Recommendations

The AI should prioritize actions based on score impact.

Example

Potential Improvement

Reduce electricity

↓

Estimated

+4 EcoScore

Increase recycling

↓

Estimated

+2 EcoScore

Reduce printing

↓

Estimated

+3 EcoScore

Users should know which action provides the greatest benefit.

---

# Dashboard Presentation

Display

EcoScore

↓

Trend

↓

Score Breakdown

↓

AI Explanation

↓

Top Recommendations

↓

Potential Score Gain

This hierarchy ensures users focus on improvement rather than simply observing numbers.

---

# Report Integration

Every report should include

Overall EcoScore

↓

Category Scores

↓

Monthly Change

↓

AI Analysis

↓

Recommendations

↓

Action Plan

---

# Future Enhancements

Machine learning forecasting

Predictive EcoScore

Industry benchmarking

Office comparison

Regional comparison

Certification readiness

ESG scoring alignment

---

# Design Principles

EcoScore should be

Transparent

Explainable

Consistent

Actionable

Trustworthy

It should never be a mysterious AI-generated value.

Users should always understand what influences the score and how they can improve it.

---

# Definition of Success

A successful EcoScore framework enables organizations to:

• Understand sustainability performance instantly.

• Identify areas requiring improvement.

• Measure progress over time.

• Prioritize high-impact actions.

• Build confidence in AI-generated sustainability insights.

EcoScore is the central KPI of EcoPilot and should become the first metric users recognize whenever they open the platform.

---

# Numeric Thresholds

To ensure deterministic, testable EcoScore calculations, the following numeric rules apply.

## Penalty Triggers

A pillar score penalty is applied when:

| Resource | Threshold | Penalty |
|---|---|---|
| Electricity | Month-over-month increase > 15% | −3 points on Energy pillar |
| Water | Month-over-month increase > 20% | −2 points on Water pillar |
| Paper | Pages printed increase > 25% | −2 points on Paper pillar |
| Recycling rate | Falls below 30% | −3 points on Waste pillar |
| Carbon | Estimated CO₂e increase > 15% | −2 points on Carbon pillar |

Seasonal variations (defined as same-period comparison within ±5%) do not trigger penalties.

## Bonus Eligibility

Bonus points are awarded when:

| Condition | Bonus |
|---|---|
| 3 consecutive months of overall improvement | +2 points |
| All goals achieved in the period | +1 point |
| Data completeness ≥ 90% | +1 point |
| Recycling rate ≥ 70% | +1 point |
| Maximum bonus per period | +5 points |

---

# Department EcoScore

## Calculation Method

Each department receives its own EcoScore using the same 5-pillar formula, applied to department-scoped ResourceLog records.

Formula:

DepartmentEcoScore = (Energy × 0.30) + (Water × 0.15) + (Paper × 0.15) + (Waste × 0.20) + (Carbon × 0.20) + BonusPoints

Department scores are calculated independently.

## Organization Score Aggregation

The organization EcoScore is calculated directly from organization-wide ResourceLog totals — it is NOT a mathematical average of department scores.

This prevents a small department with excellent performance from artificially elevating the organization's overall score.

## Department Comparison

Department scores may be displayed side-by-side on the dashboard and in reports to encourage constructive performance comparison.

Example

| Department | EcoScore | Change |
|---|---|---|
| Engineering | 91 | +3 |
| Marketing | 76 | −2 |
| Finance | 84 | +1 |
| HR | 87 | +5 |

---

# EcoScore for New Organizations

Organizations with fewer than 2 months of data:

- Trend modifier and bonus calculations are skipped.
- Data completeness indicator is prominently shown.
- Score is calculated only from available pillar data.
- The AI Copilot explains the limited data context.

---

# Version History

v1.0 — Initial EcoScore framework

v1.1 — Added numeric thresholds and department formula (July 2026)