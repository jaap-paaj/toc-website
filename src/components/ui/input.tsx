import * as React from "react"

import { cn } from "@/lib/utils"
import { typography } from "@/design-system/tokens/typography"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full min-w-0 rounded-surface border border-[var(--instrument-input-border)] bg-[var(--instrument-input-bg)] text-[var(--instrument-input-fg)] px-3 py-1 shadow-surface transition-[color,box-shadow] outline-none",
        typography.variants.ui.input.value,
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        "placeholder:text-[var(--instrument-input-placeholder)]",
        "selection:bg-primary selection:text-primary-foreground",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        "md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
