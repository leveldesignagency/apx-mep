"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

/** `homecounties_1-01.png` … `homecounties_1-10.png` stacked as map segments. `homecounties_1-11.png` not used. */
const SEGMENT_COUNT = 10
/** Full sequence length; segments appear in shuffled order, evenly spaced across this window. */
const REVEAL_TOTAL_MS = 2200

function segmentSrc(index1To10: number): string {
  const n = String(index1To10).padStart(2, "0")
  return `/images/homecounties_1-${n}.png`
}

function shuffleSegmentOrder(): number[] {
  const a = Array.from({ length: SEGMENT_COUNT }, (_, i) => i + 1)
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

type Props = {
  className?: string
}

/**
 * Map segments: on scroll into view, layers fade in in random order over {@link REVEAL_TOTAL_MS} ms, then stay visible.
 */
export function MechanicalHomeCountiesSlideshow({ className }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)
  const timeoutIdsRef = useRef<number[]>([])

  const [visibleSegments, setVisibleSegments] = useState<Set<number>>(() => new Set())

  const clearStaggerTimeouts = () => {
    timeoutIdsRef.current.forEach((id) => window.clearTimeout(id))
    timeoutIdsRef.current = []
  }

  const startReveal = () => {
    clearStaggerTimeouts()
    const reduceMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduceMotion) {
      setVisibleSegments(new Set(Array.from({ length: SEGMENT_COUNT }, (_, i) => i + 1)))
      return
    }

    const order = shuffleSegmentOrder()
    const stepMs = REVEAL_TOTAL_MS / SEGMENT_COUNT
    order.forEach((segmentIndex, step) => {
      const id = window.setTimeout(() => {
        setVisibleSegments((prev) => new Set([...prev, segmentIndex]))
      }, stepMs * step)
      timeoutIdsRef.current.push(id)
    })
  }

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return
        startedRef.current = true
        startReveal()
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    )

    obs.observe(el)
    return () => {
      obs.disconnect()
      clearStaggerTimeouts()
    }
  }, [])

  return (
    <div ref={rootRef} className={cn("relative w-full", className)}>
      <div className="relative h-[min(24rem,50vh)] w-full overflow-hidden bg-transparent sm:h-[min(29rem,54vh)] lg:h-[min(44rem,min(72vh,820px))]">
        {Array.from({ length: SEGMENT_COUNT }, (_, i) => {
          const n = i + 1
          const visible = visibleSegments.has(n)
          return (
            <Image
              key={n}
              src={segmentSrc(n)}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              draggable={false}
              className={cn(
                "object-contain object-top transition-opacity duration-150 ease-out",
                visible ? "opacity-100" : "opacity-0"
              )}
              style={{ zIndex: n }}
            />
          )
        })}
      </div>
    </div>
  )
}
