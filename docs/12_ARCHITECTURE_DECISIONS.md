# EcoPilot — Architecture Decision Records (ADR)

Version: 1.0

Status: Active

Owner: Software Architecture Team

Purpose:
This document records significant architectural decisions made during the design and development of EcoPilot.

Every major technical decision must include:

- Context
- Problem
- Decision
- Alternatives
- Consequences

Future architectural changes should be appended as new ADRs rather than modifying previous records.

---

# ADR-001

## Title

Choose Next.js as the Full-Stack Framework

### Status

Accepted

### Context

EcoPilot requires:

- Modern frontend
- Backend APIs
- Authentication
- Server-side rendering
- Excellent SEO
- Easy deployment
- AI-friendly project structure

### Decision

Use Next.js App Router.

### Alternatives

React + Express

Pros

- Flexible

Cons

- Two deployments
- More boilerplate
- More configuration

NestJS

Pros

- Enterprise

Cons

- Adds unnecessary complexity for MVP

### Consequences

Pros

✓ Single deployment

✓ Shared TypeScript

✓ Excellent developer experience

✓ Easy Vercel deployment

---

# ADR-002

## Title

Use Prisma ORM

### Status

Accepted

### Context

EcoPilot needs:

- Database migrations
- Type safety
- AI-generated code compatibility
- Readable schema

### Decision

Use Prisma.

### Alternatives

Drizzle ORM

Pros

- Lightweight

Cons

- Less AI ecosystem support

Raw SQL

Rejected

Reason

Maintainability.

### Consequences

Pros

✓ Prisma Studio

✓ Excellent documentation

✓ Easy onboarding

---

# ADR-003

## Title

Use Supabase

### Status

Accepted

### Context

Need

Authentication

Database

Storage

Managed infrastructure

### Decision

Supabase

### Alternatives

Firebase

Rejected

Reason

Firestore is NoSQL.

EcoPilot relies heavily on relational data.

Custom PostgreSQL

Rejected

Too much operational overhead.

### Consequences

Pros

✓ PostgreSQL

✓ Storage

✓ Authentication

✓ Row Level Security

---

# ADR-004

## Title

Use Google Gemini

### Status

Accepted

### Context

Core feature:

AI-powered document understanding.

Need

PDF

Images

OCR

Reasoning

Low cost

### Decision

Gemini

### Alternatives

OpenAI

Pros

Excellent reasoning

Cons

Higher operational cost.

Claude

Pros

Excellent reasoning

Cons

No practical free tier suitable for MVP.

### Consequences

Pros

✓ Native PDF understanding

✓ Strong free tier

✓ Multimodal

---

# ADR-005

## Title

Provider Abstraction Layer

### Status

Accepted

### Context

Avoid vendor lock-in.

### Decision

Never call Gemini directly.

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

Claude

### Consequences

Easy provider switching.

---

# ADR-006

## Title

Feature-Based Architecture

### Status

Accepted

### Decision

Structure project by feature.

Example

features/

electricity/

water/

paper/

goals/

reports/

### Alternatives

Type-based folders

components/

pages/

utils/

Rejected

Reason

Harder to scale.

---

# ADR-007

## Title

Repository Pattern

### Status

Accepted

### Decision

Page

↓

Service

↓

Repository

↓

Database

Never access Prisma directly inside UI code.

### Benefits

Testability

Loose coupling

Cleaner architecture

---

# ADR-008

## Title

Resource Data Model — Unified ResourceLog Table

### Status

**Superseded** — Original decision reversed following final architecture review (July 2026).

See ADR-016 for the current accepted decision.

### Original Decision (Superseded)

Separate tables: ElectricityLog, WaterLog, PaperLog, WasteLog, RecyclingLog.

### Reason for Reversal

After review against the Database Schema document (10_DATABASE_SCHEMA.md), the separate-tables approach was found to require near-identical repository and service code for each resource type, violating the DRY principle. The unified ResourceLog approach was already adopted in the schema and offers:

