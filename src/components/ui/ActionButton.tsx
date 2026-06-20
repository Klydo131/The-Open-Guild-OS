"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Loader2 } from "lucide-react";

interface ActionButtonProps {
  label: string;
  confirmedLabel: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
}

export function ActionButton({ label, confirmedLabel, variant = "primary", disabled = false, className }: ActionButtonProps) {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  function handleClick() {
    if (state !== "idle" || disabled) return;
    setState("loading");
    setTimeout(() => setState("done"), 1000);
  }

  return (
    <Button
      variant={state === "done" ? "ghost" : variant}
      className={className}
      disabled={disabled || state === "loading"}
      onClick={handleClick}
    >
      {state === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
      {state === "done" && <Check className="w-4 h-4" />}
      {state === "idle" && label}
      {state === "loading" && "Processing…"}
      {state === "done" && confirmedLabel}
    </Button>
  );
}
