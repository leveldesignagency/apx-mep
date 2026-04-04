"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMemo, useRef, useState } from "react"
import { CustomPillButton } from "@/components/ui/CustomPillButton"
import { MEP_SERVICE_HUB_ITEMS } from "@/lib/mep-service-hub"
import { serviceHeroImages } from "@/lib/serviceHeroImages"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/** Short labels for tab row — order matches MEP_SERVICE_HUB_ITEMS */
const TAB_LABELS = [
  "Design & build",
  "Domestic",
  "Commercial",
  "Refurb",
  "Testing",
  "Solar",
  "Access",
  "BMS",
  "Fire & security",
] as const

const OFFER_IMAGES: readonly string[] = [
  serviceHeroImages.cctv,
  serviceHeroImages.accessControl,
  serviceHeroImages.fireAlarm,
  serviceHeroImages.intruder,
  serviceHeroImages.videoDoor,
  serviceHeroImages.cctv,
  serviceHeroImages.accessControl,
  serviceHeroImages.fireAlarm,
  serviceHeroImages.intruder,
]

function toThreeFeatures(description: string): [string, string, string] {
  const splitEm = description.split(" — ").map((s) => s.trim())
  if (splitEm.length >= 2) {
    const head = splitEm[0]!
    const tail = splitEm[1]!
    const inTail = tail.split(/(?<=\.)\s+/).map((s) => s.trim())
    return [
      head,
      inTail[0] ?? tail.slice(0, 120),
      inTail[1] ?? inTail[0] ?? "Commissioning, handover and documentation.",
    ]
  }
  const sentences = description
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 8)
  if (sentences.length >= 3) return [sentences[0]!, sentences[1]!, sentences[2]!]
  if (sentences.length === 2) return [sentences[0]!, sentences[1]!, "Coordinated delivery and compliance."]
  return [description, "Design through installation.", "Testing and ongoing support."]
}

