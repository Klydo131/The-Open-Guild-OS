import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import { Quest } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { GoldAmount } from "@/components/ui/GoldAmount";
import { Avatar } from "@/components/ui/Avatar";
import { cn, getRarityColor } from "@/lib/utils";
import { CATEGORY_ICONS } from "@/lib/constants";

interface QuestCardProps {
  quest: Quest;
}

export function QuestCard({ quest }: QuestCardProps) {
  return (
    <Link href={`/quest-board/${quest.id}`} className="flex items-center gap-4 p-4 rounded-xl bg-tavern-surface border border-tavern-border hover:border-tavern-border-glow transition-all duration-200 cursor-pointer group">
      <div className="hidden sm:flex w-14 h-14 rounded-lg bg-tavern-surface-alt border border-tavern-border items-center justify-center shrink-0">
        <span className="text-2xl">{CATEGORY_ICONS[quest.category]}</span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-heading text-sm font-bold text-parchment-200 truncate">{quest.title}</h3>
          <span className={cn(
            "shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase border",
            getRarityColor(quest.rarity)
          )}>
            {quest.rarity}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {quest.skills.map((skill) => (
            <Badge key={skill} variant="skill">{skill}</Badge>
          ))}
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center shrink-0 min-w-[80px]">
        <GoldAmount amount={quest.budget} />
        <span className="text-[10px] text-tavern-border-glow">Budget</span>
      </div>

      <div className="hidden md:flex flex-col items-center shrink-0 min-w-[70px]">
        <div className="flex items-center gap-1 text-sm text-parchment-500">
          <Clock className="w-3 h-3" />
          <span className="text-xs font-medium">{quest.timeLeft}</span>
        </div>
        <span className="text-[10px] text-tavern-border-glow">Time Left</span>
      </div>

      <div className="hidden lg:flex items-center gap-2 shrink-0 min-w-[130px]">
        <Avatar initials={quest.posterAvatar} size="sm" level={quest.posterGuildLevel} />
        <div>
          <div className="text-xs font-medium text-parchment-300">{quest.posterGuild}</div>
          <div className="text-[10px] text-tavern-border-glow">Level {quest.posterGuildLevel}</div>
        </div>
      </div>

      <ChevronRight className="w-5 h-5 text-tavern-border group-hover:text-tavern-border-glow transition-colors shrink-0" />
    </Link>
  );
}
