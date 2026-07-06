# EcoPilot — User Personas

Version: 1.0

Status: Product Planning

---

# Purpose

This document defines the primary users of EcoPilot.

Each persona represents a real-world user group with distinct goals, responsibilities, pain points, permissions, and workflows.

These personas guide product decisions, UI/UX, permissions, feature prioritization, and AI behavior.

---

# User Hierarchy

```text
Platform Owner (Future)

↓

Organization Owner

↓

Company Administrator

↓

Department Manager

↓

Employee
```

---

# Persona 1 — Organization Owner

## Overview

The Organization Owner is responsible for the company's sustainability strategy and overall environmental performance.

This user focuses on high-level analytics, business outcomes, and executive reporting rather than day-to-day data entry.

---

## Responsibilities

* Monitor company sustainability
* Review organization-wide analytics
* Approve sustainability goals
* Review AI recommendations
* Share reports with stakeholders
* Track long-term environmental performance

---

## Goals

* Reduce operating costs
* Improve sustainability score
* Meet internal ESG objectives
* Make data-driven decisions
* Demonstrate sustainability progress

---

## Pain Points

* Sustainability data is scattered
* Reports take too long to prepare
* Difficult to identify major problems
* No centralized sustainability dashboard

---

## Primary Dashboard

Display:

* Sustainability Score
* Carbon Footprint
* Cost Savings
* AI Insights
* Company Trends
* Goals Progress
* Reports

---

## Permissions

Can:

* View all company data
* Manage administrators
* Export reports
* Create goals
* Configure organization settings

Cannot:

* Modify platform-wide settings

---

# Persona 2 — Company Administrator

## Overview

The Company Administrator manages the daily operation of EcoPilot within the organization.

This user ensures sustainability data remains accurate and employees actively use the platform.

---

## Responsibilities

* Manage departments
* Manage employees
* Review uploaded documents
* Configure sustainability settings
* Generate reports
* Monitor AI insights

---

## Goals

* Keep data accurate
* Encourage participation
* Monitor office performance
* Reduce unnecessary resource usage

---

## Pain Points

* Employees forget to submit data
* Reports require manual work
* Difficult to monitor every department

---

## Dashboard Priorities

* Department Overview
* Pending Uploads
* Resource Tracking
* Sustainability Alerts
* Goals Progress

---

## Permissions

Can:

* Create departments
* Invite employees
* Upload reports
* Approve sustainability records
* Generate reports

Cannot:

* Delete organizations
* Access platform administration

---

# Persona 3 — Department Manager

## Overview

Department Managers monitor sustainability within their own department.

They compare performance over time and ensure departmental goals are achieved.

---

## Responsibilities

* Monitor department metrics
* Review employee submissions
* Track department goals
* Respond to AI recommendations

---

## Goals

* Reduce departmental resource usage
* Improve sustainability score
* Meet organization targets

---

## Pain Points

* Hard to identify inefficient resource usage
* Limited visibility into trends
* Manual calculations

---

## Dashboard Priorities

* Department KPIs
* Department Trends
* Team Performance
* AI Recommendations
* Goal Progress

---

## Permissions

Can:

* View department data
* Approve department records
* Generate department reports

Cannot:

* Access company-wide administration

---

# Persona 4 — Employee

## Overview

Employees contribute sustainability data and monitor their organization's progress.

The experience should be simple and require minimal training.

---

## Responsibilities

* Log sustainability activities
* Upload utility documents (if authorized)
* View personal dashboard
* Track company sustainability goals

---

## Goals

* Submit information quickly
* Understand sustainability impact
* Help achieve company goals

---

## Pain Points

* Complex reporting systems
* Too many manual forms
* Lack of feedback

---

## Dashboard Priorities

* Quick Actions
* Personal Activity
* Organization Goals
* AI Tips
* Recent Submissions

---

## Permissions

Can:

* Submit data
* Upload documents
* View dashboards
* Chat with EcoPilot Copilot

Cannot:

* Manage users
* Edit organization settings
* Access executive reports

---

# User Workflows

## Organization Owner

Login

↓

View Executive Dashboard

↓

Review AI Insights

↓

Analyze Sustainability Trends

↓

Generate Executive Report

↓

Set New Sustainability Goals

---

## Company Administrator

Login

↓

Review Notifications

↓

Approve Data

↓

Upload Utility Bills

↓

Generate Reports

↓

Manage Employees

---

## Department Manager

Login

↓

View Department Dashboard

↓

Analyze Resource Usage

↓

Review Goal Progress

↓

Implement AI Recommendations

---

## Employee

Login

↓

Quick Dashboard

↓

Submit Sustainability Data

↓

Upload Documents

↓

View Progress

↓

Receive AI Feedback

---

# Permission Matrix

| Feature               | Owner | Admin | Manager |     Employee     |
| --------------------- | :---: | :---: | :-----: | :--------------: |
| Dashboard             |   ✅   |   ✅   |    ✅    |         ✅        |
| AI Copilot            |   ✅   |   ✅   |    ✅    |         ✅        |
| Resource Tracking     |   ✅   |   ✅   |    ✅    |         ✅        |
| Upload Documents      |   ✅   |   ✅   |    ✅    | ✅ (if permitted) |
| Reports               |   ✅   |   ✅   |    ✅    |         ❌        |
| Goals                 |   ✅   |   ✅   |   View  |       View       |
| Department Management |   ✅   |   ✅   | Limited |         ❌        |
| User Management       |   ✅   |   ✅   |    ❌    |         ❌        |
| Organization Settings |   ✅   |   ✅   |    ❌    |         ❌        |

---

# UX Design Priorities

## Owner

* Executive summaries
* Strategic insights
* Business KPIs

---

## Administrator

* Operational efficiency
* Data management
* Team oversight

---

## Manager

* Department performance
* Actionable insights
* Goal tracking

---

## Employee

* Simplicity
* Fast data entry
* Immediate feedback

---

# AI Behavior by User Role

## Organization Owner

Focus on:

* Strategic recommendations
* Cost reduction
* Executive summaries
* Long-term trends

---

## Administrator

Focus on:

* Resource anomalies
* Missing data
* Department comparisons
* Operational improvements

---

## Manager

Focus on:

* Department optimization
* Goal achievement
* Team performance

---

## Employee

Focus on:

* Practical sustainability tips
* Recent submissions
* Personal contribution
* Helpful reminders

---

# Design Principles

Every interface should display only the information relevant to the user's responsibilities.

Avoid overwhelming users with unnecessary data.

The platform should progressively reveal advanced functionality based on user roles and permissions.

A clean, focused experience increases usability and supports faster decision-making.

---

# Success Criteria

Each user should be able to complete their primary tasks within a few minutes without requiring training.

The platform should feel intuitive, role-aware, and professionally designed, ensuring every user interacts only with the information and tools most relevant to their responsibilities.
