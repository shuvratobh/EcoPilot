# EcoPilot — Information Architecture

Version: 1.0

Status: Product Planning

---

# Purpose

This document defines the complete information architecture for EcoPilot.

It establishes:

* Overall application structure
* Navigation hierarchy
* User flows
* Page hierarchy
* Dashboard organization
* Route planning

The goal is to ensure every page has a clear purpose and users can easily find the information they need.

---

# Navigation Philosophy

EcoPilot should feel like modern enterprise software.

Navigation should be:

* Predictable
* Minimal
* Consistent
* Fast
* Role-aware

Users should never need more than three clicks to reach any major feature.

---

# Platform Structure

```text
EcoPilot

├── Marketing Website
│
├── Authentication
│
└── SaaS Application
```

---

# Marketing Website

The public-facing website introduces the product and converts visitors into users.

```text
Landing Page
│
├── Hero
├── Problem
├── Solution
├── AI Copilot
├── Features
├── How It Works
├── Benefits
├── Pricing
├── FAQ
├── Contact
└── Footer
```

---

# Landing Page Structure

## Hero

Purpose

Communicate value immediately.

Contents

* Headline
* Supporting text
* CTA
* Product Preview
* Trust Indicators

---

## Problem

Explain the challenges organizations face.

Topics

* Manual reporting
* Rising utility costs
* Poor sustainability visibility
* Disconnected spreadsheets

---

## Solution

Introduce EcoPilot.

Show how the platform solves those problems.

---

## AI Copilot

Highlight the flagship feature.

Demonstrate:

Upload Bill

↓

AI Analysis

↓

Insights

↓

Recommendations

↓

Executive Report

---

## Features

Present the major platform capabilities.

* Sustainability Dashboard
* Resource Tracking
* AI Copilot
* Carbon Analytics
* Goal Tracking
* Reports

---

## How It Works

Simple four-step workflow.

Collect

↓

Analyze

↓

Optimize

↓

Report

---

## Benefits

Explain measurable outcomes.

Examples

* Reduce costs
* Reduce emissions
* Save time
* Improve sustainability

---

## Pricing

Professional SaaS pricing layout.

Plans

Starter

Professional

Enterprise

---

## FAQ

Address common questions.

* Data security
* AI accuracy
* Supported documents
* Team size
* Deployment

---

## Footer

Include

* Product
* Resources
* Documentation
* Privacy
* Terms
* Contact
* Social links

---

# Authentication Flow

```text
Landing Page

↓

Sign Up

↓

Email Verification

↓

Organization Setup

↓

Dashboard
```

Existing users

```text
Landing Page

↓

Login

↓

Dashboard
```

---

# SaaS Application

```text
Dashboard

├── Overview
├── Analytics
├── Resources
├── Documents
├── AI Copilot
├── Goals
├── Reports
├── Notifications
├── Team
└── Settings
```

---

# Sidebar Navigation

The sidebar should remain consistent across the application.

```text
Dashboard

Analytics

Resources

Documents

AI Copilot

Goals

Reports

Notifications

Team

Settings
```

Sidebar behavior

Desktop

* Expanded
* Collapsible

Tablet

* Collapsible Drawer

Mobile

* Full-screen Drawer

---

# Dashboard Structure

```text
Dashboard

├── KPI Cards
├── Sustainability Score
├── AI Insights
├── Resource Trends
├── Goals Progress
├── Recent Activity
└── Quick Actions
```

---

# Analytics

Purpose

Provide deeper analysis.

Sections

* Electricity Trends
* Water Trends
* Paper Trends
* Waste Analysis
* Carbon Analysis
* Department Comparison

---

# Resources

Purpose

Manage sustainability inputs.

Sections

Electricity

Water

Paper

Waste

Recycling

Each resource includes:

* Overview
* History
* Add Record
* Edit Record
* Trend Chart

---

# Documents

Purpose

Central repository for uploaded files.

Supported

* Electricity Bills
* Water Bills
* Printing Reports
* Sustainability Reports

Functions

* Upload
* Preview
* Search
* Filter
* Delete
* AI Analysis

---

# AI Copilot

Purpose

Provide intelligent sustainability assistance.

Layout

```text
Chat Panel

↓

Insights

↓

Recommendations

↓

Related Documents

↓

Suggested Actions
```

Example questions

* Why has electricity increased?
* Which department uses the most paper?
* What actions should we prioritize this month?
* Summarize this utility bill.
* Generate an executive sustainability report.

---

# Goals

Purpose

Track sustainability objectives.

Layout

Goal Cards

↓

Progress

↓

Forecast

↓

Timeline

↓

History

Each goal displays

* Progress
* Deadline
* Owner
* Status
* Estimated completion

---

# Reports

Purpose

