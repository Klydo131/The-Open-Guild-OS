export default function ArtisansLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="h-8 w-36 bg-tavern-surface rounded animate-pulse mb-2" />
      <div className="h-4 w-52 bg-tavern-surface rounded animate-pulse mb-6" />

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="h-10 flex-1 bg-tavern-surface rounded-lg animate-pulse" />
        <div className="h-10 w-40 bg-tavern-surface rounded-lg animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="rounded-xl border border-tavern-border bg-tavern-surface p-5 text-center">
            <div className="w-14 h-14 rounded-full bg-tavern-surface-alt animate-pulse mx-auto mb-3" />
            <div className="h-5 w-32 bg-tavern-surface-alt rounded animate-pulse mx-auto mb-1" />
            <div className="h-3 w-24 bg-tavern-surface-alt rounded animate-pulse mx-auto mb-3" />
            <div className="flex justify-center gap-2 mb-3">
              {Array.from({ length: 3 }, (_, j) => (
                <div key={j} className="h-5 w-14 bg-tavern-surface-alt rounded-full animate-pulse" />
              ))}
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-20 bg-tavern-surface-alt rounded animate-pulse" />
              <div className="h-4 w-16 bg-tavern-surface-alt rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
