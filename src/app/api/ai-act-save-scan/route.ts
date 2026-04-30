import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY ?? "";

export async function POST(request: NextRequest) {
    const body = await request.json();

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        return NextResponse.json(
            { error: "Storage not configured" },
            { status: 503 },
        );
    }

    const response = await fetch(`${SUPABASE_URL}/functions/v1/aiact-save-scan`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
            outcome: body.outcome,
            result_id: body.result_id,
            risk_level: body.risk_level,
            history: body.history,
            referrer: body.referrer ?? null,
        }),
    });

    if (!response.ok) {
        return NextResponse.json(
            { error: "Save scan failed" },
            { status: response.status },
        );
    }

    const data = await response.json();
    return NextResponse.json(data);
}
