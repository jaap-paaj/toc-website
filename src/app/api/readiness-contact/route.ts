import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY ?? "";

export async function POST(request: NextRequest) {
    const body = await request.json();

    if (!body.email) {
        return NextResponse.json(
            { error: "Email is required" },
            { status: 400 }
        );
    }

    const response = await fetch(`${SUPABASE_URL}/functions/v1/readiness-contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
            session_id: body.session_id,
            email: body.email,
            name: body.name,
            company: body.company,
        }),
    });

    if (!response.ok) {
        return NextResponse.json(
            { error: "Contact request failed" },
            { status: response.status }
        );
    }

    const data = await response.json();
    return NextResponse.json(data);
}
