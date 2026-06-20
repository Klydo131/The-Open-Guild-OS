export default function GuildHallLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="h-8 w-40 bg-tavern-surface rounded animate-pulse mb-2" />
      <div className="h-4 w-56 bg-tavern-surface rounded animate-pulse mb-6" />

      <div className="h-10 w-full max-w-md bg-tavern-surface rounded-lg animate-pulse mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="rounded-xl border border-tavern-border bg-tavern-surface p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-tavern-surface-alt animate-pulse shrink-0" />
              <div className="flex-1">
                <div className="h-5 w-32 bg-tavern-surface-alt rounded animate-pulse mb-1" />
                <div className="h-3 w-20 bg-tavern-surface-alt rounded animate-pulse" />
              </div>
            </div>
            <div className="h-4 w-full bg-tavern-surface-alt rounded animate-pulse mb-1" />
            <div className="h-4 w-3/4 bg-tavern-surface-alt rounded animate-pulse mb-3" />
            <div className="flex justify-between">
              <div className="h-4 w-16 bg-tavern-surface-alt rounded animate-pulse" />
              <div className="h-4 w-16 bg-tavern-surface-alt rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
