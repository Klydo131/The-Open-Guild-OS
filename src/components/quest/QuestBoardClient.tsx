"use client";
import { useState, useMemo } from "react";
import { quests } from "@/data/quests";
import { QuestCard } from "@/components/quest/QuestCard";
import { SearchBar } from "@/components/ui/SearchBar";
import { FilterDropdown } from "@/components/ui/FilterDropdown";
import type { QuestCategory, DifficultyTier } from "@/types";

const categories: string[] = ["All Categories", "Development", "Design", "Writing", "Marketing", "Blockchain", "Security", "Data", "Video"];
const difficulties: string[] = ["Any Difficulty", "Apprentice", "Journeyman", "Master", "Grandmaster"];
const budgets: string[] = ["Any Budget", "Under 500g", "500 – 1000g", "Over 1000g"];
const sortOptions: string[] = ["Sort: Newest", "Sort: Budget ↑", "Sort: Budget ↓", "Sort: Most Applicants"];

export function QuestBoardClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [budget, setBudget] = useState("");
  const [sort, setSort] = useState("");

  const filtered = useMemo(() => {
    let results = quests;

    if (search) {
      const q = search.toLowerCase();
      results = results.filter(
        (quest) =>
          quest.title.toLowerCase().includes(q) ||
          quest.category.toLowerCase().includes(q) ||
          quest.skills.some((s) => s.toLowerCase().includes(q)) ||
          quest.posterGuild.toLowerCase().includes(q)
      );
    }

    if (category) {
      results = results.filter((quest) => quest.category === category as QuestCategory);
    }

    if (difficulty) {
      results = results.filter((quest) => quest.difficulty === difficulty as DifficultyTier);
    }

    if (budget) {
      results = results.filter((quest) => {
        if (budget === "Under 500g") return quest.budget < 500;
        if (budget === "500 – 1000g") return quest.budget >= 500 && quest.budget <= 1000;
        if (budget === "Over 1000g") return quest.budget > 1000;
        return true;
      });
    }

    if (sort === "Sort: Budget ↑") {
      results = [...results].sort((a, b) => a.budget - b.budget);
    } else if (sort === "Sort: Budget ↓") {
      results = [...results].sort((a, b) => b.budget - a.budget);
    } else if (sort === "Sort: Most Applicants") {
      results = [...results].sort((a, b) => b.applicants - a.applicants);
    }

    return results;
  }, [search, category, difficulty, budget, sort]);

  const activeFilters = [category, difficulty, budget, sort].filter(Boolean).length;

  return (
    <>
      <SearchBar
        className="mb-6"
        placeholder="Search quests by title, skill, or category..."
        value={search}
        onChange={setSearch}
      />

      <div className="flex flex-wrap gap-2 mb-6">
        <FilterDropdown label="All Categories" options={categories} value={category} onChange={setCategory} />
        <FilterDropdown label="Any Difficulty" options={difficulties} value={difficulty} onChange={setDifficulty} />
        <FilterDropdown label="Any Budget" options={budgets} value={budget} onChange={setBudget} />
        <FilterDropdown label="Sort: Newest" options={sortOptions} value={sort} onChange={setSort} />
        {(search || activeFilters > 0) && (
          <button
            onClick={() => { setSearch(""); setCategory(""); setDifficulty(""); setBudget(""); setSort(""); }}
            className="px-3 py-1.5 rounded-lg bg-[#241E15] border border-[#FFC520]/30 text-xs text-[#FFC520] hover:bg-[#FFC520]/10 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="space-y-3">
          {filtered.map((quest) => (
            <QuestCard key={quest.id} quest={quest} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-[#A08B60] font-heading text-lg">No quests found</p>
          <p className="text-sm text-[#5C4A2A] mt-2">Try adjusting your search or filters.</p>
        </div>
      )}

      <div className="mt-8 text-center text-sm text-[#5C4A2A]">
        Showing {filtered.length} of {quests.length} quests
      </div>
    </>
  );
}
