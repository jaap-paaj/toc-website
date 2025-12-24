# GETTING_STARTED.md

## The TOC Documentation System

Welcome to the **TOC AI Content Studio**.
This project operates on a **Contract-Driven Architecture**. To contribute, you must read the governing contracts.

---

## 📚 The Canon (Read Order)

1.  **[ARCHITECTURE.md](./ARCHITECTURE.md)** (The Law)
    *   **Scope**: Who owns what. Page vs Component rules. Hard prohibitions.
    *   **Read when**: You are creating a new page or deciding where to put state.

2.  **[SCALES_CANON.md](./SCALES_CANON.md)** (The Visual Truth)
    *   **Scope**: Typography, Spacing, Colors, Radius, Shadows.
    *   **Read when**: You need to style something or add a new visual variant.

3.  **[BRAND_PROFILE.md](./BRAND_PROFILE.md)** (The Identity)
    *   **Scope**: Voice, Tone, Color definitions, Motion philosophy.
    *   **Read when**: You are writing copy or deciding on brand alignment.

4.  **[PROMPT_CANON.md](./PROMPT_CANON.md)** (The AI Guardrail)
    *   **Scope**: Instructions for AI coding assistants.
    *   **Read when**: You are prompting an AI/LLM to help you code.

---

## 🚀 Quick Start for Developers

**1. Development Server**
```bash
npm run dev
```

**2. Linting**
```bash
npm run lint             # Code quality
npm run lint:spacing     # Architecture enforcement (forbidden utilities)
```

**3. Common Tasks**

*   **Create a new Page**: Copy the "Thin Page" template from `ARCHITECTURE.md`.
*   **Add a Form**: Use `FormPanel` and `FormSection` (see `ARCHITECTURE.md`).
*   **Style a Component**: Use tokens from `SCALES_CANON.md`. Do NOT use raw Tailwind values like `text-[13px]`.

---

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router (Composition only)
├── components/
│   ├── ui/                 # Primitives (Leaf nodes only)
│   ├── form-kit/           # Form primitives
│   ├── sections/           # Large composable blocks
│   └── layout/             # WorkflowShell, etc.
├── design-system/
│   ├── tokens/             # The Single Source of Truth
│   └── components/         # Design System Components (Heading, Surface)
└── lib/                    # Utilities
```

---

## 🔐 The "Golden Rule"
**Frontend work is composition, not layout design.**
If you find yourself adding spacing, grids, or styling in a page file, stop. You are working at the wrong layer.
