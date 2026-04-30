"use client";

import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading, Text } from "@/design-system/components/Typography";
import { aiActContent } from "@/app/_content/ai-act";
import { useLocale } from "@/lib/i18n/useLocale";
import { RiskLevel } from "@/lib/ai-act/types";
import type { ClassificationResult, WhatNextByRole } from "@/lib/ai-act/types";
import { AiActDisclaimer } from "./AiActDisclaimer";
import { AiActLeadForm } from "./AiActLeadForm";
import { AiActToolboxLinks } from "./AiActToolboxLinks";

interface AiActResultProps {
    result: ClassificationResult;
    scanId: string | null;
    onReset: () => void;
    onBack?: () => void;
    onOpenLegal: (ref: string) => void;
}

function isWhatNextByRole(
    value: string[] | WhatNextByRole,
): value is WhatNextByRole {
    return !Array.isArray(value);
}

function headerToneClasses(level: RiskLevel) {
    if (level === RiskLevel.PROHIBITED || level === RiskLevel.HIGH) {
        return "bg-destructive text-background"; /* lint:allowed - risk-high header */
    }
    return "bg-foreground text-background"; /* lint:allowed - default outcome header */
}

function levelPillClasses(level: RiskLevel) {
    if (level === RiskLevel.NO_REGULATION) {
        return "bg-primary text-primary-foreground"; /* lint:allowed - out-of-scope success pill */
    }
    return "border border-background/20 bg-foreground/30 text-background"; /* lint:allowed - default level pill */
}

