import type { Metadata } from "next";
import { SettingsClient } from "@/components/settings/SettingsClient";

export const metadata: Metadata = {
  title: "Settings — The Open Guild OS",
  description: "Manage your account, notifications, and privacy preferences.",
};

export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-parchment-200 uppercase tracking-wide">Settings</h1>
        <p className="text-sm text-tavern-border-glow mt-2">Manage your account, notifications, and privacy preferences.</p>
      </div>

      <SettingsClient />
    </div>
  );
}
