# EcoPilot — Git Workflow

Version: 1.0

Status: Engineering Process

Owner: Engineering Team

Priority: Medium

---

# Purpose

This document defines how development is managed using Git.

A consistent workflow keeps the project stable, reviewable, and easy to maintain.

---

# Branch Strategy

Main Branch

main

Production-ready code only.

Development Branch

develop

Integration branch.

Feature Branches

feature/<feature-name>

Examples

feature/auth

feature/dashboard

feature/ecoscore

feature/ai-copilot

---

# Commit Message Format

Use Conventional Commits.

Examples

feat: add electricity dashboard

fix: correct EcoScore calculation

docs: update API specification

style: improve button spacing

refactor: simplify AI service

test: add report service tests

chore: update dependencies

---

# Pull Request Rules

Every PR should:

Describe changes

Reference related issue (if any)

Pass CI

Be reviewed before merge

---

# Merge Strategy

Prefer

Squash Merge

Benefits

Cleaner history

One commit per feature

---

# Release Tags

Use semantic versioning.

Examples

v1.0.0

v1.1.0

v2.0.0

---

# Git Ignore

Never commit

node_modules

.env

.next

dist

coverage

logs

Generated files

---

# Branch Lifecycle

Create

↓

Develop

↓

Commit

↓

Push

↓

Pull Request

↓

Review

↓

Merge

↓

Delete Branch

---

# Daily Workflow

1. Pull latest develop.

2. Create feature branch.

3. Implement feature.

4. Commit regularly.

5. Push.

6. Open PR.

7. Review.

8. Merge.

---

# Commit Frequency

Commit small logical changes.

Avoid huge "final commit" uploads.

Good Example

feat: add login form

feat: connect Supabase auth

fix: handle invalid credentials

Poor Example

final project update

---

# Rollback Strategy

Every feature should be independently reversible.

Avoid mixing unrelated changes in one commit.

---

# Code Ownership

Feature owners review related pull requests.

Documentation changes require documentation review.

Architecture changes require ADR updates.

---

# Release Checklist

✓ Tests passing

✓ Build successful

✓ Documentation updated

✓ Environment variables verified

✓ Database migrations applied

✓ Security review completed

✓ Version tag created

---

# CI Pipeline

Push

↓

Lint

↓

Type Check

↓

Unit Tests

↓

Build

↓

Deploy Preview

↓

Approval

↓

Production

---

# Protected Branch Rules

Protect

main

Only reviewed pull requests may be merged.

No direct commits.

---

# Definition of Done

A feature is complete when:

✓ Code merged

✓ CI passes

✓ Documentation updated

✓ Feature tested

✓ Branch deleted

---

# Final Principle

Git history is project history.

Every commit should tell a clear story about how EcoPilot evolved.