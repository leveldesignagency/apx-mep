"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

/** Get current scroll Y from every possible scroll root (Mac trackpad, etc.). */
function getScrollY(): number {
  if (typeof window === "undefined" || typeof document === "undefined") return 0
  const w = window
  const doc = document
  return Math.max(
    w.scrollY ?? 0,
    w.pageYOffset ?? 0,
    doc.documentElement?.scrollTop ?? 0,
    doc.body?.scrollTop ?? 0,
    doc.scrollingElement?.scrollTop ?? 0
  )
}

/**
 * Fixed hero video layer. Opacity fades from 1 to 0 as the user scrolls.
 * Rendered via portal into body so nothing in the tree can affect fixed/scroll.
 */
export default function HeroVideoBackground() {
  const [mounted, setMounted] = useState(false)
  const [opacity, setOpacity] = useState(1)
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return

    const update = () => {
      const h = window.innerHeight
      const y = getScrollY()
      /* Fade to 0 by the end of the first viewport height */
      const fadeEnd = h
      const value = Math.max(0, 1 - (y / fadeEnd))
      setOpacity(value)
      if (layerRef.current) layerRef.current.style.opacity = String(value)
    }

    const onScrollOrWheel = () => requestAnimationFrame(update)

    update()

    // Scroll: normal document scroll
    window.addEventListener("scroll", onScrollOrWheel, { passive: true })
    document.addEventListener("scroll", onScrollOrWheel, { passive: true, capture: true })

    // Wheel: Mac trackpad / mouse wheel (fires when user scrolls even if scroll event doesn’t)
    window.addEventListener("wheel", onScrollOrWheel, { passive: true })
    document.addEventListener("wheel", onScrollOrWheel, { passive: true, capture: true })

    // Fallback: poll scroll position so we catch any scroll container (e.g. overflow div)
    const interval = setInterval(update, 150)

    return () => {
      window.removeEventListener("scroll", onScrollOrWheel)
      document.removeEventListener("scroll", onScrollOrWheel, { capture: true })
      window.removeEventListener("wheel", onScrollOrWheel)
      document.removeEventListener("wheel", onScrollOrWheel, { capture: true })
      clearInterval(interval)
    }
  }, [mounted])

  if (!mounted || typeof document === "undefined") return null

  const layer = (
    <div
      ref={layerRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: -1,
        opacity,
        transition: "opacity 0.25s ease-out",
      }}
      aria-hidden
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        preload="auto"
      >
        <source src="/606807_Cities_City_3840x2160.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.15) 50%, transparent 72%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, transparent 55%, rgba(255,255,255,0.4) 80%, rgba(255,255,255,0.95) 100%)",
        }}
      />
    </div>
  )

  return createPortal(layer, document.body)
}
