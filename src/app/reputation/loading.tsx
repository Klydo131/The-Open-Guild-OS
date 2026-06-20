export default function ReputationLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="h-8 w-48 bg-tavern-surface rounded animate-pulse mb-2" />
      <div className="h-4 w-72 bg-tavern-surface rounded animate-pulse mb-8" />

      <div className="rounded-xl border border-tavern-border-glow bg-gradient-to-b from-tavern-surface-alt to-tavern-surface p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-16 h-16 rounded-full bg-tavern-surface-alt animate-pulse shrink-0" />
          <div className="flex-1 space-y-3 w-full">
            <div className="h-7 w-40 bg-tavern-surface-alt rounded animate-pulse" />
            <div className="h-4 w-56 bg-tavern-surface-alt rounded animate-pulse" />
            <div className="h-3 w-full bg-tavern-surface-alt rounded-full animate-pulse" />
            <div className="flex gap-2">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="h-6 w-20 bg-tavern-surface-alt rounded-full animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="rounded-xl border border-tavern-border bg-tavern-surface p-4 text-center">
            <div className="w-5 h-5 bg-tavern-surface-alt rounded animate-pulse mx-auto mb-2" />
            <div className="h-5 w-12 bg-tavern-surface-alt rounded animate-pulse mx-auto mb-1" />
            <div className="h-3 w-20 bg-tavern-surface-alt rounded animate-pulse mx-auto" />
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-tavern-border bg-tavern-surface p-5 mb-6">
        <div className="h-4 w-40 bg-tavern-surface-alt rounded animate-pulse mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i}>
              <div className="h-3 w-full bg-tavern-surface-alt rounded animate-pulse mb-1" />
              <div className="h-1.5 w-full bg-tavern-surface-alt rounded-full animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
