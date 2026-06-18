import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollText } from "lucide-react";
import { QUEST_CATEGORIES, DIFFICULTY_TIERS } from "@/lib/constants";

const inputClass = "w-full bg-tavern-surface border border-tavern-border rounded-lg px-4 py-2.5 text-sm text-parchment-300 placeholder-tavern-border-glow focus:outline-none focus:border-gold-400/50 transition-colors";
const selectClass = "w-full bg-tavern-surface border border-tavern-border rounded-lg px-4 py-2.5 text-sm text-parchment-500 focus:outline-none focus:border-gold-400/50 transition-colors";

export default function BountiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-parchment-200 uppercase tracking-wide">Post a Quest</h1>
        <p className="text-sm text-tavern-border-glow mt-2">Commission skilled artisans by posting a quest on the board.</p>
      </div>

      <Card variant="surface" className="p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-parchment-400 mb-2">Quest Title</label>
            <input type="text" placeholder="e.g. Forge a Trading Platform" className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-parchment-400 mb-2">Description</label>
            <textarea rows={4} placeholder="Describe what you need crafted..." className={`${inputClass} resize-none`} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-parchment-400 mb-2">Category</label>
              <select className={selectClass}>
                {QUEST_CATEGORIES.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-parchment-400 mb-2">Difficulty</label>
              <select className={selectClass}>
                {DIFFICULTY_TIERS.map((tier) => (
                  <option key={tier}>{tier}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-parchment-400 mb-2">Budget (Gold)</label>
              <input type="number" placeholder="500" min="0" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-parchment-400 mb-2">Deadline</label>
              <input type="date" className={selectClass} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-parchment-400 mb-2">Required Skills</label>
            <input type="text" placeholder="e.g. React, TypeScript, UI/UX" className={inputClass} />
          </div>

          <Button variant="primary" size="lg" className="w-full">
            <ScrollText className="w-5 h-5" />
            Post Quest to the Board
          </Button>
        </div>
      </Card>
    </div>
  );
}
