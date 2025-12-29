import React from "react";
import { cn } from "@/lib/utils";
import { surfaces, SurfaceVariant } from "../tokens/surfaces";
import { spacing } from "../tokens/spacing";

type SurfaceProps = {
    variant?: SurfaceVariant; // default "card"
    cardHeight?: keyof typeof spacing.cardMinHeight; // default "auto"
    className?: string;
    children: React.ReactNode;
};

export function Surface({
    variant = "card",
    cardHeight = "auto",
    className,
    children,
}: SurfaceProps) {
    return (
        <div className={cn(surfaces[variant], spacing.cardMinHeight[cardHeight], className)}>
            {children}
        </div>
    );
}
