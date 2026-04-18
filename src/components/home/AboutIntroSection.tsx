"use client"

import Image from "next/image"
import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react"
import { CustomPillButton } from "@/components/ui/CustomPillButton"

const STORY_IMAGE_SRC = "/images/low-angle-symmetric-shot-old-architecture-with-beautiful-blue-sky-background.png"

const DEFAULT_BODY_LINES = [
  "APX is a go-to contractor for major commercial and industrial projects in London and the Southeast. With established divisions for mechanical, electrical and security services, we deliver coordinated MEP across London and the Home Counties.",
  "With over 8 successful years as an independent company, we work with commercial, education, healthcare and industrial clients.",
  "We deliver design, installation and maintenance to the highest standards — with programme discipline and workmanship you can trust.",
] as const

export type AboutIntroSectionProps = {
  bodyLines?: readonly string[]
}

const STAGGER_MS = 95

function Line({
  children,
  index,
  active,
  className,
  as,
  style,
}: {
  children: ReactNode
  index: number
  active: boolean
  className?: string
  as?: ElementType
  style?: CSSProperties
}) {
  const Tag = as ?? "div"
  return (
    <Tag
      className={`about-intro-line ${active ? "about-intro-line--visible" : "about-intro-line--hidden"} ${className ?? ""}`}
      style={
        {
          ...style,
          "--about-intro-delay": `${index * STAGGER_MS}ms`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  )
}

export function AboutIntroSection({ bodyLines = DEFAULT_BODY_LINES }: AboutIntroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      setActive(true)
      return
    }
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true)
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduceMotion])

  const on = active

  return (
    <section ref={sectionRef} id="about-intro" className="relative bg-black" aria-label="Our story">
      {/* Same horizontal rhythm as #services and other homepage strips */}
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-2 lg:min-h-[min(90vh,52rem)] lg:items-stretch lg:gap-12 lg:py-20 xl:gap-14">
          <div className="flex flex-col justify-center text-left">
            <div className="max-w-xl">
              <Line
                index={0}
                active={on}
                className="section-label mb-5 block text-sm tracking-[0.2em] text-white/80 sm:mb-6 sm:text-base"
                style={{ fontFamily: "var(--font-menu), sans-serif" }}
              >
                OUR STORY
              </Line>

              <Line
                index={1}
                active={on}
                as="h2"
                className="home-section-title font-title font-bold text-white"
              >
                Built on experience. Driven by standards.
              </Line>

              <div className="mt-8 max-w-2xl space-y-4 text-left text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
                {bodyLines.map((line, i) => (
                  <Line key={line} index={2 + i} active={on} as="p" className="block">
                    {line}
                  </Line>
                ))}
              </div>

              <Line index={2 + bodyLines.length} active={on} className="mt-10 flex justify-start">
                <CustomPillButton href="/about" size="md">
                  Our story
                </CustomPillButton>
              </Line>
            </div>
          </div>

          {/* White plate scales 55%–75% (loop); mask + photo on top. */}
          <div className="relative isolate h-full min-h-[min(55vw,22rem)] w-full min-w-0 overflow-hidden rounded-bl-[1.75rem] lg:min-h-0 lg:rounded-bl-[2rem]">
            <div
              className="about-intro-white-pulse pointer-events-none absolute z-0 bg-white"
              style={{ inset: "-22px" }}
              aria-hidden
            />
            <div className="absolute inset-0 z-10 overflow-hidden rounded-bl-[1.75rem] lg:rounded-bl-[2rem]">
              <Image
                src={STORY_IMAGE_SRC}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
