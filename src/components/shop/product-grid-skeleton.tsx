export function ProductGridSkeleton() {
  return (
    <div role="status" className="mt-8">
      <span className="sr-only">Loading bouquets…</span>

      <div aria-hidden="true" className="motion-safe:animate-pulse">
        <div className="bg-sage-mist h-11 w-full max-w-xl rounded-sm" />
        <div className="bg-sage-mist mt-4 h-6 w-28 rounded-sm" />

        <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }, (_, index) => (
            <li key={index}>
              <div className="bg-sage-mist aspect-[4/5] rounded-t-full" />
              <div className="bg-sage-mist/60 h-24" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
