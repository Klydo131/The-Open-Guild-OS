export default function SearchLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="h-8 w-40 bg-tavern-surface rounded-lg animate-pulse mb-2" />
        <div className="h-4 w-64 bg-tavern-surface rounded animate-pulse" />
      </div>

      <div className="h-10 w-full bg-tavern-surface border border-tavern-border rounded-lg animate-pulse mb-8" />

      <div className="space-y-4">
        <div className="h-5 w-32 bg-tavern-surface rounded animate-pulse mb-3" />
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="h-20 bg-tavern-surface border border-tavern-border rounded-xl animate-pulse" />
        ))}
      </div>
    </div>
  );
}
