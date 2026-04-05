"use client";

import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import { Surface } from "@/design-system/components/Surfaces";
import { Text } from "@/design-system/components/Typography";

interface BlogCtaSectionProps {
    content: string;
}

export function BlogCtaSection({ content }: BlogCtaSectionProps) {
    return (
        <Surface variant="muted" className={cn("px-6 py-6 md:px-8 md:py-8"  /* lint:allowed - CTA block internal padding */)}>
            <ReactMarkdown
                components={{
                    p: ({ children }) => (
                        <Text size="md" className="text-muted-foreground">
                            {children}
                        </Text>
                    ),
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            className={cn(
                                typography.variants.body.md,
                                "underline underline-offset-4 decoration-foreground/30 hover:decoration-current transition-colors duration-200 text-foreground"
                            )}
                        >
                            {children}
                        </a>
                    ),
                    strong: ({ children }) => (
                        <strong className="font-semibold text-foreground">{children}</strong> // lint:allowed
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </Surface>
    );
}
