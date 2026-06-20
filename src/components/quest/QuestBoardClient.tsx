"use client";
import { useState, useMemo } from "react";
import { quests } from "@/data/quests";
import { QuestCard } from "@/components/quest/QuestCard";
import { SearchBar } from "@/components/ui/SearchBar";
import { FilterDropdown } from "@/components/ui/FilterDropdown";
import { QUEST_CATEGORIES, DIFFICULTY_TIERS, BUDGET_FILTERS } from "@/lib/constants";
import type { QuestCategory, DifficultyTier } from "@/types";

const categoryOptions = ["All Categories", ...QUEST_CATEGORIES];
const difficultyOptions = ["Any Difficulty", ...DIFFICULTY_TIERS];
const budgetOptions = ["Any Budget", ...BUDGET_FILTERS.map((f) => f.label)];
const sortOptions = ["Sort: Newest", "Sort: Budget ↑", "Sort: Budget ↓", "Sort: Most Applicants"];

export function QuestBoardClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [budget, setBudget] = useState("");
  const [sort, setSort] = useState("");

  const filtered = useMemo(() => {
    let results = quests;

    if (search) {
      const query = search.toLowerCase();
      results = results.filter(
        (quest) =>
          quest.title.toLowerCase().includes(query) ||
          quest.category.toLowerCase().includes(query) ||
          quest.skills.some((s) => s.toLowerCase().includes(query)) ||
          quest.posterGuild.toLowerCase().includes(query)
      );
    }

    if (category) {
      results = results.filter((quest) => quest.category === (category as QuestCategory));
    }

    if (difficulty) {
      results = results.filter((quest) => quest.difficulty === (difficulty as DifficultyTier));
    }

    if (budget) {
      const budgetFilter = BUDGET_FILTERS.find((f) => f.label === budget);
      if (budgetFilter) {
        results = results.filter((quest) => budgetFilter.test(quest.budget));
      }
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

  const hasActiveFilters = search || category || difficulty || budget || sort;

  function clearAll() {
    setSearch("");
    setCategory("");
    setDifficulty("");
    setBudget("");
    setSort("");
  }

  return (
    <>
      <SearchBar
        className="mb-6"
        placeholder="Search quests by title, skill, or category..."
        value={search}
        onChange={setSearch}
      />

      <div className="flex flex-wrap gap-2 mb-6">
        <FilterDropdown label="All Categories" options={categoryOptions} value={category} onChange={setCategory} />
        <FilterDropdown label="Any Difficulty" options={difficultyOptions} value={difficulty} onChange={setDifficulty} />
        <FilterDropdown label="Any Budget" options={budgetOptions} value={budget} onChange={setBudget} />
        <FilterDropdown label="Sort: Newest" options={sortOptions} value={sort} onChange={setSort} />
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
        <div className="space-y-3">
          {filtered.map((quest) => (
            <QuestCard key={quest.id} quest={quest} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-parchment-500 font-heading text-lg">No quests found</p>
          <p className="text-sm text-tavern-border-glow mt-2">Try adjusting your search or filters.</p>
        </div>
      )}

      <div className="mt-8 text-center text-sm text-tavern-border-glow">
        Showing {filtered.length} of {quests.length} quests
      </div>
    </>
  );
}
