"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export function JoinEventButton({ eventId }: { eventId: string }) {
  void eventId;
  const [joined, setJoined] = useState(false);

  return (
    <Button
      variant={joined ? "ghost" : "secondary"}
      size="sm"
      className="w-full mt-4"
      onClick={() => setJoined((prev) => !prev)}
    >
      {joined ? (
        <>
          <Check className="w-3 h-3" />
          Joined — Click to Leave
        </>
      ) : (
        "Join Event"
      )}
    </Button>
  );
}
