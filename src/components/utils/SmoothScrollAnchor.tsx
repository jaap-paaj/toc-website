"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global smooth scroll handler for hash links.
 * Replaces global CSS `scroll-behavior: smooth` to avoid
 * smoothing Next.js route transitions.
 */
export function SmoothScrollAnchor() {
    const pathname = usePathname();

    // 1. Force instant scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname]);

    // 2. Handle hash anchors with smooth scroll
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest("a");
            if (!target) return;

            const href = target.getAttribute("href");
            if (!href?.startsWith("#") || href === "#") return;

            e.preventDefault();
            const id = href.substring(1);
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                window.history.pushState(null, "", href);
            }
        };

        document.addEventListener("click", handleAnchorClick);
        return () => document.removeEventListener("click", handleAnchorClick);
    }, []);

    return null;
}
