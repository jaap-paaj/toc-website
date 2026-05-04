"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading, Text } from "@/design-system/components/Typography";
import { aiActContent } from "@/app/_content/ai-act";
import { useLocale } from "@/lib/i18n/useLocale";
import { saveLead } from "@/lib/ai-act/api";
import { trackEvent } from "@/lib/analytics/ga";

interface AiActLeadFormProps {
    scanId: string | null;
    resultId: string;
}

const inputClasses = cn(
    "w-full rounded-surface border border-border bg-background px-4 py-3 text-base focus:outline-none focus:border-foreground transition-colors" /* lint:allowed - form input, text-base prevents iOS zoom */,
);

export function AiActLeadForm({ scanId, resultId }: AiActLeadFormProps) {
    const lang = useLocale();
    const content = aiActContent[lang].lead;

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [consent, setConsent] = useState(false);
    const [status, setStatus] = useState<
        "idle" | "submitting" | "done" | "error"
    >("idle");
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!email || !consent) return;
        setStatus("submitting");
        setError(null);
        try {
            await saveLead({
                scan_id: scanId,
                email: email.trim(),
                name: name.trim() || null,
                company: company.trim() || null,
                role: role.trim() || null,
                consent_marketing: consent,
                result_id: resultId,
            });
            trackEvent("aiact_lead_submit", {
                tool: "aiact",
                step: "lead_submit",
                language: lang,
            });
            setStatus("done");
        } catch (err) {
            setStatus("error");
            setError(
                err instanceof Error ? err.message : content.errorFallback,
            );
        }
    }

    if (status === "done") {
        return (
            <Surface variant="card" className={cn(spacing.stackSm, "p-10 md:p-14") /* lint:allowed - lead form panel */}>
                <Heading level={3} size="card">
                    {content.success.title}
                </Heading>
                <Text size="lg" className="text-muted-foreground">
                    {content.success.body}
                </Text>
            </Surface>
        );
    }

    return (
        <Surface variant="card" className={cn(spacing.stackMd, "p-10 md:p-14") /* lint:allowed - lead form panel */}>
            <Heading level={3} size="card">
                {content.title}
            </Heading>
            <Text size="lg" className="text-muted-foreground">
                {content.body}
            </Text>

            <form onSubmit={handleSubmit} className={spacing.stackMd}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={spacing.stackXs}>
                        <label
                            htmlFor="ai-act-email"
                            className={cn(
                                typography.variants.meta.label,
                                "text-muted-foreground",
                            )}
                        >
                            {content.labels.email}
                        </label>
                        <input
                            id="ai-act-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={inputClasses}
                        />
                    </div>
                    <div className={spacing.stackXs}>
                        <label
                            htmlFor="ai-act-name"
                            className={cn(
                                typography.variants.meta.label,
                                "text-muted-foreground",
                            )}
                        >
                            {content.labels.name}
                        </label>
                        <input
                            id="ai-act-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={inputClasses}
                        />
                    </div>
                    <div className={spacing.stackXs}>
                        <label
                            htmlFor="ai-act-company"
                            className={cn(
                                typography.variants.meta.label,
                                "text-muted-foreground",
                            )}
                        >
                            {content.labels.company}
                        </label>
                        <input
                            id="ai-act-company"
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className={inputClasses}
                        />
                    </div>
                    <div className={spacing.stackXs}>
                        <label
                            htmlFor="ai-act-role"
                            className={cn(
                                typography.variants.meta.label,
                                "text-muted-foreground",
                            )}
                        >
                            {content.labels.role}
                        </label>
                        <input
                            id="ai-act-role"
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className={inputClasses}
                        />
                    </div>
                </div>

                <label
                    className={cn(
                        typography.variants.body.sm,
                        "flex items-start gap-3 text-muted-foreground",
                    )}
                >
                    <input
                        type="checkbox"
                        required
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 h-4 w-4" /* lint:allowed - native checkbox */
                    />
                    <span>{content.consentText}</span>
                </label>

                <button
                    type="submit"
                    disabled={
                        status === "submitting" || !email || !consent
                    }
                    className={cn(
                        typography.variants.ui.button.lg,
                        "w-full rounded-full bg-foreground text-background px-8 py-4 hover:bg-foreground/80 disabled:opacity-40 disabled:cursor-not-allowed transition-colors" /* lint:allowed - CTA button */,
                    )}
                >
                    {status === "submitting"
                        ? content.submitting
                        : content.submit}
                </button>

                {error && (
                    <p
                        className={cn(
                            typography.variants.body.sm,
                            "text-destructive",
                        )}
                    >
                        {error}
                    </p>
                )}
            </form>
        </Surface>
    );
}
