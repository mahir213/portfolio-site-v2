"use client";

import { cn } from "@/lib/utils";

interface GridDotBackgroundProps {
  className?: string;
}

/**
 * Inspired by Aceternity UI grid/dot backgrounds with subtle glow accents.
 * Combines layered radial and grid textures that respond well to light & dark themes.
 */
export function GridDotBackground({ className }: GridDotBackgroundProps) {
  return (
    <div
      className={cn(
  "absolute inset-0 -z-10 overflow-hidden bg-transparent dark:bg-transparent",
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-80 dark:opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148, 163, 184, 0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.18) 1px, transparent 1px)",
          backgroundSize: "110px 110px",
        }}
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(148, 163, 184, 0.26), transparent 55%), radial-gradient(circle at 22% 28%, rgba(148, 163, 184, 0.18), transparent 48%), radial-gradient(circle at 78% 24%, rgba(148, 163, 184, 0.2), transparent 52%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15, 23, 42, 0.22) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />
  <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-slate-200/25 blur-[140px] dark:bg-slate-500/25" />
  <div className="absolute -bottom-48 right-1/4 h-[520px] w-[520px] rounded-full bg-slate-300/25 blur-[180px] opacity-70 dark:bg-slate-600/30" />
  <div className="absolute -bottom-24 left-1/5 h-[380px] w-[380px] rounded-full bg-slate-200/30 blur-[160px] opacity-50 dark:bg-slate-500/30" />
    </div>
  );
}

export default GridDotBackground;
