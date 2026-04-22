import type { ReactNode } from "react"

/**
 * No border-radius here: `MepHomeQuoteFormDrawShell` / `HomeQuoteFormDrawShell` is the only rounded
 * clip (overflow hidden + TL/BR radii matching the SVG or mobile outline). Duplicating % radii on
 * inner layers caused the grey fill to sit on a different curve than the white frame.
 */
export function GlassFormPanel({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full min-w-0">
      <div className="pointer-events-none absolute inset-0 bg-white/[0.03]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent"
        aria-hidden
      />
      <div className="relative z-[1] p-6 md:p-8">{children}</div>
    </div>
  )
}
