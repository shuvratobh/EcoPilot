# EcoPilot — Technology Stack & Engineering Decisions

Version: 1.0

Status: Engineering Foundation

Owner: Software Architecture Team

Priority: Critical

---

# Purpose

This document defines the official technology stack for EcoPilot.

Every engineer, AI coding assistant, and contributor must follow these technology decisions unless an Architecture Decision Record (ADR) explicitly approves a change.

Technology consistency is critical for maintainability.

Avoid introducing multiple libraries that solve the same problem.

---

# Engineering Philosophy

EcoPilot should prioritize:

• Simplicity
• Maintainability
• Scalability
• Developer Experience
• Performance
• Security
• Type Safety
• AI-assisted Development

Choose mature, well-supported technologies over experimental ones.

---

# Architecture Style

EcoPilot follows a modern full-stack web architecture.

Client

↓

Next.js Application

↓

API Layer

↓

Business Services

↓

Database

↓

Storage

↓

AI Services

The frontend and backend live within the same Next.js project for the MVP.

Future versions may extract backend services if required.

---

# Technology Decision Record (ADR-001)

Decision

Use Next.js as the unified application framework.

Reason

- Excellent React ecosystem
- Server Components
- Route Handlers
- Built-in optimization
- Vercel deployment
- Strong community
- Excellent TypeScript support

Alternatives Considered

React + Express

Pros

- Familiar

Cons

- More configuration
- Two deployments
- More boilerplate

Decision

Rejected

---

# Frontend

Framework

Next.js 15 (App Router)

Language

TypeScript

Reason

Strong typing

Excellent DX

Scalable architecture

---

# UI Library

shadcn/ui

Reason

- Accessible
- Unstyled foundation
- Customizable
- Tailwind-first
- Production-ready

Alternatives

Material UI

Rejected

Too opinionated.

Ant Design

Rejected

Does not match EcoPilot branding.

---

# Styling

Tailwind CSS

Reason

- Utility-first
- Fast development
- Excellent ecosystem
- Easy theming
- Responsive

Custom CSS

Used only for

Global tokens

Typography

Animations

Utilities

---

# Icons

Lucide React

Reason

Minimal

Consistent

Open source

Tree-shakeable

---

# Animations

Framer Motion

Purpose

Page transitions

Cards

Microinteractions

Loading states

Avoid excessive animations.

---

# Charts

Recharts

Reason

Simple

React-native API

Responsive

Accessible

Alternatives

Chart.js

ECharts

Rejected for MVP due to additional complexity.

---

# Forms

React Hook Form

Validation

Zod

Reason

Performance

Type safety

Minimal re-renders

Excellent developer experience

---

# State Management

Primary

React Server Components

↓

React State

↓

Context API

Use global state only when necessary.

Future

Zustand

Only if complexity increases.

Avoid Redux for MVP.

---

# Backend

Framework

Next.js Route Handlers

Reason

Single deployment

Excellent integration

Simple authentication

Scalable enough for MVP

Future

Microservices

Only if required.

---

# Database

Provider

Supabase PostgreSQL

Reason

Managed

Reliable

Scalable

Excellent developer experience

---

# ORM

Prisma

Reason

Type-safe queries

Excellent migration tooling (Prisma Migrate)

Readable schema definition language

First-class TypeScript support

Prisma Studio for development data inspection

Alternatives Considered

Drizzle ORM

Pros: Lightweight, lower overhead

Cons: Smaller AI ecosystem support, less documentation maturity

Decision: Rejected in favour of Prisma for maintainability and onboarding speed.

---

# Authentication

Supabase Auth

Methods

Email

Google OAuth

Future

Microsoft

GitHub

SSO

---

# Authorization

Role-Based Access Control (RBAC)

Roles

Organization Owner

Company Admin

Department Manager

Employee

Permissions are checked on the server.

Never rely solely on frontend role checks.

---

# Storage

Supabase Storage

Used for

Utility Bills

Reports

Images

PDF Files

Future

Versioning

Retention policies

---

# AI Provider

Primary

Google Gemini

Reason

Excellent document understanding

Generous free tier

Native PDF support

Good multimodal capabilities

Future Providers

OpenAI

Anthropic

Ollama

The AI layer should be provider-agnostic.

---

# AI Abstraction Layer

Application

↓

AI Service

↓

Provider Adapter

↓

Gemini

This architecture allows switching providers without changing business logic.

---

# OCR Strategy

Primary

Gemini Document Understanding

Fallback

Tesseract OCR (Future)

Reason

Gemini reduces pipeline complexity by extracting structured information directly from uploaded documents.

---

# Background Jobs

Provider

Trigger.dev (preferred)

Alternative

Inngest

Use Cases

AI Analysis

PDF Generation

Report Generation

Email Notifications

Long-running tasks should never block user requests.

---

# Notifications

MVP

In-App Notifications

Future

Email

Slack

Microsoft Teams

Push Notifications

---

# File Processing Flow

Upload

↓

Virus Validation (future)

↓

Storage

↓

Background Job

↓

AI Extraction

↓

Validation

↓

Database

↓

Dashboard Update

↓

Notification

---

# Deployment

Frontend

Vercel

Database

Supabase

Background Jobs

Trigger.dev Cloud

Monitoring

Sentry (future)

---

# CI/CD

Platform

GitHub Actions

Workflow

Lint

↓

Type Check

↓

Tests

↓

Build

↓

Deploy

Every pull request should pass the pipeline before merging.

---

# Monitoring

Future

Sentry

PostHog

Vercel Analytics

Purpose

Performance

Errors

Usage

---

# Logging

Use structured logging.

Levels

Debug

Info

Warning

Error

Never log sensitive user information.

---

# Security

Use

HTTPS

Environment Variables

Row Level Security

Server Validation

Rate Limiting

CSRF Protection

Secure Cookies

Secrets must never be committed to the repository.

---

# Performance Targets

Dashboard

<2 seconds

Navigation

<200ms

AI Report

<30 seconds

Utility Bill Upload

<10 seconds

First Contentful Paint

<1.8 seconds

---

# Browser Support

Latest versions of

Chrome

Edge

Firefox

Safari

Responsive support

Mobile

Tablet

Desktop

---

# Dependency Rules

Before adding a dependency, ask:

Does Next.js already solve this?

Can an existing library handle it?

Is this dependency actively maintained?

Can it be tree-shaken?

Avoid dependency bloat.

---

# Architecture Principles

Use

SOLID

DRY

KISS

YAGNI

Feature-Based Architecture

Dependency Injection (where appropriate)

Avoid premature optimization.

---

# Future Scalability

The stack should support:

- Multi-tenancy
- Enterprise plans
- AI provider switching
- Background workers
- API integrations
- Mobile applications
- Public APIs

without major rewrites.

---

# Final Technology Decisions

| Category | Technology |
|-----------|------------|
| Framework | Next.js 15 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Icons | Lucide React |
| Animation | Framer Motion |
| Charts | Recharts |
| Forms | React Hook Form |
| Validation | Zod |
| Backend | Next.js Route Handlers |
| Database | PostgreSQL (Supabase) |
| ORM | Prisma |
| Storage | Supabase Storage |
| Authentication | Supabase Auth |
| AI | Google Gemini |
| Background Jobs | Trigger.dev |
| Deployment | Vercel |
| CI/CD | GitHub Actions |

---

# Definition of Done

No contributor or AI assistant should introduce alternative technologies without documenting the trade-offs and obtaining approval through a future Architecture Decision Record (ADR).

Maintaining a consistent technology stack is essential to EcoPilot's long-term maintainability and scalability.