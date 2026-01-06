"use client";

import { cn } from "@/lib/utils";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading, Text } from "@/design-system/components/Typography";
import { Button } from "@/components/ui/Button";
import { spacing } from "@/design-system/tokens/spacing";

import { useState } from "react";

interface GoogleBookingSectionProps {
    title?: string;
    embedUrl: string;
    height?: string;
    className?: string;
    fallback?: {
        text: string;
        cta: {
            label: string;
        };
        contactLink: {
            label: string;
            href: string;
        };
    };
    enableContainer?: boolean;
    loadingText?: string;
}

export function GoogleBookingSection({
    title,
    embedUrl,
    height = "1000px",
    className,
    fallback,
    enableContainer = true,
    loadingText,
}: GoogleBookingSectionProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={cn(enableContainer && "container mx-auto", className)}>
            <div className="flex flex-col gap-8 md:gap-12">
                {title && (
                    <Heading level={1} size="page" className="text-center">
                        {title}
                    </Heading>
                )}

                <Surface variant="card" className="p-0 overflow-hidden bg-white w-full relative">
                    {/* Skeleton Overlay */}
                    {isLoading && (
                        <div className="absolute inset-0 bg-background/5 p-8 flex flex-col items-center justify-center gap-6 animate-pulse z-10">
                            <div className="w-16 h-16 rounded-full bg-muted/20" />
                            <div className="h-4 w-48 bg-muted/20 rounded" />
                            <div className="w-full max-w-md space-y-3">
                                <div className="h-3 w-full bg-muted/10 rounded" />
                                <div className="h-3 w-5/6 bg-muted/10 rounded" />
                                <div className="h-3 w-4/6 bg-muted/10 rounded" />
                            </div>
                            {loadingText && (
                                <Text size="sm" className="text-muted-foreground">
                                    {loadingText}
                                </Text>
                            )}
                        </div>
                    )}

                    <iframe
                        src={embedUrl}
                        width="100%"
                        height={height}
                        frameBorder="0"
                        className={cn("w-full transition-opacity duration-500", isLoading ? "opacity-0" : "opacity-100")}
                        title="Schedule Appointment"
                        onLoad={() => setIsLoading(false)}
                    />
                </Surface>

                {fallback && (
                    <div className="flex flex-col items-center gap-4 text-center">
                        <Button
                            variant="secondary"
                            size="default"
                            asChild
                        >
                            <a href={embedUrl} target="_blank" rel="noopener noreferrer">
                                {fallback.cta.label}
                            </a>
                        </Button>
                        <Text size="sm" className="text-muted-foreground">
                            {fallback.text}{" "}
                            <a href={fallback.contactLink.href} className="underline hover:text-foreground transition-colors">
                                {fallback.contactLink.label}
                            </a>
                        </Text>
                    </div>
                )}
            </div>
        </div>
    );
}
