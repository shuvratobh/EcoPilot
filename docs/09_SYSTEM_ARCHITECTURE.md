# EcoPilot — System Architecture

Version: 1.0

Status: Engineering Blueprint

Owner: Software Architecture Team

Priority: Critical

---

# Purpose

This document defines the high-level architecture of EcoPilot.

It explains how every major system interacts, how data flows through the platform, how services communicate, and how the application should scale over time.

This document is the primary architectural reference for developers and AI coding assistants.

---

# Architectural Principles

EcoPilot is designed using the following principles:

- Modular
- Scalable
- Maintainable
- Secure
- Type-safe
- Event-driven
- API-first
- Multi-tenant
- AI-native

Every feature should follow these principles.

---

# High-Level Architecture

```
                    User

                      │

              Next.js Frontend

                      │

        ┌─────────────┴─────────────┐

        │                           │

 Route Handlers              Server Actions

        │                           │

        └─────────────┬─────────────┘

                      │

             Business Services

                      │

     ┌─────────┬──────────┬──────────┐

     │         │          │          │

 Database   AI Service  Storage   Notification

     │         │          │          │

 Supabase   Gemini     Storage    In-App

                      │

              Background Jobs
```

---

# Layered Architecture

Presentation Layer

↓

Application Layer

↓

Business Logic Layer

↓

Infrastructure Layer

↓

External Services

Each layer has one responsibility.

Never skip layers.

---

# Presentation Layer

Contains

- Pages
- Layouts
- Components
- Forms
- Charts
- Navigation

Responsibilities

Display information.

Collect user input.

Never perform business calculations.

Never directly access the database.

---

# Application Layer

Contains

- Route Handlers
- Server Actions
- Controllers

Responsibilities

Validate requests.

Authorize users.

Call services.

Return responses.

Should contain minimal business logic.

---

# Business Layer

Contains

- Resource Service
- Report Service
- AI Service
- Goal Service
- Carbon Service
- Notification Service

Responsibilities

Implement business rules.

Calculate metrics.

Coordinate repositories.

Communicate with AI.

This layer contains the application's intelligence.

---

# Repository Layer

Purpose

Isolate database access.

Each feature owns its repository.

Examples

UserRepository

ResourceRepository

GoalRepository

ReportRepository

OrganizationRepository

Repositories should never contain business logic.

---

# Database Layer

Responsible for

Persistence

Transactions

Indexes

Constraints

Relationships

Use Use Prisma instead of Drizzle. ORM.

Avoid raw SQL unless justified.

---

# External Services

Current

Gemini

Supabase Storage

Future

Email

Slack

Microsoft Teams

Analytics

Never couple business logic directly to external providers.

Use adapters.

---

# Multi-Tenant Architecture

Every organization is isolated.

Every business table includes

organization_id

Every query is scoped.

```
User

↓

Organization

↓

Department

↓

Resource Records
```

Never allow cross-organization access.

---

# Row Level Security

Supabase RLS is mandatory.

Policies should enforce:

Users can only access records belonging to their organization.

Authorization must be enforced at both:

Database level

Application level

---

# Authentication Flow

```
Login

↓

Supabase Auth

↓

JWT

↓

Middleware

↓

Protected Route

↓

Application
```

Sessions should remain server-validated.

---

# Authorization

Role-Based Access Control

Roles

Owner

Admin

Manager

Employee

Permissions should use capability-based checks rather than hardcoded role comparisons.

Example

canGenerateReport

canManageUsers

canUploadBills

---

# Folder Responsibilities

```
app/

Routes

Navigation

Layouts

components/

Reusable UI

features/

Business Features

services/

Business Logic

repositories/

Database Access

lib/

Utilities

config/

Configuration

types/

Shared Types

hooks/

Reusable Hooks
```

Each folder has one responsibility.

---

# Feature Architecture

Every feature follows:

```
Feature

↓

UI

↓

Hook

↓

Service

↓

Repository

↓

Database
```

