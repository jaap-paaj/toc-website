"use server";

import { contactSchema, ContactFormState } from "@/lib/validation/contact";
import { headers } from "next/headers";

// Simple in-memory rate limit (Disclaimer: Resets on server restart/redeploy)
// For production scale, replace with Redis/Upstash
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3;

// Allowed Origins for CSRF protection
const ALLOWED_ORIGINS = new Set([
    "https://theonlyconstant.nl",
    "https://www.theonlyconstant.nl",
    "https://preview.theonlyconstant.nl",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001",
]);

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) || [];

    // Filter timestamps within window
    const windowTimestamps = timestamps.filter(
        (t) => now - t < RATE_LIMIT_WINDOW
    );

    if (windowTimestamps.length >= RATE_LIMIT_MAX) {
        return false;
    }

    windowTimestamps.push(now);
    rateLimitMap.set(ip, windowTimestamps);
    return true;
}

function sanitizeForSlack(text: unknown): string {
    if (typeof text !== "string") return "";

    // 1. Neutralize mentions and special syntax
    let safe = text
        .replace(/@/g, "@\\u200B") // Break mentions (@channel -> @\u200Bchannel)
        .replace(/</g, "<\\u200B") // Break links/commands (<link> -> <\u200Blink>)
        .replace(/!/g, "!\\u200B"); // Break special mentions (!channel -> !\u200Bchannel)

    // 2. Escape backticks to prevent breaking out of code blocks
    // specifically replace literal backticks with zero-width space + backtick
    // or a safe alternative. Here we break them.
    safe = safe.replace(/`/g, "'");

    // 3. Wrap in code block
    return `\`\`\`${safe}\`\`\``;
}

export async function submitContactForm(
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    try {
        const headersList = await headers();
        const ip = headersList.get("x-forwarded-for") || "unknown";

        // --- CSRF PROTECTION ---
        const origin = headersList.get("origin");
        const referer = headersList.get("referer");

        let requestOrigin: string | null = origin;

        // Fallback to parsed referer if origin is missing
        if (!requestOrigin && referer) {
            try {
                const refererUrl = new URL(referer);
                requestOrigin = refererUrl.origin;
            } catch {
                // Invalid referer, treat as unauthorized
                requestOrigin = null;
            }
        }

        if (!requestOrigin || !ALLOWED_ORIGINS.has(requestOrigin)) {
            console.error("CSRF Blocked. Origin:", requestOrigin, "Referer:", referer);
            return {
                success: false,
                message: "Unauthorized submission origin.",
            };
        }
        // -----------------------

        // 1. Rate Limit
        if (!checkRateLimit(ip)) {
            return {
                success: false,
                message: "Too many submissions. Please try again later.",
            };
        }

        // 2. Extract Data
        const rawData = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            _gotcha: formData.get("_gotcha"),
        };

        // 3. Honeypot Check
        if (rawData._gotcha) {
            // bot detected, return fake success
            return { success: true };
        }

        // 4. Validate Schema
        const validated = contactSchema.safeParse(rawData);

        if (!validated.success) {
            return {
                success: false,
                message: "Please fix the errors below.",
                errors: validated.error.flatten().fieldErrors,
            };
        }

        const { name, email, message } = validated.data;

        // 5. Send to Slack
        const webhookUrl = process.env.SLACK_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error("Missing SLACK_WEBHOOK_URL");
            // Fail gracefully to user
            return {
                success: false,
                message: "System configuration error. Please contact support via email.",
            };
        }

        const slackResponse = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                text: "New Contact Form Submission",
                blocks: [
                    {
                        type: "header",
                        text: {
                            type: "plain_text",
                            text: "New Inquiry from TOC Website",
                            emoji: true,
                        },
                    },
                    {
                        type: "section",
                        fields: [
                            {
                                type: "mrkdwn",
                                text: `*Name:*\n${sanitizeForSlack(name)}`,
                            },
                            {
                                type: "mrkdwn",
                                text: `*Email:*\n${sanitizeForSlack(email)}`,
                            },
                        ],
                    },
                    {
                        type: "section",
                        text: {
                            type: "mrkdwn",
                            text: `*Message:*\n${sanitizeForSlack(message)}`,
                        },
                    },
                    {
                        type: "context",
                        elements: [
                            {
                                type: "plain_text",
                                text: `IP: ${ip} | Time: ${new Date().toLocaleString()}`,
                                emoji: true,
                            },
                        ],
                    },
                ],
            }),
        });

        if (!slackResponse.ok) {
            console.error("Slack API Error:", await slackResponse.text());
            return {
                success: false,
                message: "Failed to send message. Please try again.",
            };
        }

        return { success: true };
    } catch (error) {
        console.error("Submission error:", error);
        return {
            success: false,
            message: "An unexpected error occurred. Please try again.",
        };
    }
}

