# EcoPilot Design System

Version: 1.0

Status: Foundation

Owner: Design Team

Last Updated: July 2026

---

# Purpose

The EcoPilot Design System defines the visual language, interaction principles, and design standards for the entire product.

It ensures every page, component, interaction, and future feature maintains a consistent experience.

This document should be treated as the single source of truth for UI/UX decisions.

Any future design or code should follow these standards.

---

# Design Philosophy

EcoPilot is not a student dashboard.

It is a premium B2B SaaS platform.

The interface should communicate:

* Trust
* Intelligence
* Sustainability
* Simplicity
* Professionalism

Users should immediately feel they are using enterprise-grade software.

---

# Core Design Principles

## 1. Clarity First

Every screen should answer:

* What am I looking at?
* Why is it important?
* What should I do next?

Avoid unnecessary decoration.

Information should always be prioritized over visual effects.

---

## 2. Minimal but Warm

EcoPilot should feel modern without feeling cold.

Avoid:

* Heavy gradients
* Glassmorphism
* Excessive animations
* Neon colors
* Overly playful illustrations

Instead use:

* Clean layouts
* Rounded corners
* Soft shadows
* Neutral colors
* Natural green accents

---

## 3. Data Before Decoration

Charts, metrics, and AI insights are the hero of the product.

The design should emphasize information rather than graphics.

Every visual element should help users make better sustainability decisions.

---

## 4. Consistency

Spacing

Typography

Colors

Animations

Components

Interaction

must remain consistent throughout the application.

---

# Brand Personality

EcoPilot should feel like

* Stripe
* Linear
* Vercel
* Notion
* Apple

combined with sustainability.

Brand adjectives

* Intelligent
* Calm
* Reliable
* Efficient
* Premium
* Modern
* Clean
* Helpful
* Sustainable

---

# Visual Identity

The UI should use large amounts of whitespace.

Content should breathe.

Avoid overcrowded dashboards.

Large margins are preferred over squeezing more information onto the screen.

---

# Color Philosophy

Most sustainability apps become "too green."

EcoPilot should instead use green as an accent.

The interface should primarily rely on neutral colors.

Green represents success, sustainability, and positive impact.

Blue represents trust.

Slate represents professionalism.

---

# Color Palette

## Primary

Emerald

Used for:

* Primary actions
* Success
* Sustainability score
* Positive KPIs

Recommended

500–700 range

---

## Secondary

Slate

Used for:

* Navigation
* Cards
* Text
* Dashboard structure

---

## Accent

Blue

Used sparingly for:

* Information
* AI insights
* Links
* Focus indicators

---

## Semantic Colors

Success

Green

Warning

Amber

Danger

Red

Info

Blue

Neutral

Gray

---

# Background Colors

Primary Background

Very light gray

Secondary Background

White

Card Background

Pure white

Sidebar

Dark slate

Dark Mode

Dark neutral

Avoid pure black.

---

# Text Colors

Heading

Almost black

Body

Dark gray

Muted

Medium gray

Disabled

Light gray

Links

Blue

Positive

Green

Negative

Red

---

# Color Accessibility

All colors must meet WCAG AA contrast requirements.

Never rely on color alone to communicate meaning.

Use:

Icons

Labels

Patterns

Text

alongside color.

---

# Typography Philosophy

Typography is the primary design element.

Large readable text.

Comfortable spacing.

Excellent hierarchy.

Avoid decorative fonts.

---

# Font Family

Primary

Inter

Fallback

System UI

Reason

Excellent readability

Modern appearance

Professional SaaS standard

---

# Typography Scale

Use fluid typography.

Implement using clamp().

Hierarchy

Display

Hero titles

H1

Page titles

H2

Section titles

H3

Card titles

H4

Small headings

Body Large

Body

Small

Caption

Label

Buttons

---

# Font Weights

300

Rare

400

Body

500

Labels

600

Subtitles

700

Headings

Avoid extremely bold text.

---

# Line Height

Headings

110–120%

Body

150–170%

Captions

140%

---

# Letter Spacing

Default

0

Large Headings

Slightly tighter

Captions

