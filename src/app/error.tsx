"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-ember-400/10 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-ember-400" />
        </div>

        <h1 className="font-heading text-2xl font-bold text-parchment-200 mb-2">
          Something Went Wrong
        </h1>
        <p className="text-sm text-parchment-500 mb-6">
          A mysterious error has befallen this page. The guild scribes have been notified.
        </p>

        {error.digest && (
          <p className="text-xs text-tavern-border-glow mb-6 font-mono">
            Reference: {error.digest}
          </p>
        )}

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => unstable_retry()}
            className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-tavern-bg font-heading font-bold uppercase tracking-wider text-sm px-5 py-2.5 rounded-lg transition-all duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-tavern-surface-alt border border-tavern-border-glow text-parchment-300 hover:bg-tavern-border hover:border-gold-400/50 font-heading font-bold uppercase tracking-wider text-sm px-5 py-2.5 rounded-lg transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Return to Tavern
          </Link>
        </div>
      </div>
    </div>
  );
}
