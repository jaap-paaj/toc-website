"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { HeaderCta } from "./HeaderCta";
import { HeaderMenuToggle } from "./HeaderMenuToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

import { HeaderNavShell } from "./HeaderNavShell";
import { typography } from "@/design-system/tokens/typography";
import { useLocale } from "@/lib/i18n/useLocale";
import { useLocalizedHref } from "@/lib/i18n/LocalePathsProvider";
import { headerLinks, headerCta, type NavLink } from "@/app/_content/navigation";

export interface HeaderProps {
    variant?: "home" | "default";
    links?: NavLink[];
    cta?: NavLink;
    showBackButton?: boolean; // Legacy prop support
}

export function Header({
    links,
    cta = headerCta,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    variant = "default",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    showBackButton: _showBackButton
}: HeaderProps) {
    const lang = useLocale();
    const localizeHref = useLocalizedHref();
    const resolvedLinks = links ?? headerLinks[lang];
    const localizedLinks = resolvedLinks.map((l) => ({ ...l, href: localizeHref(l.href, lang) }));
    const localizedCta = { ...cta, href: localizeHref(cta.href, lang) };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const _isHome = variant === "home"; // Unused currently as header look is consistent

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    // Capsule Styles now delegated to HeaderNavShell which uses .nav-surface

    return (
        <>
            <header
                className={cn(
                    "tone-light fixed top-0 inset-x-0 z-50 py-4 transition-all duration-200",
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
                            <HeaderNav links={localizedLinks} />
                            <LanguageSwitcher className="hidden lg:flex" />
                            <HeaderCta cta={localizedCta} className="hidden lg:block" />
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
                        {localizedLinks.map((link) => (
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
                            href={localizedCta.href}
                            className={cn(
                                "mt-4",
                                typography.variants.ui.nav.brand,
                                "text-primary"
                            )}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {localizedCta.label}
                        </a>
                        <LanguageSwitcher className="mt-6" />
                    </nav>
                </div>
            )}
        </>
    );
}
