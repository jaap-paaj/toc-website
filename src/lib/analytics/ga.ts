export { };

declare global {
    interface Window {
        gtag: (
            command: "config" | "event" | "js",
            targetId: string,
            config?: Record<string, unknown>
        ) => void;
    }
}

export function trackEvent(
    event: string,
    params?: Record<string, unknown>
) {
    if (
        typeof window === "undefined" ||
        typeof window.gtag !== "function"
    ) {
        return;
    }

    window.gtag("event", event, params);
}
