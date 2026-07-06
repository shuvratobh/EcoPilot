# EcoPilot — Testing Strategy

Version: 1.0

Status: Engineering Standard

Priority: High

Owner: QA Team

---

# Purpose

This document defines the testing strategy for EcoPilot.

The objective is to ensure reliability, maintainability, and confidence when introducing new features.

Testing should verify business logic, not implementation details.

---

# Testing Philosophy

EcoPilot follows the Testing Pyramid.

           E2E
        Integration
         Unit Tests

Unit tests should form the majority.

Avoid relying only on end-to-end tests.

---

# Testing Goals

✓ Prevent regressions

✓ Verify business rules

✓ Ensure API stability

✓ Validate permissions

✓ Protect AI workflows

✓ Improve deployment confidence

---

# Test Levels

## Unit Tests

Purpose

Test individual functions.

Examples

EcoScore calculation

Carbon calculation

Validation

Utilities

Date formatting

Permissions

Preferred Framework

Vitest

---

## Integration Tests

Purpose

Verify multiple modules working together.

Examples

Authentication

Dashboard summary

Report generation

AI analysis pipeline

Database operations

---

## End-to-End Tests

Purpose

Test complete user workflows.

Examples

Register

↓

Login

↓

Upload Utility Bill

↓

AI Analysis

↓

Dashboard Update

↓

Generate Report

Framework

Playwright

---

# Critical Features

Always test

Authentication

RBAC

AI Copilot

EcoScore

File Upload

Report Generation

Notifications

Document Parsing

Dashboard KPIs

---

# AI Testing

Test

Prompt generation

Fallback handling

Failed AI responses

Timeouts

Empty documents

Malformed PDFs

Large files

Low confidence analysis

AI output validation

Never assume AI responses are correct.

---

# Security Testing

Verify

Authentication

Authorization

RLS

Permission checks

Rate limiting

File validation

Input sanitization

SQL injection prevention

XSS protection

---

# API Testing

Verify

Status codes

Validation

Authentication

Pagination

Filtering

Sorting

Error responses

---

# Database Testing

Verify

Relationships

Foreign keys

Indexes

Soft deletes

Transactions

Audit logging

---

# Accessibility Testing

Verify

Keyboard navigation

Focus order

ARIA labels

Color contrast

Screen reader compatibility

Responsive layouts

---

# Performance Testing

Dashboard

<2 seconds

API

<300ms

AI

<30 seconds

Document Upload

<10 seconds

---

# Regression Testing

Every release verifies

Dashboard

Authentication

Reports

EcoScore

AI Copilot

Settings

---

# Test Data

Never use production data.

Use

Seed scripts

Factories

Mock AI responses

Synthetic utility bills

---

# Mocking

Mock

Gemini API

Supabase Storage

Email

Notifications

External services

Do not mock business logic.

---

# CI Requirements

Every Pull Request runs

Lint

↓

Type Check

↓

Unit Tests

↓

Integration Tests

↓

Build

Deployment blocked if tests fail.

---

# Coverage Targets

Statements

90%

Functions

90%

Branches

80%

Critical business logic

100%

---

# Definition of Done

✓ Unit tests pass

✓ Integration tests pass

✓ E2E workflow verified

✓ Accessibility checked

✓ No critical bugs

✓ Performance acceptable

---

# Final Principle

If a feature cannot be tested, it should probably be redesigned.