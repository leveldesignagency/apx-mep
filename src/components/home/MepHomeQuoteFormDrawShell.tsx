"use client"

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"

/** Matches #contact #quote-form: TL + BR rounded, TR + BL sharp (viewBox 0–100). */
const BORDER_PATH =
  "M 8 0 H 100 V 92 A 8 8 0 0 1 92 100 H 0 V 8 A 8 8 0 0 1 8 0 Z"

const DRAW_MS = 1150
export const MEP_QUOTE_FORM_INNER_DELAY_MS = Math.round(DRAW_MS * 0.78)

const FALLBACK_DASH_LEN = 380

type MepHomeQuoteFormDrawShellProps = {
  active: boolean
  children: ReactNode
}

/**
 * SVG stroke “drawn” border around the quote form; inner content fades in near the end of the draw.
 * Uses measured path length (not pathLength="1") for reliable dash animation across browsers.
 */
export function MepHomeQuoteFormDrawShell({ active, children }: MepHomeQuoteFormDrawShellProps) {
  const pathRef = useRef<SVGPathElement | null>(null)
  const [dashLen, setDashLen] = useState(FALLBACK_DASH_LEN)
  const [reduceMotion, setReduceMotion] = useState(false)

  useLayoutEffect(() => {
    const el = pathRef.current
    if (!el) return
    try {
      const L = el.getTotalLength()
      if (Number.isFinite(L) && L > 0) {
        setDashLen(L)
      }
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const shellStyle = {
    ["--quote-path-len"]: String(dashLen),
  } as CSSProperties

  const strokeClass = reduceMotion
    ? "home-quote-form-stroke home-quote-form-stroke--done"
    : active
      ? "home-quote-form-stroke home-quote-form-stroke--run"
      : "home-quote-form-stroke"

  return (
    <div
      className="quote-form-draw-shell relative overflow-hidden rounded-tl-[1.5rem] rounded-br-[1.5rem] max-lg:border max-lg:border-white/45 lg:border-0"
      style={shellStyle}
    >
      {/*
        preserveAspectRatio="none" skews corner radii on tall narrow viewports.
        Below lg: hide SVG; GlassFormPanel + shell overflow provide clean fixed-radius corners.
      */}
      <svg
        className="pointer-events-none absolute inset-0 z-[2] hidden h-full w-full overflow-visible lg:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {/* Stroke in user units (~hairline after scale). Avoid vectorEffect + non-uniform SVG scale — breaks dashed stroke continuity. */}
        <path
          ref={pathRef}
          d={BORDER_PATH}
          fill="none"
          stroke="#ffffff"
          strokeWidth={0.14}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={strokeClass}
        />
      </svg>
      <div
        className={`quote-form-draw-shell__inner relative z-[1] ${
          reduceMotion ? (active ? "opacity-100" : "opacity-0") : active ? "quote-form-draw-shell__inner--fade" : "quote-form-draw-shell__inner--off opacity-0"
        }`}
        style={
          reduceMotion
            ? undefined
            : ({ ["--quote-inner-delay"]: `${MEP_QUOTE_FORM_INNER_DELAY_MS}ms` } as CSSProperties)
        }
      >
        {children}
      </div>
    </div>
  )
}