Slightly wider

---

# Spacing Philosophy

Use an 8-point spacing system.

Everything should align to multiples of 8 whenever practical.

Benefits

* Consistency
* Faster development
* Easier maintenance

---

# Spacing Scale

4

8

12

16

20

24

32

40

48

56

64

80

96

128

Never use arbitrary spacing values.

---

# Container Widths

Small

640px

Medium

768px

Large

1024px

XL

1280px

2XL

1440px

Marketing pages should never exceed comfortable reading widths.

---

# Grid System

Use CSS Grid where appropriate.

Dashboard

12-column grid

Marketing

12-column responsive grid

Cards

Auto-fit responsive layout

Maintain consistent gutters.

---

# Layout Principles

Every page follows

Header

↓

Page Title

↓

Summary

↓

Main Content

↓

Supporting Content

↓

Footer (Marketing only)

---

# Content Density

Avoid overcrowding.

Enterprise software benefits from generous spacing.

Users spend hours inside dashboards.

Reduce visual fatigue.

---

# Card Design

Cards are the primary information container.

Every card should include

Title

Optional description

Primary content

Optional actions

Consistent padding

Rounded corners

Soft shadow

Cards should never feel cramped.

---

# Border Radius

Use consistent radius tokens.

Small

Medium

Large

Extra Large

Fully Rounded

Avoid mixing random radius values.

---

# Elevation Philosophy

Use shadows sparingly.

Most hierarchy should come from spacing rather than heavy shadows.

Cards should appear subtly elevated.

Hover states may slightly increase elevation.

---

# Iconography

Use

Lucide React

Characteristics

Simple

Outlined

Minimal

Consistent stroke width

Icons should support labels rather than replace them.

---

# Illustration Style

Avoid cartoon graphics.

Preferred

Minimal

Flat

Professional

Soft color palette

Sustainability-themed illustrations should feel modern rather than childish.

---

# Imagery

Photography should include

Modern offices

Teams collaborating

Green workplaces

Energy efficiency

Natural lighting

Avoid generic stock photography whenever possible.

---

# Brand Voice

Professional

Helpful

Confident

Optimistic

Never overly technical.

Never overly casual.

Write like a trusted sustainability advisor.

---

# Design Goals

Users should immediately understand:

* Their sustainability performance.
* What changed.
* Why it changed.
* What actions should be taken next.

The interface should reduce complexity rather than add it.

Every design decision should reinforce EcoPilot's identity as a premium AI-powered Sustainability Intelligence Platform.


# Motion & Interaction System (Part 2)

---

# Motion Philosophy

Motion should communicate:

* Cause and effect
* Spatial relationships
* User feedback
* Progress
* State changes

Animation should never exist purely for decoration.

Every animation should have a purpose.

---

# Motion Principles

EcoPilot should feel:

* Fast
* Calm
* Natural
* Predictable

Avoid animations that distract users from data.

---

# Animation Timing

Very Fast

100–150ms

Use for

* Hover
* Icon changes
* Button states

---

Fast

150–250ms

Use for

* Dropdowns
* Tooltips
* Cards
* Small transitions

---

Normal

250–350ms

Use for

* Drawers
* Modals
* Page transitions

---

Slow

350–500ms

Use only for

* Hero animations
* Marketing page sections

Avoid long animations inside the dashboard.

---

# Easing

Preferred

Ease Out

Reason

Feels responsive.

---

Use

Ease In Out

for

* Modals
* Page transitions
* Navigation

Avoid

Linear

Except for progress bars.

---

# Animation Rules

Animate

Opacity

Transform

Scale

Translate

Never animate

Width

Height

Left

Top

Margin

Padding

These trigger expensive layout recalculations.

---

# Hover States

Every interactive component should provide visual feedback.

Examples

Buttons

Cards

Navigation

Menu Items

Charts

Links

Hover effects should be subtle.

Never dramatic.

---

# Active States

Interactive components should clearly communicate when selected.

Examples

Sidebar item

Filter chip

Button

Tab

Dropdown option

Use

Background

Border

Text

Icon

to indicate selection.

---

# Focus States

