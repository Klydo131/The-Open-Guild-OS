import Link from "next/link";
import { ArrowRight, Coins } from "lucide-react";
import { guilds } from "@/data/guilds";
import { cn, formatGold } from "@/lib/utils";

export function GuildRankings() {
  const topGuilds = guilds.slice(0, 4);

  return (
    <div className="rounded-xl bg-[#1A1510] border border-[#3D3425] p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-sm font-bold text-[#E8D9C0] uppercase tracking-wide">Top Guilds</h3>
        <Link href="/rankings" className="text-[10px] text-[#BFA97A] hover:text-[#FFC520] transition-colors flex items-center gap-1 uppercase tracking-wider font-medium">
          View Leaderboard <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="space-y-3">
        {topGuilds.map((guild, index) => (
          <div key={guild.id} className="flex items-center gap-3">
            {/* Rank badge */}
            <div className={cn(
              "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
              index === 0 && "bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/30",
              index === 1 && "bg-zinc-400/20 text-zinc-300 ring-1 ring-zinc-400/30",
              index === 2 && "bg-orange-600/20 text-orange-400 ring-1 ring-orange-600/30",
              index >= 3 && "bg-[#241E15] text-[#5C4A2A]",
            )}>
              {index + 1}
            </div>

            {/* Guild emblem */}
            <div className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0",
              "bg-[#241E15] border border-[#3D3425]"
            )}>
              <span className="text-[#BFA97A]">{guild.name.charAt(0)}</span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-[#E8D9C0] truncate">{guild.name}</div>
              <div className="text-[10px] text-[#5C4A2A]">Level {guild.level}</div>
            </div>

            {/* Gold */}
            <div className="flex items-center gap-1 text-xs font-bold text-[#FFC520] shrink-0">
              <Coins className="w-3 h-3 text-[#E5A800]" />
              {formatGold(guild.totalGold)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
