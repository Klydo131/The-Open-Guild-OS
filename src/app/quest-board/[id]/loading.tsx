export default function QuestDetailLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="h-4 w-32 bg-tavern-surface rounded animate-pulse mb-6" />

      <div className="rounded-xl border border-tavern-border bg-tavern-surface p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-lg bg-tavern-surface-alt animate-pulse shrink-0" />
          <div className="flex-1 space-y-3">
            <div className="h-6 w-3/4 bg-tavern-surface-alt rounded animate-pulse" />
            <div className="h-4 w-full bg-tavern-surface-alt rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-tavern-surface-alt rounded animate-pulse" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="rounded-xl border border-tavern-border bg-tavern-surface p-4 text-center">
            <div className="h-6 w-16 bg-tavern-surface-alt rounded animate-pulse mx-auto mb-2" />
            <div className="h-3 w-20 bg-tavern-surface-alt rounded animate-pulse mx-auto" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl border border-tavern-border bg-tavern-surface p-5 h-48 animate-pulse" />
        <div className="rounded-xl border border-tavern-border bg-tavern-surface p-5 h-48 animate-pulse" />
      </div>
    </div>
  );
}