export function AiActResult({
    result,
    scanId,
    onReset,
    onBack,
    onOpenLegal,
}: AiActResultProps) {
    const lang = useLocale();
    const content = aiActContent[lang].result;
    const { title, why, whatNext, legalRefs, deadline, level } = result;
    const showDeadline = deadline !== content.deadlineNA && deadline !== "N.v.t." && deadline !== "N/A";
    const headerClasses = headerToneClasses(level);

    return (
        <div className={cn("w-full", spacing.stackLg)}>
            <Surface variant="card" className="overflow-hidden p-0" /* lint:allowed - outcome card */>
                <div
                    className={cn(
                        "p-10 md:p-16",
                        headerClasses,
                        spacing.stackMd,
                    )}
                >
                    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                        <span
                            className={cn(
                                typography.variants.meta.label,
                                "opacity-80",
                            )}
                        >
                            {content.outcomeLabel}
                        </span>
                        <span
                            className={cn(
                                typography.variants.meta.badge,
                                "rounded-full px-3 py-1",
                                levelPillClasses(level),
                            )}
                        >
                            {content.levelLabels[level]}
                        </span>
                    </div>
                    <Heading
                        level={1}
                        size="section"
                        className="text-balance break-words"
                    >
                        {title}
                    </Heading>
                    {legalRefs.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {legalRefs.map((ref, idx) => (
                                <button
                                    key={`${ref.ref}-${idx}`}
                                    type="button"
                                    onClick={() => onOpenLegal(ref.ref)}
                                    className={cn(
                                        typography.variants.meta.label,
                                        "cursor-pointer rounded-full border border-background/20 bg-background/20 px-3 py-1 hover:bg-background/30 transition-colors" /* lint:allowed - legal-ref pill on dark */,
                                    )}
                                >
                                    {ref.ref}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className={cn("p-10 md:p-16", spacing.stackLg)}>
                    {showDeadline && (
                        <Surface
                            variant="muted"
                            className={cn(spacing.stackXs, "p-5") /* lint:allowed - deadline tile */}
                        >
                            <span
                                className={cn(
                                    typography.variants.meta.label,
                                    "text-muted-foreground",
                                )}
                            >
                                {content.deadlineLabel}
                            </span>
                            <Text size="md" className="text-foreground">
                                {deadline}
                            </Text>
                        </Surface>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className={spacing.stackMd}>
                            <Heading level={3} size="card">
                                {content.whyTitle}
                            </Heading>
                            <ul className={spacing.stackSm}>
                                {why.map((reason, idx) => (
                                    <li key={idx}>
                                        <Surface
                                            variant="muted"
                                            className="p-5" /* lint:allowed - reason tile */
                                        >
                                            <Text
                                                size="md"
                                                className="text-foreground"
                                            >
                                                {reason}
                                            </Text>
                                        </Surface>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={spacing.stackMd}>
                            <Heading level={3} size="card">
                                {content.whatNextTitle}
                            </Heading>
                            {Array.isArray(whatNext) ? (
                                <ul className={spacing.stackSm}>
                                    {whatNext.map((step, idx) => (
                                        <li
                                            key={idx}
                                            className={cn(
                                                typography.variants.body.md,
                                                "text-muted-foreground flex items-start gap-3",
                                            )}
                                        >
                                            <CheckIcon className="w-5 h-5 text-foreground shrink-0 mt-1" /* lint:allowed - checklist icon, mt-1 aligns visual center to first-line x-height for body.md leading-relaxed */ />
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : isWhatNextByRole(whatNext) ? (
                                <div className={spacing.stackLg}>
                                    {whatNext.asProvider && (
                                        <div className={spacing.stackSm}>
                                            <span
                                                className={cn(
                                                    typography.variants.meta.badge,
                                                    "self-start rounded-full bg-foreground text-background px-3 py-1" /* lint:allowed - role pill */,
                                                )}
                                            >
                                                {content.asProviderLabel}
                                            </span>
                                            <ul className={spacing.stackSm}>
                                                {whatNext.asProvider.map(
                                                    (step, idx) => (
                                                        <li
                                                            key={idx}
                                                            className={cn(
                                                                typography.variants.body.md,
                                                                "text-muted-foreground flex items-start gap-3",
                                                            )}
                                                        >
                                                            <CheckIcon className="w-5 h-5 text-foreground shrink-0 mt-1" /* lint:allowed - checklist icon, mt-1 aligns visual center to first-line x-height for body.md leading-relaxed */ />
                                                            <span>{step}</span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                    {whatNext.asUser && (
                                        <div className={spacing.stackSm}>
                                            <span
                                                className={cn(
                                                    typography.variants.meta.badge,
                                                    "self-start rounded-full border border-foreground bg-background text-foreground px-3 py-1" /* lint:allowed - role pill */,
                                                )}
                                            >
                                                {content.asUserLabel}
                                            </span>
                                            <ul className={spacing.stackSm}>
                                                {whatNext.asUser.map(
                                                    (step, idx) => (
                                                        <li
                                                            key={idx}
                                                            className={cn(
                                                                typography.variants.body.md,
                                                                "text-muted-foreground flex items-start gap-3",
                                                            )}
                                                        >
                                                            <CheckIcon className="w-5 h-5 text-foreground shrink-0 mt-1" /* lint:allowed - checklist icon, mt-1 aligns visual center to first-line x-height for body.md leading-relaxed */ />
                                                            <span>{step}</span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </Surface>

            <Surface
                variant="card"
                className={cn(
                    spacing.stackSm,
                    "p-10 md:p-14 bg-foreground text-background" /* lint:allowed - mandatory dark CTA */,
                )}
            >
                <span
                    className={cn(
                        typography.variants.meta.badge,
                        "self-start rounded-full bg-background text-foreground px-3 py-1" /* lint:allowed - eyebrow pill */,
                    )}
                >
                    {content.mandatory.eyebrow}
                </span>
                <Heading level={3} size="lg">
                    {content.mandatory.title}
                </Heading>
                <Text size="lg" className="opacity-80">
                    {content.mandatory.body}
                </Text>
                <button
                    type="button"
                    onClick={() => onOpenLegal("Art. 4")}
                    className={cn(
                        typography.variants.ui.button.md,
                        "cursor-pointer self-start mt-2 underline underline-offset-4 hover:opacity-80 transition-opacity",
                    )}
                >
                    {content.mandatory.cta} →
                </button>
            </Surface>

            <AiActDisclaimer level={level} />

            <AiActLeadForm scanId={scanId} resultId={result.id} />

            <AiActToolboxLinks />

            <div className="flex flex-wrap justify-center gap-3">
                {onBack && (
                    <button
                        type="button"
                        onClick={onBack}
                        className={cn(
                            typography.variants.ui.button.md,
                            "cursor-pointer rounded-full border border-foreground bg-background text-foreground px-8 py-3 hover:bg-muted transition-colors" /* lint:allowed - back button */,
                        )}
                    >
                        &larr; {content.back}
                    </button>
                )}
                <button
                    type="button"
                    onClick={onReset}
                    className={cn(
                        typography.variants.ui.button.md,
                        "cursor-pointer rounded-full border border-foreground bg-background text-foreground px-8 py-3 hover:bg-muted transition-colors" /* lint:allowed - reset button */,
                    )}
                >
                    {content.reset}
                </button>
            </div>
        </div>
    );
}
