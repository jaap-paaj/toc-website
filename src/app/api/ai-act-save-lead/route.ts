import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY ?? "";

export async function POST(request: NextRequest) {
    const body = await request.json();

    if (!body.email) {
        return NextResponse.json(
            { error: "Email is required" },
            { status: 400 },
        );
    }

    if (body.consent_marketing !== true) {
        return NextResponse.json(
            { error: "Consent required" },
            { status: 400 },
        );
    }

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        return NextResponse.json(
            { error: "Storage not configured" },
            { status: 503 },
        );
    }

    const response = await fetch(`${SUPABASE_URL}/functions/v1/aiact-save-lead`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
            scan_id: body.scan_id ?? null,
            email: body.email,
            name: body.name ?? null,
            company: body.company ?? null,
            role: body.role ?? null,
            result_id: body.result_id,
            consent_marketing: body.consent_marketing,
        }),
    });

    if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        return NextResponse.json(
            { error: data.error ?? "Save lead failed" },
            { status: response.status },
        );
    }

    const data = await response.json();
    return NextResponse.json(data);
}
