import { CheckCircle, PlusCircle, UserPlus, TrendingUp, Briefcase } from "lucide-react";
import { recentActivity } from "@/data/activity";
import type { ActivityItem } from "@/types";

const ACTIVITY_CONFIG: Record<ActivityItem["type"], { icon: React.ElementType; color: string }> = {
  quest_completed: { icon: CheckCircle, color: "text-green-400" },
  quest_posted: { icon: PlusCircle, color: "text-blue-400" },
  guild_joined: { icon: UserPlus, color: "text-purple-400" },
  level_up: { icon: TrendingUp, color: "text-amber-400" },
  artisan_hired: { icon: Briefcase, color: "text-cyan-400" },
};

const FALLBACK = { icon: CheckCircle, color: "text-parchment-500" };

export function RecentActivity() {
  return (
    <div className="rounded-xl bg-tavern-surface border border-tavern-border p-4">
      <h3 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {recentActivity.slice(0, 6).map((activity) => {
          const { icon: Icon, color } = ACTIVITY_CONFIG[activity.type] ?? FALLBACK;
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="mt-0.5">
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-parchment-300">
                  <span className="font-medium text-parchment-200">{activity.actorName}</span>{" "}
                  {activity.message}
                </p>
                <p className="text-[10px] text-tavern-border-glow mt-0.5">{activity.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
