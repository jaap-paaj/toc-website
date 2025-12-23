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

    // 2. Handle hash anchors with native behavior (relies on CSS scroll-margin-top)
    // Removed active scroll hijacking to prevent layout/header conflicts.


    return null;
}
