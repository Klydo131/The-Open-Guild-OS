import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollText } from "lucide-react";

export default function BountiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-[#E8D9C0] uppercase tracking-wide">Post a Quest</h1>
        <p className="text-sm text-[#5C4A2A] mt-2">Commission skilled artisans by posting a quest on the board.</p>
      </div>

      <Card variant="surface" className="p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#BFA97A] mb-2">Quest Title</label>
            <input type="text" placeholder="e.g. Forge a Trading Platform" className="w-full bg-[#1A1510] border border-[#3D3425] rounded-lg px-4 py-2.5 text-sm text-[#D4C4A0] placeholder-[#5C4A2A] focus:outline-none focus:border-[#FFC520]/50 transition-colors" />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#BFA97A] mb-2">Description</label>
            <textarea rows={4} placeholder="Describe what you need crafted..." className="w-full bg-[#1A1510] border border-[#3D3425] rounded-lg px-4 py-2.5 text-sm text-[#D4C4A0] placeholder-[#5C4A2A] focus:outline-none focus:border-[#FFC520]/50 transition-colors resize-none" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#BFA97A] mb-2">Category</label>
              <select className="w-full bg-[#1A1510] border border-[#3D3425] rounded-lg px-4 py-2.5 text-sm text-[#A08B60] focus:outline-none focus:border-[#FFC520]/50 transition-colors">
                <option>Development</option><option>Design</option><option>Writing</option><option>Marketing</option><option>Blockchain</option><option>Security</option><option>Data</option><option>Video</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#BFA97A] mb-2">Difficulty</label>
              <select className="w-full bg-[#1A1510] border border-[#3D3425] rounded-lg px-4 py-2.5 text-sm text-[#A08B60] focus:outline-none focus:border-[#FFC520]/50 transition-colors">
                <option>Apprentice</option><option>Journeyman</option><option>Master</option><option>Grandmaster</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#BFA97A] mb-2">Budget (Gold)</label>
              <input type="number" placeholder="500" className="w-full bg-[#1A1510] border border-[#3D3425] rounded-lg px-4 py-2.5 text-sm text-[#D4C4A0] placeholder-[#5C4A2A] focus:outline-none focus:border-[#FFC520]/50 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#BFA97A] mb-2">Deadline</label>
              <input type="date" className="w-full bg-[#1A1510] border border-[#3D3425] rounded-lg px-4 py-2.5 text-sm text-[#A08B60] focus:outline-none focus:border-[#FFC520]/50 transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#BFA97A] mb-2">Required Skills</label>
            <input type="text" placeholder="e.g. React, TypeScript, UI/UX" className="w-full bg-[#1A1510] border border-[#3D3425] rounded-lg px-4 py-2.5 text-sm text-[#D4C4A0] placeholder-[#5C4A2A] focus:outline-none focus:border-[#FFC520]/50 transition-colors" />
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
