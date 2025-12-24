"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { HeaderCta } from "./HeaderCta";
import { HeaderMenuToggle } from "./HeaderMenuToggle";

import { HeaderNavShell } from "./HeaderNavShell";
import { typography } from "@/design-system/tokens/typography";

export interface HeaderProps {
    variant?: "home" | "default";
    links?: { label: string; href: string }[];
    cta?: { label: string; href: string };
    showBackButton?: boolean; // Legacy prop support
}

const DEFAULT_LINKS = [
    { label: "Educate", href: "/educate" },
    { label: "Automate", href: "/automate" },
    { label: "Innovate", href: "/innovate" },
    { label: "About us", href: "/about" },
];

const DEFAULT_CTA = { label: "Contact", href: "/contact" };

export function Header({
    links = DEFAULT_LINKS,
    cta = DEFAULT_CTA,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    variant = "default",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    showBackButton: _showBackButton
}: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const _isHome = variant === "home"; // Unused currently as header look is consistent

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    // Capsule Styles now delegated to HeaderNavShell which uses .nav-surface

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 inset-x-0 z-50 py-4 transition-all duration-200",
                    "border-0 border-b-0 shadow-none ring-0 outline-none" // Hard constraint: Divider-free root
                )}
            >
                <div className="container flex justify-center">
                    <HeaderNavShell>

                        {/* Left: Logo */}
                        <div className="flex-shrink-0">
                            <HeaderLogo />
                        </div>

                        {/* Right: Nav + CTA + Mobile Toggle */}
                        <div className="flex items-center gap-6 md:gap-8 ml-auto">
                            <HeaderNav links={links} />
                            <HeaderCta cta={cta} className="hidden lg:block" />
                            <HeaderMenuToggle
                                isOpen={isMenuOpen}
                                onToggle={toggleMenu}
                                className="lg:hidden"
                            />
                        </div>

                    </HeaderNavShell>
                </div>
            </header>

            {/* Mobile Menu Overlay (Placeholder) */}
            {isMenuOpen && (
                <div
                    id="mobile-menu"
                    className="fixed inset-0 z-40 bg-background pt-32 px-6 animate-in fade-in slide-in-from-top-10 duration-200"
                >

                    {/* TODO: Full mobile menu implementation */}
                    <nav className="flex flex-col gap-6 items-center">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    typography.variants.ui.nav.brand,
                                    "text-foreground"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={cta.href}
                            className={cn(
                                "mt-4",
                                typography.variants.ui.nav.brand,
                                "text-primary"
                            )}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {cta.label}
                        </a>
                    </nav>
                </div>
            )}
        </>
    );
}
