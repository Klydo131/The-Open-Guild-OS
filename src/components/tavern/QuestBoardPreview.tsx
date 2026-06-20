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
          <h2 className="font-heading text-xl font-bold text-parchment-200 uppercase tracking-wide">Quest Board</h2>
          <p className="text-sm text-tavern-border-glow mt-1">Active quests from across the realm</p>
        </div>
        <Link href="/quest-board" className="text-sm text-parchment-400 hover:text-gold-400 transition-colors flex items-center gap-1">
          View All Quests <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-3">
        {featuredQuests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </section>
  );
}
