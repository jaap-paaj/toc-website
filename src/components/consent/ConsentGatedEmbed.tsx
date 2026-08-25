"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { Button } from "@/components/ui/Button";
import { useConsent } from "@/lib/consent/consent";

interface ConsentGatedEmbedProps {
    src: string;
    title: string;
    /** Why the embed is not there yet, e.g. "The map comes from Google...". */
    notice: string;
    /** The button that loads it anyway. */
    loadLabel: string;
    /** Shown on the placeholder: what the embed would show, e.g. the address. */
    lines?: readonly string[];
    /** Applied to the iframe and to the placeholder alike, so both fill the
     * same box and the card does not resize on the choice. */
    className?: string;
}

/**
 * A third-party iframe behind the same consent as GA4.
 *
 * The iframe element does not render until the visitor has either accepted
 * cookies or pressed the load button, so no request reaches the third party
 * before a choice — the same rule GoogleAnalytics follows. The button is the
 * per-embed consent: one click, this visit only, nothing stored.
 */
export function ConsentGatedEmbed({
    src,
    title,
    notice,
    loadLabel,
    lines,
    className,
}: ConsentGatedEmbedProps) {
    const consent = useConsent();
    const [loadedAnyway, setLoadedAnyway] = useState(false);

    if (consent === "granted" || loadedAnyway) {
        return (
            <iframe
                src={src}
                title={title}
                className={className}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        );
    }

    return (
        <div
            className={cn(
                className,
                spacing.stackSm,
                "items-center justify-center text-center p-6" /* lint:allowed - embed placeholder */,
            )}
        >
            {lines && (
                <p
                    className={cn(
                        typography.variants.body.sm,
                        "text-muted-foreground flex flex-col",
                    )}
                >
                    {lines.map((line, i) => (
                        <span key={i}>{line}</span>
                    ))}
                </p>
            )}
            <p
                className={cn(
                    typography.variants.body.sm,
                    "text-muted-foreground",
                )}
            >
                {notice}
            </p>
            <Button variant="secondary" onClick={() => setLoadedAnyway(true)}>
                {loadLabel}
            </Button>
        </div>
    );
}
