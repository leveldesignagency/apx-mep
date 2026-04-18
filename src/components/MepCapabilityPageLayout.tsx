import type { ReactNode } from "react"
import Link from "next/link"
import { ListChecks, ShieldCheck, Package, Check } from "lucide-react"
import { MepCapabilityTabs } from "@/components/MepCapabilityTabs"
import { MepServiceFaqByRoute } from "@/components/MepServiceFaqByRoute"
import { OurCustomers } from "@/components/ServicePageSharedSections"
import { ServicePageHero, type ServicePageHeroProps } from "@/components/ServicePageHero"
import { MEP_SERVICE_CONTENT_OUTER_CLASS } from "@/lib/mep-service-layout"

export type MepCapabilityPageLayoutProps = {
  title: string
  intro: ReactNode
  /** Passed to ServicePageHero — defaults to quick-links */
  heroNav?: ServicePageHeroProps["heroNav"]
  capabilities: string[]
  compliance: string[]
  deliverables: string[]
  ctaLabel: string
  /**
   * `pillar` — Electrical / Mechanical / Plumbing / Building services only: trade tabs + 3-column capability table.
   * `service-line` — Hub service pages: stacked sections (no trade tabs, not the pillar table pattern).
   */
  variant?: "pillar" | "service-line"
}

const listClass = "apx-capability-list"
const listItemClass = "apx-capability-list__item"

const pillarSectionHeadingClass =
  "text-lg sm:text-xl font-semibold text-white font-title tracking-tight mb-4 flex items-center gap-2.5"

const serviceLineSectionHeadingClass =
  "text-xl sm:text-2xl font-semibold text-white font-title tracking-tight mb-5 flex items-center gap-2.5"

function CapabilityListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className={`${listItemClass} !flex items-start gap-2.5`}>
      <Check className="mt-[0.35rem] h-3.5 w-3.5 shrink-0 text-white/45" strokeWidth={2.5} aria-hidden />
      <span className="min-w-0">{children}</span>
    </li>
  )
}

function PillarThreeColumnBody({
  capabilities,
  compliance,
  deliverables,
}: Pick<MepCapabilityPageLayoutProps, "capabilities" | "compliance" | "deliverables">) {
  return (
    <div className="fs-capability-unified mt-0 sm:mt-1">
      <div className="fs-capability-tabs-row">
        <MepCapabilityTabs />
      </div>
      <div className="fs-capability-inner fs-capability-inner--unified">
        <div className="fs-capability-columns">
          <div className="fs-capability-column min-w-0">
            <h2 className={pillarSectionHeadingClass}>
              <ListChecks className="h-5 w-5 shrink-0 text-white/70" aria-hidden />
              Capabilities
            </h2>
            <ul className={listClass}>
              {capabilities.map((item) => (
                <CapabilityListItem key={item}>{item}</CapabilityListItem>
              ))}
            </ul>
          </div>

          <div className="fs-capability-column min-w-0">
            <h2 className={pillarSectionHeadingClass}>
              <ShieldCheck className="h-5 w-5 shrink-0 text-white/70" aria-hidden />
              Compliance
            </h2>
            <ul className={listClass}>
              {compliance.map((item) => (
                <CapabilityListItem key={item}>{item}</CapabilityListItem>
              ))}
            </ul>
          </div>

          <div className="fs-capability-column min-w-0">
            <h2 className={pillarSectionHeadingClass}>
              <Package className="h-5 w-5 shrink-0 text-white/70" aria-hidden />
              Deliverables
            </h2>
            <ul className={listClass}>
              {deliverables.map((item) => (
                <CapabilityListItem key={item}>{item}</CapabilityListItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceLineStackedBody({
  capabilities,
  compliance,
  deliverables,
}: Pick<MepCapabilityPageLayoutProps, "capabilities" | "compliance" | "deliverables">) {
  return (
    <div className="mx-auto max-w-[min(100%,48rem)] space-y-14 sm:space-y-16 lg:space-y-20 xl:max-w-[min(100%,52rem)]">
      <section aria-labelledby="mep-svc-capabilities">
        <h2 id="mep-svc-capabilities" className={serviceLineSectionHeadingClass}>
          <ListChecks className="h-6 w-6 shrink-0 text-white/70" aria-hidden />
          Capabilities
        </h2>
        <ul className={listClass}>
          {capabilities.map((item) => (
            <CapabilityListItem key={item}>{item}</CapabilityListItem>
          ))}
        </ul>
      </section>

      <section aria-labelledby="mep-svc-compliance">
        <h2 id="mep-svc-compliance" className={serviceLineSectionHeadingClass}>
          <ShieldCheck className="h-6 w-6 shrink-0 text-white/70" aria-hidden />
          Compliance
        </h2>
        <ul className={listClass}>
          {compliance.map((item) => (
            <CapabilityListItem key={item}>{item}</CapabilityListItem>
          ))}
        </ul>
      </section>

      <section aria-labelledby="mep-svc-deliverables">
        <h2 id="mep-svc-deliverables" className={serviceLineSectionHeadingClass}>
          <Package className="h-6 w-6 shrink-0 text-white/70" aria-hidden />
          Deliverables
        </h2>
        <ul className={listClass}>
          {deliverables.map((item) => (
            <CapabilityListItem key={item}>{item}</CapabilityListItem>
          ))}
        </ul>
      </section>
    </div>
  )
}

export function MepCapabilityPageLayout({
  title,
  intro,
  heroNav,
  capabilities,
  compliance,
  deliverables,
  ctaLabel,
  variant = "service-line",
}: MepCapabilityPageLayoutProps) {
  const isPillar = variant === "pillar"

  return (
    <div className="service-page-root bg-black text-white">
      <ServicePageHero
        title={title}
        intro={intro}
        backgroundImage={false}
        {...(heroNav !== undefined ? { heroNav } : {})}
      />

      <div className="relative bg-black">
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 z-0 h-28 sm:h-36"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.82) 52%, rgba(0,0,0,1) 100%)",
          }}
          aria-hidden
        />

        <div className="fs-capability-page fs-capability-page--section relative z-[1] pt-10 pb-28 sm:pt-14 sm:pb-32 lg:pb-40">
          <div className={MEP_SERVICE_CONTENT_OUTER_CLASS}>
            {isPillar ? (
              <PillarThreeColumnBody capabilities={capabilities} compliance={compliance} deliverables={deliverables} />
            ) : (
              <ServiceLineStackedBody capabilities={capabilities} compliance={compliance} deliverables={deliverables} />
            )}

            <div className="mt-14 flex flex-col items-stretch border-t border-white/15 pt-10 sm:mt-16 sm:pt-12 lg:mt-20">
              <div className="flex justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-none rounded-tl-xl rounded-tr-none rounded-br-xl rounded-bl-none border-2 border-solid border-white bg-transparent px-6 py-2.5 text-sm font-semibold normal-case tracking-normal text-white transition-colors duration-200 hover:!bg-white hover:!text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <OurCustomers serviceTitleShort={title} />

        <MepServiceFaqByRoute />
      </div>
    </div>
  )
}
