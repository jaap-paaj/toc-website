import type { ClassificationResult, Choice } from "./types";

interface SaveScanInput {
    result: ClassificationResult;
    history: Record<string, Choice>;
}

export async function saveScan({
    result,
    history,
}: SaveScanInput): Promise<string | null> {
    try {
        const response = await fetch("/api/ai-act-save-scan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                outcome: result.outcome,
                result_id: result.id,
                risk_level: result.level,
                history,
                referrer:
                    typeof document !== "undefined"
                        ? document.referrer || null
                        : null,
            }),
        });
        if (!response.ok) return null;
        const json = (await response.json()) as { id?: string };
        return json.id ?? null;
    } catch {
        return null;
    }
}

interface SaveLeadInput {
    scan_id: string | null;
    email: string;
    name: string | null;
    company: string | null;
    role: string | null;
    consent_marketing: boolean;
    result_id: string;
}

export async function saveLead(input: SaveLeadInput): Promise<void> {
    const response = await fetch("/api/ai-act-save-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
    });
    if (!response.ok) {
        let message = "Er ging iets mis bij het opslaan";
        try {
            const data = (await response.json()) as { error?: string };
            if (data.error) message = data.error;
        } catch {
            /* ignore */
        }
        throw new Error(message);
    }
}
