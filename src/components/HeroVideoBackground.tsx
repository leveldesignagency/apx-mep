"use client"

import { useEffect, useState } from "react"
import { HERO_BG_GRADIENT_BOTTOM, HERO_BG_GRADIENT_LEFT } from "@/lib/heroBackgroundGradients"

/**
 * Homepage hero background — scrolls with the page (inside #hero), not fixed to the viewport.
 * Image fades out once scrolled past hero so it does not show through below.
 */
export default function HeroVideoBackground() {
  const [heroVisible, setHeroVisible] = useState(true)

  useEffect(() => {
    const heroHeight = window.innerHeight
    const threshold = heroHeight * 0.85

    const onScroll = () => {
      setHeroVisible(window.scrollY < threshold)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-black" />
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{ opacity: heroVisible ? 1 : 0 }}
      >
        <img
          src="/male-electrician-overalls-focused-work-switchboard-with-fuses-using-tablet.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover origin-center"
          style={{ transform: "scaleX(-1)" }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: HERO_BG_GRADIENT_LEFT }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: HERO_BG_GRADIENT_BOTTOM }} />
      </div>
    </div>
  )
}
