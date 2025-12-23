"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Heading } from "@/design-system/components/Typography";

type WorkflowCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    ctaLabel: string;
    className?: string;
};

export function WorkflowCard({
    icon,
    title,
    description,
    href,
    ctaLabel,
    className,
}: WorkflowCardProps) {
    return (
        <Link href={href} scroll={true} className="group block h-full">
            <div
                className={cn(
                    "bg-[var(--surface-card)] text-card-foreground flex flex-col gap-6 rounded-surface border border-border/50 py-6 shadow-surface h-full hover:shadow-surface-hover transition-all duration-300 group-hover:border-primary/20",
                    className
                )}
            >
                <div className="p-8 stack-section items-start text-left h-full">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 [&>svg]:w-8 [&>svg]:h-8 [&>svg]:text-primary">
                        {icon}
                    </div>

                    <Heading level={3} size="sm" className="group-hover:text-primary transition-colors">
                        {title}
                    </Heading>

                    <p className="font-sans text-sm text-muted-foreground">
                        {description}
                    </p>

                    <div className="mt-auto pt-4 text-primary font-medium text-sm group-hover:underline decoration-2 underline-offset-4">
                        {ctaLabel}
                    </div>
                </div>
            </div>
        </Link>
    );
}
