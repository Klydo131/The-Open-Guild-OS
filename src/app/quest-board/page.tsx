import { quests } from "@/data/quests";
import { QuestCard } from "@/components/quest/QuestCard";
import { SearchBar } from "@/components/ui/SearchBar";

export default function QuestBoardPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-[#E8D9C0] uppercase tracking-wide">Quest Board</h1>
        <p className="text-sm text-[#5C4A2A] mt-2">Find quests that match your skills and earn gold for your craft.</p>
      </div>

      <SearchBar className="mb-6" placeholder="Search quests by title, skill, or category..." />

      <div className="flex flex-wrap gap-2 mb-6">
        {["All Categories", "Any Difficulty", "Any Budget", "Sort: Newest"].map((filter) => (
          <button
            key={filter}
            className="px-3 py-1.5 rounded-lg bg-[#1A1510] border border-[#3D3425] text-xs text-[#A08B60] hover:border-[#5C4A2A] transition-colors"
          >
            {filter} <span className="text-[#5C4A2A] ml-1">▾</span>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-[#5C4A2A]">
        Showing {quests.length} of {quests.length} quests
      </div>
    </div>
  );
}
