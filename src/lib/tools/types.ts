/**
 * Shared contract for the conversational tools (AI EHBO, AI Readiness Scan).
 *
 * Both run on Supabase edge functions in the same project and return the same
 * response shape, so they share one chat component. Keep this file the single
 * definition of that contract.
 */

export interface ToolMessage {
    id: string;
    role: "user" | "assistant";
    content: string;
    created_at: string;
}

export interface ToolChatResponse {
    message: string;
    session_id: string;
    should_offer_contact: boolean;
    /**
     * Set by the backend once it considers the conversation finished (after
     * turn 6). Without reading this the visitor can keep typing until the
     * session limit throws a 429, which loses the moment they are most likely
     * to leave an email address.
     */
    conversation_complete?: boolean;
}

export interface ToolContactInfo {
    email: string;
    name?: string;
    company?: string;
}

export class ToolSessionLimitError extends Error {
    readonly closingMessage: string;

    constructor(closingMessage: string) {
        super("session_limit_reached");
        this.name = "ToolSessionLimitError";
        this.closingMessage = closingMessage;
    }
}

/** Where a tool's browser-side calls go. Both are routes in this app. */
export interface ToolEndpoints {
    chat: string;
    contact: string;
}

/** GA4 event names, so each tool reports under its own funnel. */
export interface ToolAnalytics {
    tool: string;
    startEvent: string;
    completionEvent: string;
    leadEvent: string;
}

export interface ToolContactContent {
    title: string;
    helper: string;
    emailPlaceholder: string;
    namePlaceholder: string;
    companyPlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    dismiss: string;
}

export interface ToolChatContent {
    emptyTitle: string;
    emptyDescription: string;
    placeholder: string;
    send: string;
    back: string;
    errorMessage: string;
    contact: ToolContactContent;
    closeOut: {
        bookCall: string;
        bookCallHref: string;
        sendDocument: string;
    };
}