export function MepWhatWeOfferSection() {
  const [active, setActive] = useState(0)

  const items = useMemo(
    () =>
      MEP_SERVICE_HUB_ITEMS.map((item, i) => ({
        ...item,
        tabLabel: TAB_LABELS[i]!,
        image: OFFER_IMAGES[i] ?? OFFER_IMAGES[0]!,
        features: toThreeFeatures(item.description),
      })),
    []
  )

  const item = items[active]!

  const rootRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const panelCopyRef = useRef<HTMLDivElement>(null)
  const panelFeaturesRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const tabCount = items.length

  useGSAP(
    () => {
      const root = rootRef.current
      const header = headerRef.current
      const panel = panelRef.current
      const copyCol = panelCopyRef.current
      const featCol = panelFeaturesRef.current
      if (!root || !header || !panel || !copyCol || !featCol) return

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      /** LTR row: highest index is rightmost — animate right → left */
      const tabOrder = Array.from({ length: tabCount }, (_, i) => tabCount - 1 - i)

      const headerEls = Array.from(header.children) as HTMLElement[]
      const tabs = tabOrder.map((i) => tabRefs.current[i]).filter(Boolean) as HTMLElement[]
      const featureRows = Array.from(featCol.querySelectorAll("li[data-offer-feature]"))
      const featuresLabel = featCol.querySelector('[data-offer-features="label"]') as HTMLElement | null

      gsap.set(headerEls, { autoAlpha: 0, filter: "blur(12px)", y: 18 })
      gsap.set(tabs, { autoAlpha: 0, x: -36 })
      gsap.set(panel, { autoAlpha: 0, scale: 0.94, transformOrigin: "50% 0%" })
      gsap.set(copyCol, { autoAlpha: 0, filter: "blur(10px)", y: 14 })
      if (featuresLabel) gsap.set(featuresLabel, { autoAlpha: 0 })
      gsap.set(featureRows, { autoAlpha: 0, filter: "blur(8px)", y: 8 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      })

      tl.to(headerEls, {
        autoAlpha: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.38,
        stagger: 0.06,
      })

      tabs.forEach((tab, i) => {
        tl.to(
          tab,
          { autoAlpha: 1, x: 0, duration: 0.26, ease: "power2.out" },
          i === 0 ? ">0.02" : ">0.03"
        )
      })

      tl.to(
        panel,
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.42,
          ease: "power3.out",
        },
        ">0.02"
      )

      tl.to(
        copyCol,
        {
          autoAlpha: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.32,
        },
        "-=0.22"
      )

      if (featuresLabel) {
        tl.to(featuresLabel, { autoAlpha: 1, duration: 0.2 }, "<0.06")
      }

      tl.to(featureRows, {
        autoAlpha: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.26,
        stagger: 0.04,
        ease: "power2.out",
      })
    },
    { scope: rootRef, dependencies: [] }
  )

  return (
    <div ref={rootRef} className="fs-what-we-offer w-full space-y-8 lg:space-y-10">
      <div ref={headerRef} className="space-y-0">
        <span className="section-label text-white/80">APX MEP SERVICES</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-left tracking-normal section-title-gap services-section-title leading-tight font-title text-white">
          What we offer
        </h2>
        <p className="text-base leading-relaxed max-w-xl section-intro-gap hero-services-intro text-white/90">
          Service lines aligned with how we deliver on site — from design and build through commercial and domestic M&amp;E, testing, solar, access, fire and ongoing support.
        </p>
      </div>

      <div
        className="grid w-full grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2 md:grid-cols-5 md:gap-3"
        role="tablist"
        aria-label="Service categories"
      >
        {items.map((o, i) => {
          const isSelected = i === active
          return (
            <button
              key={o.href}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              type="button"
              role="tab"
              aria-selected={isSelected}
              id={`mep-offer-tab-${i}`}
              aria-controls={`mep-offer-panel-${i}`}
              onClick={() => setActive(i)}
              className={`fs-offer-tab flex min-h-[44px] w-full min-w-0 shrink-0 items-center justify-center rounded-full border-2 px-2 py-2.5 text-center text-[10px] font-semibold uppercase leading-tight tracking-wide transition-colors sm:px-3 sm:text-xs md:text-sm ${
                isSelected ? "fs-offer-tab--active" : "fs-offer-tab--inactive"
              }`}
            >
              <span className="fs-offer-tab__label block w-full text-center line-clamp-2 sm:line-clamp-none">{o.tabLabel}</span>
            </button>
          )
        })}
      </div>

      <div
        ref={panelRef}
        role="tabpanel"
        id={`mep-offer-panel-${active}`}
        aria-labelledby={`mep-offer-tab-${active}`}
        className="overflow-hidden rounded-tl-[1.5rem] rounded-br-[1.5rem] border-2 border-white bg-black"
      >
        <div className="relative min-h-[min(520px,85vh)] lg:min-h-[440px]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-[opacity,transform] duration-500 ease-out"
            style={{ backgroundImage: `url('${item.image}')` }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/85 lg:bg-gradient-to-r lg:from-black/[0.88] lg:via-black/45 lg:to-black/20"
            aria-hidden
          />

          <div className="relative grid gap-0 lg:min-h-[440px] lg:grid-cols-[1.1fr_0.9fr]">
            <div ref={panelCopyRef} className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
              <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border-2 border-white/70 bg-black/50 py-1.5 pl-4 pr-[calc(1rem+0.12em)] text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-white sm:pl-5 sm:pr-[calc(1.25rem+0.12em)] sm:text-xs">
                {item.navLabel}
              </div>

              <h3 className="font-title text-2xl font-bold uppercase leading-[1.12] tracking-tight text-white sm:text-3xl md:text-[clamp(1.75rem,4vw,2.75rem)]">
                {item.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">{item.description}</p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <CustomPillButton href={item.href} size="md">
                  Find out more
                </CustomPillButton>
                <CustomPillButton href="/contact" variant="outline" size="md">
                  Contact
                </CustomPillButton>
              </div>
            </div>

            <div ref={panelFeaturesRef} className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-10 lg:py-14 lg:pl-6">
              <p data-offer-features="label" className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                The features
              </p>
              <ul className="mt-5 space-y-3">
                {item.features.map((line, idx) => (
                  <li
                    key={`${idx}-${line.slice(0, 24)}`}
                    data-offer-feature
                    className="rounded-xl border border-white/30 bg-black/45 px-4 py-3 text-sm leading-snug text-white backdrop-blur-[6px]"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
