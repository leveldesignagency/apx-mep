"use client"

import Link from "next/link"
import { CustomPillButton } from "@/components/ui/CustomPillButton"
import { ServicePageBottomCta } from "@/components/ServicePageBottomCta"
import { OurCustomers } from "@/components/ServicePageSharedSections"
import { ServicePageHero } from "@/components/ServicePageHero"
import { MEP_SERVICE_SHIMMER_CARD } from "@/lib/mepServicePageCards"
import { serviceHeroImages } from "@/lib/serviceHeroImages"
import { MEP_SERVICE_CONTENT_OUTER_CLASS } from "@/lib/mep-service-layout"
import {
  LayoutGrid,
  Server,
  Wind,
  Link2,
  ClipboardCheck,
  Package,
  CheckCircle,
} from "lucide-react"

export default function BmsControlWiringPage() {
  return (
    <div className="service-page-root min-h-screen overflow-x-hidden text-white">
      <ServicePageHero
      title="BMS and control wiring"
        imageSrc={serviceHeroImages.accessControl}
        imageAlt=""
        intro={
          <>
            <p>
              APX MEP installs and terminates the electrical and controls infrastructure that building management systems
              rely on — coordinated with mechanical plant, distribution and specialist BMS contractors so commissioning
              and handover stay aligned to programme.
            </p>
            <p>
              Typical scope includes field devices, valve and actuator wiring, panel builds, builders work in connection
              and witness support during pre-commissioning — across offices, education, healthcare and industrial projects
              in Greater London and surrounding counties. For security, IRS and fire interfaces as a dedicated package, see{" "}
              <Link href="/services/fire-life-safety" className="underline underline-offset-4 hover:text-white/90">
                Security, IRS and fire alarm systems
              </Link>
              .
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
          <h2 className="mb-10 text-left font-title text-3xl font-bold text-white sm:text-4xl">
            What we deliver
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <LayoutGrid className="h-8 w-8" strokeWidth={1.75} />,
                title: "Field wiring & containment",
                description:
                  "BMS field wiring, containment routes and cable schedules aligned to points lists and specialist controls design.",
              },
              {
                icon: <Server className="h-8 w-8" strokeWidth={1.75} />,
                title: "Panels & terminations",
                description:
                  "Control panels, marshalling cabinets, terminations and ferruling — built and labelled for commissioning teams.",
              },
              {
                icon: <Wind className="h-8 w-8" strokeWidth={1.75} />,
                title: "Plant & HVAC interfaces",
                description:
                  "Integration with plant, AHUs, fan coil units, pumps and electrical distribution as the specification requires.",
              },
              {
                icon: <Link2 className="h-8 w-8" strokeWidth={1.75} />,
                title: "Specialist interfaces",
                description:
                  "Fire, security, metering and other packages — clear boundaries, loop tests and witness planning with controls specialists.",
              },
              {
                icon: <ClipboardCheck className="h-8 w-8" strokeWidth={1.75} />,
                title: "Testing & witness",
                description:
                  "Point-to-point checks, loop tests and witness testing so pre-commissioning and SAT stay on track.",
              },
              {
                icon: <Package className="h-8 w-8" strokeWidth={1.75} />,
                title: "Records & handover",
                description:
                  "As-installed records, red-lines and O&M handover for controls-related electrical scope — plus snag closure and training support.",
              },
            ].map((item, index) => (
              <div key={index} className={`${MEP_SERVICE_SHIMMER_CARD} p-8 transition-transform duration-300 hover:scale-[1.02]`}>
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
            Standards & documentation
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-left text-2xl font-semibold text-white">Compliance & coordination</h3>
              <ul className="space-y-4">
                {[
                  "Employer’s Requirements and BMS / controls specification",
                  "Manufacturer and BMS vendor documentation and FAT/SAT expectations",
                  "BS 7671 for electrical aspects of control circuits, segregation and earthing",
                  "CDM 2015 and site-specific RAMS for containment and panel works",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-left text-gray-300">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/50" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-left text-2xl font-semibold text-white">Deliverables</h3>
              <ul className="space-y-4">
                {[
                  "Cable schedules and point-to-point lists",
                  "Test sheets, continuity records and witness sign-off",
                  "Panel schedules and termination diagrams (where in scope)",
                  "Snag lists and training attendance records",
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
          <h2 className="mb-6 text-left font-title text-3xl font-bold text-white sm:text-4xl">
            Typical projects
          </h2>
          <p className="mb-8 max-w-3xl text-left text-lg text-gray-300">
            New-build shells, refurbishments and plant upgrades where controls wiring must land in step with mechanical
            and electrical commissioning — including occupied buildings and phased handover.
          </p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Office and commercial CAT A / CAT B fit-outs",
              "Education, healthcare and laboratory environments",
              "Industrial and distribution — plant rooms and services corridors",
              "Integration with existing BMS head-end or phased panel upgrades",
              "Witness testing aligned to employer and controls contractor programmes",
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

        <OurCustomers serviceTitleShort="BMS & control wiring" />

        <ServicePageBottomCta
          imageSrc={serviceHeroImages.cctv}
          title="Discuss BMS and controls"
          description="Share your points schedule, panel strategy and programme — we can outline containment, termination scope and witness support for your controls package."
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
