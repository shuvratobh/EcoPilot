# EcoPilot — Master Engineering Rules

Version: 1.0

This document defines the engineering, architecture, design, and development standards for EcoPilot.

Every AI coding session, code review, feature implementation, and refactoring task must follow these rules.

These rules override any default assumptions made by the AI.

---

# Primary Objective

Build EcoPilot as if it were a real commercial SaaS product that organizations could subscribe to.

The project must demonstrate professional software engineering practices rather than rapid prototyping.

The codebase should remain maintainable, scalable, secure, and easy to extend.

---

# Development Philosophy

Always optimize for:

* Simplicity
* Readability
* Scalability
* Maintainability
* Accessibility
* Performance
* Security
* Consistency

Avoid shortcuts that create technical debt.

---

# Product Scope

EcoPilot is an AI-powered Sustainability Intelligence Platform.

Every feature should directly support one or more of these objectives:

* Sustainability monitoring
* Environmental analytics
* Carbon estimation
* Resource tracking
* AI-powered sustainability insights
* Goal management
* Professional reporting

If a feature does not strengthen these objectives, it should not be included.

---

# Features to Avoid

Do NOT introduce unrelated features such as:

* ERP modules
* Payroll
* Accounting
* CRM
* CCTV
* IoT integrations
* Smart meter integrations
* Video conferencing
* Social networking
* Generic AI chat
* Marketplace functionality
* Cryptocurrency
* NFT features
* Blockchain integrations

Keep the product focused.

---

# AI Philosophy

The AI assistant is a Sustainability Copilot.

It is NOT ChatGPT.

The AI should:

* Analyze uploaded sustainability documents.
* Explain environmental trends.
* Recommend practical improvements.
* Estimate sustainability metrics.
* Generate executive reports.
* Answer questions using the organization's own data whenever possible.

If data is unavailable, the AI should clearly communicate the limitation rather than inventing answers.

---

# Design Philosophy

The user experience should feel similar in quality to:

* Stripe
* Linear
* Notion
* Vercel
* GitHub
* Microsoft Clarity

Characteristics:

* Clean layouts
* Premium typography
* Consistent spacing
* Large whitespace
* Soft shadows
* Rounded components
* Modern charts
* Minimal visual noise
* Smooth interactions
* Professional appearance

Avoid excessive gradients, bright colors, glassmorphism, or decorative effects that reduce usability.

---

# User Experience Principles

Every screen should answer:

* What is happening?
* Why is it happening?
* What should the user do next?

The interface should prioritize clarity over decoration.

---

# Coding Standards

Use:

* TypeScript
* Strict typing
* Functional components
* React Hooks
* Feature-based architecture

Avoid:

* Inline styles
* Duplicate logic
* Deep component nesting
* Large files
* Unused dependencies
* Magic numbers
* Hardcoded strings

---

# SOLID Principles

Every implementation should respect:

Single Responsibility Principle

Open/Closed Principle

Liskov Substitution Principle

Interface Segregation Principle

Dependency Inversion Principle

---

# DRY Principle

Never duplicate:

* Business logic
* Validation
* API calls
* Constants
* Utility functions
* Component styles

Extract reusable code whenever appropriate.

---

# Folder Organization

Every file must have a clear responsibility.

Avoid dumping unrelated logic into a single directory.

Use feature-based organization wherever possible.

---

# Component Rules

Every component should be:

Reusable

Composable

Documented

Accessible

Responsive

Easy to test

Each component should expose a clear and minimal API.

---

# State Management

Prefer local component state first.

Use shared state only when necessary.

Avoid unnecessary global state.

Keep state predictable.

---

# API Rules

Every endpoint should:

Validate input

Return consistent responses

Handle errors gracefully

Avoid exposing internal implementation details

Use meaningful HTTP status codes

---

# Database Rules

Design the database before implementing features.

Every table should have:

* Clear purpose
* Normalized structure
* Primary key
* Foreign keys
* Indexes where appropriate
* Constraints for data integrity

Avoid premature optimization.

Optimize based on actual requirements.

---

# Security Standards

Always implement:

Input validation

Output sanitization

Authentication

Authorization

Role-based permissions

Secure file uploads

Rate limiting

Environment variables

Never expose secrets.

Never trust client-side validation alone.

---

# Accessibility Standards

Meet WCAG AA guidelines whenever possible.

Every interactive element should support:

Keyboard navigation

Visible focus states

Semantic HTML

ARIA attributes when necessary

Proper contrast ratios

Reduced motion preferences

Accessible form validation

---

# Responsive Design

Mobile-first.

Support:

Mobile

Tablet

Laptop

Desktop

Ultra-wide displays

Avoid horizontal scrolling.

Maintain consistent spacing across breakpoints.

---

# Performance Standards

Prefer:

Lazy loading

Code splitting

Memoization where beneficial

Efficient rendering

Small bundle sizes

Optimized images

Pagination for large datasets

Measure before optimizing.

---

# Error Handling

Errors should:

Be user-friendly

Be logged appropriately

Never expose sensitive implementation details

Provide actionable recovery guidance whenever possible

---

# AI Implementation Rules

The AI should never produce generic advice if company data exists.

Instead, responses should combine:

Uploaded documents

Historical trends

Organization settings

Resource usage

Goals

Contextual recommendations are preferred over general sustainability tips.

---

# Charts and Analytics

Charts should always communicate insights, not just numbers.

Every chart should answer at least one business question.

Examples:

Is electricity increasing?

Which department consumes the most resources?

Are sustainability goals on track?

Where are costs rising?

Avoid unnecessary visualizations.

---

# Reports

Reports should be suitable for:

Executives

Managers

Stakeholders

Reports should summarize:

Key findings

Trends

Risks

Achievements

Recommendations

Action items

Reports should prioritize clarity and decision-making.

---

# Documentation Standards

Every major feature should include:

Purpose

Architecture overview

Dependencies

Configuration

Future extension ideas

Testing considerations

Good documentation is part of the product.

---

# Git Standards

Use meaningful commit messages.

Examples:

feat: implement sustainability dashboard

fix: correct carbon calculation logic

refactor: simplify report generation service

docs: update API documentation

Avoid vague commits such as:

update

changes

fix stuff

---

# Code Reviews

Before completing any feature, review:

Readability

Security

Performance

Accessibility

Scalability

Maintainability

Consistency

Identify improvements before adding new functionality.

---

# Decision Making

When multiple technical solutions exist:

Explain the available options.

Compare trade-offs.

Recommend the most maintainable solution.

Document important architectural decisions.

---

# Definition of Done

A feature is complete only when:

* Requirements are satisfied.
* Code is clean.
* Type safety is maintained.
* Error handling is implemented.
* Accessibility is considered.
* Responsive behavior is verified.
* Documentation is updated.
* The feature integrates cleanly with the existing architecture.

---

# Final Principle

Every decision should support one goal:

Build EcoPilot as a polished, trustworthy, AI-powered Sustainability Intelligence Platform that looks, feels, and behaves like a commercial SaaS product rather than a student assignment.

Whenever uncertainty arises, choose the solution that improves long-term maintainability, user experience, and product quality.
