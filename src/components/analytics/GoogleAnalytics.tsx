"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import Script from "next/script";

// Canonical key preference with fallback
const GA_MEASUREMENT_ID =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_ID;

function GoogleAnalyticsInner() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Route change tracking (SPA behavior)
    useEffect(() => {
        if (!GA_MEASUREMENT_ID) return;

        const qs = searchParams?.toString();
        const url = qs ? `${pathname}?${qs}` : pathname;

        // Guard: window.gtag might not be ready instantly
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("config", GA_MEASUREMENT_ID, {
                page_path: url,
            });
        }
    }, [pathname, searchParams]);

    return null;
}

export function GoogleAnalytics() {
    if (!GA_MEASUREMENT_ID) {
        return null;
    }

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            page_path: window.location.pathname,
          });
        `}
            </Script>
            <Suspense fallback={null}>
                <GoogleAnalyticsInner />
            </Suspense>
        </>
    );
}
