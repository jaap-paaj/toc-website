import React from "react";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";

export interface MetaPillProps {
    children: string;
    className?: string;
}

export function MetaPill({ children, className }: MetaPillProps) {
    return (
        <span
            className={cn(
                // Canon: Brand Background + Black Text, Secondary to title
                "inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary text-black whitespace-nowrap align-middle ml-auto",
                typography.variants.meta.badge,
                className
            )}
        >
            {children}
        </span>
    );
}
