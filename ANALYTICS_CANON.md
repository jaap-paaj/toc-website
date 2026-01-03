# ANALYTICS_CANON.md

> **Status**: LOCKED (v1.0)
> **Author**: Antigravity System
> **Date**: 2026-01-03

## 1. Purpose of Analytics

Analytics exists on this site to confirm whether the site is understandable and whether people know how to reach us. It is **not** used to optimise persuasion.

The data should answer:
*   Are visitors finding the "Start a conversation" flow?
*   Is the message clear enough that they choose to act?
*   Are we technically accessible?

The data should **not** answer:
*   Which button color converts better?
*   How can we trap users in a funnel?
*   How can we retarget them later?

**References**:
*   `ARCHITECTURE.md` (Systems over features)
*   `CONTENT_STRUCTURE_CANON.md` (Pages express intent, not funnels)

---

## 2. Pages We Track (Implicit)

We track standard pageviews across the core navigation to understand basic traffic flow. This is passive context, not a performance metric.

**Scope**:
*   `/` (Home)
*   `/automate` (Service)
*   `/innovate` (Service)
*   `/about` (Company)
*   `/contact` (Action)
*   `/educate` (Knowledge - implicit)

**Principles**:
*   **No Landing Pages**: Every page is a valid entry point. We do not optimize for "landing" vs "browsing".
*   **Passive Context**: Pageviews tell us *where* people are, not *why* they are there.

---

## 3. Events We Track (Explicit)

We only track two signals of conscious human intent.

### `cta_click`

**Intent**: The user has decided to take a primary action offered by the interface.
**Why**: Verifies that the primary pathways (Hero -> Contact, Header -> Contact) are visible and understood.

**Schema**:
```typescript
{
  cta_label: string;    // The exact visible text (e.g., "Explore our capabilities")
  cta_location: string; // The structural component (hero | header | section | footer)
}
```

### `contact_submit`

**Intent**: The user has successfully initiated a conversation.
**Why**: This is the only "conversion" that matters. It represents a relationship starting.

**Schema**:
```typescript
{
  source: "contact_form";
}
```

**Notes**:
*   **Submission ≠ Lead Quality**: Analytics cannot judge the quality of a message.
*   **No Data Capture**: We never track form field contents (Name, Email, Message) in analytics.

**References**:
*   `COMPONENT_STRUCTURE_CANON.md` (Components don't self-report; simple helpers used)
*   `CONTACT_FORM_CANON.md` (Form = human intent, not conversion machine)

---

## 4. What We Explicitly Do NOT Track

To preserve clarity and user trust, we strictly exclude speculative metrics.

| Metric | Status | Reasoning |
| :--- | :--- | :--- |
| **Scroll Depth** | ❌ BANNED | Optimises for length, not quality. Reading ≠ Understanding. |
| **Time on Page** | ❌ BANNED | Ambiguous. Could mean engagement, could mean confusion. |
| **Bounce Rate** | ❌ BANNED | Irrelevant. If they leave, they leave. We don't trap them. |
| **Button Hovers** | ❌ BANNED | Noise. Intent is only confirmed by a click. |
| **Section Visibility** | ❌ BANNED | Technical overhead. Does not correlate with value. |
| **Funnel Steps** | ❌ BANNED | We do not have a checkout. Funnels imply a forced path. |
| **Micro-interactions** | ❌ BANNED | UI polish should be judged by designers, not data. |

**Principle**: These metrics optimise behaviour, not understanding.

**References**:
*   `META_CANON.md` (Clarity > Exhaustiveness)

---

## 5. Lead Definition (Non-Marketing)

A **Lead** is defined purely in human terms:
> Someone who chose to contact us.

*   **No Scoring**: We do not rank users by behavior.
*   **No Automation**: We do not trigger automated nurturing sequences based on analytics.
*   **No Attribution**: We do not credit specific pages with "winning" the lead.

Analytics confirms *that* someone reached out. The conversation determines *why*.

---

## 6. Guardrails

To prevent "metric creep" and "dashboard rot":

1.  **Documentation First**: Any new event **REQURES** an update to this file before implementation.
2.  **Dashboard Parity**: Any chart in a dashboard must map directly to an event documented here.
3.  **The "One Sentence" Rule**: If an event's intent cannot be explained in one plain English sentence, **do not track it**.

---

## 7. Status

*   This canon is **intentionally minimal**.
*   Expansion is allowed, but only via conscious revision and consensus.
*   **Silence is a feature, not a bug**. We prefer zero data to noisy/misleading data.
