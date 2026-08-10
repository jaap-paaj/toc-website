"use client";

import { createContext, useContext } from "react";
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
