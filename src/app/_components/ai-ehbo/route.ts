import type { Metadata } from "next";
import { EHBO_CHAT_PATHS, EHBO_PATHS, ehboContent } from "@/app/_content/ai-ehbo";
import type { Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/alternates";

const SITE_URL = "https://theonlyconstant.nl";
const OG_IMAGE = `${SITE_URL}/images/brand/toc/og-ai-ehbo.png`;

/**
 * The tool sits at /nl/ai-ehbo and /en/ai-first-aid, and a route folder can
 * only answer to one literal segment — so there are two, and what they share
 * beyond rendering lives here.
 */

export function ehboMetadata(lang: Locale): Metadata {
    const { meta } = ehboContent[lang];

    return {
        title: meta.title,
        description: meta.description,
        alternates: buildAlternates(lang, EHBO_PATHS),
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: "website",
            url: `${SITE_URL}/${lang}${EHBO_PATHS[lang]}`,
            siteName: "The Only Constant",
            locale: lang === "nl" ? "nl_NL" : "en_GB",
            images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: meta.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
            images: [OG_IMAGE],
        },
    };
}

export function ehboChatMetadata(lang: Locale): Metadata {
    const { meta } = ehboContent[lang];

    return {
        title: meta.title,
        description: meta.description,
        alternates: buildAlternates(lang, EHBO_CHAT_PATHS),
    };
}
