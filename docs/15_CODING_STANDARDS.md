# EcoPilot — Coding Standards

Version: 1.0

Status: Engineering Standard

Owner: Engineering Team

Priority: High

---

# Purpose

This document defines coding conventions for EcoPilot.

Every contributor and AI coding assistant must follow these standards to ensure a consistent, maintainable, and scalable codebase.

---

# Engineering Principles

Always write code that is:

- Readable
- Predictable
- Reusable
- Testable
- Type-safe
- Documented
- Accessible

Optimize for maintainability rather than cleverness.

---

# General Rules

✓ Prefer clarity over brevity.

✓ Avoid duplicate logic.

✓ Keep functions small.

✓ Write self-documenting code.

✓ Prefer composition over inheritance.

✓ Never hardcode secrets.

✓ Never use "magic numbers."

---

# TypeScript

Always use strict mode.

Never use

any

Prefer

unknown

when the type is uncertain.

Create shared types inside

types/

---

# Naming Conventions

Components

PascalCase

Example

ResourceCard.tsx

Hooks

camelCase beginning with use

Example

useEcoScore()

Functions

camelCase

Variables

camelCase

Constants

UPPER_SNAKE_CASE

Files

kebab-case (utilities)

PascalCase (React components)

---

# Folder Rules

Each feature owns:

components/

hooks/

services/

repositories/

types/

validation/

Avoid mixing unrelated code.

---

# Components

One responsibility.

Maximum recommended length

200 lines

Split large components into smaller ones.

---

# Hooks

Hooks should contain reusable logic.

Never perform rendering inside hooks.

---

# Services

Business logic belongs here.

Services never access UI directly.

---

# Repositories

Repositories only communicate with Prisma.

No business logic.

---

# Error Handling

Never ignore errors.

Return meaningful error messages.

Log unexpected failures.

---

# Async Code

Always use

async/await

Avoid nested promises.

---

# Validation

Every external input must be validated using Zod.

Frontend validation improves UX.

Backend validation ensures security.

Both are required.

---

# Comments

Comment

Why

Not

What

Avoid obvious comments.

---

# Accessibility

Every interactive component supports:

Keyboard navigation

Focus states

ARIA labels where appropriate

WCAG AA

---

# Performance

Lazy load heavy components.

Memoize only when necessary.

Avoid unnecessary re-renders.

---

# Logging

Development

Verbose

Production

Minimal

Never log secrets.

---

# Code Review Checklist

✓ Typed

✓ Accessible

✓ Responsive

✓ Tested

✓ No duplication

✓ Uses shared components

✓ Error handling

✓ Follows architecture

---

# AI Coding Rules

AI-generated code must:

Follow folder structure

Reuse components

Respect services

Respect repositories

Never bypass architecture

Never invent APIs

Always compile successfully

---

# Definition of Done

A pull request is complete when:

✓ Builds successfully

✓ Lints successfully

✓ Type checks successfully

✓ Tests pass

✓ Follows coding standards

✓ Uses reusable components

✓ Documentation updated (if needed)

---

# Final Principle

Future developers should understand every file within minutes.

Readable code always wins.