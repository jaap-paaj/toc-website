import type { Metadata } from "next";

const SITE_URL = "https://theonlyconstant.nl";

/**
 * The route below the locale for a page. A single string when both locales
 * share it, one path per locale when they don't — as blog posts do, now that
 * their slug is translated.
 */
export type AlternatePaths = string | { nl: string; en: string };

function normalise(path: string): string {
    if (path === "" || path === "/") return "";
    return path.startsWith("/") ? path : `/${path}`;
}

/**
 * Canonical plus reciprocal hreflang for a page, in one place.
 *
 * Every page exists in both locales, but without hreflang an engine has to
 * guess which of the two is authoritative and tends to demote one. The
 * x-default points at Dutch: that is the primary market.
 *
 * The both-locales rule is an invariant of this site, not a hope: an unpaired
 * page fails `npm run audit:locale-pairs`. Do not soften this into optional
 * languages — an hreflang that silently drops a locale hides the very mistake
 * the audit exists to surface.
 *
 * @param lang the locale being rendered
 * @param paths the route below the locale, e.g. "/about" or {nl, en}. "" is home.
 */
export function buildAlternates(
    lang: string,
    paths: AlternatePaths = "",
): Metadata["alternates"] {
    const nl = normalise(typeof paths === "string" ? paths : paths.nl);
    const en = normalise(typeof paths === "string" ? paths : paths.en);
    const self = lang === "en" ? en : nl;

    return {
        canonical: `${SITE_URL}/${lang}${self}`,
        languages: {
            nl: `${SITE_URL}/nl${nl}`,
            en: `${SITE_URL}/en${en}`,
            "x-default": `${SITE_URL}/nl${nl}`,
        },
    };
}
