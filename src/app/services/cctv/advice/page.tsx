"use client"

import { CustomPillButton } from "@/components/ui/CustomPillButton"
import { ServicePageBottomCta } from "@/components/ServicePageBottomCta"
import { ServicePageHero } from "@/components/ServicePageHero"
import { MEP_SERVICE_SHIMMER_CARD } from "@/lib/mepServicePageCards"
import { serviceHeroImages } from "@/lib/serviceHeroImages"
import { MEP_SERVICE_CONTENT_OUTER_CLASS } from "@/lib/mep-service-layout"
import { HelpCircle, Camera, FileCheck } from "lucide-react"

export default function UsefulCctvAdvicePage() {
  return (
    <div className="service-page-root min-h-screen overflow-x-hidden text-white">
      <ServicePageHero
        title="Useful CCTV advice"
        heroNav="cctv-tabs"
        intro="Not sure what you need? We've put together practical advice on choosing and using CCTV — from camera types and placement to recording, data protection, and working with a professional installer."
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
          <h2 className="mb-10 text-left font-title text-3xl font-bold text-white sm:text-4xl">CCTV advice & guidance</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Camera,
                title: "Choosing the right system",
                text: "Indoor vs outdoor, resolution, night vision, and whether to go wired or wireless — we help you decide.",
              },
              {
                icon: FileCheck,
                title: "Placement & coverage",
                text: "Where to put cameras for the best coverage and evidence, and how to stay within the law.",
              },
              {
                icon: HelpCircle,
                title: "Data protection & signage",
                text: "GDPR, signage, retention periods, and sharing footage with police or insurers.",
              },
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

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-16 lg:py-16`}>
          <h2 className="mb-6 text-left font-title text-3xl font-bold text-white">Free survey & expert advice</h2>
          <p className="mb-8 text-left text-lg text-gray-300">
            The best way to get advice tailored to your property is a free, no-obligation survey. We&apos;ll assess your site, discuss your requirements, and recommend the right CCTV solution.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <CustomPillButton href="/contact" size="md">
              Request a free survey
            </CustomPillButton>
            <CustomPillButton href="tel:02045685986" size="md" variant="outline">
              Call 020 4568 5986
            </CustomPillButton>
          </div>
        </section>

        <ServicePageBottomCta
          imageSrc={serviceHeroImages.cctv}
          title="CCTV advice for your project"
          description="Book a conversation about coverage, data protection and installation — we will help you move from guidance to a clear scope."
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
