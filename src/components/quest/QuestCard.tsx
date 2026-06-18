import { ChevronRight, Clock } from "lucide-react";
import { Quest } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { GoldAmount } from "@/components/ui/GoldAmount";
import { Avatar } from "@/components/ui/Avatar";
import { cn, getRarityColor } from "@/lib/utils";

interface QuestCardProps {
  quest: Quest;
}

export function QuestCard({ quest }: QuestCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1A1510] border border-[#3D3425] hover:border-[#5C4A2A] transition-all duration-200 cursor-pointer group">
      {/* Quest icon/thumbnail */}
      <div className="hidden sm:flex w-14 h-14 rounded-lg bg-[#241E15] border border-[#3D3425] items-center justify-center shrink-0">
        <span className="text-2xl">
          {quest.category === "Development" && "⚔️"}
          {quest.category === "Writing" && "📜"}
          {quest.category === "Design" && "🎨"}
          {quest.category === "Blockchain" && "⛓️"}
          {quest.category === "Marketing" && "📣"}
          {quest.category === "Security" && "🛡️"}
          {quest.category === "Data" && "🔮"}
          {quest.category === "Video" && "🎬"}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-heading text-sm font-bold text-[#E8D9C0] truncate">{quest.title}</h3>
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

      {/* Budget */}
      <div className="hidden md:flex flex-col items-center shrink-0 min-w-[80px]">
        <GoldAmount amount={quest.budget} />
        <span className="text-[10px] text-[#5C4A2A]">Budget</span>
      </div>

      {/* Time Left */}
      <div className="hidden md:flex flex-col items-center shrink-0 min-w-[70px]">
        <div className="flex items-center gap-1 text-sm text-[#A08B60]">
          <Clock className="w-3 h-3" />
          <span className="text-xs font-medium">{quest.timeLeft}</span>
        </div>
        <span className="text-[10px] text-[#5C4A2A]">Time Left</span>
      </div>

      {/* Poster */}
      <div className="hidden lg:flex items-center gap-2 shrink-0 min-w-[130px]">
        <Avatar initials={quest.posterAvatar} size="sm" level={quest.posterGuildLevel} />
        <div>
          <div className="text-xs font-medium text-[#D4C4A0]">{quest.posterGuild}</div>
          <div className="text-[10px] text-[#5C4A2A]">Level {quest.posterGuildLevel}</div>
        </div>
      </div>

      {/* Chevron */}
      <ChevronRight className="w-5 h-5 text-[#3D3425] group-hover:text-[#5C4A2A] transition-colors shrink-0" />
    </div>
  );
}