Keyboard users must always know where focus is.

Every interactive component must support

Visible focus ring

High contrast

Rounded outline

Never remove focus outlines.

Replace them only with better accessible alternatives.

---

# Loading States

Never leave blank areas while loading.

Use

Skeleton Loaders

instead of

Spinners

where practical.

Skeletons should match the final layout.

---

# Progress Indicators

Use progress indicators when operations exceed one second.

Examples

Uploading document

Generating AI report

Exporting PDF

Analyzing utility bill

Provide clear progress feedback whenever possible.

---

# Empty States

Every empty state should explain:

What happened

Why it is empty

What the user should do next

Example

No utility bills uploaded yet.

Upload your first electricity or water bill to begin sustainability analysis.

Always include a primary action.

---

# Success Feedback

Successful actions should feel rewarding.

Examples

Record saved

Report generated

Goal created

Document analyzed

Use

Toast notifications

Success icons

Confirmation messages

Avoid interrupting the user's workflow.

---

# Error Feedback

Every error should explain

What happened

How to fix it

Example

Unable to analyze this PDF.

The document may be scanned with poor quality.

Try uploading a higher-resolution version.

Avoid technical jargon.

---

# Microinteractions

Examples

Button hover

Card hover

Sidebar expansion

Chart tooltip

Notification dropdown

Toggle switch

Checkbox

Accordion

Microinteractions should reinforce quality without becoming distracting.

---

# Responsive Design Philosophy

Design for

Mobile First

Then progressively enhance.

Every screen should work comfortably on

Mobile

Tablet

Laptop

Desktop

Ultra-wide monitors

---

# Responsive Breakpoints

Extra Small

0px

Small

640px

Medium

768px

Large

1024px

Extra Large

1280px

2XL

1536px

Avoid creating unnecessary custom breakpoints.

---

# Layout Behavior

Mobile

Single column

Tablet

Two-column where appropriate

Desktop

Multi-column dashboards

Large Desktop

Expanded content with generous whitespace

---

# Sidebar Behavior

Desktop

Persistent

Collapsible

Tablet

Collapsible Drawer

Mobile

Overlay Drawer

The sidebar should never consume excessive screen space on smaller devices.

---

# Dashboard Layout

Desktop

12-column grid

Tablet

6-column grid

Mobile

Single-column layout

Cards should stack naturally.

---

# Card Responsiveness

Cards should maintain equal spacing.

Avoid stretching cards beyond comfortable reading widths.

Charts should resize without distortion.

---

# Table Responsiveness

Desktop

Standard data table

Tablet

Horizontal scrolling allowed when necessary

Mobile

Card-based list or simplified table

Important actions must remain accessible.

---

# Forms

On mobile

Single column

Large touch targets

Comfortable spacing

Avoid multi-column forms.

---

# Charts

Charts should remain readable across all devices.

Reduce clutter on small screens.

Hide secondary labels if necessary.

Maintain tooltip functionality.

---

# Navigation

Desktop

Sidebar + Top Navigation

Tablet

Collapsible Sidebar

Mobile

Drawer Navigation

Keep navigation consistent.

---

# Dark Mode Philosophy

Dark Mode is a first-class experience.

It is not an afterthought.

Every component should support both themes.

---

# Dark Mode Colors

Avoid pure black.

Prefer dark neutral backgrounds.

Use softer grays for surfaces.

Maintain clear visual hierarchy.

---

# Dark Mode Goals

Reduce eye strain.

Maintain readability.

Preserve brand identity.

Ensure charts remain distinguishable.

---

# Theme Switching

Allow users to choose

Light

Dark

System

Persist user preference across sessions.

---

# Accessibility Philosophy

Accessibility is mandatory.

Never treat it as optional.

EcoPilot should be usable by everyone.

---

# Accessibility Goals

Support

Keyboard Navigation

Screen Readers

Reduced Motion

High Contrast

Accessible Forms

Accessible Tables

Semantic HTML

---

# WCAG Target

Aim for WCAG AA compliance wherever practical.

---

# Keyboard Navigation

Every interactive component must support

Tab

Shift + Tab

