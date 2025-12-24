"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { spacing } from '@/design-system/tokens/spacing';

import { typography } from "@/design-system/tokens/typography";

interface FormFieldProps {
    label: string;
    description?: string;
    error?: string;
    className?: string;
    children: React.ReactNode;
}

export function FormField({
    label,
    description,
    error,
    className,
    children,
}: FormFieldProps) {
    const child = React.Children.only(children) as React.ReactElement;

    return (
        <div className={cn(spacing.stackSm, className)}>
            <div className="flex flex-col gap-1">
                <Label className={cn("text-foreground", typography.variants.meta.label)}>
                    {label}
                </Label>
                {description && (
                    <p className={cn("text-muted-foreground", typography.variants.body.sm)}>
                        {description}
                    </p>
                )}
            </div>
            {error ? React.cloneElement(child, { "aria-invalid": true } as React.Attributes & { "aria-invalid"?: boolean }) : child}
            {error && (
                <p className={cn("text-destructive", typography.variants.body.sm)}>
                    {error}
                </p>
            )}
        </div>
    );
}
