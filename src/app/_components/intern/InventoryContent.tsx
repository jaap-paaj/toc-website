"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Text } from "@/design-system/components/Typography";
import { CategoryPill } from "@/components/ui/CategoryPill";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import type { ContentGroup } from "@/lib/inventory/content";

interface InventoryContentProps {
    groups: ContentGroup[];
}

/**
 * The dynamic routes, expandable. Collapsed by default because forty extra
 * rows tell you nothing you did not already know from the count.
 */
export function InventoryContent({ groups }: InventoryContentProps) {
    return (
        <Accordion type="multiple" className="w-full">
            {groups.map((group) => {
                const flagged = group.items.filter((item) => item.flags.length > 0);

                return (
                    <AccordionItem key={group.key} value={group.key}>
                        <AccordionTrigger>
                            <span className={cn("flex flex-wrap items-center gap-3")}>
                                <span className={typography.variants.meta.code}>
                                    {group.routePattern}
                                </span>
                                <span className={cn(typography.variants.body.sm, "text-muted-foreground")}>
                                    {`${group.items.length} stuks`}
                                </span>
                                {flagged.length > 0 && (
                                    <CategoryPill>
                                        {`${flagged.length} vraagt aandacht`}
                                    </CategoryPill>
                                )}
                            </span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className={cn(spacing.stackSm, "pb-4")}>
                                {group.items.map((item) => (
                                    <div
                                        key={item.slug}
                                        className="flex flex-col gap-1 border-t border-border pt-3"
                                    >
                                        <Text size="sm" className="text-foreground">
                                            {item.title}
                                        </Text>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span
                                                className={cn(
                                                    typography.variants.body.sm,
                                                    "text-muted-foreground",
                                                )}
                                            >
                                                {item.meta}
                                            </span>
                                            {item.flags.map((flag) => (
                                                <CategoryPill key={flag}>{flag}</CategoryPill>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}
