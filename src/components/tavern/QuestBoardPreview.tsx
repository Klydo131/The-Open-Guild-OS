import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { quests } from "@/data/quests";
import { QuestCard } from "@/components/quest/QuestCard";

export function QuestBoardPreview() {
  const featuredQuests = quests.slice(0, 3);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-heading text-xl font-bold text-[#E8D9C0] uppercase tracking-wide">Quest Board</h2>
          <p className="text-sm text-[#5C4A2A] mt-1">Active quests from across the realm</p>
        </div>
        <Link href="/quest-board" className="text-sm text-[#BFA97A] hover:text-[#FFC520] transition-colors flex items-center gap-1">
          View All Quests <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Filter pills - decorative */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["All Categories", "Any Difficulty", "Any Budget"].map((filter) => (
          <button
            key={filter}
            className="px-3 py-1.5 rounded-lg bg-[#1A1510] border border-[#3D3425] text-xs text-[#A08B60] hover:border-[#5C4A2A] transition-colors"
          >
            {filter} <span className="text-[#5C4A2A] ml-1">&#9662;</span>
          </button>
        ))}
        <button className="px-2 py-1.5 rounded-lg bg-[#1A1510] border border-[#3D3425] text-xs text-[#A08B60] hover:border-[#5C4A2A] transition-colors">
          &#9881;
        </button>
      </div>

      <div className="space-y-3">
        {featuredQuests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </section>
  );
}
