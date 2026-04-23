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
  Flame,
  Shield,
  Link2,
  Volume2,
  Building2,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react"

export default function MepFireLifeSafetyPage() {
  return (
    <div className="service-page-root min-h-screen overflow-x-hidden text-white">
      <ServicePageHero
      title="Security, IRS and fire alarm systems"
        imageSrc={serviceHeroImages.fireAlarm}
        imageAlt=""
        intro={
          <>
            <p>
              APX MEP delivers fire alarm, intruder alarm (IRS) and security systems as part of coordinated building
              services — aligned to programme, specification and the interfaces that matter alongside mechanical,
              electrical and controls packages.
            </p>
            <p>
              Whether you need a new L2/L3 fire system on a refurbishment, IRS on a shell-and-core, or interfaces into
              an existing BMS, we plan cable routes, power supplies, battery calculations and witness testing so
              commissioning and handover stay on track. For access control and door entry as a distinct package, see{" "}
              <Link href="/services/security-systems" className="underline underline-offset-4 hover:text-white/90">
                Access control and door entry systems
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
                icon: <Flame className="h-8 w-8" strokeWidth={1.75} />,
                title: "Fire detection & alarm",
                description:
                  "Addressable and conventional systems where specified — loops, devices, sounders and VADs with integrity testing support.",
              },
              {
                icon: <Shield className="h-8 w-8" strokeWidth={1.75} />,
                title: "Intruder (IRS) & security",
                description:
                  "IRS and security within MEP electrical scope — power, containment, grading interfaces and ARC paths as per design.",
              },
              {
                icon: <Link2 className="h-8 w-8" strokeWidth={1.75} />,
                title: "Cause & effect & interfaces",
                description:
                  "Coordination with mechanical, electrical and BMS — lifts, access control, dampers and specialist packages.",
              },
              {
                icon: <Volume2 className="h-8 w-8" strokeWidth={1.75} />,
                title: "Sounders, MCPs & VADs",
                description:
                  "Manual call points, audible and visual devices — witness testing and records aligned to the fire strategy.",
              },
              {
                icon: <Building2 className="h-8 w-8" strokeWidth={1.75} />,
                title: "Integration",
                description:
                  "Where the specification requires — links to access, lifts and building management with clear boundaries and testing.",
              },
              {
                icon: <ClipboardCheck className="h-8 w-8" strokeWidth={1.75} />,
                title: "Commissioning & handover",
                description:
                  "Commissioning support, certification evidence, snag management and structured O&M for facilities teams.",
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
              <h3 className="mb-6 text-left text-2xl font-semibold text-white">Compliance frameworks</h3>
              <ul className="space-y-4">
                {[
                  "BS 5839-1 for fire detection and alarm systems (design and installation as applicable)",
                  "BS 7671 for electrical interfaces, segregation and certification",
                  "BS EN 50131 for intruder systems where graded",
                  "Project-specific fire strategy, FRA outputs and landlord requirements",
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
                  "Zone charts and device schedules",
                  "As-built drawings and loop drawings (where in scope)",
                  "Commissioning records and witness test sheets",
                  "O&M information and log-book structure",
                  "Client training and familiarisation sessions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-left text-gray-300">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/50" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-left text-sm text-white/55">
                Where fire and life safety packages split across APX MEP and specialist fire &amp; security teams, we
                align interfaces, testing and handover so nothing falls between scopes.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-16 lg:py-16`}>
          <h2 className="mb-6 text-left font-title text-3xl font-bold text-white sm:text-4xl">
            Typical projects
          </h2>
          <p className="mb-8 max-w-3xl text-left text-lg text-gray-300">
            Refurbishments, fit-outs, shell-and-core and commercial schemes across Greater London and the Home Counties
            — from single-floor upgrades to multi-phase delivery in occupied buildings.
          </p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "L2/L3 category fire systems on CAT A / CAT B fit-outs",
              "IRS and security on residential-led and mixed-use schemes",
              "Interface packages into new or existing BMS",
              "Landlord base-build upgrades with tenant sub-systems",
              "Witness testing aligned to employer and fire engineer requirements",
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

        <OurCustomers serviceTitleShort="Fire & security" />

        <ServicePageBottomCta
          imageSrc={serviceHeroImages.intruder}
          title="Discuss security, IRS & fire"
          description="Share your fire strategy notes, employer requirements and programme — we can outline scope, interfaces and a proportionate installation and commissioning plan."
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
