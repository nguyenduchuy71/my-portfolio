/**
 * Per-project architecture glyphs.
 *
 * Each is a schematic of how that system actually moves data — a fan-out, a
 * queue, a socket burst — rather than generic decoration. Drawn on a 120×72
 * grid with 1.5-unit strokes so they stay crisp at card width and invert
 * cleanly on the card's hover state (everything is currentColor).
 */

type GlyphProps = { className?: string };

const frame = {
  viewBox: "0 0 120 72",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
};

/** Router fanning one intent out to worker agents. */
export function GlyphAgents({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className}>
      <rect x="4" y="30" width="22" height="12" stroke="currentColor" strokeWidth="1.5" />
      {[14, 36, 58].map((y, i) => (
        <g key={y}>
          <path
            d={`M26 36 C 44 36, 44 ${y + 6}, 62 ${y + 6}`}
            stroke="currentColor"
            strokeWidth="1.5"
            opacity={0.4 + i * 0.2}
          />
          <rect
            x="62"
            y={y}
            width="20"
            height="12"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity={0.4 + i * 0.2}
          />
        </g>
      ))}
      <path d="M82 20 H104 M82 42 H104 M82 64 H104" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <rect x="104" y="30" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Request path checked at two layers — API and browser. */
export function GlyphTesting({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className}>
      <path d="M8 24 H112 M8 48 H112" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      {[8, 32, 56, 80].map((x, i) => (
        <g key={x} opacity={1 - i * 0.15}>
          <rect x={x} y="18" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
          <rect x={x} y="42" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
          <path d={`M${x + 6} 30 V42`} stroke="currentColor" strokeWidth="1.5" />
        </g>
      ))}
      <path d="M100 20 l4 4 l8 -8" stroke="currentColor" strokeWidth="2" />
      <path d="M100 44 l4 4 l8 -8" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/** Rows gated by a policy layer before reaching the client. */
export function GlyphDatabase({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className}>
      <ellipse cx="26" cy="18" rx="18" ry="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 18 V54 C8 58, 16 61, 26 61 C36 61, 44 58, 44 54 V18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 32 C8 36, 16 39, 26 39 C36 39, 44 36, 44 32" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
      <path d="M44 30 H62" stroke="currentColor" strokeWidth="1.5" />
      <rect x="62" y="18" width="16" height="36" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M78 26 H100 M78 46 H100" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <rect x="100" y="20" width="14" height="12" stroke="currentColor" strokeWidth="1.5" />
      <rect x="100" y="40" width="14" height="12" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

/** Jobs queued off the request thread onto workers. */
export function GlyphQueue({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className}>
      <rect x="4" y="28" width="18" height="16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 36 H34" stroke="currentColor" strokeWidth="1.5" />
      {[34, 46, 58, 70].map((x, i) => (
        <rect
          key={x}
          x={x}
          y="28"
          width="10"
          height="16"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity={1 - i * 0.18}
        />
      ))}
      <path d="M80 36 H92" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <rect x="92" y="16" width="22" height="14" stroke="currentColor" strokeWidth="1.5" />
      <rect x="92" y="42" width="22" height="14" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

/** One change pushed to every connected client. */
export function GlyphRealtime({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className}>
      <circle cx="22" cy="36" r="9" stroke="currentColor" strokeWidth="1.5" />
      {[16, 24, 32].map((r, i) => (
        <path
          key={r}
          d={`M${22 + r} ${36 - r * 0.75} A ${r} ${r} 0 0 1 ${22 + r} ${36 + r * 0.75}`}
          stroke="currentColor"
          strokeWidth="1.5"
          opacity={0.5 - i * 0.13}
        />
      ))}
      {[10, 30, 50].map((y, i) => (
        <rect
          key={y}
          x="88"
          y={y}
          width="26"
          height="12"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity={1 - i * 0.2}
        />
      ))}
    </svg>
  );
}

/** Document in, rate-limited pipeline, flagged result out. */
export function GlyphPipeline({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className}>
      <rect x="6" y="18" width="24" height="32" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 27 H25 M11 34 H25 M11 41 H19" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M30 34 H46" stroke="currentColor" strokeWidth="1.5" />
      <rect x="46" y="22" width="20" height="24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M56 22 V46" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M66 34 H82" stroke="currentColor" strokeWidth="1.5" />
      <rect x="82" y="14" width="32" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="82" y="29" width="32" height="10" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <rect x="82" y="44" width="32" height="10" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
    </svg>
  );
}

/** Slots on a calendar grid resolving to an allocated device and room. */
export function GlyphBooking({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className}>
      <rect x="4" y="12" width="46" height="48" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 24 H50" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19 12 V6 M35 12 V6" stroke="currentColor" strokeWidth="1.5" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={10 + c * 14}
            y={30 + r * 10}
            width="8"
            height="6"
            fill={r === 1 && c === 1 ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.2"
            opacity={r === 1 && c === 1 ? 1 : 0.35}
          />
        )),
      )}
      <path d="M50 36 H66" stroke="currentColor" strokeWidth="1.5" />
      <rect x="66" y="16" width="24" height="16" stroke="currentColor" strokeWidth="1.5" />
      <rect x="66" y="40" width="24" height="16" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <path d="M90 24 H112 M90 48 H112" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}

/** Camera feed fanning into parallel AI analysers. */
export function GlyphVision({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className}>
      <rect x="4" y="26" width="20" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 30 l8 -5 v18 l-8 -5 Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="13" cy="33" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      {[10, 28, 46].map((y, i) => (
        <g key={y} opacity={1 - i * 0.22}>
          <path d={`M34 33 C 46 33, 46 ${y + 7}, 58 ${y + 7}`} stroke="currentColor" strokeWidth="1.5" />
          <rect x="58" y={y} width="22" height="14" stroke="currentColor" strokeWidth="1.5" />
        </g>
      ))}
      {/* Kafka log the analysers publish onto */}
      <path d="M88 8 V64" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {[12, 24, 36, 48].map((y, i) => (
        <rect key={y} x="92" y={y} width="20" height="8" stroke="currentColor" strokeWidth="1.5" opacity={0.85 - i * 0.15} />
      ))}
    </svg>
  );
}

/** One interface fronting three cloud storage backends. */
export function GlyphStorage({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className}>
      <rect x="4" y="24" width="22" height="20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 31 H21 M9 37 H17" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M26 34 H42" stroke="currentColor" strokeWidth="1.5" />
      {/* unified adapter */}
      <rect x="42" y="20" width="16" height="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      {[8, 30, 52].map((y, i) => (
        <g key={y} opacity={1 - i * 0.2}>
          <path d={`M58 34 C 70 34, 70 ${y + 6}, 82 ${y + 6}`} stroke="currentColor" strokeWidth="1.5" />
          <path
            d={`M82 ${y + 2} h18 a5 5 0 0 1 0 9 h-18 a5 5 0 0 1 0 -9 Z`}
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </g>
      ))}
    </svg>
  );
}

/** Operator states streaming into a live monitoring board. */
export function GlyphMonitor({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className}>
      {[8, 26, 44].map((y, i) => (
        <g key={y} opacity={1 - i * 0.18}>
          <circle cx="12" cy={y + 7} r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d={`M20 ${y + 7} H40`} stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
        </g>
      ))}
      <rect x="40" y="6" width="14" height="52" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M54 33 H66" stroke="currentColor" strokeWidth="1.5" />
      <rect x="66" y="10" width="48" height="44" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M72 42 l8 -9 l7 6 l9 -14 l8 10"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M66 22 H114" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    </svg>
  );
}
