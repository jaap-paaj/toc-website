import React from "react";
import { cn } from "@/lib/utils";
import { surfaces, SurfaceVariant } from "../tokens/surfaces";

type SurfaceProps = {
    variant?: SurfaceVariant; // default "card"
    className?: string;
    children: React.ReactNode;
};

export function Surface({
    variant = "card",
    className,
    children,
}: SurfaceProps) {
    return (
        <div className={cn(surfaces[variant], className)}>
            {children}
        </div>
    );
}
