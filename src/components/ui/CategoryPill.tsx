import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";

/**
 * The site's category pill, as used on the blog cards, the pillar pages and
 * the answer pages. Kept in one place so new sections label things the same
 * way instead of restating the class list.
 *
 * Exported as a class too, for the places where the pill is itself a link.
 */
export const categoryPillClass = cn(
    typography.variants.meta.badge,
    "bg-foreground/10 text-foreground px-2 py-0.5 rounded-full",
);

/** Add this alongside the base class when the pill is interactive. */
export const categoryPillInteractiveClass =
    "hover:bg-foreground/20 transition-colors duration-200";

interface CategoryPillProps {
    children: React.ReactNode;
    className?: string;
}

export function CategoryPill({ children, className }: CategoryPillProps) {
    return <span className={cn(categoryPillClass, className)}>{children}</span>;
}
