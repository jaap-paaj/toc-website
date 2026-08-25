"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import Script from "next/script";
import { useConsent } from "@/lib/consent/consent";

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
    // GA4 sets a _ga cookie and processes IP addresses, which makes loading it
    // consent-gated under the AVG. Nothing renders — so nothing loads — until
    // the cookie banner is answered with "granted"; granting flips this render
    // in place, so the first pageview is still counted without a reload.
    const consent = useConsent();

    if (!GA_MEASUREMENT_ID || consent !== "granted") {
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
