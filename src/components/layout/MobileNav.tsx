"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Castle, ScrollText, Shield, Hammer, Menu, X,
  Target, Award, Coins, Trophy, Flame,
} from "lucide-react";

const primaryItems = [
  { label: "Tavern", href: "/", icon: Castle },
  { label: "Quests", href: "/quest-board", icon: ScrollText },
  { label: "Guilds", href: "/guild-hall", icon: Shield },
  { label: "Artisans", href: "/artisans", icon: Hammer },
];

// Items surfaced through the "More" sheet — everything not in the bottom bar.
const moreItems = [
  { label: "Bounties", href: "/bounties", icon: Target, description: "Post a Quest" },
  { label: "Reputation", href: "/reputation", icon: Award, description: "Your Journey" },
  { label: "Treasury", href: "/treasury", icon: Coins, description: "Wallet & Skills" },
  { label: "Rankings", href: "/rankings", icon: Trophy, description: "Top Guilds" },
  { label: "Events", href: "/events", icon: Flame, description: "Live Challenges" },
];

export function MobileNav() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);

  const moreActive = moreItems.some((item) => item.href === pathname);

  return (
    <>
      {/* "More" sheet overlay */}
      {moreOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMoreOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-tavern-surface border-t border-tavern-border-glow rounded-t-2xl p-4 pb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide">More</h2>
              <button
                onClick={() => setMoreOpen(false)}
                className="p-1 text-tavern-border-glow hover:text-parchment-300 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-1">
              {moreItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMoreOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors",
                      isActive
                        ? "bg-gradient-to-r from-gold-400/15 to-transparent text-gold-400 border border-gold-400/20"
                        : "text-parchment-400 hover:bg-tavern-surface-alt border border-transparent"
                    )}
                  >
                    <item.icon className={cn("w-5 h-5 shrink-0", isActive ? "text-gold-400" : "text-tavern-border-glow")} />
                    <div>
                      <div className="text-sm font-medium leading-tight">{item.label}</div>
                      <div className="text-[10px] text-tavern-border-glow">{item.description}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-tavern-bg/95 backdrop-blur-sm border-t border-tavern-border">
        <div className="flex items-center justify-around py-2">
          {primaryItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 px-3 py-1 transition-colors",
                  isActive ? "text-gold-400" : "text-tavern-border-glow"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
          <button
            onClick={() => setMoreOpen(true)}
            className={cn(
              "flex flex-col items-center gap-0.5 px-3 py-1 transition-colors",
              moreActive || moreOpen ? "text-gold-400" : "text-tavern-border-glow"
            )}
            aria-label="More navigation options"
          >
            <Menu className="w-5 h-5" />
            <span className="text-[10px] font-medium">More</span>
          </button>
        </div>
      </nav>
    </>
  );
}
