"use client";
import { useState, useMemo } from "react";
import { artisans } from "@/data/artisans";
import { SearchBar } from "@/components/ui/SearchBar";
import { FilterDropdown } from "@/components/ui/FilterDropdown";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { GoldAmount } from "@/components/ui/GoldAmount";
import { ProgressBar } from "@/components/ui/ProgressBar";

const availabilityOptions = ["All Artisans", "Available", "Unavailable"];
const sortOptions = ["Sort: Default", "Sort: Level ↓", "Sort: Rate ↑", "Sort: Rate ↓", "Sort: Most Quests"];

export function ArtisansClient() {
  const [search, setSearch] = useState("");
  const [availability, setAvailability] = useState("");
  const [sort, setSort] = useState("");

  const filtered = useMemo(() => {
    let results = artisans;

    if (search) {
      const query = search.toLowerCase();
      results = results.filter(
        (a) =>
          a.displayName.toLowerCase().includes(query) ||
          a.title.toLowerCase().includes(query) ||
          a.skills.some((s) => s.toLowerCase().includes(query)) ||
          (a.guildName && a.guildName.toLowerCase().includes(query))
      );
    }

    if (availability === "Available") {
      results = results.filter((a) => a.available);
    } else if (availability === "Unavailable") {
      results = results.filter((a) => !a.available);
    }

    if (sort === "Sort: Level ↓") {
      results = [...results].sort((a, b) => b.level - a.level);
    } else if (sort === "Sort: Rate ↑") {
      results = [...results].sort((a, b) => a.hourlyRate - b.hourlyRate);
    } else if (sort === "Sort: Rate ↓") {
      results = [...results].sort((a, b) => b.hourlyRate - a.hourlyRate);
    } else if (sort === "Sort: Most Quests") {
      results = [...results].sort((a, b) => b.questsCompleted - a.questsCompleted);
    }

    return results;
  }, [search, availability, sort]);

  const hasActiveFilters = search || availability || sort;

  function clearAll() {
    setSearch("");
    setAvailability("");
    setSort("");
  }

  return (
    <>
      <SearchBar
        className="mb-6"
        placeholder="Search artisans by name, skill, or guild..."
        value={search}
        onChange={setSearch}
      />

      <div className="flex flex-wrap gap-2 mb-6">
        <FilterDropdown label="All Artisans" options={availabilityOptions} value={availability} onChange={setAvailability} />
        <FilterDropdown label="Sort: Default" options={sortOptions} value={sort} onChange={setSort} />
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="px-3 py-1.5 rounded-lg bg-tavern-surface-alt border border-gold-400/30 text-xs text-gold-400 hover:bg-gold-400/10 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((artisan) => (
            <Card key={artisan.id} variant="dark" hover className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <Avatar initials={artisan.avatar} size="md" level={artisan.level} />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-sm font-bold text-parchment-200 truncate">{artisan.displayName}</h3>
                  <p className="text-xs text-parchment-500">{artisan.title}</p>
                </div>
                <div className={`w-2 h-2 rounded-full shrink-0 ${artisan.available ? "bg-green-400" : "bg-zinc-500"}`} />
              </div>

              <ProgressBar value={artisan.xp} max={artisan.xpToNext} size="sm" showValues={false} label={`Level ${artisan.level}`} />

              <div className="flex flex-wrap gap-1 mt-3 mb-3">
                {artisan.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="skill">{skill}</Badge>
                ))}
                {artisan.skills.length > 3 && <Badge variant="default">+{artisan.skills.length - 3}</Badge>}
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-tavern-border-glow">{artisan.questsCompleted} quests</span>
                <span className="flex items-center gap-0.5">
                  <GoldAmount amount={artisan.hourlyRate} size="sm" />
                  <span className="text-[10px] text-tavern-border-glow">/hr</span>
                </span>
              </div>

              {artisan.guildName && (
                <div className="mt-2 pt-2 border-t border-tavern-border text-[10px] text-tavern-border-glow">
                  Guild: <span className="text-parchment-500">{artisan.guildName}</span>
                </div>
              )}
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-parchment-500 font-heading text-lg">No artisans found</p>
          <p className="text-sm text-tavern-border-glow mt-2">Try adjusting your search or filters.</p>
        </div>
      )}

      <div className="mt-8 text-center text-sm text-tavern-border-glow">
        Showing {filtered.length} of {artisans.length} artisans
      </div>
    </>
  );
}
