import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "icon-circular";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {

    const baseClasses = "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variantClasses = {
      primary: "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 rounded-full text-base px-6 h-[44px] hover:bg-accent-cyan/20 hover:border-accent-cyan/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] active:scale-[0.98]",
      secondary: "glass text-ink rounded-full text-base px-6 h-[44px] hover:text-accent-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] active:scale-[0.98]",
      ghost: "bg-transparent text-body hover:text-ink hover:bg-white/5 rounded-full px-3 h-8 text-sm",
      "icon-circular": "glass text-mute border border-hairline rounded-full w-10 h-10 hover:text-accent-cyan hover:border-accent-cyan/30 active:scale-[0.95]",
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
