import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export function TextInput({ label, className, ...props }: TextInputProps) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            {label && (
                <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">
                    {label}
                </Label>
            )}
            <Input
                className={`w-full h-12 px-4 ${className}`}
                {...props}
            />
        </div>
    );
}
