"use client"

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react"
import { CustomPillButton } from "@/components/ui/CustomPillButton"
import { MEP_SERVICE_HUB_ITEMS } from "@/lib/mep-service-hub"
import { serviceHeroImages } from "@/lib/serviceHeroImages"
import { CheckCircle } from "lucide-react"

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
  const tablistRef = useRef<HTMLDivElement>(null)
  /** null = first commit only; avoids Strict Mode double-effect + scrollIntoView jumping the page to #services */
  const prevActiveRef = useRef<number | null>(null)

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

  useEffect(() => {
    const root = tablistRef.current
    if (!root) return
    const tab = root.querySelector<HTMLButtonElement>(`#mep-offer-tab-${active}`)
    if (!tab) return

    const prev = prevActiveRef.current
    if (prev === null) {
      prevActiveRef.current = active
      return
    }
    if (prev === active) return

    prevActiveRef.current = active

    // Scroll only the tab strip horizontally — never tab.scrollIntoView (can move the whole page to #services).
    const tabLeft = tab.offsetLeft
    const tabW = tab.offsetWidth
    const viewW = root.clientWidth
    const target = tabLeft - viewW / 2 + tabW / 2
    root.scrollTo({ left: Math.max(0, target), behavior: "smooth" })
    tab.focus({ preventScroll: true })
  }, [active])

  const onTablistKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const n = items.length
    if (n === 0) return
    if (e.key === "ArrowRight") {
      e.preventDefault()
      setActive((i) => (i + 1) % n)
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      setActive((i) => (i - 1 + n) % n)
    } else if (e.key === "Home") {
      e.preventDefault()
      setActive(0)
    } else if (e.key === "End") {
      e.preventDefault()
      setActive(n - 1)
    }
  }

  return (
    <div className="fs-what-we-offer w-full space-y-8 lg:space-y-10">
      <div className="space-y-0">
        <span className="section-label text-white">Services</span>
        <h2 className="home-section-title section-title-gap services-section-title text-left font-title text-white">
          Delivery built around your project
        </h2>
        <p className="text-base leading-relaxed max-w-xl section-intro-gap hero-services-intro text-white">
          Service lines aligned with how we deliver on site — from design and build through commercial and domestic M&amp;E, testing, solar, access, fire and ongoing support.
        </p>
      </div>

      {/* Full-width horizontal scroll of tab pills; negative margin aligns with section container padding */}
      <div className="-mx-4 sm:-mx-6 lg:mx-0">
        <div
          ref={tablistRef}
          role="tablist"
          aria-label="Service categories"
          onKeyDown={onTablistKeyDown}
          className="flex snap-x snap-mandatory flex-nowrap gap-2 overflow-x-auto overflow-y-visible scroll-smooth px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:thin] sm:gap-3 sm:px-6 lg:px-0 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/25 [&::-webkit-scrollbar-track]:bg-transparent"
        >
          {items.map((o, i) => {
            const isSelected = i === active
            return (
              <button
                key={o.href}
                type="button"
                role="tab"
                aria-selected={isSelected}
                id={`mep-offer-tab-${i}`}
                aria-controls={`mep-offer-panel-${i}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`fs-offer-tab flex min-h-[44px] shrink-0 snap-start items-center justify-center rounded-full border-2 px-3 py-2.5 text-center text-[11px] font-semibold uppercase leading-tight tracking-wide transition-colors sm:min-w-[9.5rem] sm:px-4 sm:text-xs md:text-sm ${
                  isSelected ? "fs-offer-tab--active" : "fs-offer-tab--inactive"
                }`}
              >
                <span className="fs-offer-tab__label whitespace-nowrap">{o.tabLabel}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`mep-offer-panel-${active}`}
        aria-labelledby={`mep-offer-tab-${active}`}
        className="apx-home-card-light-edge overflow-hidden rounded-tl-[1.5rem] rounded-br-[1.5rem] border-2 border-white bg-black"
      >
        <div className="relative flex min-h-[min(520px,85vh)] flex-col lg:min-h-[440px]">
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center transition-[opacity,transform] duration-500 ease-out"
            style={{ backgroundImage: `url('${item.image}')` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-black/75 to-black/85 lg:bg-gradient-to-r lg:from-black/[0.88] lg:via-black/45 lg:to-black/20"
            aria-hidden
          />

          <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col">
            <div className="relative grid min-h-0 flex-1 gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
                <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border-2 border-white/70 bg-black/50 py-1.5 pl-4 pr-[calc(1rem+0.12em)] text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-white sm:pl-5 sm:pr-[calc(1.25rem+0.12em)] sm:text-xs">
                  {item.navLabel}
                </div>

                <h3 className="font-title text-2xl font-bold leading-[1.03] tracking-tight text-white sm:text-3xl md:text-[clamp(1.75rem,4vw,2.75rem)]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white sm:text-base">{item.description}</p>
              </div>

              <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-10 lg:py-14 lg:pl-6">
                <p data-offer-features="label" className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                  The features
                </p>
                <ul className="mt-5 list-none space-y-4">
                  {item.features.map((line, idx) => (
                    <li
                      key={`${idx}-${line.slice(0, 24)}`}
                      data-offer-feature
                      className="flex gap-3 items-start"
                    >
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-white/75 sm:h-5 sm:w-5"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span className="min-w-0 text-sm leading-relaxed text-white sm:text-base">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/15 px-6 py-6 sm:px-10 lg:px-12 lg:py-6">
              <CustomPillButton href={item.href} size="md">
                Find out more
              </CustomPillButton>
              <CustomPillButton href="/contact" variant="outline" size="md">
                Contact
              </CustomPillButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
