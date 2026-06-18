"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Castle, ScrollText, Shield, Hammer, Target,
  Award, Coins, Trophy, Flame
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Castle, ScrollText, Shield, Hammer, Target,
  Award, Coins, Trophy, Flame,
};

const navItems = [
  { label: "Tavern", href: "/", icon: "Castle", description: "Home Base" },
  { label: "Quest Board", href: "/quest-board", icon: "ScrollText", description: "Find Work" },
  { label: "Guild Hall", href: "/guild-hall", icon: "Shield", description: "Manage Guilds" },
  { label: "Artisans", href: "/artisans", icon: "Hammer", description: "Find Talent" },
  { label: "Bounties", href: "/bounties", icon: "Target", description: "Post a Quest" },
  { label: "Reputation", href: "/reputation", icon: "Award", description: "Your Journey" },
  { label: "Treasury", href: "/treasury", icon: "Coins", description: "Wallet & Skills" },
  { label: "Rankings", href: "/rankings", icon: "Trophy", description: "Top Guilds" },
  { label: "Events", href: "/events", icon: "Flame", description: "Live Challenges" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-56 bg-[#0D0A06] border-r border-[#3D3425] h-screen sticky top-0 pt-4 pb-6">
      {/* Logo */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FFC520] to-[#E5A800] flex items-center justify-center">
            <Shield className="w-6 h-6 text-[#0D0A06]" />
          </div>
          <div>
            <div className="text-xs text-[#A08B60] uppercase tracking-widest font-medium">The Open</div>
            <div className="font-heading font-bold text-[#E8D9C0] text-sm tracking-wide">GUILD OS</div>
          </div>
        </div>
        <div className="text-[10px] text-[#5C4A2A] uppercase tracking-widest mt-1">Build. Govern. Prosper.</div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-2 space-y-0.5">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group",
                isActive
                  ? "bg-gradient-to-r from-[#FFC520]/15 to-transparent text-[#FFC520] border border-[#FFC520]/20"
                  : "text-[#A08B60] hover:text-[#D4C4A0] hover:bg-[#1A1510] border border-transparent"
              )}
            >
              {Icon && <Icon className={cn("w-5 h-5 shrink-0", isActive ? "text-[#FFC520]" : "text-[#5C4A2A] group-hover:text-[#A08B60]")} />}
              <div>
                <div className="font-medium leading-tight">{item.label}</div>
                <div className={cn("text-[10px]", isActive ? "text-[#BFA97A]" : "text-[#5C4A2A]")}>{item.description}</div>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Daily Login Reward */}
      <div className="mx-3 mt-4 p-3 rounded-lg bg-gradient-to-b from-[#241E15] to-[#1A1510] border border-[#3D3425]">
        <div className="text-xs font-heading text-[#FFC520] font-bold uppercase">Daily Login Reward</div>
        <div className="text-[10px] text-[#A08B60] mt-1">Day 3 of 7</div>
        <div className="flex gap-1 mt-2">
          {[1,2,3,4,5,6,7].map(d => (
            <div key={d} className={cn(
              "w-5 h-5 rounded text-[8px] flex items-center justify-center font-bold",
              d <= 3 ? "bg-[#FFC520]/20 text-[#FFC520]" : "bg-[#241E15] text-[#5C4A2A]"
            )}>{d}</div>
          ))}
        </div>
        <button className="mt-2 w-full text-[10px] font-heading font-bold uppercase bg-[#FFC520] text-[#0D0A06] rounded py-1 hover:bg-[#FFD040] transition-colors">
          Claim Reward
        </button>
      </div>
    </aside>
  );
}
