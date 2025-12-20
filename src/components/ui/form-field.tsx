"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { spacing } from '@/design-system/tokens/spacing';

interface FormFieldProps {
    label: string;
    description?: string;
    className?: string;
    children: React.ReactNode;
}

export function FormField({
    label,
    description,
    className,
    children,
}: FormFieldProps) {
    return (
        <div className={cn(spacing.stackSm, className)}>
            <div className="flex flex-col gap-1">
                <Label className="text-sm font-semibold text-foreground font-sans">
                    {label}
                </Label>
                {description && (
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>
            {children}
        </div>
    );
}
