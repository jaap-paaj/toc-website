# Structure & Content Audit Report

**Date**: 2025-12-29
**Scope**: `src/components/sections`
**Governing Canon**: `COMPONENT_STRUCTURE_CANON.md`

---

## Executive Summary
The codebase is generally well-structured with clear separation of concerns. However, there is API drift in prop naming (`eyebrow` vs `headingLabel`) and minor content leaks (hardcoded UI strings).

**Verdict**: **FAIL** (Requires Remediation of P0 items)

---

## A. Hardcoded Copy (Content Leaks)
*Rule: Sections must be copy-agnostic. Copy belongs in Modules.*

| Priority | File | Line | Snippet | Issue |
| :--- | :--- | :--- | :--- | :--- |
| **P0** | `TrainingCategorySection.tsx` | 71 | `View Details` | Hardcoded UI string. Should be a prop or at least a constant. |
| **P1** | `ClientsSection.tsx` | 21 | `headingLabel = "Clients"` | Default prop contains marketing copy. Should be `undefined` by default. |

---

## B. Layout Ownership Leaks
*Rule: No `py-*`, `mt-*` utilities on module boundaries.*

| Priority | File | Line | Snippet | Issue |
| :--- | :--- | :--- | :--- | :--- |
| **P1** | `ServicesSection.tsx` | 31 | `spacing.section.heroFollower` | Special casing for hero following. Validated usage but noteworthy coupling. |
| **Note**| `FeatureGridSection.tsx` | 39 | `gap-6` | Internal grid spacing (Allowed). |
| **Note**| `*` | - | `pt-*` | Most valid usages are marked `lint:allowed`. |

---

## C. Tone Ownership Leaks
*Rule: No `dark:` or `tone-*` classes in sections.*

**Result**: ✅ PASS. No violations found.

---

## D. API Drift (Props)
*Rule: Standardize naming for shared concepts.*

| Priority | Concept | Current Variations | Candidate Standard |
| :--- | :--- | :--- | :--- |
| **P0** | **Eyebrow Label** | `eyebrow` (SectionHeader), `headingLabel` (Clients, Testimonials, Services), `categoryLabel` (Editorial, Training) | `eyebrow` |
| **P1** | **Description** | `description` (SectionHeader), `intro` (Editorial, Training) | `intro` or `description` |
| **P1** | **Items Array** | `items` (Universal) | ✅ Standardized |

---

## Verification Commands
Reproduce results with:

```bash
# A) Content Strings
rg -n "['\"].{40,}['\"]" src/components/sections

# B) Layout Utilities
rg -n "\\b(py|pt|pb|my|mt|mb)-\\d+\\b" src/components/sections

# C) Tone Leaks
rg -n "dark:|tone-" src/components/sections
```
