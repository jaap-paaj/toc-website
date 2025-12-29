# CONTENT_STRUCTURE_CANON.md

> **Status**: LOCKED (v1.0)
> **Author**: Antigravity System
> **Date**: 2025-12-29

## 1. Purpose

This document strictly defines the **structure, taxonomy, and ownership** of content within the codebase.

**Why this exists:**
1.  **Structure Precedes Writing**: We cannot write copy for undefined containers.
2.  **AI Compatibility**: AI agents need explicit schemas to generate valid content.
3.  **Separation of Concerns**: Content structure (WHAT) must be decoupled from visual design (HOW) and strategic intent (WHY).

---

## 2. Content Ownership Model

Content ownership is strictly layered.

| Layer | Owns (Right) | Does NOT Own (Forbidden) |
| :--- | :--- | :--- |
| **Sections** | **Content Shape**. Defines *that* text exists (e.g., `title`, `intro`). | **Meaning/Narrative**. Cannot define *what* the text says or implies. |
| **Modules** | **Content Instances**. Holds the actual strings and data arrays. | **Visual Logic**. Cannot define how the content flows or breaks. |
| **Pages** | **Composition**. Orders modules to create a journey. | **Content/Copy**. Cannot hold strings, headings, or messaging. |

**Rule**:
*   **Sections** are content-agnostic containers.
*   **Modules** are the content owners.

---

## 3. Canonical Content Primitives

We use a fixed set of structural primitives. New props must map to these concepts.

| Primitive | Structure Definition | Forbidden Usage |
| :--- | :--- | :--- |
| `eyebrow` | **Meta-context**. A label indicating category, status, or parent. | Do not use for main headlines or decorative dividers. |
| `title` | **Core Subject**. The primary noun/verb phrase of the block. | Do not use for long sentences or paragraphs. |
| `intro` | **Lead Narrative**. High-level summary (1-2 sentences). | Do not use for technical specs or bulleted lists. |
| `description` | **Detail Narrative**. Supporting text or expansion. | Do not use for primary value propositions (buried). |
| `items[]` | **Structured Data**. Array of objects (cards, features). | Do not use for unstructured prose blocks. |
| `cta` | **Action Object**. `{ label, href }`. | Do not use for static links or non-interactive text. |

---

## 4. Content vs. Configuration Rule

There is a hard boundary between **Content** (meaning) and **Configuration** (presentation).

*   **Content**: Words, images, data, links.
*   **Configuration**: Layout modes, alignment, visual variants.

**Strict Prohibition**:
*   ❌ No `contentConfig` props.
*   ❌ No `copyStyle` props mingled with data.
*   ❌ No prose objects embedded in configuration files.

**Example**:
*   ✅ `<Section variant="split" title="Hello" />` (Clean separation)
*   ❌ `<Section config={{ title: "Hello", style: "bold" }} />` (Forbidden mixing)

---

## 5. Narrative Assembly Rule

**Rule**: Narrative emerges only through **Module Composition**, not component enrichment.

*   You cannot make a single component "tell the whole story."
*   You must prioritize *sequencing* over *stuffing*.
*   If a story needs more steps, add more Modules. Do not overload one Module.

**The Sequence of Truth**:
1.  **Hook** (Hero Module)
2.  **Problem/Context** (Feature Module)
3.  **Solution/Evidence** (Grid/Testimonial Module)
4.  **Action** (CTA Module)

---

## 6. Enforcement & Drift Control

We enforce strict separation via source code audits.

**Content Shape is LOCKED via** `npm run audit:content-shape`.

### Violations (Must Fix)
1.  **Hardcoded Copy in Sections**: Any string literal > 20 chars in `src/components/sections` is a violation.
2.  **Structural Leaks**: Passing JSX/HTML as a content prop (e.g., `title={<span>...</span>}`). Content props should be strings or data objects.
3.  **Primitive Abuse**: Using `eyebrow` for a paragraph, or `title` for a label.

**Note**: Compliance is binary. A component is either structure-compliant or it is legacy.

---

## 7. What This Canon Explicitly Does NOT Do

To prevent scope creep, this document **explicitly excludes**:

*   **Tone of Voice**: How to write "witty" or "professional" copy.
*   **Brand Storytelling**: The actual myths and values of the brand.
*   **UX Flows**: How screens connect structurally.
*   **Campaign Documentation**: Specific marketing launches.
*   **Project Learnings**: Retrospectives or soft knowledge.

This is a structural engineering document, not a creative brief.
