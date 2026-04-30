"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { aiActContent } from "@/app/_content/ai-act";
import { useLocale } from "@/lib/i18n/useLocale";
import { cn } from "@/lib/utils";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading } from "@/design-system/components/Typography";
import { Button } from "@/components/ui/Button";
import { spacing } from "@/design-system/tokens/spacing";
import {
    FIRST_QUESTION_ID,
    TOTAL_QUESTIONS,
    getNextState,
    getQuestions,
} from "@/lib/ai-act/data";
import { saveScan } from "@/lib/ai-act/api";
import type { Choice, GameState } from "@/lib/ai-act/types";
import type { Locale } from "@/lib/i18n/config";
import { AiActQuestionCard } from "./AiActQuestionCard";
import { AiActResult } from "./AiActResult";
import { AiActLegalDrawer } from "./AiActLegalDrawer";

const TRAIL_PARAM = "p";

interface TrailEntry {
    qId: string;
    choice: Choice;
}

function parseTrail(trail: string): TrailEntry[] {
    if (!trail) return [];
    return trail
        .split(",")
        .map((part) => {
            const [qId, choice] = part.split(":");
            return { qId, choice: choice as Choice };
        })
        .filter(
            (entry) =>
                entry.qId && (entry.choice === "yes" || entry.choice === "no"),
        );
}

function serializeTrail(entries: TrailEntry[]): string {
    return entries.map((e) => `${e.qId}:${e.choice}`).join(",");
}

function computeState(locale: Locale, entries: TrailEntry[]): GameState {
    let state: GameState = {
        view: "quiz",
        history: {},
        currentQuestionId: FIRST_QUESTION_ID,
        result: null,
    };
    for (const entry of entries) {
        if (state.view === "result") break;
        state = getNextState(locale, state, entry.choice);
    }
    return state;
}

function AiActWizardInner() {
    const lang = useLocale();
    const content = aiActContent[lang];
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const trail = searchParams.get(TRAIL_PARAM) ?? "";
    const entries = useMemo(() => parseTrail(trail), [trail]);
    const state = useMemo(() => computeState(lang, entries), [lang, entries]);

    const [legalRef, setLegalRef] = useState<string | null>(null);
    const [scanId, setScanId] = useState<string | null>(null);

    useEffect(() => {
        if (state.view !== "result" || !state.result) return;
        let cancelled = false;
        saveScan({ result: state.result, history: state.history }).then(
            (id) => {
                if (!cancelled) setScanId(id);
            },
        );
        return () => {
            cancelled = true;
        };
    }, [state.view, state.result, state.history]);

    const questions = getQuestions(lang);
    const questionNumber = entries.length + 1;
    const canGoBack = entries.length > 0;
    const currentQuestion =
        state.view === "quiz" ? questions[state.currentQuestionId] : null;

    const pushTrail = (newTrail: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (newTrail) {
            params.set(TRAIL_PARAM, newTrail);
        } else {
            params.delete(TRAIL_PARAM);
        }
        const queryString = params.toString();
        router.push(queryString ? `${pathname}?${queryString}` : pathname, {
            scroll: false,
        });
    };

    const handleAnswer = (choice: Choice) => {
        if (state.view !== "quiz") return;
        const newEntries = [
            ...entries,
            { qId: state.currentQuestionId, choice },
        ];
        pushTrail(serializeTrail(newEntries));
    };

    const handleReset = () => {
        setScanId(null);
        pushTrail("");
    };

    const goBack = canGoBack ? () => router.back() : undefined;
    const backLabel = goBack
        ? content.wizard.back
        : content.wizard.backToLanding;

    return (
        <div className={cn("flex flex-col", spacing.stackSm)}>
            {/* Header: [back · title] left-grouped · logo right */}
            <div className="flex items-center justify-between w-full">
                <div className={cn("flex items-center gap-3 md:gap-4")}> {/* lint:allowed - back+title group */}
                    {goBack ? (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={goBack}
                            aria-label={backLabel}
                            className="cursor-pointer rounded-full bg-foreground text-background hover:bg-foreground/90 hover:text-background"
                        >
                            <ArrowLeft />
                        </Button>
                    ) : (
                        <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            aria-label={backLabel}
                            className="rounded-full bg-foreground text-background hover:bg-foreground/90 hover:text-background"
                        >
                            <Link href="/ai-act">
                                <ArrowLeft />
                            </Link>
                        </Button>
                    )}
                    <Heading level={2} size="card" className="text-foreground">
                        {content.wizard.eyebrow}
                    </Heading>
                </div>
                <img
                    src="/images/brand/toc/TOC_Logo_black.svg"
                    alt="The Only Constant"
                    className="h-7 w-auto" /* lint:allowed - logo size */
                />
            </div>

            {state.view === "quiz" && currentQuestion && (
                <Surface variant="card" className="p-8 md:p-12"> {/* lint:allowed - wizard container padding */}
                    <AiActQuestionCard
                        question={currentQuestion}
                        questionNumber={questionNumber}
                        totalQuestions={TOTAL_QUESTIONS}
                        onAnswer={handleAnswer}
                        onBack={goBack}
                        onOpenLegal={(ref) => setLegalRef(ref)}
                        content={content.wizard}
                    />
                </Surface>
            )}
            {state.view === "result" && state.result && (
                <AiActResult
                    result={state.result}
                    scanId={scanId}
                    onReset={handleReset}
                    onBack={goBack}
                    onOpenLegal={(ref) => setLegalRef(ref)}
                />
            )}
            <AiActLegalDrawer
                refKey={legalRef}
                onClose={() => setLegalRef(null)}
            />
        </div>
    );
}

export function AiActWizard() {
    return (
        <Suspense fallback={null}>
            <AiActWizardInner />
        </Suspense>
    );
}
