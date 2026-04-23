"use client"

import { CustomPillButton } from "@/components/ui/CustomPillButton"
import { ServicePageBottomCta } from "@/components/ServicePageBottomCta"
import { OurCustomers } from "@/components/ServicePageSharedSections"
import { ServicePageHero } from "@/components/ServicePageHero"
import { MEP_SERVICE_SHIMMER_CARD } from "@/lib/mepServicePageCards"
import { serviceHeroImages } from "@/lib/serviceHeroImages"
import { MEP_SERVICE_CONTENT_OUTER_CLASS } from "@/lib/mep-service-layout"
import { Leaf, Droplets, Wind, Recycle, CheckCircle, Building2, Zap } from "lucide-react"

const SURVEY_TITLE = "Sustainable MEP on your project"
const SURVEY_DESCRIPTION =
  "Targeting lower carbon operation, better water efficiency or improved indoor environmental quality? We can align mechanical, electrical and plumbing delivery with your sustainability goals and handover requirements. Contact us to discuss your brief."

export default function SustainabilityPage() {
  return (
    <div className="service-page-root min-h-screen overflow-x-hidden text-white">
      <ServicePageHero
        title="Sustainable building services"
        intro="APX MEP supports projects where environmental performance matters — from Part L and operational efficiency to water use, refrigerant choices and coordination with wider design teams. We focus on installable, maintainable solutions that match the employer's requirements."
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
          <h2 className="mb-6 text-left font-title text-3xl font-bold text-white sm:text-4xl">How we support sustainable MEP</h2>
          <div className="space-y-6 text-left text-lg leading-relaxed text-gray-300">
            <p>
              Sustainability on site is rarely a single product decision — it is coordination between efficient plant, controls, electrical capacity, metering and handover data. We work with architects, consultants and clients so MEP packages reflect the targets set at design stage and remain operable for facilities teams.
            </p>
            <p>
              On refurbishment and fit-out projects we pay particular attention to phasing, waste segregation, and protecting existing systems while new services are brought online — reducing unnecessary strip-out and disruption.
            </p>
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-16 lg:py-16`}>
          <h2 className="mb-10 text-left font-title text-3xl font-bold text-white sm:text-4xl">Focus areas</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Wind,
                title: "Energy & ventilation",
                text: "Efficient HVAC approaches, heat recovery where specified, and coordination with Part L expectations.",
              },
              {
                icon: Droplets,
                title: "Water efficiency",
                text: "Hot and cold water design aligned to water strategy, leak reduction and commissioning hygiene.",
              },
              {
                icon: Leaf,
                title: "Refrigerants & plant",
                text: "Installation and coordination consistent with project environmental criteria and manufacturer guidance.",
              },
              {
                icon: Zap,
                title: "Electrical load & generation",
                text: "Integration with efficient lighting, controls and on-site generation such as solar PV where in scope.",
              },
              {
                icon: Building2,
                title: "Occupied buildings",
                text: "Delivery in live environments with minimal waste and clear communication for tenants.",
              },
              {
                icon: Recycle,
                title: "Handover & assets",
                text: "O&M structure and records that support operation, maintenance and future retrofit.",
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <div key={i} className={`${MEP_SERVICE_SHIMMER_CARD} p-6`}>
                <Icon className="mb-4 h-10 w-10 text-white/85" strokeWidth={1.5} />
                <h3 className="mb-2 text-left text-xl font-semibold text-white">{title}</h3>
                <p className="text-left text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-16 lg:py-16`}>
          <h2 className="mb-8 text-left font-title text-3xl font-bold text-white sm:text-4xl">Frameworks & evidence</h2>
          <ul className="space-y-4">
            {[
              "Employer's Requirements and BREEAM / WELL interfaces where the project uses them",
              "Building Regulations and statutory consultee input (project-specific)",
              "Manufacturer environmental product data and commissioning evidence",
              "CDM 2015 — design and construction coordination for safe maintenance access",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-left text-gray-300">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/50" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <OurCustomers serviceTitleShort="Sustainable building" />

        <ServicePageBottomCta
          imageSrc={serviceHeroImages.intruder}
          title={SURVEY_TITLE}
          description={SURVEY_DESCRIPTION}
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
