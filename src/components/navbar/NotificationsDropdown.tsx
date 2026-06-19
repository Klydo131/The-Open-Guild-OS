"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, X, CheckCircle, UserPlus, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  type: "quest" | "guild" | "system";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const INITIAL_NOTIFICATIONS: Notification[] = [
  { id: "n1", type: "quest", title: "New Application", message: "Theron Blackwood applied for your quest \"Build a Guild Dashboard\"", time: "5 min ago", read: false },
  { id: "n2", type: "guild", title: "Guild Update", message: "Highline Guild reached Level 13!", time: "1 hour ago", read: false },
  { id: "n3", type: "system", title: "Weekly Report", message: "You completed 3 quests this week. View your stats.", time: "3 hours ago", read: true },
  { id: "n4", type: "quest", title: "Quest Completed", message: "Elara Moonweave delivered \"Design the Elysium Crest\"", time: "5 hours ago", read: true },
];

const TYPE_ICONS = {
  quest: CheckCircle,
  guild: UserPlus,
  system: TrendingUp,
};

const TYPE_COLORS = {
  quest: "text-green-400",
  guild: "text-purple-400",
  system: "text-gold-400",
};

export function NotificationsDropdown() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const ref = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  function dismiss(id: string) {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="relative p-2 text-parchment-500 hover:text-parchment-300 transition-colors"
        aria-label="Notifications"
      >
        <Mail className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-tavern-surface border border-tavern-border rounded-xl shadow-xl shadow-black/40 overflow-hidden z-50">
          <div className="flex items-center justify-between px-4 py-3 border-b border-tavern-border">
            <h3 className="font-heading text-xs font-bold text-parchment-200 uppercase tracking-wide">Notifications</h3>
            {unreadCount > 0 && (
              <button onClick={markAllRead} className="text-[10px] text-gold-400 hover:text-gold-300 transition-colors">
                Mark all read
              </button>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((n) => {
                const Icon = TYPE_ICONS[n.type];
                return (
                  <div
                    key={n.id}
                    className={cn(
                      "flex items-start gap-3 px-4 py-3 border-b border-tavern-border/50 transition-colors",
                      !n.read && "bg-tavern-surface-alt/50"
                    )}
                  >
                    <Icon className={cn("w-4 h-4 mt-0.5 shrink-0", TYPE_COLORS[n.type])} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-parchment-200">{n.title}</span>
                        {!n.read && <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />}
                      </div>
                      <p className="text-[11px] text-parchment-500 mt-0.5 leading-relaxed">{n.message}</p>
                      <p className="text-[10px] text-tavern-border-glow mt-1">{n.time}</p>
                    </div>
                    <button
                      onClick={() => dismiss(n.id)}
                      className="p-0.5 text-tavern-border-glow hover:text-parchment-400 transition-colors shrink-0"
                      aria-label="Dismiss"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="px-4 py-8 text-center">
                <Mail className="w-6 h-6 text-tavern-border-glow mx-auto mb-2" />
                <p className="text-xs text-parchment-500">No notifications</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
