import { QuestBoardClient } from "@/components/quest/QuestBoardClient";

export default function QuestBoardPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-parchment-200 uppercase tracking-wide">Quest Board</h1>
        <p className="text-sm text-tavern-border-glow mt-2">Find quests that match your skills and earn gold for your craft.</p>
      </div>

      <QuestBoardClient />
    </div>
  );
}
