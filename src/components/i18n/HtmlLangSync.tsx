"use client";

import { useEffect } from "react";
import { useLocale } from "@/lib/i18n/useLocale";

/** Keeps <html lang="..."> in sync with the current locale from the URL. */
export function HtmlLangSync() {
    const lang = useLocale();
    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);
    return null;
}
