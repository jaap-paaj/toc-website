import sitemap from "@/app/sitemap";
import { SITE_URL as PRODUCTION_URL } from "@/lib/site";

export type LiveStatus = "live" | "missing" | "unknown";

/**
 * Pages we keep out of the sitemap on purpose, with the reason.
 *
 * Without this the inventory would flag them every time, and a signal you
 * always ignore stops being a signal.
 */
export const UNLISTED_ON_PURPOSE: Record<string, string> = {
    "/ai-ehbo/chat": "de tool zelf, de landingspagina is de ingang",
    "/ai-readiness-scan/chat": "de tool zelf, de landingspagina is de ingang",
    "/ai-act/check": "de wizard zelf, de landingspagina is de ingang",
    "/ai-opportunity-scan/book": "boekingspagina, ingesloten agenda zonder eigen inhoud",
};

/** Which paths the sitemap actually advertises, locale prefix stripped. */
export function sitemapPaths(): Set<string> {
    const paths = new Set<string>();
    for (const entry of sitemap()) {
        const url = new URL(entry.url);
        const withoutLocale = url.pathname.replace(/^\/(nl|en)/, "");
        paths.add(withoutLocale === "" ? "" : withoutLocale);
    }
    return paths;
}

/**
 * Asks production whether a page is actually there. This is the difference
 * between "we built it" and "it is live", which is the thing nobody can hold
 * in their head across four tools and sixty pages.
 */
export async function checkLive(paths: string[]): Promise<Map<string, LiveStatus>> {
    const results = new Map<string, LiveStatus>();

    await Promise.all(
        paths.map(async (p) => {
            try {
                const response = await fetch(`${PRODUCTION_URL}/nl${p}`, {
                    method: "HEAD",
                    redirect: "follow",
                    signal: AbortSignal.timeout(8000),
                });
                results.set(p, response.ok ? "live" : "missing");
            } catch {
                results.set(p, "unknown");
            }
        }),
    );

    return results;
}
