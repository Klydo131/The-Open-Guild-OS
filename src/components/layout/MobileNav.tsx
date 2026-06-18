"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Castle, ScrollText, Shield, Hammer, Menu } from "lucide-react";

const mobileNavItems = [
  { label: "Tavern", href: "/", icon: Castle },
  { label: "Quests", href: "/quest-board", icon: ScrollText },
  { label: "Guilds", href: "/guild-hall", icon: Shield },
  { label: "Artisans", href: "/artisans", icon: Hammer },
  { label: "More", href: "#", icon: Menu },
];

export function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0D0A06]/95 backdrop-blur-sm border-t border-[#3D3425]">
      <div className="flex items-center justify-around py-2">
        {mobileNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1 transition-colors",
                isActive ? "text-[#FFC520]" : "text-[#5C4A2A]"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
