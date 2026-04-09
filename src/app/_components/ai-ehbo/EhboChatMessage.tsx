"use client";

import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import type { EhboMessage } from "@/lib/ehbo/types";

interface EhboChatMessageProps {
    message: EhboMessage;
}

export function EhboChatMessage({ message }: EhboChatMessageProps) {
    const isUser = message.role === "user";

    return (
        <div className={cn("flex", isUser ? "justify-end" : "justify-start", "mb-4")}>
            <div
                className={cn(
                    "max-w-[80%] rounded-surface px-4 py-3",
                    isUser
                        ? "bg-foreground text-background rounded-br-none"
                        : "bg-muted text-foreground rounded-bl-none"
                )}
            >
                <div className={cn(typography.variants.body.md, "whitespace-pre-wrap")}>
                    {message.content}
                </div>
            </div>
        </div>
    );
}
