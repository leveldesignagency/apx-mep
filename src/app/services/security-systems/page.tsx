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
  Lock,
  Video,
  Shield,
  Link2,
  Network,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react"

export default function MepSecuritySystemsPage() {
  return (
    <div className="service-page-root min-h-screen overflow-x-hidden text-white">
      <ServicePageHero
      title="Access control and door entry systems"
        imageSrc={serviceHeroImages.videoDoor}
        imageAlt=""
        intro={
          <>
            <p>
              APX MEP installs access control and door entry that fit the wider M&amp;E strategy — power, containment,
              networking and commissioning handled as one coordinated delivery. Our engineers work alongside specialist
              security contractors where the project splits design and installation responsibility.
            </p>
            <p>
              From small retail and office fit-outs to multi-door schemes across commercial and residential-led schemes in
              Greater London and the Home Counties, we align cable routes, earthing, UPS requirements and handover
              documentation with programme and landlord expectations. For fire, IRS and dedicated life-safety packages, see{" "}
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
                icon: <Lock className="h-8 w-8" strokeWidth={1.75} />,
                title: "Access & door entry",
                description:
                  "Access control and door entry systems — design, cabling and commissioning aligned to employer and specialist security requirements.",
              },
              {
                icon: <Video className="h-8 w-8" strokeWidth={1.75} />,
                title: "CCTV & containment",
                description:
                  "CCTV and structured cabling coordinated with the wider containment strategy and ceiling / riser planning.",
              },
              {
                icon: <Shield className="h-8 w-8" strokeWidth={1.75} />,
                title: "Intruder interfaces",
                description:
                  "Interfaces with building power, monitoring and ARC paths where IRS sits alongside access and CCTV scope.",
              },
              {
                icon: <Link2 className="h-8 w-8" strokeWidth={1.75} />,
                title: "Fire & BMS integration",
                description:
                  "Integration with fire alarm and BMS where the specification requires it — clear boundaries and witness testing.",
              },
              {
                icon: <Network className="h-8 w-8" strokeWidth={1.75} />,
                title: "Network & head-end",
                description:
                  "Network, switch and head-end coordination with IT or specialist security contractors — schedules and test evidence.",
              },
              {
                icon: <ClipboardCheck className="h-8 w-8" strokeWidth={1.75} />,
                title: "Commissioning & handover",
                description:
                  "Commissioning, witness testing and handover with clear user documentation and snag closure before PC.",
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
              <h3 className="mb-6 text-left text-2xl font-semibold text-white">Compliance</h3>
              <ul className="space-y-4">
                {[
                  "BS EN 50131 and PD 6662 where applicable to graded systems",
                  "BS EN 62676 for CCTV where specified",
                  "BS 7671 for electrical installation aspects",
                  "GDPR-aware data handling and signage on projects",
                  "Employer’s Requirements and specialist security package interfaces",
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
                  "Network and head-end schedules",
                  "Test records and witness sheets",
                  "As-installed drawings and cable schedules",
                  "O&M manuals and user training",
                  "Snag closure before practical completion",
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
            Retail, offices, residential-led schemes and mixed-use developments where access, video door entry and
            structured cabling must align with landlord base-build and tenant fit-out programmes.
          </p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Single-tenant and multi-tenant reception and perimeter door sets",
              "Video door entry and intercom on residential-led schemes",
              "UPS and dedicated supplies for security head-ends and panels",
              "Coordination with landlord access policy and IT network handover",
              "Witness testing with specialist security integrators before handover",
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

        <OurCustomers serviceTitleShort="Access & entry" />

        <ServicePageBottomCta
          imageSrc={serviceHeroImages.accessControl}
          title="Discuss access & entry"
          description="Tell us about door counts, head-end location and landlord requirements — we can outline cabling, containment and commissioning scope."
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
