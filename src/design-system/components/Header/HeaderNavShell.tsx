import React from "react";
import { cn } from "@/lib/utils";

interface HeaderNavShellProps {
    children: React.ReactNode;
    className?: string;
}

export function HeaderNavShell({ children, className }: HeaderNavShellProps) {
    return (
        <div
            className={cn(
                // Core Layout: Pill shape + Padding
                "relative flex items-center justify-between w-full",
                "rounded-full",
                "px-6 py-3 md:px-8 md:py-4",
                "overflow-hidden", // Clip the underlay

                // Semantic Token Class for Border/Shadow (we override bg to let underlay handle it)
                "nav-surface",
                "bg-transparent",

                className
            )}
        >
            {/* Underlay Glass Layer (System Tokenized) */}
            <div
                className="absolute inset-0 pointer-events-none surface-glass-header"
                aria-hidden="true"
            />

            {/* Content Wrapper */}
            <div className="relative z-10 flex w-full items-center justify-between">
                {children}
            </div>
        </div>
    );
}
