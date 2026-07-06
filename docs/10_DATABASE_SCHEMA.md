# EcoPilot — Database Schema

Version: 1.0

Status: Engineering Foundation

Priority: Critical

Owner: Software Architecture Team

---

# Purpose

This document defines the complete relational database schema for EcoPilot.

It serves as the single source of truth for all persistence logic.

Every table, relationship, constraint, index, and future migration must align with this specification.

The database is designed for:

- Multi-tenancy
- Scalability
- Security
- Performance
- Auditability

---

# Database Philosophy

The database should prioritize:

- Data Integrity
- Normalization
- Query Performance
- Security
- Future Scalability

Avoid duplicate information.

Every entity should have one clear responsibility.

---

# Database Technology

Database

PostgreSQL (Supabase)

ORM

Prisma

Migration

Prisma Migrate

Development

Prisma Studio

---

# Multi-Tenancy

Every business entity belongs to one organization.

Every table containing business data must include

organization_id

Example

Organization

↓

Departments

↓

Employees

↓

Resource Logs

↓

Reports

↓

Goals

↓

Documents

Never allow cross-organization access.

---

# Entity Relationship Diagram

```

Organization

│

├── Users

├── Departments

├── ResourceLogs

├── Documents

├── Reports

├── Goals

├── Notifications

├── AIConversations

└── AuditLogs

```

---

# Core Tables

## Organization

Purpose

Represents a company using EcoPilot.

Fields

- id
- name
- slug
- industry
- country
- timezone
- office_size
- employee_count
- sustainability_target
- created_at
- updated_at

Relationships

One Organization

↓

Many Users

↓

Many Departments

↓

Many Resource Logs

---

## User

Purpose

Application users.

Fields

- id
- organization_id
- department_id
- full_name
- email
- avatar
- role
- status
- last_login
- created_at
- updated_at

Relationships

Belongs To

Organization

Department

---

## Department

Purpose

Organizational structure.

Fields

- id
- organization_id
- name
- description
- manager_id
- created_at

---

# Resource Tracking

Instead of separate tables for Electricity, Water, Paper...

Use a unified model.

Advantages

- Easier analytics
- Less duplicated code
- Simpler reports

---

## ResourceLog

Fields

- id
- organization_id
- department_id
- resource_type
- quantity
- unit
- estimated_cost
- estimated_carbon
- recorded_at
- notes
- created_by
- created_at

resource_type

Enum

- Electricity
- Water
- Paper
- Waste
- Recycling

---

# Documents

Purpose

Uploaded files.

Fields

- id
- organization_id
- uploaded_by
- filename
- storage_path
- mime_type
- file_size
- processing_status
- ai_status
- uploaded_at

Processing Status

Pending

Processing

Completed

Failed

---

# AI Extraction

Instead of modifying the document table repeatedly,

store extracted values separately.

---

## DocumentExtraction

Fields

- id
- document_id
- extracted_json
- confidence_score
- processing_time
- created_at

This keeps raw extraction separate from uploaded files.

---

# Sustainability Goals

## Goal

Fields

- id
- organization_id
- title
- description
- goal_type
- target_value
- current_value
- unit
- deadline
- status
- created_by

Goal Types

Electricity

Water

Paper

Waste

Carbon

EcoScore

---

# Reports

## Report

Fields

- id
- organization_id
- title
- report_type
- generated_by
- generated_at
- storage_path
- ai_summary

Types

Monthly

Quarterly

Annual

Executive

AI

---

# AI

## AIConversation

Purpose

Store AI history.

Fields

- id
- organization_id
- user_id
- prompt
- response
- model
- tokens_used
- created_at

Future

Conversation Threads

---

# EcoScore History

Never overwrite scores.

Track history.

## EcoScoreHistory

Fields

- id
- organization_id
- score
- confidence
- completeness
- generated_at

Allows

Trend analysis

Historical reports

Forecasting

---

# Notifications

Fields

- id
- organization_id
- user_id
- title
- message
- category
- is_read
- created_at

Categories

AI

Goal

Resource

Report

System

---

# Audit Log

Critical table.

Every important action creates an audit record.

Fields

- id
- organization_id
- actor_id
- action
- entity
- entity_id
- metadata
- ip_address
- created_at

Examples

User Login

Goal Created

Document Uploaded

AI Report Generated

Role Changed

---

# Settings

Organization-level settings.

Fields

- id
- organization_id
- theme
- language
- timezone
- notification_preferences
- ai_provider
- emission_factor_region

---

# Enums

Role

Owner

Admin

Manager

Employee

---

ResourceType

Electricity

Water

Paper

Waste

Recycling

---

GoalStatus

Draft

Active

Completed

Archived

---

DocumentStatus

Pending

Processing

Completed

Failed

---

NotificationCategory

AI

Report

Goal

System

Resource

---

Indexes

Create indexes on

organization_id

department_id

resource_type

recorded_at

user_id

goal_status

document_status

Composite indexes

organization_id + recorded_at

organization_id + resource_type

organization_id + department_id

These improve dashboard queries significantly.

---

Foreign Keys

Every relation uses foreign keys.

Never use orphaned records.

Enable cascading where appropriate.

Example

Delete Organization

↓

Delete Departments

↓

Delete Resource Logs

↓

Delete Goals

↓

Delete Reports

Only cascade where data retention policies allow.

---

Soft Deletes

Do not permanently delete business records.

Preferred

deleted_at

Allows

Recovery

Auditing

Compliance

---

Audit Requirements

Every important table includes

created_at

updated_at

created_by

updated_by

deleted_at

Future

version_number

---

Future Tables

Reserved

API Keys

Subscriptions

Invoices

Teams

Feature Flags

Benchmarks

Emission Factors

Background Jobs

Integrations

Webhooks

---

Prisma Naming Convention

Models

PascalCase

Fields

camelCase

Database

snake_case

Maintain consistency.

---

Definition of Done

A database change is complete only if:

✓ Migration created

✓ Relationships documented

✓ Indexes considered

✓ Foreign keys defined

✓ Multi-tenancy preserved

✓ Audit requirements satisfied

✓ RLS compatible

✓ Backward compatibility reviewed

---

Final Principle

The database should represent EcoPilot's business domain clearly and accurately.

Business logic belongs in services.

Persistence belongs in the database.

Never mix the two.

---

# GoalProgress

Purpose

Track historical progress snapshots for each goal.

Required for trend charts, forecasting, and audit trails.

Fields

- id
- goal_id
- organization_id
- value
- notes
- recorded_at
- created_by

Relationships

Belongs To: Goal, Organization

Usage

A new GoalProgress record is written whenever a goal's current_value is updated.

This preserves the full history of improvement over time.

---

# EmissionFactor

Purpose

Store regional carbon emission conversion factors.

Carbon calculations must reference this table rather than hardcoded values.

Fields

- id
- region_code
- resource_type
- factor_value
- unit
- source_name
- source_url
- effective_year
- is_active
- created_at

Examples

| region_code | resource_type | factor_value | unit | source_name |
|---|---|---|---|---|
| BD | Electricity | 0.582 | kg CO₂e/kWh | Bangladesh PGCB 2026 |
| BD | Water | 0.0003 | kg CO₂e/litre | IPCC AR6 |
| BD | Paper | 0.0084 | kg CO₂e/page | WRAP 2023 |

Usage

The Settings table references emission_factor_region.

Carbon calculations join Settings with EmissionFactor filtered by region_code and resource_type.

The AI Copilot cites the source_name in every carbon estimate.

---

# Schema Version History

v1.0 — Initial schema

v1.1 — Added GoalProgress and EmissionFactor tables (July 2026)