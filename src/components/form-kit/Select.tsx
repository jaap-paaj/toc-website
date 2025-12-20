import React from 'react';
import {
    Select as ShadcnSelect,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label";

interface SelectProps {
    label?: string;
    placeholder?: string;
    options: string[];
    value?: string;
    onChange?: (value: string) => void;
    className?: string; // Allow overrides if needed
}

export function Select({ label, placeholder, options, value, onChange, className }: SelectProps) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            {label && (
                <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">
                    {label}
                </Label>
            )}
            <ShadcnSelect value={value} onValueChange={onChange}>
                <SelectTrigger className={`w-full h-12 px-4 ${className}`}>
                    <SelectValue placeholder={placeholder || "Select option..."} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((opt) => (
                        <SelectItem
                            key={opt}
                            value={opt}
                            className="cursor-pointer py-3"
                        >
                            {opt}
                        </SelectItem>
                    ))}
                </SelectContent>
            </ShadcnSelect>
        </div>
    );
}
