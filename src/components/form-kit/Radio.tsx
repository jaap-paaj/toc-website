import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface RadioOption {
    label: string;
    value: string;
}

interface RadioProps {
    label?: string;
    options: RadioOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
}

import { typography } from "@/design-system/tokens/typography";
import { cn } from "@/lib/utils";

// ... interfaces ...

export function Radio({ label, options, value, onValueChange, className }: RadioProps) {
    return (
        <div className={cn("flex flex-col gap-3", className)}>
            {label && (
                <Label className={cn("text-muted-foreground ml-1", typography.variants.meta.label)}>
                    {label}
                </Label>
            )}
            <RadioGroup value={value} onValueChange={onValueChange} className="flex flex-col gap-2">
                {options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem
                            value={option.value}
                            id={option.value}
                            className="w-5 h-5"
                        />
                        <Label htmlFor={option.value} className={cn("text-foreground cursor-pointer", typography.variants.body.sm)}>
                            {option.label}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}
