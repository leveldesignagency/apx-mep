"use client"

import { CustomPillButton } from "@/components/ui/CustomPillButton"
import { ServicePageBottomCta } from "@/components/ServicePageBottomCta"
import { ServicePageHero } from "@/components/ServicePageHero"
import { MEP_SERVICE_SHIMMER_CARD } from "@/lib/mepServicePageCards"
import { serviceHeroImages } from "@/lib/serviceHeroImages"
import { MEP_SERVICE_CONTENT_OUTER_CLASS } from "@/lib/mep-service-layout"
import { Building2, Monitor, Lock, CheckCircle } from "lucide-react"

export default function CommercialCctvPage() {
  return (
    <div className="service-page-root min-h-screen overflow-x-hidden text-white">
      <ServicePageHero
        title="Commercial CCTV systems"
        heroNav="cctv-tabs"
        intro="High-performance CCTV for offices, retail, warehouses, and multi-site operations. We design and install scalable systems with remote monitoring, integration with access control and intruder alarms, and compliance with GDPR and industry standards."
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

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} relative z-[1] py-12 lg:py-16`}>
          <h2 className="mb-10 text-left font-title text-3xl font-bold text-white sm:text-4xl">Commercial CCTV solutions</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "Multi-site & scalable",
                text: "From single premises to estate-wide networks with centralised monitoring.",
              },
              { icon: Monitor, title: "24/7 monitoring", text: "Optional alarm receiving and video monitoring with rapid response." },
              { icon: Lock, title: "Integration", text: "CCTV working with access control, intruder alarms, and fire systems." },
            ].map((item, i) => (
              <div key={i} className={`${MEP_SERVICE_SHIMMER_CARD} p-8`}>
                <item.icon className="mb-4 h-8 w-8 text-white" strokeWidth={1.75} />
                <h3 className="mb-3 text-left text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-left text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-12 lg:py-16`}>
          <h2 className="mb-6 text-left font-title text-3xl font-bold text-white">What we offer</h2>
          <ul className="space-y-3">
            {[
              "Site survey and system design",
              "IP and analogue camera systems",
              "NVR/DVR and cloud recording",
              "GDPR-compliant data handling",
              "Installation, commissioning and training",
              "Ongoing maintenance and support",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-left text-gray-300">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/50" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <CustomPillButton href="/contact" size="md">
              Get a free quote
            </CustomPillButton>
          </div>
        </section>

        <ServicePageBottomCta
          imageSrc={serviceHeroImages.cctv}
          title="Commercial CCTV & integration"
          description="Tell us about your sites, compliance needs and monitoring plans — we will outline a proportionate system design and rollout approach."
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
