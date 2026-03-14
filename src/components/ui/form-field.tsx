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
    const id = React.useId();
    const errorId = `${id}-error`;
    const child = React.Children.only(children) as React.ReactElement;

    const extraProps: Record<string, unknown> = { id };
    if (error) {
        extraProps["aria-invalid"] = true;
        extraProps["aria-describedby"] = errorId;
    }

    return (
        <div className={cn(spacing.stackSm, className)}>
            <div className="flex flex-col gap-1">
                <Label htmlFor={id} className={cn("text-foreground", typography.variants.meta.label)}>
                    {label}
                </Label>
                {description && (
                    <p className={cn("text-muted-foreground", typography.variants.body.sm)}>
                        {description}
                    </p>
                )}
            </div>
            {React.cloneElement(child, extraProps as React.Attributes)}
            {error && (
                <p id={errorId} role="alert" className={cn("text-destructive", typography.variants.body.sm)}>
                    {error}
                </p>
            )}
        </div>
    );
}
