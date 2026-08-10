import { ToolSessionLimitError } from "./types";
import type { ToolChatResponse, ToolContactInfo, ToolEndpoints } from "./types";

export async function sendToolMessage(
    endpoints: ToolEndpoints,
    sessionId: string | null,
    message: string,
): Promise<ToolChatResponse> {
    const response = await fetch(endpoints.chat, {
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
            throw new ToolSessionLimitError(data.message);
        }
        throw new Error(`Chat request failed: ${response.statusText}`);
    }

    return response.json();
}

export async function submitToolContact(
    endpoints: ToolEndpoints,
    sessionId: string,
    contact: ToolContactInfo,
): Promise<void> {
    const response = await fetch(endpoints.contact, {
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
