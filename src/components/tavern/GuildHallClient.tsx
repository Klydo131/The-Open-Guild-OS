"use client";
import { useState, useMemo } from "react";
import { guilds } from "@/data/guilds";
import { SearchBar } from "@/components/ui/SearchBar";
import { Card } from "@/components/ui/Card";
import { GoldAmount } from "@/components/ui/GoldAmount";
import { Users, ScrollText, Star } from "lucide-react";

export function GuildHallClient() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search) return guilds;
    const q = search.toLowerCase();
    return guilds.filter(
      (guild) =>
        guild.name.toLowerCase().includes(q) ||
        guild.specialty.toLowerCase().includes(q) ||
        guild.description.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <>
      <SearchBar
        className="mb-6"
        placeholder="Search guilds by name or specialty..."
        value={search}
        onChange={setSearch}
      />

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((guild) => (
            <Card key={guild.id} variant="dark" hover className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#241E15] border border-[#3D3425] flex items-center justify-center shrink-0">
                  <span className="text-xl font-heading font-bold text-[#BFA97A]">{guild.name.charAt(0)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading text-base font-bold text-[#E8D9C0]">{guild.name}</h3>
                    <span className="text-xs bg-[#241E15] border border-[#3D3425] rounded px-1.5 py-0.5 text-[#A08B60]">Lv.{guild.level}</span>
                  </div>
                  <p className="text-sm text-[#A08B60] mb-3">{guild.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#5C4A2A]">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {guild.memberCount} members</span>
                    <span className="flex items-center gap-1"><ScrollText className="w-3 h-3" /> {guild.questsCompleted} quests</span>
                    <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-500" /> {guild.rating}</span>
                    <GoldAmount amount={guild.totalGold} size="sm" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-[#A08B60] font-heading text-lg">No guilds found</p>
          <p className="text-sm text-[#5C4A2A] mt-2">Try a different search term.</p>
        </div>
      )}

      <div className="mt-8 text-center text-sm text-[#5C4A2A]">
        Showing {filtered.length} of {guilds.length} guilds
      </div>
    </>
  );
}
