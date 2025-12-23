import Link from "next/link";
import { cn } from "@/lib/utils";

import { typography } from "@/design-system/tokens/typography";

interface HeaderNavProps {
    links: { label: string; href: string }[];
    className?: string;
}

export function HeaderNav({ links, className }: HeaderNavProps) {
    return (
        <nav className={cn("hidden lg:flex items-center gap-8", className)}>
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        "relative transition-colors duration-200",
                        typography.variants.ui.nav.link,
                        "text-black/80 hover:text-black",
                        // Subtle underline via pseudo-element
                        "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full",
                        "after:bg-black after:opacity-0 hover:after:opacity-40",
                        "after:transition-opacity after:duration-200"
                    )}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
