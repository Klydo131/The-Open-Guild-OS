import { GuildHallClient } from "@/components/tavern/GuildHallClient";

export default function GuildHallPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-[#E8D9C0] uppercase tracking-wide">Guild Hall</h1>
        <p className="text-sm text-[#5C4A2A] mt-2">Browse and join guilds to collaborate with fellow artisans.</p>
      </div>

      <GuildHallClient />
    </div>
  );
}
