import React from 'react';
import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CheckboxProps {
    label: string;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    id?: string;
}

import { typography } from "@/design-system/tokens/typography";
import { cn } from "@/lib/utils";

// ... interfaces ...

export function Checkbox({ label, checked, onCheckedChange, id }: CheckboxProps) {
    // Use label as ID if ID is not provided, for accessibility
    const checkboxId = id || label.replace(/\s+/g, '-').toLowerCase();

    return (
        <div className="flex items-center space-x-2">
            <ShadcnCheckbox
                id={checkboxId}
                checked={checked}
                onCheckedChange={onCheckedChange}
                className="h-5 w-5"
            />
            <Label
                htmlFor={checkboxId}
                className={cn("peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground", typography.variants.body.sm)}
            >
                {label}
            </Label>
        </div>
    );
}
