import { guilds } from "@/data/guilds";
import { Card } from "@/components/ui/Card";
import { GoldAmount } from "@/components/ui/GoldAmount";
import { cn } from "@/lib/utils";
import { Users, ScrollText, Star, Trophy } from "lucide-react";

export default function RankingsPage() {
  const sorted = [...guilds].sort((a, b) => b.totalGold - a.totalGold);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-[#E8D9C0] uppercase tracking-wide">Rankings</h1>
        <p className="text-sm text-[#5C4A2A] mt-2">The most renowned guilds across the realm.</p>
      </div>

      {/* Top 3 Podium: #2 left, #1 center (elevated), #3 right */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:items-end">
        {sorted.slice(0, 3).map((guild, index) => (
          <Card
            key={guild.id}
            variant={index === 0 ? "featured" : "dark"}
            className={cn(
              "p-5 text-center",
              index === 0 && "md:order-2 md:pb-8 ring-1 ring-amber-500/20",
              index === 1 && "md:order-1",
              index === 2 && "md:order-3",
            )}
          >
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold",
              index === 0 && "bg-amber-500/20 text-amber-400 ring-2 ring-amber-500/30",
              index === 1 && "bg-zinc-400/20 text-zinc-300 ring-2 ring-zinc-400/30",
              index === 2 && "bg-orange-600/20 text-orange-400 ring-2 ring-orange-600/30",
            )}>
              {index === 0 ? <Trophy className="w-6 h-6" /> : index + 1}
            </div>
            <h3 className="font-heading text-base font-bold text-[#E8D9C0]">{guild.name}</h3>
            <p className="text-xs text-[#5C4A2A] mb-3">Level {guild.level}</p>
            <GoldAmount amount={guild.totalGold} size="lg" className="justify-center" />
            <div className="flex justify-center gap-4 mt-3 text-[10px] text-[#5C4A2A]">
              <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {guild.memberCount}</span>
              <span className="flex items-center gap-1"><ScrollText className="w-3 h-3" /> {guild.questsCompleted}</span>
              <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-500" /> {guild.rating}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Full Table */}
      <Card variant="dark" className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#3D3425]">
                <th className="px-4 py-3 text-left text-xs font-heading font-bold text-[#5C4A2A] uppercase tracking-wider">Rank</th>
                <th className="px-4 py-3 text-left text-xs font-heading font-bold text-[#5C4A2A] uppercase tracking-wider">Guild</th>
                <th className="px-4 py-3 text-left text-xs font-heading font-bold text-[#5C4A2A] uppercase tracking-wider">Members</th>
                <th className="px-4 py-3 text-left text-xs font-heading font-bold text-[#5C4A2A] uppercase tracking-wider">Quests</th>
                <th className="px-4 py-3 text-left text-xs font-heading font-bold text-[#5C4A2A] uppercase tracking-wider">Rating</th>
                <th className="px-4 py-3 text-right text-xs font-heading font-bold text-[#5C4A2A] uppercase tracking-wider">Gold</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((guild, index) => (
                <tr key={guild.id} className="border-b border-[#241E15] hover:bg-[#241E15]/50 transition-colors">
                  <td className="px-4 py-3">
                    <span className={cn(
                      "w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-bold",
                      index === 0 && "bg-amber-500/20 text-amber-400",
                      index === 1 && "bg-zinc-400/20 text-zinc-300",
                      index === 2 && "bg-orange-600/20 text-orange-400",
                      index >= 3 && "text-[#5C4A2A]",
                    )}>{index + 1}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#241E15] border border-[#3D3425] flex items-center justify-center text-xs font-bold text-[#BFA97A]">{guild.name.charAt(0)}</div>
                      <div>
                        <div className="text-sm font-medium text-[#E8D9C0]">{guild.name}</div>
                        <div className="text-[10px] text-[#5C4A2A]">Level {guild.level}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#A08B60]">{guild.memberCount}</td>
                  <td className="px-4 py-3 text-sm text-[#A08B60]">{guild.questsCompleted}</td>
                  <td className="px-4 py-3 text-sm text-amber-400">{guild.rating}</td>
                  <td className="px-4 py-3 text-right"><GoldAmount amount={guild.totalGold} size="sm" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
