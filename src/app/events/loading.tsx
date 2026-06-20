export default function EventsLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="h-8 w-32 bg-tavern-surface rounded animate-pulse mb-2" />
      <div className="h-4 w-72 bg-tavern-surface rounded animate-pulse mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="rounded-xl border border-tavern-border bg-tavern-surface p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="h-5 w-20 bg-tavern-surface-alt rounded animate-pulse" />
              <div className="h-4 w-16 bg-tavern-surface-alt rounded animate-pulse" />
            </div>
            <div className="h-5 w-48 bg-tavern-surface-alt rounded animate-pulse mb-2" />
            <div className="h-4 w-full bg-tavern-surface-alt rounded animate-pulse mb-1" />
            <div className="h-4 w-2/3 bg-tavern-surface-alt rounded animate-pulse mb-4" />
            <div className="flex items-center justify-between">
              <div className="h-3 w-32 bg-tavern-surface-alt rounded animate-pulse" />
              <div className="h-4 w-16 bg-tavern-surface-alt rounded animate-pulse" />
            </div>
            <div className="h-9 w-full bg-tavern-surface-alt rounded-lg animate-pulse mt-3" />
          </div>
        ))}
      </div>
    </div>
  );
}
