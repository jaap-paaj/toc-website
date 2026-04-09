"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import { submitEhboContact } from "@/lib/ehbo/api";
import type { EhboContactInfo } from "@/lib/ehbo/types";

interface EhboContactFormProps {
    sessionId: string;
    content: {
        title: string;
        emailPlaceholder: string;
        namePlaceholder: string;
        companyPlaceholder: string;
        submit: string;
        sending: string;
        success: string;
        error: string;
    };
}

export function EhboContactForm({ sessionId, content }: EhboContactFormProps) {
    const [form, setForm] = useState<EhboContactInfo>({ email: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
            <div className="flex justify-start mb-4">
                <div className="max-w-[80%] rounded-surface bg-muted px-4 py-3">
                    <p className={cn(typography.variants.body.md, "text-foreground")}>
                        {content.success}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-start mb-4">
            <div className="max-w-[80%] rounded-surface bg-muted px-4 py-4">
                <p className={cn(typography.variants.body.md, "text-foreground mb-3")}>
                    {content.title}
                </p>
                <form onSubmit={handleSubmit} className="space-y-2">
                    <input
                        type="email"
                        required
                        placeholder={content.emailPlaceholder}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={cn(
                            typography.variants.body.md,
                            "w-full rounded-surface border border-border bg-background px-3 py-2 text-base focus:outline-none focus:border-foreground/40" /* lint:allowed - contact form input */
                        )}
                    />
                    <input
                        type="text"
                        placeholder={content.namePlaceholder}
                        value={form.name || ""}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={cn(
                            typography.variants.body.md,
                            "w-full rounded-surface border border-border bg-background px-3 py-2 text-base focus:outline-none focus:border-foreground/40" /* lint:allowed - contact form input */
                        )}
                    />
                    <input
                        type="text"
                        placeholder={content.companyPlaceholder}
                        value={form.company || ""}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={cn(
                            typography.variants.body.md,
                            "w-full rounded-surface border border-border bg-background px-3 py-2 text-base focus:outline-none focus:border-foreground/40" /* lint:allowed - contact form input */
                        )}
                    />
                    <button
                        type="submit"
                        disabled={status === "sending" || !form.email}
                        className={cn(
                            typography.variants.ui.button.md,
                            "w-full rounded-surface bg-foreground text-background px-4 py-2 hover:bg-foreground/80 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        )}
                    >
                        {status === "sending" ? content.sending : content.submit}
                    </button>
                    {status === "error" && (
                        <p className={cn(typography.variants.body.sm, "text-destructive")}>
                            {content.error}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
