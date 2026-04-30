"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import { aiActContent } from "@/app/_content/ai-act";
import { useLocale } from "@/lib/i18n/useLocale";
import { getLegalTexts } from "@/lib/ai-act/data";

interface AiActLegalDrawerProps {
    refKey: string | null;
    onClose: () => void;
}

export function AiActLegalDrawer({ refKey, onClose }: AiActLegalDrawerProps) {
    const lang = useLocale();
    const content = aiActContent[lang].legalDrawer;
    const legalTexts = getLegalTexts(lang);

    useEffect(() => {
        if (!refKey) return;
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [refKey, onClose]);

    if (!refKey) return null;
    const text = legalTexts[refKey];
    if (!text) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-end justify-end bg-foreground/40 backdrop-blur-sm" /* lint:allowed - modal backdrop */
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="h-full w-full max-w-xl overflow-y-auto bg-background p-8 md:p-12 shadow-surface" /* lint:allowed - drawer panel */
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-8 flex items-center justify-between">
                    <span
                        className={cn(
                            typography.variants.meta.label,
                            "rounded-full bg-foreground text-background px-4 py-1.5" /* lint:allowed - article badge */,
                        )}
                    >
                        {refKey}
                    </span>
                    <button
                        type="button"
                        onClick={onClose}
                        className={cn(
                            typography.variants.meta.label,
                            "text-muted-foreground hover:text-foreground transition-colors",
                        )}
                    >
                        {content.closeLabel} ✕
                    </button>
                </div>
                <div
                    className={cn(
                        typography.variants.body.md,
                        "whitespace-pre-line text-foreground",
                    )}
                >
                    {text}
                </div>
                <p
                    className={cn(
                        typography.variants.body.sm,
                        "mt-12 text-muted-foreground",
                    )}
                >
                    {content.eurLexNote}{" "}
                    <a
                        href={content.eurLexUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline"
                    >
                        <strong>{content.eurLexLabel}</strong>
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
