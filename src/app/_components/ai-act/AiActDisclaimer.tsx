"use client";

import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import { Surface } from "@/design-system/components/Surfaces";
import { aiActContent } from "@/app/_content/ai-act";
import { useLocale } from "@/lib/i18n/useLocale";
import { RiskLevel } from "@/lib/ai-act/types";

interface AiActDisclaimerProps {
    variant?: "subtle" | "strong";
    level?: RiskLevel;
}

export function AiActDisclaimer({ variant = "subtle", level }: AiActDisclaimerProps) {
    const lang = useLocale();
    const content = aiActContent[lang].disclaimer;

    const isStrong =
        variant === "strong" ||
        level === RiskLevel.PROHIBITED ||
        level === RiskLevel.HIGH;

    if (isStrong) {
        return (
            <Surface variant="muted" className="p-6 md:p-8" /* lint:allowed - disclaimer panel */>
                <p
                    className={cn(
                        typography.variants.body.sm,
                        "text-muted-foreground",
                    )}
                >
                    <strong className="text-foreground">
                        {content.strong.prefix}
                    </strong>{" "}
                    {content.strong.body}
                </p>
            </Surface>
        );
    }

    return (
        <p
            className={cn(
                typography.variants.body.sm,
                "text-muted-foreground",
            )}
        >
            {content.subtle}
        </p>
    );
}
