"use client";

import { useSyncExternalStore } from "react";

/**
 * The visitor's cookie decision, shared between the banner, the footer's
 * cookie-settings link and the GA4 loader.
 *
 * One stored value, one change event: GoogleAnalytics re-renders the moment
 * consent is granted, so GA loads without a page reload — and never loads
 * before the choice is made, which is the legal requirement the banner
 * exists for.
 */
export type ConsentValue = "granted" | "denied";

const STORAGE_KEY = "toc-consent";
const CHANGE_EVENT = "toc-consent-change";
const OPEN_EVENT = "toc-consent-open";

export function getStoredConsent(): ConsentValue | null {
    if (typeof window === "undefined") return null;
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
}

export function setStoredConsent(value: ConsentValue): void {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Reopen the banner — the footer's cookie-settings link calls this. */
export function openConsentSettings(): void {
    window.dispatchEvent(new Event(OPEN_EVENT));
}

/** Subscribe to reopen requests. Returns the cleanup function. */
export function onOpenConsentSettings(callback: () => void): () => void {
    window.addEventListener(OPEN_EVENT, callback);
    return () => window.removeEventListener(OPEN_EVENT, callback);
}

function subscribe(callback: () => void): () => void {
    window.addEventListener(CHANGE_EVENT, callback);
    // "storage" keeps two open tabs in agreement.
    window.addEventListener("storage", callback);
    return () => {
        window.removeEventListener(CHANGE_EVENT, callback);
        window.removeEventListener("storage", callback);
    };
}

/**
 * The current choice, or null while none is made. Server-rendered HTML always
 * sees null: localStorage only exists in the browser, and the banner guards
 * against the resulting first-paint mismatch itself.
 */
export function useConsent(): ConsentValue | null {
    return useSyncExternalStore(subscribe, getStoredConsent, () => null);
}
