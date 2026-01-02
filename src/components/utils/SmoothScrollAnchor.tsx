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
        // If there's a hash, let the second effect handle it
        if (window.location.hash) return;

        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname]);

    // 2. Handle hash anchors with smooth behavior
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        };

        // Handle initial load with hash or click interactions
        // We listen to hashchange for backward/forward nav within page
        window.addEventListener("hashchange", handleHashChange);

        // Also run on mount/update if hash exists matching current path
        // (Use a small timeout to allow layout to settle if needed)
        const timeout = setTimeout(handleHashChange, 0);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
            clearTimeout(timeout);
        };
    }, []); // Run once on mount, but logic handles updates via event listener

    // 3. Intercept same-page anchor clicks
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a");
            if (!anchor) return;

            const href = anchor.getAttribute("href");
            if (!href || !href.startsWith("#")) return;

            e.preventDefault();
            const id = href.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                // Update URL without jump
                window.history.pushState(null, "", href);
                element.scrollIntoView({ behavior: "smooth" });
            }
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return null;
}
