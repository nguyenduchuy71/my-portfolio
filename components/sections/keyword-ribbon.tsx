import { ribbon } from "@/lib/portfolio-content";

export function KeywordRibbon() {
  // Rendered twice so the -50% translate loops seamlessly.
  const track = [...ribbon, ...ribbon];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-line bg-ink py-3 text-paper"
    >
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-widest">
        {track.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-8">
            {word}
            <span className="text-muted">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
