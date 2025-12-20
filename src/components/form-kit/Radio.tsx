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

export function Radio({ label, options, value, onValueChange, className }: RadioProps) {
    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            {label && (
                <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">
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
                        <Label htmlFor={option.value} className="text-sm font-medium text-foreground cursor-pointer">
                            {option.label}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}
