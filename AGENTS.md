# AGENTS.md

# EcoPilot AI Development Guide

Version: 1.0

Project: EcoPilot

This file contains mandatory instructions for every AI coding assistant working on EcoPilot.

Examples include:

- Antigravity
- Cursor
- Claude Code
- Gemini CLI
- GitHub Copilot
- Future AI coding tools

This file overrides default assumptions.

The documentation inside /docs is the single source of truth.

---

# Project Overview

EcoPilot is a production-quality SaaS platform that helps organizations monitor, analyze and improve office sustainability.

This is NOT a student CRUD application.

Build every feature as if it will be used by paying customers.

Quality is more important than speed.

---

# Before Writing Code

Always perform these steps.

1.

Read every document inside

/docs

Do not skip any document.

These documents define

- Architecture
- Business Rules
- UI
- Database
- Security
- AI
- Coding Standards

Never make assumptions that contradict documentation.

---

2.

Understand the current task.

If the request is ambiguous,

ask questions.

Do not guess.

---

3.

Create an implementation plan.

Explain

- files to create
- files to modify
- dependencies
- architecture impact

Wait for approval before making major architectural changes.

---

# Core Rules

Never violate architecture.

Never ignore documentation.

Never bypass security.

Never duplicate code.

Never invent APIs.

Never invent database tables.

Never invent business logic.

Never silently change architecture.

---

# Tech Stack

Always use

Next.js 15

React 19

TypeScript

TailwindCSS

shadcn/ui

Prisma ORM

Supabase

Supabase Auth

Supabase Storage

Google Gemini

React Hook Form

Zod

Recharts

Framer Motion

Lucide Icons

Do not introduce alternative libraries unless explicitly requested.

---

# Folder Structure

Respect feature-based architecture.

Example

features/

electricity/

water/

paper/

reports/

goals/

Each feature owns

components

hooks

services

repositories

types

validation

Do not place unrelated files together.

---

# Component Rules

Components must

Be reusable

Be accessible

Be responsive

Be typed

Be small

Prefer composition over inheritance.

Split components larger than approximately 200 lines.

---

# UI Rules

Follow the Design System.

Never invent new colors.

Never invent spacing.

Never invent typography.

Never create inconsistent layouts.

Always support

Light Mode

Dark Mode

Mobile

Tablet

Desktop

---

# Accessibility

Every feature must support

Keyboard navigation

Visible focus states

ARIA labels where needed

Semantic HTML

WCAG AA

Accessibility is mandatory.

---

# Business Logic

Business logic belongs only inside Services.

Never place business logic inside

Pages

Components

Hooks

Repositories

---

# Repository Rules

Repositories

ONLY communicate with Prisma.

Repositories never contain

Business logic

Validation

Presentation logic

---

# Validation

Always validate

Forms

API Requests

Query Parameters

Route Parameters

Use Zod.

Never trust frontend validation.

---

# Authentication

Always verify authentication.

Never trust frontend role checks.

Authorization is enforced on the server.

---

# Multi-Tenancy

Every business query must be scoped by

organization_id

Never expose another organization's data.

Always respect Row Level Security.

---

# AI Rules

The AI Copilot is

NOT

a chatbot.

It is an AI Sustainability Consultant.

Never generate fictional sustainability advice.

Never fabricate numbers.

Always label estimates.

Always explain reasoning.

Always prioritize organization data over general knowledge.

---

# Error Handling

Every error should

Explain the issue

Suggest recovery

Log internally

Never expose stack traces.

---

# Logging

Log

Errors

Authentication

AI Requests

Uploads

Report Generation

Never log

Passwords

Secrets

Tokens

Sensitive documents

---

# Performance

Optimize for

Fast navigation

Lazy loading

Minimal bundle size

Reusable components

Avoid unnecessary re-renders.

---

# Security

Always use

HTTPS

Environment variables

Server validation

RLS

Rate limiting

Secure cookies

Parameterized queries

Never hardcode secrets.

---

# Code Quality

Use

SOLID

DRY

KISS

YAGNI

Readable code is preferred over clever code.

---

# Documentation

Whenever architecture changes,

update documentation.

Never allow documentation and implementation to diverge.

---

# Before Finishing Any Task

Verify

✓ TypeScript compiles

✓ ESLint passes

✓ Imports are clean

✓ Components are reusable

✓ Responsive

✓ Accessible

✓ No duplicated code

✓ Documentation still matches implementation

---

# Git

Small commits.

Meaningful commit messages.

One feature per pull request.

---

# What NOT To Do

Do NOT

Create huge components

Use "any"

Duplicate components

Ignore TypeScript errors

Disable ESLint

Hardcode values

Mix business logic into UI

Bypass services

Bypass repositories

Invent APIs

Invent database schemas

Change architecture without explanation

Generate placeholder code that will never be completed

---

# How To Build Features

For every feature

1.

Analyze requirements

↓

2.

Explain implementation plan

↓

3.

Generate types

↓

4.

Generate backend

↓

5.

Generate frontend

↓

6.

Connect APIs

↓

7.

Add validation

↓

8.

Handle errors

↓

9.

Test

↓

10.

Review

Never skip steps.

---

# AI Workflow

Always think in this order

Understand

↓

Plan

↓

Implement

↓

Verify

↓

Refactor

↓

Test

↓

Document

Never jump directly to code.

---

# Definition of Success

Every completed feature should feel like production software.

It should be

Readable

Maintainable

Scalable

Secure

Accessible

Responsive

Reusable

Well documented

Future developers should immediately understand how the feature works.

---

# Final Instruction

Treat EcoPilot as a real startup SaaS product.

If a shortcut would reduce long-term maintainability, choose the more maintainable solution.

When in doubt,

favor clarity,

simplicity,

and consistency.