- Simpler analytics via GROUP BY resource_type
- Single ResourceRepository and ResourceService shared across all types
- Easier addition of future resource types without schema migration
- Consistent API handler pattern across all five resource endpoints

### Current Decision

See ADR-016.

---

# ADR-009

## Title

Background Job Processing

### Status

Accepted

### Context

AI processing can exceed HTTP request time limits.

### Decision

Use asynchronous jobs.

Upload

↓

Queue

↓

Worker

↓

Notification

Reject

Synchronous AI requests.

---

# ADR-010

## Title

Multi-Tenant Architecture

### Status

Accepted

### Decision

Every business table includes

organization_id

Use Supabase Row Level Security.

Reason

Strong tenant isolation.

---

# ADR-011

## Title

Role-Based Access Control

### Status

Accepted

### Decision

Permission-based RBAC.

Never check

if(role=="Admin")

Instead

user.hasPermission("generate_report")

This allows future flexibility.

---

# ADR-012

## Title

EcoScore Transparency

### Status

Accepted

### Decision

EcoScore must always be explainable.

Display

Overall Score

↓

Category Breakdown

↓

Improvement Suggestions

Never display unexplained AI scores.

---

# ADR-013

## Title

AI as Decision Support

### Status

Accepted

### Context

Users must remain responsible for business decisions.

### Decision

AI provides:

Recommendations

Insights

Predictions

Summaries

Never make irreversible decisions automatically.

Human approval remains mandatory.

---

# ADR-014

## Title

Design System First

### Status

Accepted

### Decision

All UI components must follow the shared Design System.

No custom styling unless approved.

Reason

Consistency

Accessibility

Maintainability

---

# ADR-015

## Title

Documentation-Driven Development

### Status

Accepted

### Decision

Architecture and product documentation are completed before feature implementation.

Documentation evolves alongside the codebase.

Reason

Improve consistency

Guide AI coding tools

Reduce architectural drift

Support onboarding

---

# Future ADRs

Examples

Switch AI Provider

Introduce Redis

Microservices

GraphQL

Native Mobile App

API Version 2

Enterprise SSO

Offline Support

---

# ADR Lifecycle

Proposed

↓

Review

↓

Accepted

↓

Implemented

↓

Deprecated

↓

Superseded

Never delete historical ADRs.

---

# Final Principle

Architectural decisions should be intentional, documented, and reversible where possible.

Every significant technical choice should have a clear rationale so future contributors understand not only *what* was built, but *why* it was built.

---

# ADR-016

## Title

Unified ResourceLog Table for All Resource Types

### Status

Accepted

### Supersedes

ADR-008 (Hybrid Database Design)

### Context

After reviewing the Database Schema (10_DATABASE_SCHEMA.md) and the API Specification (11_API_SPECIFICATION.md) together, an inconsistency was found: ADR-008 mandated separate tables while the schema already adopted a unified model. A decision was required.

### Decision

Use a single ResourceLog table with a resource_type enum column.

All five REST endpoint groups (/electricity, /water, /paper, /waste, /recycling) are retained at the API surface but share:

- One ResourceRepository (filtered by resource_type and organization_id)
- One ResourceService (scoped by resource_type)
- One Prisma model (ResourceLog)

### Rationale

- Simpler analytics: GROUP BY resource_type replaces five separate queries.
- DRY: One service and one repository instead of five near-identical duplicates.
- Extensibility: Adding a new resource type (e.g., Transport) requires only an enum value and a new API route, not a new table and migration.
- The separate API endpoints provide clean per-resource developer experience without duplicating infrastructure code.

### Consequences

Pros

✓ Significantly less duplicated service and repository code

✓ Unified analytics queries

✓ Future resource types added without schema migration

Cons

— Some per-type validations require conditional logic in a shared validator

— Nullable columns for type-specific fields (mitigated by using the notes field for extras)

### Implementation Note

The Prisma schema defines ResourceLog with a ResourceType enum: Electricity | Water | Paper | Waste | Recycling. Repositories always include organization_id and resource_type filters on every query.