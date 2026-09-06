import type { ComponentType } from "react";

import type { ProjectGlyph } from "@/lib/portfolio-content";
import {
  GlyphAgents,
  GlyphBooking,
  GlyphDatabase,
  GlyphMonitor,
  GlyphPipeline,
  GlyphQueue,
  GlyphRealtime,
  GlyphStorage,
  GlyphTesting,
  GlyphVision,
} from "@/components/brand/project-glyph";

/** Maps a project's glyph key to its architecture drawing. */
export const glyphs: Record<ProjectGlyph, ComponentType<{ className?: string }>> = {
  agents: GlyphAgents,
  testing: GlyphTesting,
  database: GlyphDatabase,
  queue: GlyphQueue,
  realtime: GlyphRealtime,
  pipeline: GlyphPipeline,
  booking: GlyphBooking,
  vision: GlyphVision,
  storage: GlyphStorage,
  monitor: GlyphMonitor,
};
