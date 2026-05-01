export interface EhboMessage {
    id: string;
    role: "user" | "assistant";
    content: string;
    created_at: string;
}

export interface EhboChatResponse {
    message: string;
    session_id: string;
    should_offer_contact: boolean;
}

export interface EhboContactInfo {
    email: string;
    name?: string;
    company?: string;
}

export class EhboSessionLimitError extends Error {
    readonly closingMessage: string;

    constructor(closingMessage: string) {
        super("session_limit_reached");
        this.name = "EhboSessionLimitError";
        this.closingMessage = closingMessage;
    }
}
