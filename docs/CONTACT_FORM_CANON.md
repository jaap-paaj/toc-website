# CONTACT_FORM_CANON.md

## A. Intent
To define a strict, secure, and unbreakable contract for the "Contact Us" functionality.
This system serves a single purpose: **Deliver user inquiries to Slack securely.**
It is not a general-purpose form builder. It allows no client-side configuration of destinations.

---

## B. Ownership & Boundaries

### Client (Browser)
-   **Responsibility**: Collection, UI feedback, and initial validation signal.
-   **Forbidden**: Calling Slack directly. exposing secrets, defining submission logic.
-   **Owner**: `src/app/_components/contact/modules/ContactFormModule.tsx`

### Server (Next.js Action)
-   **Responsibility**: Auth, Rate Limiting, Validation enforcement, Secret handling, Slack delivery.
-   **Owner**: `src/actions/contact.ts` (To be created)

### Boundary
The **only** permitted communication is:
`Client calls Server Action -> Server returns { success: boolean, error?: string }`

---

## C. Data Contract

The form accepts exactly three user-provided fields. No dynamic fields allowed.

| Field | Type | Required | constraints |
| :--- | :--- | :--- | :--- |
| `name` | string | Yes | Min 2 chars |
| `email` | string | Yes | Valid email format |
| `message` | string | Yes | Min 10 chars, Max 2000 chars |

**Hidden Fields (System Only):**
-   `honeypot`: A field hidden from users but visible to bots. must be empty.

---

## D. Validation

**Zod Schema** is the single source of truth.
It must be defined in a shared or server-only location (e.g., `src/lib/schemas/contact.ts`) and consumed by the Server Action.

-   **Client**: MAY use the schema for pre-flight feedback (optional but recommended).
-   **Server**: MUST use the schema to parse and validate `FormData`.

**Rejection Policy:**
Any request failing Zod validation is rejected with a 400-class error, returning the Zod error map to the client.

---

## E. States

The UI must handle these four distinct states explicitly.

1.  **Idle**: Form is visible, fields are editable.
2.  **Loading**: Submission in progress. Inputs disabled. Spinner or text change on button.
3.  **Success**: Server confirmed delivery (200 OK). Form replaced by "Thank You" panel. Use `FormPanel` success variant.
4.  **Error**:
    -   **Field Error**: Validation failed (e.g. "Invalid email"). Show inline.
    -   **System Error**: Rate limit or Slack outage. Show global alert.

---

## F. Security Baseline

### 1. Honeypot
A hidden input field (e.g., named `_gotcha` or similar non-obvious name if preferred, but `honeypot` concept is mandatory).
-   **Logic**: If filled, the server silently rejects the request (returns 200 to trick bot) or throws error.

### 2. Rate Limiting
**Mandatory**. A simplistic IP-based or cookie-based limit to prevent abuse.
-   **Policy**: Max 3 submissions per IP per hour.
-   **Implementation**: Can use a lightweight library (e.g., `upstash/ratelimit` or in-memory map if statelessness isn't strict constraint yet, but KV preferred).
-   **Fallback**: If no KV available, use a hardened cookie signature timestamp.

### 3. Secrets
-   `SLACK_WEBHOOK_URL` must exist ONLY in `.env.local` (local) and Vercel Project Settings (Production).
-   **NEVER** prefix with `NEXT_PUBLIC_`.
-   The client must never know this URL exists.

---

## G. Non-Goals
-   We are **NOT** adding file attachments.
-   We are **NOT** adding "Department" or "Subject" dropdowns.
-   We are **NOT** changing the visual design of the form (radius/spacing rules remain in `SCALES_CANON.md`).
-   We are **NOT** storing data in a database (Slack is the only persistence).

---

## H. Enforcement Hooks

| Rule | Enforced By |
| :--- | :--- |
| **No Secrets on Client** | `audit:env` (Manual logic check) / Code Review |
| **Zod Validation** | `src/actions/contact.ts` implementation check |
| **UI Primitives** | `audit:all` checks `FormPanel` usage |
