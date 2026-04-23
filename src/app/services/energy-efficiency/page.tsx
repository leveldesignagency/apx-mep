"use client"

import { CustomPillButton } from "@/components/ui/CustomPillButton"
import { ServicePageBottomCta } from "@/components/ServicePageBottomCta"
import { OurCustomers } from "@/components/ServicePageSharedSections"
import { ServicePageHero } from "@/components/ServicePageHero"
import { MEP_SERVICE_SHIMMER_CARD } from "@/lib/mepServicePageCards"
import { serviceHeroImages } from "@/lib/serviceHeroImages"
import { MEP_SERVICE_CONTENT_OUTER_CLASS } from "@/lib/mep-service-layout"
import { Sun, Battery, Gauge, CheckCircle, ArrowRight, Zap } from "lucide-react"

const SURVEY_TITLE = "Request a solar PV or energy review"
const SURVEY_DESCRIPTION =
  "Planning solar PV or wider electrical upgrades on a commercial or industrial site? We can review roof or plant areas, grid connection considerations and how generation fits your MEP strategy. Contact us for a no-obligation conversation."

export default function EnergyEfficiencyPage() {
  return (
    <div className="service-page-root min-h-screen overflow-x-hidden text-white">
      <ServicePageHero
        title="Solar PV installations"
        intro="APX MEP installs solar PV and supports electrical packages that improve operational efficiency — coordinated with distribution, metering, protection and handover so generation and building loads work together safely."
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
                icon: <Sun className="h-8 w-8" strokeWidth={1.75} />,
                title: "Solar PV installation",
                description: "Roof- and plant-mounted arrays integrated with the site electrical infrastructure and protection.",
              },
              {
                icon: <Zap className="h-8 w-8" strokeWidth={1.75} />,
                title: "Electrical integration",
                description: "AC cabling, switchgear interfaces and coordination with existing distribution and metering.",
              },
              {
                icon: <Battery className="h-8 w-8" strokeWidth={1.75} />,
                title: "Future-ready design",
                description:
                  "Provisions for monitoring, export limitation or storage where the specification requires (with specialist packages as needed).",
              },
              {
                icon: <Gauge className="h-8 w-8" strokeWidth={1.75} />,
                title: "Efficiency in MEP",
                description: "Support for efficient lighting, controls and plant upgrades as part of wider refurbishment or new-build MEP.",
              },
              {
                icon: <CheckCircle className="h-8 w-8" strokeWidth={1.75} />,
                title: "Testing & handover",
                description: "Verification, records and client handover aligned to BS 7671 and project requirements.",
              },
              {
                icon: <ArrowRight className="h-8 w-8" strokeWidth={1.75} />,
                title: "Programme coordination",
                description: "Sequencing with roofing, scaffolding and other trades to minimise disruption on live sites.",
              },
            ].map((service, index) => (
              <div key={index} className={`${MEP_SERVICE_SHIMMER_CARD} p-8 transition-transform duration-300 hover:scale-[1.02]`}>
                <div className="mb-4 text-white">{service.icon}</div>
                <h3 className="mb-3 text-left text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-left text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-16 lg:py-16`}>
          <h2 className="mb-10 text-left font-title text-3xl font-bold text-white sm:text-4xl">Standards & interfaces</h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-left text-2xl font-semibold text-white">Electrical & building regulations</h3>
              <ul className="space-y-4">
                {[
                  "BS 7671 for installation and verification",
                  "Building Regulations Part L and energy strategy (project-specific)",
                  "DNO / grid application support coordinated with your consultant where required",
                  "CDM 2015 and site-specific RAMS",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-left text-gray-300">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/50" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-left text-2xl font-semibold text-white">Typical deliverables</h3>
              <ul className="space-y-4">
                {["Layout and cable routing coordination", "Test certificates and commissioning records", "As-installed documentation for O&M", "Client demonstration and handover"].map(
                  (item, index) => (
                    <li key={index} className="flex items-start gap-3 text-left text-gray-300">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/50" strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>

        <div className="border-t border-white/15" />

        <OurCustomers serviceTitleShort="Solar PV" />

        <ServicePageBottomCta
          imageSrc={serviceHeroImages.accessControl}
          title={SURVEY_TITLE}
          description={SURVEY_DESCRIPTION}
        >
          <CustomPillButton href="/contact" size="md">
            Talk to our team
          </CustomPillButton>
          <CustomPillButton href="tel:02045685986" size="md" variant="outline">
            Call 020 4568 5986
          </CustomPillButton>
        </ServicePageBottomCta>
      </div>
    </div>
  )
}
