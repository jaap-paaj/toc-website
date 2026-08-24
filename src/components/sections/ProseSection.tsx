import type React from "react";
import { cn } from "@/lib/utils";
import { Heading, Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";

/**
 * Content shape for long-form prose.
 *
 * Owned by the section: content files conform to this, the section decides how
 * each block renders.
 */
export type ProseBlock =
    | { kind: "paragraph"; text: string }
    | { kind: "subheading"; text: string }
    | { kind: "list"; ordered: boolean; items: string[] };

export interface ProseSectionProps {
    blocks: readonly ProseBlock[];
    className?: string;
}

const EMAIL = /[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g;

/**
 * Email addresses in prose render as mailto links. Detected, not marked up:
 * the content files stay plain strings, and an address that appears in a
 * paragraph is always meant to be written to — the privacy statement's
 * "questions about your data" line is the case this exists for.
 */
function withEmailLinks(text: string): React.ReactNode {
    const parts = text.split(EMAIL);
    if (parts.length === 1) return text;

    const emails = text.match(EMAIL)!;
    return parts.flatMap((part, i) =>
        i < emails.length
            ? [
                  part,
                  <a
                      key={i}
                      href={`mailto:${emails[i]}`}
                      className="underline underline-offset-4 decoration-foreground/30 hover:decoration-current transition-colors"
                  >
                      {emails[i]}
                  </a>,
              ]
            : [part],
    );
}

/**
 * Typography follows BlogProse: body.lg at full contrast, measure-capped, with
 * the same list indent and rhythm. Long-form reads the same everywhere on the
 * site, whether it came from markdown or from a content file.
 */
export function ProseSection({ blocks, className }: ProseSectionProps) {
    return (
        <article
            className={cn(
                "w-full max-w-2xl flex flex-col gap-[var(--space-md)]",
                className,
            )}
        >
            {blocks.map((block, i) => {
                if (block.kind === "subheading") {
                    return (
                        <Heading key={i} level={2} size="card" className="text-balance">
                            {block.text}
                        </Heading>
                    );
                }

                if (block.kind === "list") {
                    const ListTag = block.ordered ? "ol" : "ul";
                    return (
                        <ListTag
                            key={i}
                            className={cn(
                                "flex flex-col gap-[var(--space-xs)] pl-6",
                                block.ordered ? "list-decimal" : "list-disc",
                            )}
                        >
                            {block.items.map((item, j) => (
                                <li key={j} className={typography.variants.body.lg}>
                                    {withEmailLinks(item)}
                                </li>
                            ))}
                        </ListTag>
                    );
                }

                return (
                    <Text key={i} size="lg" measure="2xl">
                        {withEmailLinks(block.text)}
                    </Text>
                );
            })}
        </article>
    );
}
