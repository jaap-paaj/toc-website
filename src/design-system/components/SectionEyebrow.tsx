import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";

interface SectionEyebrowProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h2" | "h3" | "h4" | "div";
}

export function SectionEyebrow({
    className,
    children,
    as: Tag = "h2",
    ...props
}: SectionEyebrowProps) {
    return (
        <Tag
            className={cn(
                // Layout & Spacing
                "mb-4 md:mb-6",
                // Typography (High Contrast, Bold, Uppercase)
                typography.variants.meta.eyebrow,
                // "text-foreground", // REMOVED: Allow inheritance from HomeModule tone (fixes Light Mode headers)
                className
            )}
            {...props}
        >
            {children}
        </Tag>
    );
}