Enter

Space

Escape

Arrow Keys where appropriate

Users should never require a mouse.

---

# Screen Reader Support

Use

ARIA Labels

ARIA Descriptions

Semantic HTML

Landmarks

Proper heading hierarchy

Avoid unnecessary ARIA when native HTML provides equivalent semantics.

---

# Reduced Motion

Respect user preferences.

When reduced motion is enabled

Remove

Parallax

Large transitions

Decorative animations

Retain essential feedback animations only.

---

# Color Accessibility

Never rely solely on color.

Pair colors with

Icons

Labels

Text

Patterns

Examples

Instead of only showing a red badge,

display

High Usage

with an alert icon.

---

# Touch Targets

Minimum interactive area

44 × 44 pixels

Improve usability on touch devices.

---

# Forms Accessibility

Every input requires

Visible label

Placeholder (optional)

Validation message

Error description

Keyboard support

Required fields must be clearly indicated.

---

# Data Visualization Accessibility

Charts should include

Legends

Tooltips

Text summaries

Accessible colors

Never rely only on color to distinguish data series.

---

# Design Tokens

The design system should expose reusable tokens for

Colors

Typography

Spacing

Radius

Shadows

Transitions

Opacity

Z-index

Breakpoints

These tokens should become the single source of truth for styling throughout the application.

---

# Final Principle

Motion, responsiveness, accessibility, and interaction should work together to make EcoPilot feel polished, trustworthy, and effortless to use.

Users should focus on understanding sustainability—not on learning how the interface works.


# Component Library & UI Patterns (Part 3)

---

# Purpose

This section defines every reusable UI component used throughout EcoPilot.

Every component should be:

* Reusable
* Accessible
* Responsive
* Theme-aware
* Consistent
* Fully typed
* Easily testable

No page should create custom UI components when an existing component can be reused.

---

# Component Philosophy

Components should be:

Small

Composable

Independent

Reusable

Maintainable

Avoid "god components."

Prefer composing multiple small components over one large component.

---

# Component Hierarchy

Application

↓

Layouts

↓

Sections

↓

Widgets

↓

Components

↓

Primitives

---

# Primitive Components

These are the building blocks.

* Button
* Input
* Textarea
* Select
* Checkbox
* Radio
* Switch
* Badge
* Avatar
* Divider
* Spinner
* Skeleton
* Tooltip
* Icon
* Progress

Higher-level components should be built from these primitives.

---

# Button

Purpose

Primary user action.

Variants

Primary

Secondary

Outline

Ghost

Destructive

Success

Sizes

Small

Medium

Large

Icon Only

States

Default

Hover

Active

Focused

Loading

Disabled

Rules

Only one primary button per major section.

---

# Input

Purpose

Text entry.

Features

Label

Placeholder

Helper Text

Validation

Character Counter (optional)

Prefix/Suffix

Password Toggle

States

Default

Focused

Disabled

Error

Success

---

# Select

Purpose

Choose from predefined options.

Support

Search

Keyboard Navigation

Clear Selection

Disabled Options

Multi-select (future)

---

# Search Bar

Required Features

Search Icon

Clear Button

Keyboard Shortcut

Loading Indicator

Recent Searches (future)

---

# Textarea

Used for

Notes

Comments

Goal Descriptions

AI Questions

Features

Auto Resize

Character Counter

Validation

---

# Checkbox

Used for

Lists

Filters

Permissions

Bulk Selection

Support

Keyboard

Focus Ring

Indeterminate State

---

# Toggle Switch

Used for

Theme

Notifications

Settings

Boolean Preferences

Animation should be subtle.

---

# Badge

Purpose

Status Indicators

Variants

Success

Warning

Error

Info

Neutral

Examples

On Track

High Usage

Pending

Completed

Draft

AI Generated

---

# Avatar

Display

User Photo

Fallback Initials

Status Indicator

Sizes

Small

Medium

Large

---

# Tooltip

Used only when necessary.

Avoid replacing labels with tooltips.

Should appear

Hover

Focus

Keyboard

---

# Modal

Purpose

Critical actions.

Examples

