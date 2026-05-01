import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY ?? "";

export async function POST(request: NextRequest) {
    const body = await request.json();

    const response = await fetch(`${SUPABASE_URL}/functions/v1/ehbo-chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
            session_id: body.session_id,
            message: body.message,
        }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        return NextResponse.json(
            data ?? { error: "Chat request failed" },
            { status: response.status }
        );
    }

    return NextResponse.json(data);
}
