export default function TreasuryLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="h-8 w-36 bg-tavern-surface rounded animate-pulse mb-2" />
      <div className="h-4 w-64 bg-tavern-surface rounded animate-pulse mb-8" />

      <div className="rounded-xl border border-tavern-border-glow bg-gradient-to-b from-tavern-surface-alt to-tavern-surface p-6 mb-6 text-center">
        <div className="w-10 h-10 bg-tavern-surface-alt rounded-full animate-pulse mx-auto mb-3" />
        <div className="h-8 w-24 bg-tavern-surface-alt rounded animate-pulse mx-auto mb-2" />
        <div className="h-4 w-20 bg-tavern-surface-alt rounded animate-pulse mx-auto mb-4" />
        <div className="flex justify-center gap-6">
          <div className="h-4 w-28 bg-tavern-surface-alt rounded animate-pulse" />
          <div className="h-4 w-20 bg-tavern-surface-alt rounded animate-pulse" />
        </div>
      </div>

      <div className="rounded-xl border border-tavern-border bg-tavern-surface p-5">
        <div className="h-4 w-40 bg-tavern-surface-alt rounded animate-pulse mb-4" />
        <div className="space-y-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-tavern-surface-alt last:border-0">
              <div className="w-8 h-8 rounded-full bg-tavern-surface-alt animate-pulse shrink-0" />
              <div className="flex-1 space-y-1">
                <div className="h-4 w-3/4 bg-tavern-surface-alt rounded animate-pulse" />
                <div className="h-3 w-16 bg-tavern-surface-alt rounded animate-pulse" />
              </div>
              <div className="h-4 w-12 bg-tavern-surface-alt rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
