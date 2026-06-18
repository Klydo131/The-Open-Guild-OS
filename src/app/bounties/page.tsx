import { PostQuestForm } from "@/components/bounties/PostQuestForm";

export default function BountiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-parchment-200 uppercase tracking-wide">Post a Quest</h1>
        <p className="text-sm text-tavern-border-glow mt-2">Commission skilled artisans by posting a quest on the board.</p>
      </div>

      <PostQuestForm />
    </div>
  );
}
