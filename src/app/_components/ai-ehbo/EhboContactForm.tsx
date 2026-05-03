"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import { submitEhboContact } from "@/lib/ehbo/api";
import type { EhboContactInfo } from "@/lib/ehbo/types";

interface EhboContactFormProps {
    sessionId: string;
    content: {
        title: string;
        helper: string;
        emailPlaceholder: string;
        namePlaceholder: string;
        companyPlaceholder: string;
        submit: string;
        sending: string;
        success: string;
        error: string;
        dismiss: string;
    };
    onDismiss: () => void;
    onSent?: () => void;
}

export function EhboContactForm({ sessionId, content, onDismiss, onSent }: EhboContactFormProps) {
    const [form, setForm] = useState<EhboContactInfo>({ email: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    useEffect(() => {
        if (status === "sent") onSent?.();
    }, [status, onSent]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!form.email) return;

        setStatus("sending");
        try {
            await submitEhboContact(sessionId, form);
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    }

    if (status === "sent") {
        return (
            <div className="border-t border-border bg-muted px-4 py-4">
                <p className={cn(typography.variants.body.sm, "text-foreground")}>
                    {content.success}
                </p>
            </div>
        );
    }

    return (
        <div className="border-t border-border bg-muted px-4 py-4 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3"> {/* lint:allowed - sticky banner header */}
                <div className="flex flex-col gap-0.5"> {/* lint:allowed - tight stack */}
                    <p className={cn(typography.variants.meta.label, "text-foreground")}>
                        {content.title}
                    </p>
                    <p className={cn(typography.variants.body.sm, "text-muted-foreground")}>
                        {content.helper}
                    </p>
                </div>
                <button
                    type="button"
                    onClick={onDismiss}
                    aria-label={content.dismiss}
                    className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                    type="email"
                    required
                    placeholder={content.emailPlaceholder}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={cn(
                        typography.variants.body.md,
                        "flex-1 rounded-surface border border-border bg-background px-3 py-2 text-base focus:outline-none focus:border-foreground/40" /* lint:allowed - contact form input */
                    )}
                />
                <button
                    type="submit"
                    disabled={status === "sending" || !form.email}
                    className={cn(
                        typography.variants.ui.button.sm,
                        "rounded-surface bg-foreground text-background px-4 py-2 hover:bg-foreground/80 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
                    )}
                >
                    {status === "sending" ? content.sending : content.submit}
                </button>
            </form>
            <div className="grid grid-cols-2 gap-2"> {/* lint:allowed - optional fields row */}
                <input
                    type="text"
                    placeholder={content.namePlaceholder}
                    value={form.name || ""}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={cn(
                        typography.variants.body.sm,
                        "rounded-surface border border-border bg-background px-3 py-1.5 text-base focus:outline-none focus:border-foreground/40" /* lint:allowed - contact form input */
                    )}
                />
                <input
                    type="text"
                    placeholder={content.companyPlaceholder}
                    value={form.company || ""}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className={cn(
                        typography.variants.body.sm,
                        "rounded-surface border border-border bg-background px-3 py-1.5 text-base focus:outline-none focus:border-foreground/40" /* lint:allowed - contact form input */
                    )}
                />
            </div>
            {status === "error" && (
                <p className={cn(typography.variants.body.sm, "text-destructive")}>
                    {content.error}
                </p>
            )}
        </div>
    );
}
