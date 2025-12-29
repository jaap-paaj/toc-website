import { cn } from "@/lib/utils";
import React from "react";
import { spacing } from "@/design-system/tokens/spacing";
import { EditorialCardGridSection, EditorialItem } from "./EditorialCardGridSection";

export interface EditorialBlock {
    eyebrow: string;
    description: string;
    items: EditorialItem[];
}

export interface StackedEditorialSectionProps {
    blocks: EditorialBlock[];
    gap?: "s" | "m" | "l";
    className?: string; // Canon: allow className for spacing/context if really needed, but generally avoid.
}

export function StackedEditorialSection({
    blocks,
    gap = "m",
    className
}: StackedEditorialSectionProps) {
    return (
        <div className={cn("flex flex-col w-full", spacing.sectionStack.gap[gap], className)}>
            {blocks.map((block, idx) => (
                <EditorialCardGridSection
                    key={idx}
                    eyebrow={block.eyebrow}
                    description={block.description}
                    items={block.items}
                />
            ))}
        </div>
    );
}
