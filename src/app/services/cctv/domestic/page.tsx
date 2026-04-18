"use client"

import { CustomPillButton } from "@/components/ui/CustomPillButton"
import { ServicePageBottomCta } from "@/components/ServicePageBottomCta"
import { ServicePageHero } from "@/components/ServicePageHero"
import { MEP_SERVICE_SHIMMER_CARD } from "@/lib/mepServicePageCards"
import { serviceHeroImages } from "@/lib/serviceHeroImages"
import { MEP_SERVICE_CONTENT_OUTER_CLASS } from "@/lib/mep-service-layout"
import { Home, Shield, Smartphone, CheckCircle } from "lucide-react"

export default function DomesticCctvPage() {
  return (
    <div className="service-page-root min-h-screen overflow-x-hidden text-white">
      <ServicePageHero
        title="Domestic CCTV systems"
        heroNav="cctv-tabs"
        intro="Protect your home with professionally designed and installed domestic CCTV systems. From single-camera setups to full property coverage with remote viewing, we deliver solutions that give you peace of mind and evidence when it matters."
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
          <h2 className="mb-10 text-left font-title text-3xl font-bold text-white sm:text-4xl">Why choose domestic CCTV?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Home,
                title: "Tailored to your home",
                text: "Systems designed for houses, flats, and driveways — no one-size-fits-all.",
              },
              {
                icon: Smartphone,
                title: "Remote viewing",
                text: "Check live and recorded footage from your phone or tablet, wherever you are.",
              },
              {
                icon: Shield,
                title: "Deterrence & evidence",
                text: "Visible cameras deter intruders; recorded footage supports insurance and police.",
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

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-12 lg:py-16`}>
          <h2 className="mb-6 text-left font-title text-3xl font-bold text-white">What we offer</h2>
          <ul className="space-y-3">
            {[
              "Site survey and camera placement advice",
              "HD and 4K indoor and outdoor cameras",
              "NVR/DVR recording and cloud options",
              "Mobile app access and push alerts",
              "Installation and handover",
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
          title="Domestic CCTV design & installation"
          description="Share your property layout and priorities — we can recommend camera coverage, recording and remote viewing options that suit your home."
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
