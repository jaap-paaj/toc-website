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
                                    {item}
                                </li>
                            ))}
                        </ListTag>
                    );
                }

                return (
                    <Text key={i} size="lg" measure="2xl">
                        {block.text}
                    </Text>
                );
            })}
        </article>
    );
}
