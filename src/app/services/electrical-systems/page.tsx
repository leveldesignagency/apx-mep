"use client"

import Link from "next/link"
import { CustomPillButton } from "@/components/ui/CustomPillButton"
import { ServicePageBottomCta } from "@/components/ServicePageBottomCta"
import { OurCustomers } from "@/components/ServicePageSharedSections"
import { ServicePageHero } from "@/components/ServicePageHero"
import { serviceHeroImages } from "@/lib/serviceHeroImages"
import { Zap, Shield, Monitor, CheckCircle, ArrowRight, Smartphone } from "lucide-react"

const cardClass =
  "rounded-tl-[1.5rem] rounded-br-[1.5rem] border-2 border-white/20 bg-black p-8 text-white transition-colors hover:border-white/45"

export default function ElectricalSystemsPage() {
  return (
    <div className="service-page-root min-h-screen overflow-x-hidden bg-black text-white">
      <ServicePageHero
        title="Inspection & testing"
        intro="APX MEP provides inspection, testing and compliance evidence for electrical installations on commercial, education, healthcare and industrial projects — aligned to BS 7671, programme and handover. We also design and install distribution, lighting, power and data as part of wider MEP delivery."
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

        <section className="container relative z-[1] mx-auto px-6 py-12 lg:py-16">
          <h2 className="mb-10 text-left font-title text-3xl font-bold text-white sm:text-4xl">Electrical services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Zap className="h-8 w-8" strokeWidth={1.75} />,
                title: "Distribution & Power",
                description: "Main and sub distribution boards, power supplies and circuit design for commercial and industrial premises.",
              },
              {
                icon: <Shield className="h-8 w-8" strokeWidth={1.75} />,
                title: "Lighting",
                description: "Internal and external lighting design and installation, including emergency lighting and compliance.",
              },
              {
                icon: <Monitor className="h-8 w-8" strokeWidth={1.75} />,
                title: "Data & Comms",
                description: "Structured cabling, data networks and communications infrastructure for offices and buildings.",
              },
              {
                icon: <Smartphone className="h-8 w-8" strokeWidth={1.75} />,
                title: "Testing & Inspection",
                description: "EICRs, periodic testing and condition reporting to maintain safety and compliance.",
              },
              {
                icon: <CheckCircle className="h-8 w-8" strokeWidth={1.75} />,
                title: "Maintenance & Support",
                description: "Planned and reactive electrical maintenance to keep your systems safe and reliable.",
              },
              {
                icon: <ArrowRight className="h-8 w-8" strokeWidth={1.75} />,
                title: "Design & Build",
                description: "Full electrical design, specification and installation from concept through to handover.",
              },
            ].map((service, index) => (
              <div key={index} className={`${cardClass} transition-transform duration-300 hover:scale-[1.02]`}>
                <div className="mb-4 text-white">{service.icon}</div>
                <h3 className="mb-3 text-left text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-left text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className="container mx-auto px-6 py-12 lg:py-16">
          <h2 className="mb-10 text-left font-title text-3xl font-bold text-white sm:text-4xl">Standards & compliance</h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-left text-2xl font-semibold text-white">Electrical standards</h3>
              <ul className="space-y-4">
                {[
                  "BS 7671 (IET Wiring Regulations) — design, installation and verification",
                  "EICR and periodic inspection for duty holders",
                  "Building Regulations Part P where domestic work applies",
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
              <h3 className="mb-6 text-left text-2xl font-semibold text-white">What we offer</h3>
              <ul className="space-y-4">
                {[
                  "Inspection, testing and certification",
                  "Fault finding and condition reporting",
                  "Witness testing and handover support",
                  "Maintenance planning aligned to BS 7671 cycles",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-left text-gray-300">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/50" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className="container mx-auto px-6 py-12 lg:py-16">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-left font-title text-3xl font-bold text-white sm:text-4xl">
              Need inspection, testing or electrical installation?
            </h2>
            <p className="mb-8 text-left text-lg text-white/75 sm:text-xl">
              Our engineers can review your site and programme, then recommend the right scope for verification, upgrades or new work.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <CustomPillButton href="/contact" size="md">
                Get free consultation
              </CustomPillButton>
              <CustomPillButton href="tel:02045685986" size="md" variant="outline">
                Call 020 4568 5986
              </CustomPillButton>
              <Link href="/contact" className="text-white underline underline-offset-4 hover:text-white/85 sm:ml-2">
                Question? Get in touch
              </Link>
            </div>
          </div>
        </section>

        <OurCustomers />

        <ServicePageBottomCta
          imageSrc={serviceHeroImages.cctv}
          title="Need inspection, testing or electrical installation?"
          description="Our engineers can review your site and programme, then recommend the right scope for verification, upgrades or new work."
        >
          <CustomPillButton href="/contact" size="md">
            Get free consultation
          </CustomPillButton>
          <CustomPillButton href="tel:02045685986" size="md" variant="outline">
            Call 020 4568 5986
          </CustomPillButton>
        </ServicePageBottomCta>
      </div>
    </div>
  )
}
