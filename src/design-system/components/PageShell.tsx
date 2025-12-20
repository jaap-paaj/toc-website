import React from "react";
import { cn } from "@/lib/utils";

type PageShellProps = {
    children: React.ReactNode;
    className?: string;
};

/**
 * PageShell = gedeelde binnen-kader voor header + content.
 * - Bepaalt horizontale paddings + max width + centrering.
 * - Geen verticale spacing hier, dat doet de pagina zelf.
 */
export function PageShell({ children, className }: PageShellProps) {
    return (
        <div
            className={cn(
                "w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-12",
                className
            )}
        >
            {children}
        </div>
    );
}
