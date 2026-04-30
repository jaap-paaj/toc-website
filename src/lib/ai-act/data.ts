import type { Locale } from "@/lib/i18n/config";
import type {
    BinaryQuestion,
    Choice,
    ClassificationResult,
    GameState,
} from "./types";
import { LEGAL_TEXTS_NL, QUESTIONS_NL, RESULTS_NL } from "./data.nl";
import { LEGAL_TEXTS_EN, QUESTIONS_EN, RESULTS_EN } from "./data.en";

export const FIRST_QUESTION_ID = "q1_ai_or_not";

export const TOTAL_QUESTIONS = 9;

interface LocaleData {
    questions: Record<string, BinaryQuestion>;
    results: Record<string, ClassificationResult>;
    legalTexts: Record<string, string>;
}

const DATA_BY_LOCALE: Record<Locale, LocaleData> = {
    nl: {
        questions: QUESTIONS_NL,
        results: RESULTS_NL,
        legalTexts: LEGAL_TEXTS_NL,
    },
    en: {
        questions: QUESTIONS_EN,
        results: RESULTS_EN,
        legalTexts: LEGAL_TEXTS_EN,
    },
};

export function getQuestions(locale: Locale): Record<string, BinaryQuestion> {
    return DATA_BY_LOCALE[locale].questions;
}

export function getResults(locale: Locale): Record<string, ClassificationResult> {
    return DATA_BY_LOCALE[locale].results;
}

export function getLegalTexts(locale: Locale): Record<string, string> {
    return DATA_BY_LOCALE[locale].legalTexts;
}

export function getNextState(
    locale: Locale,
    state: GameState,
    choice: Choice,
): GameState {
    const questions = getQuestions(locale);
    const results = getResults(locale);
    const currentQ = questions[state.currentQuestionId];
    const nextId = choice === "yes" ? currentQ.yesNextId : currentQ.noNextId;
    const newHistory = { ...state.history, [currentQ.id]: choice };

    if (results[nextId]) {
        return {
            ...state,
            history: newHistory,
            view: "result",
            result: results[nextId],
        };
    }

    return {
        ...state,
        history: newHistory,
        currentQuestionId: nextId,
    };
}

export function getInitialState(): GameState {
    return {
        view: "intro",
        history: {},
        currentQuestionId: FIRST_QUESTION_ID,
        result: null,
    };
}