Never bypass this flow.

---

# AI Architecture

The AI layer is provider-independent.

```
Application

↓

AI Service

↓

Provider Adapter

↓

Gemini
```

Future

Gemini

↓

OpenAI

↓

Anthropic

↓

Ollama

Business logic never communicates directly with Gemini.

---

# AI Processing Flow

```
Upload PDF

↓

Storage

↓

Background Job

↓

Gemini Analysis

↓

Extract JSON

↓

Validation

↓

Database

↓

Dashboard Refresh

↓

Notification
```

Never process AI requests synchronously if they exceed a few seconds.

---

# Background Jobs

Long-running tasks include

AI Analysis

PDF Generation

Excel Export

Email

Notifications

Report Generation

Architecture

```
Application

↓

Queue

↓

Worker

↓

Status Update

↓

Notification
```

---

# Event-Driven Architecture

Every important action emits an event.

Examples

Document Uploaded

AI Analysis Completed

Goal Created

Report Generated

Resource Updated

These events trigger background workflows.

---

# Event Examples

```
Upload Bill

↓

DocumentUploaded

↓

AIAnalysisRequested

↓

AIAnalysisCompleted

↓

DashboardUpdated

↓

NotificationCreated
```

This approach keeps the application loosely coupled.

---

# Notification Architecture

Current

In-App

Future

Email

Slack

Teams

Push Notifications

Notifications should subscribe to application events rather than business services directly.

---

# File Storage

Store only metadata in PostgreSQL.

Actual files remain in Supabase Storage.

Database

File ID

Storage Path

Type

Owner

Upload Date

Status

Storage

PDF

Images

Reports

---

# API Communication

Frontend

↓

Route Handler

↓

Service

↓

Repository

↓

Database

Avoid frontend-to-database communication.

---

# Error Handling

Errors are categorized as

Validation

Authorization

Business Logic

Infrastructure

External Service

Every error should return a consistent response structure.

---

# Logging

Log

Authentication

Errors

AI Requests

Report Generation

File Uploads

Never log

Passwords

Secrets

Tokens

Sensitive user data

---

# Configuration

Environment variables

Database

AI

Storage

Authentication

Feature Flags

Never hardcode secrets.

---

# Caching Strategy

Cache

Dashboard summaries

Organization settings

Static configuration

Never cache sensitive user-specific data incorrectly.

Future

Redis

---

# Security Architecture

Security is implemented in layers.

Browser

↓

Middleware

↓

Authentication

↓

Authorization

↓

Validation

↓

Database Policies

↓

Storage Permissions

Defense in depth.

---

# Scalability

Current

Single Next.js application

Future

Extract services

AI Service

Reporting Service

Notification Service

Public API

Architecture should allow gradual evolution.

---

# Sequence Diagram

Utility Bill Upload

```
User

↓

Upload Bill

↓

Storage

↓

Background Worker

↓

Gemini

↓

Extract Data

↓

Validate

↓

Save Database

↓

Update Dashboard

↓

Notify User
```

---

# Disaster Recovery

Future considerations

Automated backups

Storage redundancy

Database snapshots

Disaster recovery plan

---

# Architecture Decision Records (ADR)

Major architectural changes require an ADR.

Examples

Switch AI provider

Replace ORM

Introduce Redis

Split backend services

This keeps architectural decisions documented.

---

# Definition of Done

A feature is architecturally complete when:

✓ Uses correct layers

✓ Respects feature boundaries

✓ Avoids duplicate logic

✓ Uses repositories

✓ Uses services

✓ Uses RBAC

✓ Supports multi-tenancy

✓ Emits appropriate events

✓ Handles errors

✓ Can scale without major rewrites

---

# Final Principle

EcoPilot's architecture should prioritize long-term maintainability over short-term convenience.

Every new feature should fit naturally into the existing architecture without requiring significant restructuring.

The architecture should enable the product to evolve from an MVP into a production-grade SaaS platform with minimal technical debt.