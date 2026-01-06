"use client";

import { cn } from "@/lib/utils";

import { EditorialStatementSection } from "@/components/sections/EditorialStatementSection";
import { scanContent } from "@/app/_content/ai-opportunity-scan";
import { spacing } from "@/design-system/tokens/spacing";

export function ScanStatementModule() {
    return (
        <section className={spacing.modulePad.m}>
            <div className={cn("container mx-auto")}>
                <EditorialStatementSection
                    eyebrow={scanContent.statement.eyebrow}
                    lines={scanContent.statement.lines}
                />
            </div>
        </section>
    );
}
