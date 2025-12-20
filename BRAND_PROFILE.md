# BRAND_PROFILE.md

## Purpose
This document defines the **brand-specific parameters** for the TOC website.

It describes **what differs** from the reference system.
It must not redefine architecture, layout rules, or component contracts.

If something is not specified here, system defaults apply.

---

## Brand Identity

### Brand Name
The Only Constant (TOC)

### Brand Positioning
- Bold
- Confident
- Opinionated
- Strategic
- Minimal
- No-nonsense

This is an agency showcase. The brand should feel:
- sharp
- deliberate
- self-assured
- uncluttered

---

## Typography

### Primary Font
- Family: **Figtree**
- Usage: **All text**
  - Headings
  - Body
  - Labels
  - UI elements

### Typographic Philosophy
- No font pairing
- Hierarchy is created through:
  - size
  - weight
  - spacing
- Not through font changes

⚠️ Typography must be applied via design tokens only.  
No component-level font overrides are allowed.

---

## Color System

### Primary Brand Color
- **#CFFF4C**

Usage rules:
- Used for emphasis only
- Primary CTAs
- Key highlights
- Active / focused states
- Never used as background noise

### Neutral Palette
- Shades of black / dark greys
- White / near-white for text contrast
- No secondary accent colors

Color philosophy:
- High contrast
- Few colors
- Strong restraint

⚠️ All colors must be defined as CSS variables and consumed via Tailwind tokens.  
Hex values must not appear in components.

---

## Visual Character

### Contrast
- Strong light / dark separation
- Clear section boundaries
- Minimal decoration

### Emphasis
- Emphasis is created through:
  - color (primary green)
  - typography scale
  - whitespace
- Not through ornament or gradients

---

## Motion Philosophy

- Motion is functional, not decorative
- Purpose:
  - guide attention
  - indicate hierarchy
  - provide feedback
- Motion should feel:
  - fast
  - confident
  - controlled

Rules:
- No continuous or looping animations
- No “playful” easing
- Motion should never distract from content

---

## Content Architecture

This project follows the **canonical modular page structure**:

- Pages are composed of modules
- Modules are visually distinct
- Each module has:
  - a single surface
  - a clear hierarchy
  - a focused purpose

Content should feel:
- editorial
- intentional
- sparse but strong

---

## Accessibility

### Baseline
- WCAG 2.1 AA

### Principles
- Contrast is non-negotiable
- Focus states must be clearly visible
- No color-only meaning

Accessibility is enforced at the system and primitive level.
Pages and modules must not patch accessibility locally.

---

## Explicit Non-Goals

This profile does NOT:
- Define layout grids
- Define spacing systems
- Define component APIs
- Introduce new UI primitives

Those are governed by:
- ARCHITECTURE.md
- FRONTEND_GUIDELINES.md
- PROMPT_CANON.md

---

## Change Policy

Brand changes:
- Update this document only

If changes exceed what fits here:
- Escalate to architecture documents
- Do not patch locally