import React from 'react';
import { Switch as ShadcnSwitch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface SwitchProps {
    label: string;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    id?: string;
}

export function Switch({ label, checked, onCheckedChange, id }: SwitchProps) {
    const switchId = id || label.replace(/\s+/g, '-').toLowerCase();

    return (
        <div className="flex items-center space-x-2">
            <ShadcnSwitch
                id={switchId}
                checked={checked}
                onCheckedChange={onCheckedChange}

            />
            <Label htmlFor={switchId} className="text-sm font-medium text-foreground">
                {label}
            </Label>
        </div>
    );
}
