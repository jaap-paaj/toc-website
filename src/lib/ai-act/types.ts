export const RiskLevel = {
    PROHIBITED: "PROHIBITED",
    HIGH: "HIGH",
    GPAI: "GPAI",
    TRANSPARENCY: "TRANSPARENCY",
    MINIMAL: "MINIMAL",
    NO_REGULATION: "NO_REGULATION",
} as const;

export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];

export type Choice = "yes" | "no";

export type Outcome = "A" | "B" | "C" | "D";

export interface BinaryQuestion {
    id: string;
    text: string;
    legalRef?: string;
    explanation: string;
    longExplanation: string;
    yesNextId: string;
    noNextId: string;
}

export interface LegalReference {
    type: string;
    ref: string;
    label: string;
}

export interface WhatNextByRole {
    asUser?: string[];
    asProvider?: string[];
}

export interface ClassificationResult {
    id: string;
    outcome: Outcome;
    level: RiskLevel;
    title: string;
    why: string[];
    whatNext: string[] | WhatNextByRole;
    legalRefs: LegalReference[];
    deadline: string;
}

export interface GameState {
    view: "intro" | "quiz" | "result";
    history: Record<string, Choice>;
    currentQuestionId: string;
    result: ClassificationResult | null;
}
