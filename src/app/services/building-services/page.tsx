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
  Layers,
  Building2,
  Link2,
  Users,
  ClipboardCheck,
  FileStack,
  CheckCircle,
} from "lucide-react"

export default function RefurbishmentFitOutPage() {
  return (
    <div className="service-page-root min-h-screen overflow-x-hidden text-white">
      <ServicePageHero
        title="Refurbishment and fit-out"
        intro={
          <>
            <p>
              APX MEP delivers mechanical, electrical and plumbing on refurbishment and tenant fit-out projects where
              programme, interfaces and occupied buildings matter as much as the specification. We coordinate with
              structure, fit-out, landlords and specialist packages so services land in the right order with clear
              handover.
            </p>
            <p>
              For new-build shells and larger commercial installation, see{" "}
              <Link href="/services/mechanical-engineering" className="underline underline-offset-4 hover:text-white/90">
                Commercial and industrial installations
              </Link>
              . For integrated trade pillar delivery (mechanical / electrical / plumbing scope), our{" "}
              <Link href="/services/mechanical" className="underline underline-offset-4 hover:text-white/90">
                Mechanical
              </Link>
              ,{" "}
              <Link href="/services/plumbing" className="underline underline-offset-4 hover:text-white/90">
                Plumbing
              </Link>{" "}
              and related pages describe discipline-specific delivery.
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
            How we support refurbishment & fit-out
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Layers className="h-8 w-8" strokeWidth={1.75} />,
                title: "Integrated MEP coordination",
                description:
                  "Installation sequencing, clash resolution and design information so mechanical, electrical and plumbing stay aligned to programme.",
              },
              {
                icon: <Building2 className="h-8 w-8" strokeWidth={1.75} />,
                title: "Risers & service zones",
                description:
                  "Strategy for cores, corridors and ceiling zones with structure, architecture and other trades.",
              },
              {
                icon: <Link2 className="h-8 w-8" strokeWidth={1.75} />,
                title: "Specialist interfaces",
                description:
                  "Fire, security, controls and BMS contractors — clear boundaries, testing and witness planning.",
              },
              {
                icon: <Users className="h-8 w-8" strokeWidth={1.75} />,
                title: "Live & occupied buildings",
                description:
                  "Phasing, noise, access and tenant liaison so work proceeds safely with minimal disruption.",
              },
              {
                icon: <ClipboardCheck className="h-8 w-8" strokeWidth={1.75} />,
                title: "Commissioning support",
                description:
                  "Progress tracking, witness tests and snag management through to practical completion.",
              },
              {
                icon: <FileStack className="h-8 w-8" strokeWidth={1.75} />,
                title: "Handover & O&M",
                description:
                  "Records, training and asset data aligned to employer requirements and facilities teams.",
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
            Compliance & documentation
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-left text-2xl font-semibold text-white">Frameworks</h3>
              <ul className="space-y-4">
                {[
                  "Employer’s Requirements and contract specifications",
                  "CDM 2015 — design and construction coordination",
                  "Building Regulations and statutory interfaces (project-specific)",
                  "Digital handover and asset data where BIM or CAFM is used",
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
                  "Coordination notes and resolution logs",
                  "Combined services drawings (where in scope)",
                  "Handover dossiers and training plans",
                  "Snag closure and defects period support",
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
            Typical schemes
          </h2>
          <p className="mb-8 max-w-3xl text-left text-lg text-gray-300">
            Office CAT A / CAT B, retail, hospitality, education and residential-led refurbishments across Greater London
            and the Home Counties — from single floors to multi-phase rollouts.
          </p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Tenant fit-out and landlord shell upgrades",
              "Category shifts (e.g. office to lab or studio)",
              "Plant replacement while floors stay occupied",
              "Base-build upgrades with phased handover",
              "Listed building and landlord consent coordination",
              "Landlord metering and tenant sub-metering interfaces",
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

        <OurCustomers serviceTitleShort="Refurbishment & fit-out" />

        <ServicePageBottomCta
          imageSrc={serviceHeroImages.cctv}
          title="Discuss your refurbishment or fit-out"
          description="Share your programme, tenancy model and employer requirements — we can outline coordination, phasing and a proportionate MEP scope."
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
