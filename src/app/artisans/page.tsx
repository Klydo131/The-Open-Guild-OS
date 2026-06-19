import type { Metadata } from "next";
import { ArtisansClient } from "@/components/tavern/ArtisansClient";

export const metadata: Metadata = {
  title: "Artisans — The Open Guild OS",
  description: "Discover skilled artisans ready to bring your vision to life.",
};

export default function ArtisansPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-parchment-200 uppercase tracking-wide">Artisans</h1>
        <p className="text-sm text-tavern-border-glow mt-2">Discover skilled artisans ready to bring your vision to life.</p>
      </div>

      <ArtisansClient />
    </div>
  );
}
