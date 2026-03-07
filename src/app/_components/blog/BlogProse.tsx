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
                    p: ({ children, node }) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const hasImg = node?.children?.some((child: any) => child.tagName === "img");
                        if (hasImg) return <div className="pb-4">{children}</div>;
                        return (
                            <Text size="lg" measure="2xl">
                                {children}
                            </Text>
                        );
                    },
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
                        <li className={typography.variants.body.lg}>{children}</li>
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
                    img: ({ src, alt }) => (
                        <figure className="flex flex-col items-center gap-[var(--space-sm)] w-full py-[var(--space-lg)]">
                            <img
                                src={src}
                                alt={alt || ""}
                                className="w-full max-w-md rounded-surface border border-border"
                            />
                            {alt && (
                                <figcaption className={cn(typography.variants.meta.label, "text-muted-foreground text-center")}>
                                    {alt}
                                </figcaption>
                            )}
                        </figure>
                    ),
                    pre: ({ children }) => (
                        <pre className="bg-muted p-4 rounded-panel overflow-x-auto">
                            {children}
                        </pre>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
}
