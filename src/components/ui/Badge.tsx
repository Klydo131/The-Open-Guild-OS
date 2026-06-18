import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "skill";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border",
        {
          "bg-[#241E15] border-[#3D3425] text-[#BFA97A]": variant === "default",
          "bg-[#FFC520]/10 border-[#FFC520]/30 text-[#FFC520]": variant === "gold",
          "bg-[#1A1510] border-[#3D3425] text-[#A08B60]": variant === "skill",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
