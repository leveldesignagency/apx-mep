import type { ReactNode } from "react"

/** Fixed radii (not %) so tall mobile layouts don’t get elliptical / skewed corners. */
const R = "rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-none rounded-bl-none"

/** Same surface language as contact page detail cards: light tint, no grey frosted blur. */
export function GlassFormPanel({ children }: { children: ReactNode }) {
  return (
    <div className={`relative overflow-hidden ${R}`}>
      <div className={`pointer-events-none absolute inset-0 bg-white/[0.03] ${R}`} aria-hidden />
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent ${R}`}
        aria-hidden
      />
      <div className={`relative z-[1] p-6 md:p-8 ${R}`}>{children}</div>
    </div>
  )
}
