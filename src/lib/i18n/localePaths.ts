import { getBlogSlugPairs } from "@/lib/blog/loader";
import {
    ANSWERS_BASE_PATH,
    answerPath,
    getAnswerPaths,
    vragenContent,
} from "@/app/_content/vragen";
import type { Locale } from "./config";

/** One page, as its path below the locale in each language. */
export type LocalePathPair = Record<Locale, string>;

/**
 * Every page whose path differs between languages.
 *
 * Most of the site shares a path and needs no entry — swapping the locale
 * segment is correct there. These are the exceptions: translated blog slugs,
 * and the answers section, which has both a translated segment and translated
 * slugs. Anything in this table is a page where changing language by editing
 * the URL's first segment lands on a 404.
 *
 * Server-only: it reads the content directory. The language switcher runs in
 * the browser and receives it through a provider.
 */
export function getLocalePathPairs(): LocalePathPair[] {
    const pairs: LocalePathPair[] = [];

    for (const slugs of getBlogSlugPairs()) {
        pairs.push({ nl: `/blog/${slugs.nl}`, en: `/blog/${slugs.en}` });
    }

    pairs.push({ nl: ANSWERS_BASE_PATH.nl, en: ANSWERS_BASE_PATH.en });

    for (const page of vragenContent.nl.pages) {
        const paths = getAnswerPaths(page.key);
        if (paths) pairs.push(paths);
        else pairs.push({ nl: answerPath("nl", page.slug), en: ANSWERS_BASE_PATH.en });
    }

    return pairs.filter((pair) => pair.nl !== pair.en);
}
