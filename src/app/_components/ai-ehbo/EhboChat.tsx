"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import { sendEhboMessage } from "@/lib/ehbo/api";
import { EhboSessionLimitError } from "@/lib/ehbo/types";
import { EhboChatMessage } from "./EhboChatMessage";
import { EhboContactForm } from "./EhboContactForm";
import { ehboContent } from "@/app/_content/ai-ehbo";
import { useLocale } from "@/lib/i18n/useLocale";
import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import type { EhboMessage } from "@/lib/ehbo/types";

export function EhboChat() {
    const lang = useLocale();
    const content = ehboContent[lang].chat;

    const [messages, setMessages] = useState<EhboMessage[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [showContactForm, setShowContactForm] = useState(false);
    const [formDismissed, setFormDismissed] = useState(false);
    const [closedOut, setClosedOut] = useState(false);
    const [formSent, setFormSent] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [input]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed || isLoading || closedOut || formSent) return;

        const userMessage: EhboMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content: trimmed,
            created_at: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await sendEhboMessage(sessionId, trimmed);

            if (!sessionId) {
                setSessionId(response.session_id);
            }

            const assistantMessage: EhboMessage = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: response.message,
                created_at: new Date().toISOString(),
            };

            setMessages((prev) => [...prev, assistantMessage]);

            if (response.should_offer_contact) {
                setShowContactForm(true);
            }
        } catch (err) {
            if (err instanceof EhboSessionLimitError) {
                const closingMessage: EhboMessage = {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    content: err.closingMessage,
                    created_at: new Date().toISOString(),
                };
                setMessages((prev) => [...prev, closingMessage]);
                setClosedOut(true);
            } else {
                const errorMessage: EhboMessage = {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    content: content.errorMessage,
                    created_at: new Date().toISOString(),
                };
                setMessages((prev) => [...prev, errorMessage]);
            }
        } finally {
            setIsLoading(false);
        }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    }

    function openWorkingDocumentForm() {
        setFormDismissed(false);
        setShowContactForm(true);
    }

    const formVisible =
        sessionId !== null && showContactForm && !formDismissed;

    return (
        <div className="flex flex-col h-full">
            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-2">
                {messages.length === 0 && (
                    <div className="text-center text-muted-foreground py-12 flex flex-col gap-2">  {/* lint:allowed - empty state padding */}
                        <p className={typography.variants.body.lg}>
                            {content.emptyTitle}
                        </p>
                        <p className={typography.variants.body.md}>
                            {content.emptyDescription}
                        </p>
                    </div>
                )}
                {messages.map((msg) => (
                    <EhboChatMessage key={msg.id} message={msg} />
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-muted rounded-surface rounded-bl-none px-4 py-3">
                            <div className="flex gap-1">
                                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0ms]" />
                                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:150ms]" />
                                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:300ms]" />
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Sticky working-document form (visible while session is active) */}
            {formVisible && sessionId && (
                <EhboContactForm
                    sessionId={sessionId}
                    content={content.contact}
                    onDismiss={() => setFormDismissed(true)}
                    onSent={() => setFormSent(true)}
                />
            )}

            {/* Input area, close-out CTAs, or hidden after form-sent */}
            {formSent ? null : closedOut ? (
                <div className="border-t border-border px-4 py-3 flex flex-col sm:flex-row gap-2">
                    <Link
                        href={content.closeOut.bookCallHref}
                        className={cn(
                            typography.variants.ui.button.sm,
                            "flex-1 inline-flex items-center justify-center rounded-surface bg-foreground text-background px-4 py-2 hover:bg-foreground/80 transition-colors"
                        )}
                    >
                        {content.closeOut.bookCall}
                    </Link>
                    <button
                        type="button"
                        onClick={openWorkingDocumentForm}
                        className={cn(
                            typography.variants.ui.button.sm,
                            "flex-1 inline-flex items-center justify-center rounded-surface border border-border bg-background text-foreground px-4 py-2 hover:bg-muted transition-colors"
                        )}
                    >
                        {content.closeOut.sendDocument}
                    </button>
                </div>
            ) : (
                <div className="border-t border-border px-4 py-3">
                    <form onSubmit={handleSubmit} className="flex gap-2 items-end">
                        <textarea
                            ref={textareaRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={content.placeholder}
                            className={cn(
                                typography.variants.body.md,
                                "flex-1 resize-none rounded-surface border border-border bg-background px-3 py-3 focus:outline-none focus:border-foreground/40 min-h-[44px] max-h-[160px] text-base" /* lint:allowed - chat input, text-base prevents iOS zoom */
                            )}
                            rows={1}
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="flex items-center justify-center w-11 h-11 rounded-full bg-foreground text-background hover:bg-foreground/80 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
                            aria-label={content.send}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 19V5M5 12l7-7 7 7" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
