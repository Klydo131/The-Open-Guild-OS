import Link from "next/link";
import { ScrollText, Star, Shield } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function JourneyStats() {
  return (
    <Link href="/reputation" className="block rounded-xl bg-tavern-surface border border-tavern-border p-4 hover:border-tavern-border-glow transition-colors group">
      <h3 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide mb-4 group-hover:text-gold-400 transition-colors">Your Journey</h3>

      <div className="flex items-center gap-3 mb-4">
        <Avatar initials="GM" size="lg" level={12} />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-parchment-200">Guildmaster</span>
            <span className="text-xs bg-tavern-surface-alt border border-tavern-border rounded px-1.5 py-0.5 text-parchment-500">12</span>
          </div>
          <ProgressBar value={2350} max={3000} size="sm" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: ScrollText, value: "28", label: "Quests Completed" },
          { icon: Star, value: "Trusted", label: "Reputation" },
          { icon: Shield, value: "Highline Guild", label: "Guild", smallText: true },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <stat.icon className="w-3 h-3 text-tavern-border-glow" />
            </div>
            <div className={`font-bold text-parchment-200 ${stat.smallText ? "text-sm" : "text-lg"}`}>{stat.value}</div>
            <div className="text-[10px] text-tavern-border-glow">{stat.label}</div>
          </div>
        ))}
      </div>
    </Link>
  );
}
