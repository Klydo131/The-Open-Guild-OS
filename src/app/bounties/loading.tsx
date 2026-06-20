export default function BountiesLoading() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="h-8 w-44 bg-tavern-surface rounded animate-pulse mb-2" />
      <div className="h-4 w-80 bg-tavern-surface rounded animate-pulse mb-8" />

      <div className="rounded-xl border border-tavern-border bg-tavern-surface p-5 space-y-5">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i}>
            <div className="h-4 w-24 bg-tavern-surface-alt rounded animate-pulse mb-2" />
            <div className="h-10 w-full bg-tavern-surface-alt rounded-lg animate-pulse" />
          </div>
        ))}
        <div className="h-11 w-full bg-tavern-surface-alt rounded-lg animate-pulse mt-4" />
      </div>
    </div>
  );
}
