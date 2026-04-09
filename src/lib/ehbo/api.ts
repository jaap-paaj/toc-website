import type { EhboChatResponse } from "./types";

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
        throw new Error(`Chat request failed: ${response.statusText}`);
    }

    return response.json();
}
