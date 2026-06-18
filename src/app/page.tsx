import { HeroSection } from "@/components/tavern/HeroSection";
import { QuestBoardPreview } from "@/components/tavern/QuestBoardPreview";
import { GuildRankings } from "@/components/tavern/GuildRankings";
import { JourneyStats } from "@/components/tavern/JourneyStats";
import { TavernNotice } from "@/components/tavern/TavernNotice";
import { RecentActivity } from "@/components/tavern/RecentActivity";

export default function TavernPage() {
  return (
    <div>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1 min-w-0 space-y-6">
            <QuestBoardPreview />
            <RecentActivity />
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-80 shrink-0 space-y-6">
            <TavernNotice />
            <JourneyStats />
            <GuildRankings />
          </div>
        </div>
      </div>
    </div>
  );
}
