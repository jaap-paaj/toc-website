import { EHBO_ANALYTICS, EHBO_ENDPOINTS } from "@/app/_content/ai-ehbo";
import {
    READINESS_ANALYTICS,
    READINESS_ENDPOINTS,
    READINESS_SCAN_CHAT_PATH,
    READINESS_SCAN_PATH,
} from "@/app/_content/ai-readiness-scan";

export interface ToolEntry {
    name: string;
    /** Free or paid, because the two "scans" are easy to confuse. */
    pricing: string;
    landing: string;
    /** Where the visitor actually uses it, if that differs from the landing. */
    entry: string;
    backend: string;
    /** GA4 `tool` parameter, so the funnels can be told apart. */
    analyticsTool: string;
}

/**
 * The four tools, pulled from the same constants the pages use, so this cannot
 * drift from what actually ships.
 */
export const TOOLS: ToolEntry[] = [
    {
        name: "AI EHBO",
        pricing: "gratis",
        landing: "/ai-ehbo",
        entry: "/ai-ehbo/chat",
        backend: `Supabase: ${EHBO_ENDPOINTS.chat}, ${EHBO_ENDPOINTS.contact}`,
        analyticsTool: EHBO_ANALYTICS.tool,
    },
    {
        name: "AI Readiness Scan",
        pricing: "gratis",
        landing: READINESS_SCAN_PATH,
        entry: READINESS_SCAN_CHAT_PATH,
        backend: `Supabase: ${READINESS_ENDPOINTS.chat}, ${READINESS_ENDPOINTS.contact}`,
        analyticsTool: READINESS_ANALYTICS.tool,
    },
    {
        name: "AI Act Check",
        pricing: "gratis",
        landing: "/ai-act",
        entry: "/ai-act/check",
        backend: "In de app, geen edge function",
        analyticsTool: "aiact",
    },
    {
        name: "AI Opportunity Scan",
        pricing: "betaald, € 2.500",
        landing: "/ai-opportunity-scan",
        entry: "/ai-opportunity-scan/book",
        backend: "Google Calendar, ingesloten",
        analyticsTool: "readiness",
    },
];
