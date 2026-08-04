import { cn } from "@/lib/utils";
import { Heading, Text } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";

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

export function ProseSection({ blocks, className }: ProseSectionProps) {
    return (
        <div className={cn(spacing.stackLg, "w-full max-w-2xl", className)}>
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
                                spacing.stackSm,
                                "pl-5",
                                block.ordered ? "list-decimal" : "list-disc",
                            )}
                        >
                            {block.items.map((item, j) => (
                                <li key={j} className="text-muted-foreground">
                                    <Text size="md" as="span" className="text-muted-foreground">
                                        {item}
                                    </Text>
                                </li>
                            ))}
                        </ListTag>
                    );
                }

                return (
                    <Text key={i} size="md" className="text-muted-foreground">
                        {block.text}
                    </Text>
                );
            })}
        </div>
    );
}
