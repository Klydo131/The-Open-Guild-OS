import Link from "next/link";
import { ArrowRight, Calendar, Trophy, Zap } from "lucide-react";
import { events } from "@/data/events";
import type { GuildEvent } from "@/types";

const EVENT_ICONS: Record<GuildEvent["type"], React.ElementType> = {
  festival: Zap,
  tournament: Trophy,
  workshop: Calendar,
  challenge: Trophy,
};

export function TavernNotice() {
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="rounded-xl bg-tavern-surface border border-tavern-border p-4">
      <h3 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide mb-4">Tavern Notice</h3>

      <div className="space-y-3">
        {upcomingEvents.map((event) => {
          const Icon = EVENT_ICONS[event.type] ?? Calendar;
          return (
            <div key={event.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-tavern-surface-alt transition-colors cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-tavern-surface-alt border border-tavern-border flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-gold-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-parchment-200">{event.name}</div>
                <div className="text-[10px] text-tavern-border-glow">{event.startDate}{event.endDate ? ` – ${event.endDate}` : ""}</div>
              </div>
            </div>
          );
        })}
      </div>

      <Link href="/events" className="mt-3 flex items-center justify-center gap-1 text-xs text-parchment-400 hover:text-gold-400 transition-colors uppercase tracking-wider font-medium pt-2 border-t border-tavern-border">
        View All Events <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}
