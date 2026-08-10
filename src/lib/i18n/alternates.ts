import type { Metadata } from "next";

const SITE_URL = "https://theonlyconstant.nl";

/**
 * Canonical plus reciprocal hreflang for a page, in one place.
 *
 * Every page exists in both locales, but without hreflang an engine has to
 * guess which of the two is authoritative and tends to demote one. The
 * x-default points at Dutch: that is the primary market.
 *
 * @param lang the locale being rendered
 * @param path the route below the locale, e.g. "/about". "" is the home page.
 */
export function buildAlternates(lang: string, path = ""): Metadata["alternates"] {
    const suffix = path === "" || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;

    return {
        canonical: `${SITE_URL}/${lang}${suffix}`,
        languages: {
            nl: `${SITE_URL}/nl${suffix}`,
            en: `${SITE_URL}/en${suffix}`,
            "x-default": `${SITE_URL}/nl${suffix}`,
        },
    };
}
