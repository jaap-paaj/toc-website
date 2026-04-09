import type { EhboChatResponse } from "./types";

const SUPABASE_URL = process.env.NEXT_PUBLIC_EHBO_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_EHBO_SUPABASE_ANON_KEY ?? "";

const FUNCTION_BASE = `${SUPABASE_URL}/functions/v1`;

export async function sendEhboMessage(
    sessionId: string | null,
    message: string
): Promise<EhboChatResponse> {
    const response = await fetch(`${FUNCTION_BASE}/ehbo-chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
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
