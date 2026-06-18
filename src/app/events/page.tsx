import { events } from "@/data/events";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { GoldAmount } from "@/components/ui/GoldAmount";
import { Calendar, Users, Trophy } from "lucide-react";
import type { GuildEvent } from "@/types";

const TYPE_COLORS: Record<GuildEvent["type"], string> = {
  tournament: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  challenge: "text-red-400 bg-red-400/10 border-red-400/30",
  festival: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  workshop: "text-blue-400 bg-blue-400/10 border-blue-400/30",
};

export default function EventsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-parchment-200 uppercase tracking-wide">Events</h1>
        <p className="text-sm text-tavern-border-glow mt-2">Compete, collaborate, and earn legendary rewards.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event) => (
          <Card key={event.id} variant="dark" hover className="p-5">
            <div className="flex items-start justify-between mb-3">
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${TYPE_COLORS[event.type]}`}>
                {event.type}
              </span>
              <div className="flex items-center gap-1 text-xs text-tavern-border-glow">
                <Users className="w-3 h-3" />
                {event.participants} joined
              </div>
            </div>
            <h3 className="font-heading text-lg font-bold text-parchment-200 mb-2">{event.name}</h3>
            <p className="text-sm text-parchment-500 mb-4">{event.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-tavern-border-glow">
                <Calendar className="w-3 h-3" />
                {event.startDate}{event.endDate ? ` – ${event.endDate}` : ""}
              </div>
              {event.prize > 0 && (
                <div className="flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-gold-400" />
                  <GoldAmount amount={event.prize} size="sm" />
                </div>
              )}
            </div>
            <Button variant="secondary" size="sm" className="w-full mt-4">
              Join Event
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
