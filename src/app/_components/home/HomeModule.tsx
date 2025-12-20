import { cn } from "@/lib/utils";
import React from "react";

type HomeModuleSpacing = "standard" | "compact" | "none";

const PADDING_TOP_MAP: Record<HomeModuleSpacing, string> = {
    standard: "pt-16 md:pt-24 lg:pt-32",
    compact: "pt-12 md:pt-16 lg:pt-20",
    none: "",
};

const PADDING_BOTTOM_MAP: Record<HomeModuleSpacing, string> = {
    standard: "pb-16 md:pb-24 lg:pb-32",
    compact: "pb-12 md:pb-16 lg:pb-20",
    none: "",
};

type HomeModuleTone = "default" | "light" | "dark" | "muted" | "accent" | "split-light-dark";

const TONE_MAP: Record<HomeModuleTone, string> = {
    default: "", // Transparent / inherited
    light: "bg-zinc-100 text-neutral-950", // Light gray background, dark text
    dark: "bg-background text-foreground", // Standard dark theme
    muted: "text-muted-foreground", // Legacy
    accent: "text-accent-foreground", // Legacy
    "split-light-dark": "bg-[linear-gradient(to_bottom,theme(colors.zinc.100)_0%,theme(colors.zinc.100)_50%,theme(colors.background)_50%,theme(colors.background)_100%)]",
};

type HomeModuleProps = {
    id: string;
    tone?: HomeModuleTone;
    width?: "container" | "full";
    spacing?: HomeModuleSpacing;
    spacingEdge?: "both" | "top" | "bottom" | "none";
    className?: string;
    children: React.ReactNode;
};

export function HomeModule({
    id,
    tone = "default",
    width = "container",
    spacing = "standard",
    spacingEdge = "both",
    className,
    children
}: HomeModuleProps) {
    return (
        <section
            id={id}
            data-tone={tone}
            className={cn(
                "flex flex-col w-full items-center",
                width === "container" && "container mx-auto",
                // Validated vertical rhythm
                (spacingEdge === "both" || spacingEdge === "top") && PADDING_TOP_MAP[spacing],
                (spacingEdge === "both" || spacingEdge === "bottom") && PADDING_BOTTOM_MAP[spacing],
                // Tone mapped
                TONE_MAP[tone],
                className
            )}
        >
            {children}
        </section>
    );
}
