// design-system/components/Typography.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";

type HeadingSize = "page" | "section" | "card" | "xl" | "lg" | "md" | "sm";
type TextSize = "lg" | "md" | "sm";

const headingSizes: Record<HeadingSize, string> = {
    page: typography.variants.heading.page,
    section: typography.variants.display.section,
    card: typography.variants.heading.card,
    // Legacy mapping compatibility (mapped to closest semantic role)
    xl: typography.variants.heading.page,
    lg: typography.variants.heading.subsection,
    md: typography.variants.heading.card,
    sm: typography.variants.heading.card,
};

export type HeadingProps = {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: HeadingSize;
    className?: string;
    children: React.ReactNode;
    // Deprecate variant in favor of size
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variant?: any;
};

export function Heading({
    level = 1,
    size = "page",
    className,
    children,
    ...props
}: HeadingProps) {
    const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
    // Map variant back to size if provided for backward compatibility, or just rely on size
    // For now we assume size is the primary API as requested.

    // Safety check for legacy 'variant' prop if passed (removed from types but ensuring runtime safety)
    const activeSize = (props.variant && !size) ? props.variant : size;
    const finalSize = headingSizes[activeSize as HeadingSize] ? activeSize as HeadingSize : "page";

    return (
        <Tag className={cn(headingSizes[finalSize], "font-serif tracking-tight", className)}>{children}</Tag>
    );
}

export function SectionTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            className={cn(
                typography.variants.heading.subsection,
                "text-foreground",
                className
            )}
            {...props}
        >
            {children}
        </h2>
    );
}

export type TextProps = {
    /**
     * Visual size for body text.
     * lg => typography.variants.body.lg
     * md => .text-base
     * sm => .text-sm
     */
    size?: TextSize;
    /**
     * Max-width constraint for content.
     */
    measure?: "sm" | "md" | "lg" | "xl" | "2xl";
    /** Which element to render as */
    as?: "p" | "span" | "div";
    className?: string;
    children: React.ReactNode;
};

const textSizeClasses: Record<TextSize, string> = {
    lg: typography.variants.body.lg,
    md: typography.variants.body.md,
    sm: typography.variants.body.sm,
};

const measureClasses: Record<string, string> = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
};

export function Text({
    size = "md",
    measure,
    as = "p",
    className,
    children,
}: TextProps) {
    const Tag = as as React.ElementType;
    const sizeClass = textSizeClasses[size];
    const measureClass = measure ? measureClasses[measure] : undefined;

    return <Tag className={cn(sizeClass, measureClass, className)}>{children}</Tag>;
}
