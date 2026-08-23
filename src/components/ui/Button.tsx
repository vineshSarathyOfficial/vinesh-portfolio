import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "primary-sm" | "ghost-sm" | "icon-circular" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    
    // Base classes
    const baseClasses = "inline-flex items-center justify-center font-sans font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";
    
    // Variant classes mapping directly to design.md tokens
    const variantClasses = {
      primary: "bg-ink text-canvas-elevated rounded-pill text-base px-6 h-[44px] hover:bg-ink/90 active:scale-[0.98]",
      secondary: "bg-canvas-elevated text-ink border border-hairline rounded-pill text-base px-6 h-[44px] hover:bg-hairline-soft active:scale-[0.98]",
      "primary-sm": "bg-ink text-canvas-elevated rounded-sm text-sm px-3 h-[32px] hover:bg-ink/90 active:scale-[0.98]",
      "ghost-sm": "bg-canvas-elevated text-ink border border-hairline rounded-sm text-sm px-3 h-[32px] hover:bg-hairline-soft active:scale-[0.98]",
      "icon-circular": "bg-canvas-elevated text-ink border border-hairline rounded-full w-10 h-10 hover:bg-hairline-soft active:scale-[0.95]",
      ghost: "bg-transparent text-body hover:bg-hairline-soft hover:text-ink rounded-full px-3 h-8 text-sm",
    };

    return (
      <button
        className={twMerge(clsx(baseClasses, variantClasses[variant], className))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
export default Button;