Delete

Export

Settings

Confirmations

Behavior

Centered

Focus Trapped

Escape to Close

Background Scroll Locked

---

# Drawer

Purpose

Large forms

Mobile navigation

Filters

Details

Preferred over modal for complex interactions.

---

# Toast Notifications

Used for

Success

Error

Warning

Information

Position

Top Right

Auto-dismiss

Action Button (optional)

---

# Cards

Cards are the primary content container.

Every card includes

Header

Body

Footer (optional)

Cards should never contain unrelated information.

---

# KPI Card

Displays

Title

Metric

Trend

Icon

Comparison

Example

Electricity Usage

1,240 kWh

↓ 8%

Compared to last month

---

# AI Insight Card

Purpose

Highlight AI-generated findings.

Structure

Insight Title

Summary

Priority Level

Suggested Action

Confidence Level (optional)

Example

Electricity increased 12%.

Most of the increase originated from Building A during evening hours.

Recommendation

Enable automatic shutdown policies after office hours.

---

# Trend Card

Contains

Mini Chart

Metric

Time Period

Trend

Change

---

# Goal Card

Contains

Goal Name

Progress Bar

Deadline

Current Status

Estimated Completion

Owner

Status examples

On Track

At Risk

Completed

---

# Report Card

Displays

Report Name

Generated Date

Type

Status

Download Action

Preview Action

---

# Document Card

Displays

Document Name

Upload Date

File Type

AI Processing Status

Quick Actions

---

# Dashboard Widgets

Dashboard widgets should be independent.

Examples

Sustainability Score

Electricity Trend

Water Usage

Paper Usage

Waste Breakdown

Goals Progress

Recent Activity

AI Insights

Notifications

Widgets should support drag-and-drop ordering in future versions.

---

# Charts

Preferred Library

Recharts

Supported Types

Line

Bar

Area

Pie

Donut

Stacked Bar

Avoid unnecessary chart types.

---

# Chart Standards

Every chart requires

Title

Description

Legend

Tooltip

Axis Labels

Empty State

Loading State

Color-blind friendly palette

Every chart should answer a business question.

---

# Tables

Tables should support

Sorting

Filtering

Pagination

Search

Column Visibility

Responsive Layout

Sticky Header

Empty State

Loading State

Row Actions

Avoid horizontal scrolling whenever possible.

---

# Resource Table

Columns

Date

Department

Resource

Quantity

Estimated Cost

Carbon Impact

Status

Actions

---

# Reports Table

Columns

Name

Type

Generated By

Created

Status

Download

---

# AI Conversation Panel

The AI interface is not a generic chat application.

Layout

Conversation

↓

Context Panel

↓

Suggested Questions

↓

Related Documents

↓

Recommendations

Always show contextual information alongside AI responses.

---

# File Upload Component

Supports

Drag and Drop

Browse Files

Upload Progress

Validation

Preview

Accepted Types

PDF

PNG

JPG

JPEG

CSV (future)

Display upload status clearly.

---

# Empty States

Every module must have a meaningful empty state.

Example

No sustainability goals created.

Create your first goal to begin tracking environmental improvements.

Always include a primary action button.

---

# Skeleton Loading

Use skeletons instead of spinners for

Cards

Tables

Charts

Lists

Forms

Maintain layout stability while loading.

---

# Sidebar

Sections

Dashboard

Analytics

Resources

Documents

AI Copilot

Goals

Reports

Team

Settings

Features

Collapsible

Keyboard Accessible

Active Indicator

Notification Badges

---

# Top Navigation

Contains

Search

Notifications

Theme Toggle

Organization Switcher (future)

User Menu

Keep the header clean and lightweight.

---

# User Menu

Includes

Profile

Account Settings

Preferences

Help

Logout

---

# Breadcrumbs

Display only on nested pages.

Example

Dashboard

>

Resources

>

Electricity

>

Monthly Records

---

# Page Header

Every page should begin with

Title

Short Description

Primary Action

Secondary Actions

Never place important actions below the fold if they are used frequently.

---

# Forms

Group related fields together.

Large forms should be divided into logical sections.

