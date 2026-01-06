"use client";

import { cn } from "@/lib/utils";

import { GoogleBookingSection } from "@/components/sections/GoogleBookingSection";
import { scanContent } from "@/app/_content/ai-opportunity-scan";
import { spacing } from "@/design-system/tokens/spacing";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/design-system/components/Typography";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ScanBookingModule() {
    return (
        <section className={spacing.modulePad.m}>
            <div className={cn("container mx-auto max-w-4xl", spacing.stackLg)}>

                <div className={cn("flex flex-row items-center w-full", spacing.component.sectionHeader)}>
                    {/* Left: Back Link */}
                    <div className="flex-1 flex justify-start">
                        <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="rounded-full bg-foreground text-background hover:bg-foreground/90 hover:text-background"
                            aria-label={scanContent.booking.backLink.label}
                        >
                            <Link href={scanContent.booking.backLink.href}>
                                <ArrowLeft />
                            </Link>
                        </Button>
                    </div>

                    {/* Center: Title */}
                    <Heading level={1} size="page" className="text-center shrink-0">
                        {scanContent.booking.title}
                    </Heading>

                    {/* Right: Spacer for optical centering */}
                    <div className="flex-1" aria-hidden="true" />
                </div>

                <div className="w-full">
                    <GoogleBookingSection
                        // Title is now rendered above
                        title={undefined}
                        embedUrl={scanContent.booking.embedUrl}
                        fallback={scanContent.booking.fallback}
                        className="w-full"
                        enableContainer={false}
                        loadingText={scanContent.booking.loadingText}
                    />
                </div>
            </div>
        </section>
    );
}
