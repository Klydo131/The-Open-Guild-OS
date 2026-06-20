import type { Metadata } from "next";
import { PostQuestForm } from "@/components/bounties/PostQuestForm";

export const metadata: Metadata = {
  title: "Post a Quest — The Open Guild OS",
  description: "Commission skilled artisans by posting a quest on the board.",
};

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
