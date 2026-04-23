"use client"

import { CustomPillButton } from "@/components/ui/CustomPillButton"
import { ServicePageBottomCta } from "@/components/ServicePageBottomCta"
import { OurCustomers } from "@/components/ServicePageSharedSections"
import { ServicePageHero } from "@/components/ServicePageHero"
import { MEP_SERVICE_SHIMMER_CARD } from "@/lib/mepServicePageCards"
import { serviceHeroImages } from "@/lib/serviceHeroImages"
import { MEP_SERVICE_CONTENT_OUTER_CLASS } from "@/lib/mep-service-layout"
import {
  Wrench,
  Phone,
  FileSearch,
  Hammer,
  Users,
  Moon,
  CheckCircle,
} from "lucide-react"

export default function MepMaintenanceSupportPage() {
  return (
    <div className="service-page-root min-h-screen overflow-x-hidden text-white">
      <ServicePageHero
        title="Maintenance and support"
        imageSrc={serviceHeroImages.intruder}
        imageAlt=""
        intro={
          <>
            <p>
              Keep building services reliable after handover — structured maintenance, clear reporting, and responsive
              support when issues arise on site. We support commercial, residential-led and mixed-use estates across
              London boroughs and the Home Counties.
            </p>
            <p>
              Our teams work with facilities managers and residents&apos; management companies to prioritise
              safety-critical plant, minimise downtime, and build a clear picture of asset condition over time — so you
              can plan upgrades with confidence.
            </p>
          </>
        }
      />

      <div className="relative bg-black">
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-28 sm:h-36"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.82) 52%, rgba(0,0,0,1) 100%)",
          }}
          aria-hidden
        />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} relative z-[1] py-16 lg:py-16`}>
          <h2 className="mb-10 text-left font-title text-3xl font-bold text-white sm:text-4xl">What we deliver</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Wrench className="h-8 w-8" strokeWidth={1.75} />,
                title: "PPM programmes",
                description:
                  "Planned preventative maintenance tailored to asset criticality, statutory cycles and your operational priorities.",
              },
              {
                icon: <Phone className="h-8 w-8" strokeWidth={1.75} />,
                title: "Reactive call-outs",
                description:
                  "Rapid support for distribution, plant, HVAC and controls faults — coordinated with site access and helpdesks.",
              },
              {
                icon: <FileSearch className="h-8 w-8" strokeWidth={1.75} />,
                title: "Condition & records",
                description:
                  "Condition reporting, thermal checks, asset registers and clear evidence for duty holders and FM teams.",
              },
              {
                icon: <Hammer className="h-8 w-8" strokeWidth={1.75} />,
                title: "Small works & variations",
                description:
                  "Upgrades, landlord/tenant changes and minor improvements aligned to building constraints and budget.",
              },
              {
                icon: <Users className="h-8 w-8" strokeWidth={1.75} />,
                title: "OEM & FM coordination",
                description:
                  "Liaison with facilities teams, specialist OEMs and controls contractors for warranty and best-value fixes.",
              },
              {
                icon: <Moon className="h-8 w-8" strokeWidth={1.75} />,
                title: "Out-of-hours & SLAs",
                description:
                  "Out-of-hours attendance and SLA-based response where your contract, shell-and-core, or PPM model requires it.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${MEP_SERVICE_SHIMMER_CARD} p-8 transition-transform duration-300 hover:scale-[1.02]`}
              >
                <div className="mb-4 text-white">{item.icon}</div>
                <h3 className="mb-3 text-left text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-left text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-16 lg:py-16`}>
          <h2 className="mb-10 text-left font-title text-3xl font-bold text-white sm:text-4xl">
            Compliance &amp; evidence
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-left text-2xl font-semibold text-white">Statutory &amp; site</h3>
              <ul className="space-y-4">
                {[
                  "BS 7671 inspection and testing cycles for electrical maintenance where applicable",
                  "Manufacturer maintenance intervals, warranty conditions and asset-specific schedules",
                  "Site-specific RAMS, permits, access and resident / tenant communication where required",
                  "Log books and statutory inspection evidence (where in scope and agreed)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-left text-gray-300">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/50" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-left text-2xl font-semibold text-white">Reports &amp; handover to FM</h3>
              <ul className="space-y-4">
                {[
                  "Maintenance and service visit records",
                  "Fault logs, root-cause notes and repeat-failure tracking",
                  "Compliance evidence packs for duty holders and insurers (project-specific)",
                  "Forward programme recommendations and capex pointers",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-left text-gray-300">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/50" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-16 lg:py-16`}>
          <h2 className="mb-6 text-left font-title text-3xl font-bold text-white sm:text-4xl">Where we work</h2>
          <p className="mb-8 max-w-3xl text-left text-lg text-gray-300">
            Occupied buildings, new handovers, estate portfolios and single assets — with maintenance that scales to your
            helpdesk, contract and critical plant list.
          </p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Offices, retail and fit-out / CAT A / CAT B aftercare",
              "Residentially-led, mixed-use and BTR schemes",
              "Education, healthcare and public buildings",
              "Landlord plant, risers, substations and roof-level plant",
              "Phased programmes and DLP / defects-period support",
            ].map((line, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-left text-gray-200"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/60" strokeWidth={2} />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <OurCustomers serviceTitleShort="Maintenance and support" />

        <ServicePageBottomCta
          imageSrc={serviceHeroImages.accessControl}
          title="Discuss your maintenance"
          description="Share your building type, PPM or reactive scope, and programme — we can structure visits, call-outs and reporting to match your FM model."
        >
          <CustomPillButton href="/contact" size="md">
            Get a free quote
          </CustomPillButton>
          <CustomPillButton href="tel:02045685986" size="md" variant="outline">
            Call 020 4568 5986
          </CustomPillButton>
        </ServicePageBottomCta>
      </div>
    </div>
  )
}
