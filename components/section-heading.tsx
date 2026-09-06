export function SectionHeading({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-line pb-4">
      <span className="font-mono text-xs text-muted">{index}</span>
      <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}
