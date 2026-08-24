import type { Metadata } from "next";
import {
    ANSWERS_BASE_PATH,
    answerPath,
    getAnswerPage,
    getAnswerParams,
    getAnswerPaths,
    vragenContent,
} from "@/app/_content/vragen";
import type { Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/i18n/alternates";
import { SITE_URL } from "@/lib/site";

/**
 * The answer pages live at a different path per locale — /nl/vragen and
 * /en/questions — and a route folder can only answer to one literal segment.
 * So there are two route folders, one per language, and everything they need
 * beyond rendering lives here rather than being duplicated between them.
 */

/** The slugs published in one locale, for that locale's generateStaticParams. */
export function answerParamsFor(lang: Locale): { lang: Locale; slug: string }[] {
    return getAnswerParams().filter((param) => param.lang === lang);
}

export function answersIndexMetadata(lang: Locale): Metadata {
    const { meta } = vragenContent[lang].index;

    return {
        title: meta.title,
        description: meta.description,
        alternates: buildAlternates(lang, ANSWERS_BASE_PATH),
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: "website",
            url: `${SITE_URL}/${lang}${ANSWERS_BASE_PATH[lang]}`,
            siteName: "The Only Constant",
            locale: lang === "nl" ? "nl_NL" : "en_GB",
        },
    };
}

export function answerMetadata(lang: Locale, slug: string): Metadata {
    const page = getAnswerPage(lang, slug);
    // The route itself will notFound(); metadata for a 404 is metadata for
    // nothing, so say nothing rather than titling the error page.
    if (!page) return {};

    return {
        title: page.meta.title,
        description: page.meta.description,
        alternates: buildAlternates(lang, getAnswerPaths(page.key) ?? answerPath(lang, slug)),
        openGraph: {
            title: page.meta.title,
            description: page.meta.description,
            type: "article",
            url: `${SITE_URL}/${lang}${answerPath(lang, slug)}`,
            siteName: "The Only Constant",
            locale: lang === "nl" ? "nl_NL" : "en_GB",
        },
    };
}
