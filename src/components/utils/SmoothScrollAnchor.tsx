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
        // If there's a hash, let the browser or effect handle it naturally first,
        // but generally next/link handles the route transition.
        // We ensure "auto" behavior to reset position.
        if (window.location.hash) return;

        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname]);

    // 2. Handle hash anchors (HashChange & Initial Load)
    useEffect(() => {
        const getBehavior = (): ScrollBehavior => {
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            return prefersReducedMotion ? "auto" : "smooth";
        };

        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: getBehavior() });
                }
            }
        };

        // Initial Load: Force AUTO (Instant) to avoid "load animation"
        // We do this immediately if hash exists
        if (window.location.hash) {
            const id = window.location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                // Use requestAnimationFrame to ensure layout is ready, but force instant jump
                requestAnimationFrame(() => {
                    element.scrollIntoView({ behavior: "auto" });
                });
            }
        }

        // Listen for back/forward navigation
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    // 3. Intercept same-page anchor clicks (Capture Phase)
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a");
            if (!anchor) return;

            const href = anchor.getAttribute("href");
            if (!href || !href.startsWith("#")) return;

            // Check if element exists before intervening
            const id = href.replace("#", "");
            const element = document.getElementById(id);
            if (!element) return;

            e.preventDefault();

            // Push state manually to update URL
            window.history.pushState(null, "", href);

            // Determine behavior based on reduced motion preference
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            element.scrollIntoView({
                behavior: prefersReducedMotion ? "auto" : "smooth"
            });
        };

        // Use capture phase to ensure we handle it before others
        document.addEventListener("click", handleClick, { capture: true });
        return () => document.removeEventListener("click", handleClick, { capture: true });
    }, []);

    return null;
}
