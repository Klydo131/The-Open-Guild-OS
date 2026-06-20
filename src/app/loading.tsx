export default function HomeLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero skeleton */}
      <div className="rounded-xl border border-tavern-border bg-gradient-to-b from-tavern-surface-alt to-tavern-surface p-8 mb-8 text-center">
        <div className="h-10 w-72 bg-tavern-surface-alt rounded animate-pulse mx-auto mb-3" />
        <div className="h-5 w-96 max-w-full bg-tavern-surface-alt rounded animate-pulse mx-auto mb-6" />
        <div className="flex justify-center gap-3">
          <div className="h-11 w-36 bg-tavern-surface-alt rounded-lg animate-pulse" />
          <div className="h-11 w-36 bg-tavern-surface-alt rounded-lg animate-pulse" />
        </div>
      </div>

      {/* Quest board preview skeleton */}
      <div className="mb-8">
        <div className="h-6 w-40 bg-tavern-surface rounded animate-pulse mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="rounded-xl border border-tavern-border bg-tavern-surface p-5">
              <div className="flex justify-between mb-3">
                <div className="h-5 w-20 bg-tavern-surface-alt rounded animate-pulse" />
                <div className="h-5 w-16 bg-tavern-surface-alt rounded animate-pulse" />
              </div>
              <div className="h-5 w-3/4 bg-tavern-surface-alt rounded animate-pulse mb-2" />
              <div className="h-4 w-full bg-tavern-surface-alt rounded animate-pulse mb-4" />
              <div className="flex gap-2">
                {Array.from({ length: 3 }, (_, j) => (
                  <div key={j} className="h-5 w-14 bg-tavern-surface-alt rounded-full animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom grid skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="rounded-xl border border-tavern-border bg-tavern-surface p-5">
            <div className="h-5 w-28 bg-tavern-surface-alt rounded animate-pulse mb-4" />
            <div className="space-y-3">
              {Array.from({ length: 3 }, (_, j) => (
                <div key={j} className="h-10 w-full bg-tavern-surface-alt rounded animate-pulse" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
