import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-heading font-bold uppercase tracking-wider transition-all duration-200 rounded-lg",
          {
            "bg-[#FFC520] hover:bg-[#FFD040] text-[#0D0A06] shadow-lg shadow-[#FFC520]/20 hover:shadow-[#FFC520]/40": variant === "primary",
            "bg-[#241E15] border border-[#5C4A2A] text-[#D4C4A0] hover:bg-[#3D3425] hover:border-[#FFC520]/50": variant === "secondary",
            "text-[#BFA97A] hover:text-[#FFC520] bg-transparent": variant === "ghost",
          },
          {
            "text-xs px-3 py-1.5": size === "sm",
            "text-sm px-5 py-2.5": size === "md",
            "text-base px-7 py-3": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export { Button };
