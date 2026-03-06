"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Heading } from "@/design-system/components/Typography";
import { Text } from "@/design-system/components/Typography";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";

interface BlogProseProps {
    content: string;
}

/**
 * Renders markdown content using react-markdown with component mapping
 * to the design system's Typography primitives. No dangerouslySetInnerHTML,
 * no globals.css prose styles — all typography via tokens.
 */
export function BlogProse({ content }: BlogProseProps) {
    return (
        <article className="flex flex-col gap-[var(--space-md)]">
            <ReactMarkdown
                children={content}
                remarkPlugins={[remarkGfm]}
                components={{
                    h2: ({ children }) => (
                        <Heading level={2} size="card" className="mt-4">
                            {children}
                        </Heading>
                    ),
                    h3: ({ children }) => (
                        <Heading level={3} size="card" className="mt-2">
                            {children}
                        </Heading>
                    ),
                    p: ({ children }) => (
                        <Text size="md" measure="2xl">
                            {children}
                        </Text>
                    ),
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            className="underline underline-offset-4 decoration-transparent hover:decoration-current transition-colors duration-200"
                        >
                            {children}
                        </a>
                    ),
                    ul: ({ children }) => (
                        <ul className="flex flex-col gap-[var(--space-xs)] list-disc pl-6">
                            {children}
                        </ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="flex flex-col gap-[var(--space-xs)] list-decimal pl-6">
                            {children}
                        </ol>
                    ),
                    li: ({ children }) => (
                        <li className={typography.variants.body.md}>{children}</li>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-primary pl-6 italic">
                            {children}
                        </blockquote>
                    ),
                    strong: ({ children }) => (
                        <strong className="font-semibold">{children}</strong> // lint:allowed
                    ),
                    code: ({ children, className }) => {
                        if (!className) {
                            return (
                                <code
                                    className={cn(
                                        typography.variants.meta.code,
                                        "bg-muted px-1.5 rounded-panel"
                                    )}
                                >
                                    {children}
                                </code>
                            );
                        }
                        return (
                            <code className={cn(typography.variants.meta.code, className)}>
                                {children}
                            </code>
                        );
                    },
                    pre: ({ children }) => (
                        <pre className="bg-muted p-4 rounded-panel overflow-x-auto">
                            {children}
                        </pre>
                    ),
                }}
            />
        </article>
    );
}
