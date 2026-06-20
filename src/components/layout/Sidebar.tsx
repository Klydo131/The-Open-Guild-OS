"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/data/navigation";
import { DAILY_REWARD_DAYS } from "@/lib/constants";
import {
  Castle, ScrollText, Shield, Hammer, Target,
  Award, Coins, Trophy, Flame, Check
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Castle, ScrollText, Shield, Hammer, Target,
  Award, Coins, Trophy, Flame,
};

export function Sidebar() {
  const pathname = usePathname();
  const [currentDay, setCurrentDay] = useState(3);
  const [claimed, setClaimed] = useState(false);

  function handleClaim() {
    if (claimed || currentDay >= DAILY_REWARD_DAYS) return;
    setClaimed(true);
    setTimeout(() => {
      setCurrentDay((prev) => Math.min(prev + 1, DAILY_REWARD_DAYS));
    }, 600);
  }

  return (
    <aside className="hidden lg:flex flex-col w-56 bg-tavern-bg border-r border-tavern-border h-screen sticky top-0 pt-4 pb-6">
      {/* Logo */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center">
            <Shield className="w-6 h-6 text-tavern-bg" />
          </div>
          <div>
            <div className="text-xs text-parchment-500 uppercase tracking-widest font-medium">The Open</div>
            <div className="font-heading font-bold text-parchment-200 text-sm tracking-wide">GUILD OS</div>
          </div>
        </div>
        <div className="text-[10px] text-tavern-border-glow uppercase tracking-widest mt-1">Build. Govern. Prosper.</div>
      </div>

      {/* Nav Items */}
      <nav aria-label="Main navigation" className="flex-1 px-2 space-y-0.5">
        {navigationItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group",
                isActive
                  ? "bg-gradient-to-r from-gold-400/15 to-transparent text-gold-400 border border-gold-400/20"
                  : "text-parchment-500 hover:text-parchment-300 hover:bg-tavern-surface border border-transparent"
              )}
            >
              {Icon && <Icon className={cn("w-5 h-5 shrink-0", isActive ? "text-gold-400" : "text-tavern-border-glow group-hover:text-parchment-500")} />}
              <div>
                <div className="font-medium leading-tight">{item.label}</div>
                <div className={cn("text-[10px]", isActive ? "text-parchment-400" : "text-tavern-border-glow")}>{item.description}</div>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Daily Login Reward */}
      <div className="mx-3 mt-4 p-3 rounded-lg bg-gradient-to-b from-tavern-surface-alt to-tavern-surface border border-tavern-border">
        <div className="text-xs font-heading text-gold-400 font-bold uppercase">Daily Login Reward</div>
        <div className="text-[10px] text-parchment-500 mt-1">Day {currentDay} of {DAILY_REWARD_DAYS}</div>
        <div className="flex gap-1 mt-2">
          {Array.from({ length: DAILY_REWARD_DAYS }, (_, i) => i + 1).map(day => (
            <div key={day} className={cn(
              "w-5 h-5 rounded text-[8px] flex items-center justify-center font-bold",
              day <= currentDay ? "bg-gold-400/20 text-gold-400" : "bg-tavern-surface-alt text-tavern-border-glow"
            )}>{day}</div>
          ))}
        </div>
        <button
          onClick={handleClaim}
          disabled={claimed}
          className={cn(
            "mt-2 w-full text-[10px] font-heading font-bold uppercase rounded py-1 transition-colors flex items-center justify-center gap-1",
            claimed
              ? "bg-gold-400/20 text-gold-400 cursor-default"
              : "bg-gold-400 text-tavern-bg hover:bg-gold-300"
          )}
        >
          {claimed ? <><Check className="w-3 h-3" /> Claimed!</> : "Claim Reward"}
        </button>
      </div>
    </aside>
  );
}