Generate professional reports.

Categories

Monthly

Quarterly

Annual

Executive

AI Report

Exports

* PDF
* Excel

---

# Notifications

Purpose

Alert users to important events.

Examples

* New AI insight
* Goal approaching deadline
* Resource spike detected
* Document processed
* Report ready

---

# Team

Purpose

Manage users.

Features

* Members
* Departments
* Roles
* Invitations
* Permissions

---

# Settings

Sections

Organization

Departments

User Profile

Security

Notifications

Theme

Integrations (Future)

---

# Page Relationships

```text
Dashboard

↓

Analytics

↓

Resources

↓

Documents

↓

AI Copilot

↓

Reports

↓

Goals
```

The dashboard acts as the central navigation hub.

---

# Primary User Journey

```text
Register

↓

Create Organization

↓

Invite Team

↓

Upload Utility Bill

↓

AI Extracts Data

↓

Dashboard Updates

↓

Review AI Insights

↓

Generate Report

↓

Create Sustainability Goal

↓

Monitor Progress
```

---

# Secondary User Journey

```text
Employee

↓

Login

↓

Submit Resource Data

↓

View Dashboard

↓

Receive AI Feedback
```

---

# Navigation Principles

Every page should answer:

* Where am I?
* What can I do here?
* What should I do next?

Navigation should remain consistent across all screen sizes.

---

# Breadcrumb Strategy

Use breadcrumbs on deeper pages.

Example

```text
Dashboard

>

Resources

>

Electricity

>

Record Details
```

Avoid breadcrumbs on top-level pages.

---

# Search Strategy

Global search should locate:

* Documents
* Reports
* Goals
* Departments
* Users
* Resource Records

Future versions may include AI-powered semantic search.

---

# Empty States

Every page must provide meaningful empty states.

Example

"No electricity records yet.

Upload your first utility bill or create a manual record to begin tracking energy usage."

Avoid blank pages.

---

# Error States

Errors should explain:

* What happened
* Why it happened (when possible)
* How to recover

Never expose technical details.

---

# Loading States

Every data-heavy page should include:

* Skeleton loaders
* Progressive loading
* Smooth transitions

Avoid sudden layout shifts.

---

# Information Architecture Principles

EcoPilot prioritizes clarity over complexity.

Information should be progressively disclosed:

* High-level insights first.
* Supporting details second.
* Raw data only when requested.

Every page should support better sustainability decisions, reduce cognitive load, and reinforce EcoPilot's role as an AI-powered Sustainability Intelligence Platform.

---

# First-Time Onboarding Flow

## Purpose

New organizations completing registration land on an empty dashboard with no data. Without guidance, activation rates drop. The onboarding flow bridges registration and first meaningful use.

## Trigger

Onboarding is shown automatically to any user whose organization has:

- Zero ResourceLog records
- Zero uploaded Documents
- Zero Goals

The onboarding wizard replaces the standard dashboard on first login.

## Onboarding Steps

```
Step 1 — Welcome
↓
Step 2 — Organization Profile
↓
Step 3 — Add First Department
↓
Step 4 — Enter or Upload First Data
↓
Step 5 — Set First Goal
↓
Dashboard (with data)
```

---

### Step 1 — Welcome

Content

Short explanation of EcoPilot's purpose.

What the user will accomplish in setup.

Estimated time: 3 minutes.

CTA: "Get Started"

---

### Step 2 — Organization Profile

Fields

- Organization name (pre-filled from registration)
- Industry
- Number of employees
- Country / Region (sets emission factor region)
- Office size (m²)

This step populates the Organization and Settings tables.

---

### Step 3 — Add First Department

Users add at least one department.

Examples: Engineering, Operations, Finance, HR.

They may skip this step and proceed with organization-level tracking only.

---

### Step 4 — Enter or Upload First Data

Two paths are offered:

Path A — Upload a utility bill

Upload a PDF electricity or water bill.

AI extracts data automatically.

User confirms the extracted values.

Path B — Enter data manually

Simple form: resource type, quantity, period, cost.

---

### Step 5 — Set First Goal

The AI suggests one goal based on the entered data.

Example: "Reduce electricity by 10% over the next 3 months."

User accepts, adjusts, or skips.

---

### Completion

After Step 5, the dashboard is shown with real data.

An EcoScore is calculated if sufficient data exists.

The AI Copilot offers the first contextual insight.

A success banner is shown: "Your sustainability tracking is now active."

---

## Onboarding Skip

Users may skip the onboarding at any step.

They land on the standard empty-state dashboard.

A persistent banner offers to resume onboarding until the first ResourceLog is created.

---

## Route

/onboarding

This is a separate page from the main dashboard.

Protected: requires authentication.

Middleware redirects to /onboarding if conditions are met.
