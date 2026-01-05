"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { typography } from "@/design-system/tokens/typography";

interface HeaderNavProps {
    links: { label: string; href: string }[];
    className?: string;
}

export function HeaderNav({ links, className }: HeaderNavProps) {
    const pathname = usePathname();

    return (
        <nav className={cn("hidden lg:flex items-center gap-8", className)}>
            {links.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                            "relative transition-colors duration-200",
                            typography.variants.ui.nav.link,
                            isActive ? "text-foreground font-semibold" /* lint:allowed */ : "text-foreground/80 hover:text-foreground",
                            // Underline behavior:
                            // - Hover: opacity-40
                            // - Active: opacity-100 (visible and solid)
                            // - Inactive: opacity-0
                            "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full",
                            "after:bg-foreground after:transition-opacity after:duration-200",
                            isActive ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-40"
                        )}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
}
