"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { Button } from "@/components/ui/Button";
import { typography } from "@/design-system/tokens/typography";
import { cn } from "@/lib/utils";
import { consentContent } from "@/app/_content/consent";
import { useLocale } from "@/lib/i18n/useLocale";
import {
    onOpenConsentSettings,
    setStoredConsent,
    useConsent,
    type ConsentValue,
} from "@/lib/consent/consent";

/**
 * The cookie banner: one decision, two equal buttons.
 *
 * It renders nothing until after hydration — the stored choice lives in
 * localStorage, so the server cannot know it, and a banner that flashes for
 * every returning visitor would be worse than one that appears a frame late.
 *
 * GA4 does not load until this banner has been answered with "granted"; see
 * GoogleAnalytics. The footer's cookie-settings link reopens it, which is what
 * makes the choice revocable.
 */
const emptySubscribe = () => () => {};

export function CookieBanner() {
    const lang = useLocale();
    const consent = useConsent();
    // True only after hydration: the same server/client split useConsent uses,
    // so the banner never renders into HTML the server cannot verify.
    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false,
    );
    const [reopened, setReopened] = useState(false);

    useEffect(() => onOpenConsentSettings(() => setReopened(true)), []);

    if (!mounted || (consent !== null && !reopened)) return null;

    const content = consentContent[lang];

    function choose(value: ConsentValue) {
        setStoredConsent(value);
        setReopened(false);
    }

    return (
        <div
            role="dialog"
            aria-label={content.ariaLabel}
            className="fixed bottom-0 inset-x-0 z-50 bg-background border-t shadow-surface" /* lint:allowed - fixed consent overlay */
        >
            <div
                className="container flex flex-col md:flex-row md:items-center gap-[var(--space-sm)] py-6" /* lint:allowed - overlay padding */
            >
                <p
                    className={cn(
                        typography.variants.body.sm,
                        "text-foreground md:flex-1",
                    )}
                >
                    {content.message}{" "}
                    <Link
                        href="/privacy"
                        className="underline underline-offset-4 decoration-foreground/30 hover:decoration-current transition-colors"
                    >
                        {content.privacyLabel}
                    </Link>
                </p>
                {/* Decline first and the same size as accept: refusing must not
                    cost more effort or attention than agreeing. */}
                <div className="flex gap-[var(--space-xs)]">
                    <Button variant="secondary" onClick={() => choose("denied")}>
                        {content.decline}
                    </Button>
                    <Button onClick={() => choose("granted")}>
                        {content.accept}
                    </Button>
                </div>
            </div>
        </div>
    );
}