Display validation immediately after user interaction.

Avoid overwhelming users with long forms.

---

# Notifications Center

Organize notifications by

Unread

Today

Earlier

Categories

AI

Goals

Reports

System

Documents

Allow users to mark notifications as read individually or in bulk.

---

# Component Naming Convention

Use clear, descriptive names.

Examples

MetricCard

InsightCard

GoalProgressCard

ReportTable

UploadDropzone

SidebarItem

ThemeToggle

Avoid generic names like

Card1

Widget

Component

---

# Reusability Checklist

Before creating a new component, ask:

Can an existing component be reused?

Can it be extended with props?

Does it belong in the shared component library?

Should it be feature-specific?

Prefer extension over duplication.

---

# Final Principle

Every component should contribute to a cohesive product experience.

Users should feel that EcoPilot is a carefully crafted platform where every interaction, layout, and visual element follows the same design language.

# Dashboard Design Principles (Part 4)

---

# Dashboard Philosophy

The dashboard is the heart of EcoPilot.

It should answer three questions within five seconds:

1. How sustainable is my organization?
2. What changed recently?
3. What should I do next?

Users should never feel overwhelmed.

The dashboard should prioritize clarity over information density.

---

# Dashboard Layout

The recommended layout is:

```text
───────────────────────────────────────────
Top Navigation
───────────────────────────────────────────

Sidebar      Main Content

             KPI Cards

             AI Insight Banner

             Sustainability Score

             Resource Overview

             Trends

             Goals Progress

             Recent Activity
```

---

# Information Priority

Every dashboard follows this hierarchy:

Level 1

Critical KPIs

↓

Level 2

AI Recommendations

↓

Level 3

Resource Trends

↓

Level 4

Goals

↓

Level 5

Activity History

↓

Level 6

Supporting Information

Never reverse this order.

---

# KPI Cards

The first row should always contain:

* Sustainability Score
* Carbon Footprint
* Estimated Monthly Cost
* AI Priority Alert

These should remain visible without scrolling on desktop.

---

# AI Insights Section

This is the signature feature of EcoPilot.

It should appear immediately below the KPI cards.

The AI should never flood users with dozens of recommendations.

Display:

* Top Priority
* Why it matters
* Estimated impact
* Suggested action

Allow users to expand for additional details.

---

# Resource Overview

Display:

Electricity

Water

Paper

Waste

Recycling

Each resource card should include:

* Current value
* Trend
* Previous period comparison
* Quick action
* Link to details

---

# Trend Analysis

Visualize:

Daily

Weekly

Monthly

Yearly

Allow users to change the time range without leaving the page.

---

# Goals Section

Goals should display:

Current Progress

Target

Estimated Completion

Status

Remaining Time

Use progress bars rather than excessive text.

---

# Recent Activity

Examples

* Utility bill uploaded
* AI report generated
* Sustainability goal created
* Resource record updated

Use concise, human-readable descriptions.

---

# Landing Page Guidelines

The landing page has one goal:

Convert visitors into customers.

Everything else is secondary.

---

# Landing Page Structure

Hero

↓

Problem

↓

Solution

↓

How EcoPilot Works

↓

AI Copilot

↓

Core Features

↓

Benefits

↓

Testimonials

↓

Pricing

↓

FAQ

↓

Final CTA

↓

Footer

---

# Hero Section

Should immediately communicate:

What EcoPilot does

Who it is for

Why it matters

Primary CTA

Book Demo

Secondary CTA

Watch Demo

Show a realistic product screenshot rather than abstract illustrations.

---

# Problem Section

Explain:

* Rising utility costs
* Manual sustainability reporting
* Fragmented environmental data
* Lack of actionable insights

Keep the messaging business-focused.

---

# Solution Section

Explain how EcoPilot transforms:

Raw Data

↓

AI Analysis

↓

Business Insights

↓

Actionable Recommendations

↓

Measurable Results

---

# AI Copilot Section

Show a realistic workflow.

Upload Bill

↓

AI Reads Document

↓

Extract Data

↓

Analyze Trends

↓

Generate Recommendations

↓

Executive Report

