import Link from "next/link";
import { ArrowRight, Coins } from "lucide-react";
import { guilds } from "@/data/guilds";
import { cn, formatGold } from "@/lib/utils";

const RANK_STYLES = [
  "bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/30",
  "bg-zinc-400/20 text-zinc-300 ring-1 ring-zinc-400/30",
  "bg-orange-600/20 text-orange-400 ring-1 ring-orange-600/30",
];

export function GuildRankings() {
  const topGuilds = guilds.slice(0, 4);

  return (
    <div className="rounded-xl bg-tavern-surface border border-tavern-border p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide">Top Guilds</h3>
        <Link href="/rankings" className="text-[10px] text-parchment-400 hover:text-gold-400 transition-colors flex items-center gap-1 uppercase tracking-wider font-medium">
          View Leaderboard <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="space-y-3">
        {topGuilds.map((guild, index) => (
          <Link
            key={guild.id}
            href={`/guild-hall/${guild.id}`}
            className="flex items-center gap-3 group"
          >
            <div className={cn(
              "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
              RANK_STYLES[index] ?? "bg-tavern-surface-alt text-tavern-border-glow",
            )}>
              {index + 1}
            </div>

            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 bg-tavern-surface-alt border border-tavern-border">
              <span className="text-parchment-400">{guild.name.charAt(0)}</span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-parchment-200 truncate group-hover:text-gold-400 transition-colors">{guild.name}</div>
              <div className="text-[10px] text-tavern-border-glow">Level {guild.level}</div>
            </div>

            <div className="flex items-center gap-1 text-xs font-bold text-gold-400 shrink-0">
              <Coins className="w-3 h-3 text-gold-500" />
              {formatGold(guild.totalGold)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
