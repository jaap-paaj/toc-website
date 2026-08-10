"use client";

import { createContext, useContext } from "react";
import type { Locale } from "./config";

/** One post, as its slug in each locale. */
export type BlogSlugPair = Record<Locale, string>;

/**
 * Blog slugs are translated per locale, so the same post lives at a different
 * path in each language. The language switcher is a client component and cannot
 * read the content directory, so the server resolves the table once in the
 * layout and provides it here.
 *
 * Empty by default: a page rendered outside the provider simply finds no match
 * and falls back to swapping the locale segment, which is correct everywhere
 * the slug is shared.
 */
const BlogSlugPairsContext = createContext<BlogSlugPair[]>([]);

export function BlogSlugPairsProvider({
    pairs,
    children,
}: {
    pairs: BlogSlugPair[];
    children: React.ReactNode;
}) {
    return (
        <BlogSlugPairsContext.Provider value={pairs}>
            {children}
        </BlogSlugPairsContext.Provider>
    );
}

export function useBlogSlugPairs(): BlogSlugPair[] {
    return useContext(BlogSlugPairsContext);
}
