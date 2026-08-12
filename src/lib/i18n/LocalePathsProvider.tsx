"use client";

import { createContext, useContext } from "react";
import { i18n, type Locale } from "./config";
import type { LocalePathPair } from "./localePaths";

/**
 * Paths that differ per language — translated blog slugs and the answers
 * section. The language switcher is a client component and cannot read the
 * content directory, so the server resolves the table once in the layout and
 * provides it here.
 *
 * Empty by default: a page rendered outside the provider finds no match and
 * falls back to swapping the locale segment, which stays correct everywhere the
 * path is shared.
 */
const LocalePathsContext = createContext<LocalePathPair[]>([]);

export function LocalePathsProvider({
    pairs,
    children,
}: {
    pairs: LocalePathPair[];
    children: React.ReactNode;
}) {
    return (
        <LocalePathsContext.Provider value={pairs}>
            {children}
        </LocalePathsContext.Provider>
    );
}

export function useLocalePaths(): LocalePathPair[] {
    return useContext(LocalePathsContext);
}

/**
 * Turn an unprefixed href from a content file into a real path.
 *
 * Content writes paths in one shape — "/ai-strategie", "/blog/shadow-ai" — and
 * every locale used to get that same path with a prefix bolted on. Now that a
 * page can live at a different path per language, prefixing alone produces a
 * link into a page that does not exist. This translates first, then prefixes.
 *
 * The lookup is on the Dutch path because that is the shape content is authored
 * in; anything not in the table is shared between languages and needs only the
 * prefix.
 */
export function useLocalizedHref(): (href: string, lang: Locale) => string {
    const pairs = useLocalePaths();

    return (href, lang) => {
        if (
            href.startsWith("#") ||
            href.startsWith("http") ||
            href.startsWith("mailto:")
        ) {
            return href;
        }

        let path = href;
        for (const locale of i18n.locales) {
            if (path.startsWith(`/${locale}/`) || path === `/${locale}`) {
                path = path.slice(locale.length + 1) || "/";
                break;
            }
        }

        const pair = pairs.find((p) => p.nl === path || p.en === path);
        if (pair) path = pair[lang];

        return path === "/" ? `/${lang}` : `/${lang}${path}`;
    };
}
