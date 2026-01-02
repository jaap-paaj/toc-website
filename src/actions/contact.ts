"use server";

import { contactSchema, ContactFormState } from "@/lib/validation/contact";
import { headers } from "next/headers";

// Simple in-memory rate limit (Disclaimer: Resets on server restart/redeploy)
// For production scale, replace with Redis/Upstash
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3;

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) || [];

    // Filter timestamps within window
    const windowTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);

    if (windowTimestamps.length >= RATE_LIMIT_MAX) {
        return false;
    }

    windowTimestamps.push(now);
    rateLimitMap.set(ip, windowTimestamps);
    return true;
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    try {
        const headersList = await headers();
        const ip = headersList.get("x-forwarded-for") || "unknown";

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
                            emoji: true
                        }
                    },
                    {
                        type: "section",
                        fields: [
                            {
                                type: "mrkdwn",
                                text: `*Name:*\n${name}`
                            },
                            {
                                type: "mrkdwn",
                                text: `*Email:*\n${email}`
                            }
                        ]
                    },
                    {
                        type: "section",
                        text: {
                            type: "mrkdwn",
                            text: `*Message:*\n${message}`
                        }
                    },
                    {
                        type: "context",
                        elements: [
                            {
                                type: "plain_text",
                                text: `IP: ${ip} | Time: ${new Date().toLocaleString()}`,
                                emoji: true
                            }
                        ]
                    }
                ]
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
