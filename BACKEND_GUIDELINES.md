# BACKEND & ARCHITECTURE GUIDELINES

## 1. Simplicity First (Server Actions)
Since we want to keep the architecture lean:
* **Do NOT build separate API Routes** (`/api/...`) unless strictly necessary.
* **Use Next.js Server Actions:** Write backend logic as async functions in `src/actions/`.
* This keeps backend logic close to the frontend components.

## 2. Type Safety
* Never use `any`. Always define interfaces for data.
* Use `Zod` for validating form data before sending it to the AI.

## 3. Error Handling
* The backend must never crash silently.
* Return clear error messages to the frontend: `{ success: false, error: "Human readable message" }`.
* Log technical errors to the console for debugging.

## 4. AI Integration
* When calling external AIs (Replicate/OpenAI), use official SDKs.
* Never expose API Keys to the client-side code.