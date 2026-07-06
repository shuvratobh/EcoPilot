# EcoPilot — Security Guidelines

Version: 1.0

Status: Engineering Standard

Priority: Critical

Owner: Security Team

---

# Purpose

Security is a core product requirement.

Every feature must be designed with security in mind from the beginning rather than added later.

EcoPilot stores business information, uploaded documents, sustainability reports, and AI conversations.

Protecting this data is essential.

---

# Security Principles

EcoPilot follows:

• Least Privilege

• Defense in Depth

• Zero Trust

• Secure by Default

• Privacy First

Every request must be authenticated, authorized, validated and logged when appropriate.

---

# Security Layers

Browser

↓

HTTPS

↓

Middleware

↓

Authentication

↓

Authorization

↓

Validation

↓

Business Rules

↓

Database Policies

↓

Storage Permissions

Security should never rely on a single layer.

---

# Authentication

Provider

Supabase Auth

Supported

Email

Password

Google OAuth

Future

Microsoft

GitHub

Enterprise SSO

Authentication is mandatory for every protected route.

---

# Session Management

Use secure HTTP-only cookies where applicable.

Validate JWTs server-side.

Automatically expire inactive sessions.

Support secure logout.

---

# Password Policy

Minimum

12 characters

Require

Uppercase

Lowercase

Number

Special Character

Passwords are never stored by EcoPilot.

Supabase handles hashing.

---

# Authorization

Use Permission-Based RBAC.

Avoid

if(user.role=="Admin")

Instead

user.hasPermission("manage_reports")

Every protected endpoint verifies permissions on the server.

---

# Multi-Tenant Security

Every business table includes

organization_id

Every query must be scoped.

Users must never access another organization's data.

Use Supabase Row Level Security for enforcement.

---

# API Security

Every request validates:

Authentication

Authorization

Request body

Route parameters

Query parameters

Content-Type

Reject unknown fields.

---

# Input Validation

Validate all inputs using Zod.

Never trust frontend validation.

Sanitize text before storage.

Reject malformed requests.

---

# File Upload Security

Allowed Types

PDF

PNG

JPG

JPEG

Maximum Size

20 MB

Reject

Executables

Scripts

Archives

Validate MIME type and extension.

Future

Virus scanning before processing.

---

# AI Security

Never send unnecessary user information to the AI provider.

Only include the minimum data required to complete the task.

Mask sensitive fields when possible.

Do not use AI responses as executable instructions.

Treat AI output as untrusted input.

---

# Secrets Management

Never commit:

API Keys

Database URLs

JWT Secrets

Private Keys

Store all secrets in environment variables.

Use separate environments for:

Development

Staging

Production

---

# Logging

Log:

Authentication events

Permission failures

File uploads

AI requests

Critical errors

Never log:

Passwords

Tokens

Sensitive document contents

Personal data unless required for auditing.

---

# Rate Limiting

Authentication

5 requests/minute

AI Chat

20 requests/minute

Document Upload

10 requests/minute

Report Generation

5 requests/minute

Return HTTP 429 when limits are exceeded.

---

# Audit Logging

Create immutable audit records for:

Login

Logout

Role changes

Permission changes

Document uploads

Goal updates

Report generation

AI report creation

Store:

Actor

Action

Timestamp

Organization

Affected entity

---

# Transport Security

HTTPS only.

Redirect all HTTP traffic.

Enable HSTS in production.

---

# Storage Security

Uploaded files remain private.

Access only through signed URLs.

Do not expose storage bucket paths publicly.

---

# Database Security

Enable:

Foreign Keys

Indexes

Constraints

Transactions

Row Level Security

Use Prisma parameterized queries.

Avoid string-concatenated SQL.

---

# XSS Protection

Escape user-generated content.

Use React's default escaping.

Sanitize rich text before rendering.

Never use dangerouslySetInnerHTML unless absolutely necessary.

---

# CSRF Protection

Protect state-changing operations.

Validate origin where appropriate.

Use secure cookies.

---

# CORS

Allow only trusted origins.

Reject wildcard origins in production.

---

# Content Security Policy

Restrict:

Scripts

Frames

Images

Connections

Only trusted domains should be permitted.

---

# Error Handling

Never expose:

Stack traces

Database errors

Internal paths

Return generic user-friendly errors.

Log detailed information internally.

---

# Dependency Security

Keep dependencies updated.

Review advisories regularly.

Remove unused packages.

Avoid abandoned libraries.

---

# Backup Strategy

Database

Daily automated backups

Storage

Versioned backups

Regular recovery testing

---

# Privacy

Collect only required information.

Allow organizations to export their own data.

Support future deletion requests.

Clearly identify estimated AI-generated content.

---

# Incident Response

If a security issue is detected:

Identify

↓

Contain

↓

Investigate

↓

Recover

↓

Review

Document every incident.

---

# Security Checklist

Before release verify:

✓ Authentication

✓ Authorization

✓ Input validation

✓ Output encoding

✓ HTTPS

✓ Rate limiting

✓ Audit logs

✓ Secure file uploads

✓ Environment variables

✓ RLS enabled

✓ Secrets protected

✓ Error handling

✓ Dependency review

---

# Final Principle

Security is part of every feature, not a separate feature.

Every engineer and every AI-generated change must preserve EcoPilot's security model.

Protect user trust first.