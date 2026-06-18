import Link from "next/link";
import { ArrowRight, Calendar, Trophy, Zap } from "lucide-react";
import { events } from "@/data/events";

const eventIcons: Record<string, React.ElementType> = {
  festival: Zap,
  tournament: Trophy,
  workshop: Calendar,
  challenge: Trophy,
};

export function TavernNotice() {
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="rounded-xl bg-[#1A1510] border border-[#3D3425] p-4">
      <h3 className="font-heading text-sm font-bold text-[#E8D9C0] uppercase tracking-wide mb-4">Tavern Notice</h3>

      <div className="space-y-3">
        {upcomingEvents.map((event) => {
          const Icon = eventIcons[event.type] || Calendar;
          return (
            <div key={event.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#241E15] transition-colors cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-[#241E15] border border-[#3D3425] flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-[#FFC520]" />
              </div>
              <div>
                <div className="text-sm font-medium text-[#E8D9C0]">{event.name}</div>
                <div className="text-[10px] text-[#5C4A2A]">{event.startDate}{event.endDate ? ` – ${event.endDate}` : ""}</div>
              </div>
            </div>
          );
        })}
      </div>

      <Link href="/events" className="mt-3 flex items-center justify-center gap-1 text-xs text-[#BFA97A] hover:text-[#FFC520] transition-colors uppercase tracking-wider font-medium pt-2 border-t border-[#3D3425]">
        View All Events <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}
