export default function SettingsLoading() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="h-8 w-36 bg-tavern-surface rounded animate-pulse mb-2" />
      <div className="h-4 w-80 bg-tavern-surface rounded animate-pulse mb-8" />

      <div className="space-y-6">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="rounded-xl border border-tavern-border bg-tavern-surface p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-5 bg-tavern-surface-alt rounded animate-pulse" />
              <div className="h-4 w-28 bg-tavern-surface-alt rounded animate-pulse" />
            </div>
            <div className="space-y-4">
              {Array.from({ length: 3 }, (_, j) => (
                <div key={j} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="h-4 w-32 bg-tavern-surface-alt rounded animate-pulse" />
                    <div className="h-3 w-48 bg-tavern-surface-alt rounded animate-pulse" />
                  </div>
                  <div className="w-10 h-5 bg-tavern-surface-alt rounded-full animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