Avoid describing AI as "magic."

Focus on practical outcomes.

---

# Features Section

Highlight:

* Sustainability Dashboard
* AI Copilot
* Carbon Analytics
* Resource Tracking
* Goals
* Executive Reports

Each feature should explain business value rather than technical implementation.

---

# Testimonials

Use placeholders initially.

Design them to support future real customer stories.

---

# Pricing

Recommended structure:

Starter

Professional (highlighted)

Enterprise

Avoid clutter.

Clearly differentiate plans.

---

# FAQ

Questions should address:

Security

Data ownership

AI accuracy

Supported document types

Deployment

Pricing

Support

---

# AI Copilot Experience

The AI is not a chatbot.

It is a decision-support assistant.

Its interface should resemble a professional analyst.

---

# AI Response Structure

Every response should follow this pattern:

Summary

↓

Key Findings

↓

Supporting Evidence

↓

Recommended Actions

↓

Expected Impact

↓

Suggested Next Steps

Avoid long conversational responses.

---

# Suggested Questions

Offer contextual prompts.

Examples

Why did electricity increase?

How can we reduce paper waste?

Summarize this bill.

Generate an executive report.

What goal should we prioritize?

---

# Confidence Indicator

Where appropriate, display AI confidence.

Example

High Confidence

Medium Confidence

Low Confidence

This builds user trust.

---

# Report Design

Reports should feel executive-ready.

Structure:

Cover Page

↓

Executive Summary

↓

Key Metrics

↓

Resource Analysis

↓

Carbon Analysis

↓

AI Recommendations

↓

Goals Progress

↓

Appendix

---

# PDF Styling

Use:

Generous margins

Readable typography

Professional tables

Consistent colors

Minimal branding

Reports should be suitable for board meetings.

---

# Data Visualization Guidelines

Every visualization must answer a business question.

Examples

Is electricity increasing?

Which department consumes the most resources?

Are sustainability goals improving?

What should management prioritize?

Avoid charts that exist only for decoration.

---

# Color Usage in Charts

Maintain consistency:

Electricity

Blue

Water

Cyan

Paper

Amber

Waste

Gray

Recycling

Green

Carbon

Red

Avoid changing chart colors across pages.

---

# Copywriting Guidelines

EcoPilot should communicate professionally.

Avoid jargon.

Avoid exaggerated marketing language.

Use concise, actionable text.

Example

Poor

"Our revolutionary AI transforms your sustainability journey!"

Better

"Identify resource waste and receive practical recommendations to improve sustainability performance."

---

# Empty States

Every empty state should:

Explain the situation

Provide guidance

Offer a clear next action

Example

"No reports available yet.

Upload your first utility bill to generate sustainability insights."

---

# Error Messages

Good errors explain:

What happened

Why it happened

How to recover

Avoid technical error codes in the UI.

---

# Success Messages

Celebrate progress without becoming distracting.

Example

"Report generated successfully."

"Goal updated."

"Utility bill analyzed."

---

# Accessibility Checklist

Before release, verify:

Semantic HTML

Keyboard navigation

Focus indicators

ARIA labels

Color contrast

Screen reader support

Reduced motion

Touch targets

Responsive layouts

No accessibility violations in major user flows.

---

# Design Quality Checklist

Every new screen should be reviewed for:

Consistency

Spacing

Typography

Hierarchy

Accessibility

Responsiveness

Performance

Dark mode compatibility

Loading states

Empty states

Error handling

Component reuse

---

# Product Quality Checklist

Before any feature is considered complete:

✓ Matches the design system

✓ Uses reusable components

✓ Responsive across devices

✓ Accessible

✓ Uses proper loading states

✓ Handles errors gracefully

✓ Fully typed

✓ Tested

✓ Documented

✓ Ready for future extension

---

# Final Design Principle

EcoPilot should never feel like a collection of pages.

It should feel like a cohesive product where every interaction reinforces trust, clarity, and intelligent decision-making.

Every screen should help organizations understand, improve, and act on their sustainability data with confidence.

The design system is the foundation that ensures EcoPilot remains consistent as the product grows.
