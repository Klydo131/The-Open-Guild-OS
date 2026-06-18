import { Coins } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatGold } from "@/lib/utils";

interface GoldAmountProps {
  amount: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function GoldAmount({ amount, size = "md", className }: GoldAmountProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1 font-bold text-[#FFC520]",
      {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-lg": size === "lg",
      },
      className
    )}>
      <Coins className={cn(
        "text-[#E5A800]",
        { "w-3 h-3": size === "sm", "w-4 h-4": size === "md", "w-5 h-5": size === "lg" }
      )} />
      {formatGold(amount)}
    </span>
  );
}
