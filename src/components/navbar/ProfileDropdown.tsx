"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, User, Award, Coins, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const MENU_ITEMS = [
  { label: "Profile", href: "/reputation", icon: User },
  { label: "Reputation", href: "/reputation", icon: Award },
  { label: "Treasury", href: "/treasury", icon: Coins },
  { label: "Settings", href: "#", icon: Settings },
];

export function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 pl-2"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-tavern-border to-tavern-surface-alt flex items-center justify-center ring-2 ring-amber-400 text-xs font-bold text-parchment-300">
          GM
        </div>
        <div className="hidden sm:block text-left">
          <div className="text-xs font-medium text-parchment-200">Guildmaster</div>
          <div className="text-[10px] text-tavern-border-glow">Level 12</div>
        </div>
        <ChevronDown className={cn(
          "w-3 h-3 text-tavern-border-glow hidden sm:block transition-transform duration-200",
          open && "rotate-180"
        )} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-tavern-surface border border-tavern-border rounded-xl shadow-xl shadow-black/40 overflow-hidden z-50">
          <div className="px-4 py-3 border-b border-tavern-border">
            <p className="text-sm font-heading font-bold text-parchment-200">Guildmaster</p>
            <p className="text-[10px] text-tavern-border-glow">Full-Stack Artisan — Highline Guild</p>
          </div>

          <div className="py-1">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-parchment-400 hover:bg-tavern-surface-alt hover:text-parchment-200 transition-colors"
              >
                <item.icon className="w-4 h-4 text-tavern-border-glow" />
                {item.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-tavern-border py-1">
            <button
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-ember-400 hover:bg-tavern-surface-alt transition-colors w-full text-left"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
