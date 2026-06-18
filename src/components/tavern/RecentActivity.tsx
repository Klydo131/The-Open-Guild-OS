import { CheckCircle, PlusCircle, UserPlus, TrendingUp, Briefcase } from "lucide-react";
import { recentActivity } from "@/data/activity";

const activityIcons: Record<string, React.ElementType> = {
  quest_completed: CheckCircle,
  quest_posted: PlusCircle,
  guild_joined: UserPlus,
  level_up: TrendingUp,
  artisan_hired: Briefcase,
};

const activityColors: Record<string, string> = {
  quest_completed: "text-green-400",
  quest_posted: "text-blue-400",
  guild_joined: "text-purple-400",
  level_up: "text-amber-400",
  artisan_hired: "text-cyan-400",
};

export function RecentActivity() {
  return (
    <div className="rounded-xl bg-[#1A1510] border border-[#3D3425] p-4">
      <h3 className="font-heading text-sm font-bold text-[#E8D9C0] uppercase tracking-wide mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {recentActivity.slice(0, 6).map((activity) => {
          const Icon = activityIcons[activity.type] || CheckCircle;
          const color = activityColors[activity.type] || "text-[#A08B60]";
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="mt-0.5">
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#D4C4A0]">
                  <span className="font-medium text-[#E8D9C0]">{activity.actorName}</span>{" "}
                  {activity.message}
                </p>
                <p className="text-[10px] text-[#5C4A2A] mt-0.5">{activity.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
