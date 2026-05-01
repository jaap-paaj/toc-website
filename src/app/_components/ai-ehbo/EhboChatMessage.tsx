"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import type { EhboMessage } from "@/lib/ehbo/types";

interface EhboChatMessageProps {
    message: EhboMessage;
}

export function EhboChatMessage({ message }: EhboChatMessageProps) {
    const isUser = message.role === "user";

    if (isUser) {
        return (
            <div className="flex justify-end">
                <div className="max-w-[80%] rounded-surface rounded-br-none bg-muted text-foreground px-4 py-3">
                    <div className={cn(typography.variants.body.md, "whitespace-pre-wrap")}>
                        {message.content}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className={cn(typography.variants.body.md, "flex flex-col gap-2 text-foreground")}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        p: ({ children }) => <p>{children}</p>,
                        strong: ({ children }) => (
                            <strong className="font-semibold">{children}</strong> // lint:allowed
                        ),
                        ul: ({ children }) => (
                            <ul className="list-disc pl-5 flex flex-col gap-1">{children}</ul>
                        ),
                        ol: ({ children }) => (
                            <ol className="list-decimal pl-5 flex flex-col gap-1">{children}</ol>
                        ),
                        li: ({ children }) => <li>{children}</li>,
                        a: ({ href, children }) => (
                            <a href={href} className="underline underline-offset-2 hover:opacity-70 transition-opacity">
                                {children}
                            </a>
                        ),
                        h1: ({ children }) => <p className="font-semibold">{children}</p>, // lint:allowed
                        h2: ({ children }) => <p className="font-semibold">{children}</p>, // lint:allowed
                        h3: ({ children }) => <p className="font-semibold">{children}</p>, // lint:allowed
                    }}
                >
                    {message.content}
                </ReactMarkdown>
            </div>
        </div>
    );
}
