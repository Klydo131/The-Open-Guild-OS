"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Bell, Eye, Shield, Globe, Check } from "lucide-react";

interface ToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

function Toggle({ enabled, onToggle }: ToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${
        enabled ? "bg-gold-500" : "bg-tavern-border"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-parchment-100 transition-transform duration-200 ${
          enabled ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
}

const NOTIFICATION_OPTIONS = [
  { key: "questUpdates", label: "Quest updates", desc: "When a quest you're on has new activity" },
  { key: "guildMessages", label: "Guild messages", desc: "Messages from your guild members" },
  { key: "newBounties", label: "New bounties", desc: "Bounties matching your skills" },
  { key: "weeklyDigest", label: "Weekly digest", desc: "Summary of your weekly progress" },
];

const PRIVACY_OPTIONS = [
  { key: "showProfile", label: "Public profile", desc: "Let others find and view your profile" },
  { key: "showEarnings", label: "Show earnings", desc: "Display your gold balance on your profile" },
  { key: "showActivity", label: "Activity feed", desc: "Show your activity in guild feeds" },
];

export function SettingsClient() {
  const [notifications, setNotifications] = useState<Record<string, boolean>>({
    questUpdates: true,
    guildMessages: true,
    newBounties: false,
    weeklyDigest: true,
  });

  const [privacy, setPrivacy] = useState<Record<string, boolean>>({
    showProfile: true,
    showEarnings: false,
    showActivity: true,
  });

  const [language, setLanguage] = useState("en");
  const [saved, setSaved] = useState(false);

  function toggleNotification(key: string) {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  }

  function togglePrivacy(key: string) {
    setPrivacy((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  }

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="space-y-6">
      <Card variant="dark" className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="w-5 h-5 text-gold-400" />
          <h3 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide">
            Notifications
          </h3>
        </div>
        <div className="space-y-4">
          {NOTIFICATION_OPTIONS.map((opt) => (
            <div key={opt.key} className="flex items-center justify-between">
              <div>
                <div className="text-sm text-parchment-300">{opt.label}</div>
                <div className="text-xs text-tavern-border-glow">{opt.desc}</div>
              </div>
              <Toggle
                enabled={notifications[opt.key]}
                onToggle={() => toggleNotification(opt.key)}
              />
            </div>
          ))}
        </div>
      </Card>

      <Card variant="dark" className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <Eye className="w-5 h-5 text-gold-400" />
          <h3 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide">
            Privacy
          </h3>
        </div>
        <div className="space-y-4">
          {PRIVACY_OPTIONS.map((opt) => (
            <div key={opt.key} className="flex items-center justify-between">
              <div>
                <div className="text-sm text-parchment-300">{opt.label}</div>
                <div className="text-xs text-tavern-border-glow">{opt.desc}</div>
              </div>
              <Toggle
                enabled={privacy[opt.key]}
                onToggle={() => togglePrivacy(opt.key)}
              />
            </div>
          ))}
        </div>
      </Card>

      <Card variant="dark" className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-5 h-5 text-gold-400" />
          <h3 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide">
            Account
          </h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-parchment-300 block mb-1">Display Name</label>
            <input
              type="text"
              defaultValue="Guildmaster"
              className="w-full bg-tavern-surface border border-tavern-border rounded-lg px-3 py-2 text-sm text-parchment-300 focus:outline-none focus:border-gold-400/50 transition-colors"
            />
          </div>
          <div>
            <label className="text-sm text-parchment-300 block mb-1">Email</label>
            <input
              type="email"
              defaultValue="guildmaster@example.com"
              className="w-full bg-tavern-surface border border-tavern-border rounded-lg px-3 py-2 text-sm text-parchment-300 focus:outline-none focus:border-gold-400/50 transition-colors"
            />
          </div>
        </div>
      </Card>

      <Card variant="dark" className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-5 h-5 text-gold-400" />
          <h3 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide">
            Language & Region
          </h3>
        </div>
        <div>
          <label className="text-sm text-parchment-300 block mb-1">Language</label>
          <select
            value={language}
            onChange={(e) => { setLanguage(e.target.value); setSaved(false); }}
            className="w-full bg-tavern-surface border border-tavern-border rounded-lg px-3 py-2 text-sm text-parchment-300 focus:outline-none focus:border-gold-400/50 transition-colors"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="ja">日本語</option>
            <option value="ko">한국어</option>
          </select>
        </div>
      </Card>

      <div className="flex items-center gap-3">
        <Button onClick={handleSave} variant="primary" size="md">
          {saved ? (
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4" /> Saved
            </span>
          ) : (
            "Save Changes"
          )}
        </Button>
        {saved && (
          <span className="text-sm text-green-400">Settings saved successfully.</span>
        )}
      </div>
    </div>
  );
}
