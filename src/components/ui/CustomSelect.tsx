import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface CustomSelectProps {
    label: string;
    placeholder?: string;
    options: string[];
    value?: string;
    onChange?: (value: string) => void;
}

export default function CustomSelect({ placeholder, options, value, onChange }: Omit<CustomSelectProps, 'label'>) {
    return (
        <div className="w-full">
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="w-full h-12 px-4">
                    <SelectValue placeholder={placeholder || "Select option..."} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((opt) => (
                        <SelectItem
                            key={opt}
                            value={opt}
                            className="focus:bg-accent focus:text-accent-foreground cursor-pointer py-3"
                        >
                            {opt}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
