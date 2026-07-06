# EcoPilot — API Specification

Version: 1.0

Status: Engineering Foundation

Priority: Critical

Owner: Backend Engineering Team

---

# Purpose

This document defines every public API used by EcoPilot.

It standardizes:

- API routes
- Request formats
- Response formats
- Error handling
- Authentication
- Authorization
- Validation
- Pagination
- Filtering

Every endpoint must follow these conventions.

---

# API Philosophy

EcoPilot APIs should be:

- RESTful
- Predictable
- Versioned
- Secure
- Consistent
- Type-safe

Every endpoint should have one responsibility.

---

# Base URL

/api/v1

Future versions

/api/v2

Never break existing clients.

---

# Response Format

Every successful response follows:

{
  "success": true,
  "message": "Human readable message",
  "data": {},
  "meta": {}
}

---

Errors

{
  "success": false,
  "message": "Validation failed",
  "errors": [],
  "code": "VALIDATION_ERROR"
}

Never return inconsistent response structures.

---

# Authentication

Supabase Auth

Bearer Token

Authorization:

Bearer <token>

Protected routes require authentication.

---

# User Roles

Owner

Admin

Manager

Employee

Permissions are enforced server-side.

---

# Authentication Endpoints

POST

/auth/login

POST

/auth/register

POST

/auth/logout

POST

/auth/forgot-password

POST

/auth/reset-password

GET

/auth/me

PATCH

/auth/profile

---

# Organization

GET

/organization

PATCH

/organization

GET

/organization/settings

PATCH

/organization/settings

---

# Department

GET

/departments

POST

/departments

GET

/departments/:id

PATCH

/departments/:id

DELETE

/departments/:id

---

# Users

GET

/users

GET

/users/:id

POST

/users/invite

PATCH

/users/:id

DELETE

/users/:id

GET

/users/search

---

# Dashboard

GET

/dashboard/summary

Returns

EcoScore

KPIs

Recent Activity

AI Insights

Goals

Charts

---

GET

/dashboard/charts

Returns

Electricity

Water

Paper

Waste

Carbon

Trend data

---

# Resource Endpoints — Architecture Note

All five resource endpoint groups (Electricity, Water, Paper, Waste, Recycling) map to a single unified ResourceLog table in the database.

Internally they share:

- One ResourceRepository (filters by resource_type)
- One ResourceService (scoped by resource_type and organization_id)

Each endpoint group is kept separate at the API surface to provide a clean, resource-specific developer experience and allow per-type validation and business rules.

This is the authoritative architecture for resource endpoints. See ADR-016.

---

# Electricity

GET

/electricity

POST

/electricity

PATCH

/electricity/:id

DELETE

/electricity/:id

GET

/electricity/summary

---

# Water

GET

/water

POST

/water

PATCH

/water/:id

DELETE

/water/:id

GET

/water/summary

---

# Paper

GET

/paper

POST

/paper

PATCH

/paper/:id

DELETE

/paper/:id

GET

/paper/summary

---

# Waste

GET

/waste

POST

/waste

PATCH

/waste/:id

DELETE

/waste/:id

GET

/waste/summary

---

# Recycling

GET

/recycling

POST

/recycling

PATCH

/recycling/:id

DELETE

/recycling/:id

GET

/recycling/summary

---

# Documents

GET

/documents

POST

/documents/upload

GET

/documents/:id

DELETE

/documents/:id

POST

/documents/:id/reprocess

---

# AI

POST

/ai/analyze-document

POST

/ai/chat

POST

/ai/generate-report

GET

/ai/history

DELETE

/ai/history

---

# EcoScore

GET

/ecoscore

GET

/ecoscore/history

GET

/ecoscore/breakdown

---

# Goals

GET

/goals

POST

/goals

PATCH

/goals/:id

DELETE

/goals/:id

PATCH

/goals/:id/status

---

# Reports

GET

/reports

POST

/reports/generate

GET

/reports/:id

DELETE

/reports/:id

GET

/reports/:id/download

---

# Notifications

GET

/notifications

PATCH

/notifications/:id/read

PATCH

/notifications/read-all

DELETE

/notifications/:id

---

# Audit Logs

GET

/audit

Filters

User

Date

Action

Resource

Owner only.

---

# Search

GET

/search

Supports

Users

Documents

Goals

Reports

Departments

---

# Pagination

Standard

?page=1

&limit=20

Response

meta

page

limit

total

pages

---

# Sorting

Example

?sort=createdAt

?order=desc

---

# Filtering

Examples

?department=finance

?status=active

?year=2026

?resource=electricity

---

# Validation

Every endpoint validates

Request Body

URL Params

Query Params

Authentication

Authorization

Never trust frontend validation.

---

# Rate Limiting

AI

20 requests/minute

Uploads

10/minute

Authentication

5 attempts/minute

Reports

5/minute

---

# File Upload Rules

Allowed

PDF

PNG

JPEG

JPG

Maximum

20 MB

Reject

Executable files

Scripts

Unsupported MIME types

---

# Status Codes

200

Success

201

Created

204

Deleted

400

Validation

401

Unauthorized

403

Forbidden

404

Not Found

409

Conflict

422

Invalid Data

429

Rate Limited

500

Server Error

---

# Error Codes

VALIDATION_ERROR

UNAUTHORIZED

FORBIDDEN

RESOURCE_NOT_FOUND

RATE_LIMITED

UPLOAD_FAILED

AI_PROVIDER_ERROR

DATABASE_ERROR

UNKNOWN_ERROR

---

# API Versioning

All endpoints

/api/v1/

Future breaking changes

/api/v2/

Never silently break APIs.

---

# Security

HTTPS only

JWT Validation

RLS

Input Sanitization

Rate Limiting

CORS

Secure Headers

---

# Performance

Average response

<300ms

Dashboard

<2 seconds

AI

<30 seconds

Uploads

Background Processing

---

# Future APIs

Webhook API

Public API

Mobile API

GraphQL Gateway

Integrations

Slack

Teams

Zapier

---

# Definition of Done

An endpoint is complete when:

✓ Authentication implemented

✓ Authorization enforced

✓ Validation added

✓ Errors standardized

✓ Type-safe

✓ Tested

✓ Documented

✓ Supports pagination/filtering where applicable

✓ Returns consistent responses

---

# Final Principle

Every API should be predictable, secure, and easy to consume.

Frontend developers should be able to integrate any endpoint without reading its implementation.

Consistency is more valuable than cleverness.