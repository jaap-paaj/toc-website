import * as React from "react";
import { cn } from "@/lib/utils";
import { Surface } from "@/design-system/components/Surfaces";
import { spacing } from "@/design-system/tokens/spacing";
import { SurfaceVariant } from "@/design-system/tokens/surfaces";

interface ContentCardProps {
    children: React.ReactNode;
    className?: string; // Allow minimal overrides (e.g. h-full)
    variant: SurfaceVariant; // Strict variant requirement, now correctly typed
}

/**
 * Canonical implementation of the "ContentCard" role.
 * Enforces visual rhythm (p-6 md:p-8, gap-3) via `spacing.component.contentCard`.
 * Enforces structure via `cardHeight="standard"`.
 */
export function ContentCard({ children, className, variant }: ContentCardProps) {
    return (
        <Surface
            variant={variant}
            cardHeight="standard"
            className={cn(
                spacing.component.contentCard, // Canonical Rhythm
                className
            )}
        >
            {children}
        </Surface>
    );
}

ContentCard.displayName = "ContentCard";
