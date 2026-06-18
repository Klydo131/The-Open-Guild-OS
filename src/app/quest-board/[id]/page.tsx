import { notFound } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { GoldAmount } from "@/components/ui/GoldAmount";
import { Button } from "@/components/ui/Button";
import { quests } from "@/data/quests";
import { CATEGORY_ICONS } from "@/lib/constants";
import { cn, getDifficultyColor, getRarityColor } from "@/lib/utils";
import { ArrowLeft, Clock, Users, Calendar, Shield } from "lucide-react";

export function generateStaticParams() {
  return quests.map((quest) => ({ id: quest.id }));
}

export default async function QuestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quest = quests.find((q) => q.id === id);

  if (!quest) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/quest-board"
        className="inline-flex items-center gap-1 text-xs text-tavern-border-glow hover:text-parchment-400 transition-colors mb-6"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to Quest Board
      </Link>

      <Card variant="featured" className="p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-lg bg-tavern-surface border border-tavern-border flex items-center justify-center shrink-0">
            <span className="text-2xl">{CATEGORY_ICONS[quest.category]}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h1 className="font-heading text-xl font-bold text-parchment-200">{quest.title}</h1>
              <span className={cn(
                "shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase border",
                getRarityColor(quest.rarity)
              )}>
                {quest.rarity}
              </span>
            </div>
            <p className="text-sm text-parchment-400 leading-relaxed">{quest.description}</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card variant="dark" className="p-4 text-center">
          <GoldAmount amount={quest.budget} size="lg" />
          <p className="text-[10px] text-tavern-border-glow mt-1">Quest Reward</p>
        </Card>
        <Card variant="dark" className="p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-parchment-200">
            <Clock className="w-4 h-4 text-parchment-500" />
            <span className="text-lg font-bold">{quest.timeLeft}</span>
          </div>
          <p className="text-[10px] text-tavern-border-glow mt-1">Time Remaining</p>
        </Card>
        <Card variant="dark" className="p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-parchment-200">
            <Users className="w-4 h-4 text-parchment-500" />
            <span className="text-lg font-bold">{quest.applicants}</span>
          </div>
          <p className="text-[10px] text-tavern-border-glow mt-1">Applicants</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card variant="dark" className="p-5">
          <h2 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide mb-3">Quest Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-tavern-border-glow">Category</span>
              <Badge variant="default">{CATEGORY_ICONS[quest.category]} {quest.category}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-tavern-border-glow">Difficulty</span>
              <span className={cn("px-2 py-0.5 rounded text-xs font-bold border", getDifficultyColor(quest.difficulty))}>
                {quest.difficulty}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-tavern-border-glow">Status</span>
              <Badge variant="gold">{quest.status}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-tavern-border-glow">Deadline</span>
              <span className="text-xs text-parchment-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {quest.deadline}
              </span>
            </div>
          </div>
        </Card>

        <Card variant="dark" className="p-5">
          <h2 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide mb-3">Posted By</h2>
          <div className="flex items-center gap-3 mb-4">
            <Avatar initials={quest.posterAvatar} size="md" level={quest.posterGuildLevel} />
            <div>
              <p className="text-sm font-medium text-parchment-200">{quest.posterName}</p>
              <p className="text-xs text-parchment-500">{quest.posterGuild}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <Shield className="w-3 h-3 text-tavern-border-glow" />
                <span className="text-[10px] text-tavern-border-glow">Guild Level {quest.posterGuildLevel}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card variant="dark" className="p-5 mb-6">
        <h2 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide mb-3">Required Skills</h2>
        <div className="flex flex-wrap gap-2">
          {quest.skills.map((skill) => (
            <Badge key={skill} variant="skill">{skill}</Badge>
          ))}
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="primary" className="flex-1">
          Apply for Quest
        </Button>
        <Button variant="secondary" className="flex-1">
          Save for Later
        </Button>
      </div>
    </div>
  );
}
