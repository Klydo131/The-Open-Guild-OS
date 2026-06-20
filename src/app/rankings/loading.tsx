export default function RankingsLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="h-8 w-40 bg-tavern-surface rounded animate-pulse mb-2" />
      <div className="h-4 w-64 bg-tavern-surface rounded animate-pulse mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:items-end">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={i}
            className={`rounded-xl border border-tavern-border bg-tavern-surface p-5 text-center ${
              i === 0 ? "md:order-2 md:pb-8" : i === 1 ? "md:order-1" : "md:order-3"
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-tavern-surface-alt animate-pulse mx-auto mb-3" />
            <div className="h-5 w-32 bg-tavern-surface-alt rounded animate-pulse mx-auto mb-2" />
            <div className="h-3 w-16 bg-tavern-surface-alt rounded animate-pulse mx-auto mb-3" />
            <div className="h-6 w-20 bg-tavern-surface-alt rounded animate-pulse mx-auto" />
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-tavern-border bg-tavern-surface overflow-hidden">
        <div className="space-y-0">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="flex items-center gap-4 px-4 py-3 border-b border-tavern-surface-alt">
              <div className="w-6 h-6 rounded-full bg-tavern-surface-alt animate-pulse" />
              <div className="w-8 h-8 rounded-lg bg-tavern-surface-alt animate-pulse" />
              <div className="flex-1 space-y-1">
                <div className="h-4 w-32 bg-tavern-surface-alt rounded animate-pulse" />
                <div className="h-3 w-16 bg-tavern-surface-alt rounded animate-pulse" />
              </div>
              <div className="h-4 w-16 bg-tavern-surface-alt rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
