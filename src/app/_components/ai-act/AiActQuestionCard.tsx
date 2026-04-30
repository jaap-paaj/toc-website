"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading, Text } from "@/design-system/components/Typography";
import type { BinaryQuestion, Choice } from "@/lib/ai-act/types";
import type { aiActContent } from "@/app/_content/ai-act";

type WizardContent = (typeof aiActContent)["nl"]["wizard"];

interface AiActQuestionCardProps {
    question: BinaryQuestion;
    questionNumber: number;
    totalQuestions: number;
    onAnswer: (choice: Choice) => void;
    onBack?: () => void;
    onOpenLegal: (ref: string) => void;
    content: WizardContent;
}

function renderLongExplanation(text: string) {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return null;
        if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
            return (
                <p
                    key={idx}
                    className={cn(typography.variants.body.md, "text-foreground")}
                >
                    <strong>{trimmed.replace(/\*\*/g, "")}</strong>
                </p>
            );
        }
        if (trimmed.startsWith("*")) {
            return (
                <p
                    key={idx}
                    className={cn(
                        typography.variants.body.sm,
                        "text-muted-foreground pl-4" /* lint:allowed - bullet indent */,
                    )}
                >
                    {trimmed.replace(/^\*\s*/, "").replace(/\*\*/g, "")}
                </p>
            );
        }
        return (
            <p
                key={idx}
                className={cn(
                    typography.variants.body.sm,
                    "text-muted-foreground",
                )}
            >
                {trimmed.replace(/\*\*/g, "")}
            </p>
        );
    });
}

export function AiActQuestionCard({
    question,
    questionNumber,
    totalQuestions,
    onAnswer,
    onBack,
    onOpenLegal,
    content,
}: AiActQuestionCardProps) {
    const [showDetail, setShowDetail] = useState(false);
    const progress = (questionNumber / totalQuestions) * 100;

    return (
        <div className={cn("w-full", spacing.stackLg)}>
            <div className={spacing.stackSm}>
                <div className="flex items-center justify-between">
                    <span
                        className={cn(
                            typography.variants.meta.label,
                            "text-muted-foreground",
                        )}
                    >
                        {content.progressLabel(questionNumber, totalQuestions)}
                    </span>
                    {question.legalRef && (
                        <button
                            type="button"
                            onClick={() => onOpenLegal(question.legalRef!)}
                            className={cn(
                                typography.variants.meta.label,
                                "cursor-pointer rounded-full border border-border px-3 py-1 text-muted-foreground hover:border-foreground hover:text-foreground transition-colors" /* lint:allowed - legal-ref pill */,
                            )}
                        >
                            {question.legalRef} {content.legalRefSuffix}
                        </button>
                    )}
                </div>
                <div
                    className="h-1 w-full overflow-hidden rounded-full bg-muted" /* lint:allowed - progress track */
                >
                    <div
                        className="h-full bg-foreground transition-all duration-300" /* lint:allowed - progress fill */
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <Heading level={2} size="lg" className="text-balance">
                {question.text}
            </Heading>

            <Text size="lg" className="text-muted-foreground">
                {question.explanation}
            </Text>

            <div className={spacing.stackSm}>
                <button
                    type="button"
                    onClick={() => setShowDetail((v) => !v)}
                    className={cn(
                        typography.variants.meta.label,
                        "cursor-pointer self-start text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline",
                    )}
                >
                    {showDetail
                        ? content.longExplanationToggleHide
                        : content.longExplanationToggleShow}
                </button>
                {showDetail && (
                    <Surface variant="muted" className={cn(spacing.stackSm, "p-6 md:p-8") /* lint:allowed - detail panel */}>
                        {renderLongExplanation(question.longExplanation)}
                    </Surface>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button
                    type="button"
                    onClick={() => onAnswer("yes")}
                    className={cn(
                        typography.variants.ui.button.lg,
                        "cursor-pointer rounded-full border border-foreground bg-background text-foreground px-8 py-4 hover:bg-muted transition-colors" /* lint:allowed - CTA button */,
                    )}
                >
                    {content.yes}
                </button>
                <button
                    type="button"
                    onClick={() => onAnswer("no")}
                    className={cn(
                        typography.variants.ui.button.lg,
                        "cursor-pointer rounded-full bg-foreground text-background px-8 py-4 hover:bg-foreground/80 transition-colors" /* lint:allowed - CTA button */,
                    )}
                >
                    {content.no}
                </button>
            </div>

            {onBack && (
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={onBack}
                        className={cn(
                            typography.variants.meta.label,
                            "cursor-pointer text-muted-foreground hover:text-foreground transition-colors",
                        )}
                    >
                        &larr; {content.back}
                    </button>
                </div>
            )}
        </div>
    );
}
