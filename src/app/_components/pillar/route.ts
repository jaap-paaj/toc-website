import type { Metadata } from "next";
import {
    PILLAR_PATHS,
    pillarContent,
    pillarPath,
    type PillarSlug,
} from "@/app/_content/pillar";
import { getPostByKey } from "@/lib/blog/loader";
import type { Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/alternates";

const SITE_URL = "https://theonlyconstant.nl";

/**
 * The theme pages sit at a different path per locale — /nl/ai-strategie and
 * /en/ai-strategy — and a route folder can only answer to one literal segment.
 * So each theme has two route folders, and everything they share beyond
 * rendering lives here.
 */

export function pillarMetadata(slug: PillarSlug, lang: Locale): Metadata {
    const { meta } = pillarContent[slug][lang];

    return {
        title: meta.title,
        description: meta.description,
        alternates: buildAlternates(lang, PILLAR_PATHS[slug]),
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: "website",
            url: `${SITE_URL}/${lang}${pillarPath(slug, lang)}`,
            siteName: "The Only Constant",
            locale: lang === "nl" ? "nl_NL" : "en_GB",
        },
    };
}

/** The posts a theme lists, resolved in one locale. */
export function pillarPosts(slug: PillarSlug, lang: Locale) {
    return pillarContent[slug][lang].blogLinks
        .map((link) => getPostByKey(link.key, lang))
        .filter((post) => post !== null);
}
