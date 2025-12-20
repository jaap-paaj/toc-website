FRONTEND_GUIDELINES.md

Purpose

This document describes how to build features correctly within the established architecture.
It translates architectural contracts into daily development rules.

This document does not redefine ownership or visual systems.
For those, see:
	•	ARCHITECTURE.md
	•	UI_FOUNDATIONS.md
	•	FORM_FOUNDATION.md

⸻

Core Rule

Frontend work is composition, not layout design.

If you find yourself adding spacing, grids, or styling in a page file, you are working at the wrong layer.

⸻

Building a Page

Mandatory Structure

Every tool page must follow this structure:

export default function Page() {
  return (
    <WorkflowShell
      title={...}
      description={...}
      rightColumn={...}
    >
      <ControlsPanel />
    </WorkflowShell>
  )
}

Page Rules

Pages must:
	•	Use WorkflowShell for layout
	•	Compose existing panels and components
	•	Remain thin (≈20–30 lines)

Pages must not:
	•	Define layout grids or containers
	•	Apply spacing utilities
	•	Apply visual styling utilities
	•	Contain complex UI logic

If UI logic grows, extract it into a feature component.

⸻

Panels & Sections

Forms

All forms must be built using:
	•	FormPanel
	•	FormSection
	•	FormField

Rules:
	•	Do not recreate form structure manually
	•	Do not add spacing between sections
	•	Do not apply typography manually inside sections

The form system enforces spacing and typography by design.

⸻

Components

When to Create a Component

Create a new component when:
	•	UI logic is reused
	•	Layout or styling must be enforced consistently
	•	Behavior is non-trivial

When NOT to Create a Component

Do not create a component:
	•	Just to add spacing
	•	To work around a layout issue
	•	To bypass an existing contract

If an existing abstraction is insufficient, extend it instead.

⸻

Styling Rules
	•	Use semantic tokens and primitives only
	•	Never use raw Tailwind values in pages
	•	Elevation and radius must use tiered classes:
	•	shadow-panel, shadow-surface
	•	rounded-panel, rounded-surface

⸻

Enforcement Checklist

Before submitting a PR:
	•	Page contains no layout or spacing utilities
	•	Page uses WorkflowShell
	•	Forms use FormPanel / FormSection
	•	No ad-hoc shadows or radius values

If a rule cannot be followed, escalate the need for a new abstraction.

⸻

Mental Model

Pages assemble.
Components enforce.
Tokens decide.

If you are unsure where something belongs, it does not belong in the page.