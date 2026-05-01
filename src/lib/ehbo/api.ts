import { EhboSessionLimitError } from "./types";
import type { EhboChatResponse, EhboContactInfo } from "./types";

export async function submitEhboContact(
    sessionId: string,
    contact: EhboContactInfo
): Promise<void> {
    const response = await fetch("/api/ehbo-contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            session_id: sessionId,
            ...contact,
        }),
    });

    if (!response.ok) {
        throw new Error(`Contact request failed: ${response.statusText}`);
    }
}

export async function sendEhboMessage(
    sessionId: string | null,
    message: string
): Promise<EhboChatResponse> {
    const response = await fetch("/api/ehbo-chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            session_id: sessionId,
            message,
        }),
    });

    if (!response.ok) {
        const data = await response.json().catch(() => null);
        if (data?.error === "session_limit_reached" && typeof data.message === "string") {
            throw new EhboSessionLimitError(data.message);
        }
        throw new Error(`Chat request failed: ${response.statusText}`);
    }

    return response.json();
}
