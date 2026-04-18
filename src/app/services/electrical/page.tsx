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
  Home,
  Hammer,
  Zap,
  ClipboardCheck,
  Shield,
  Users,
  CheckCircle,
} from "lucide-react"

export default function ElectricalDomesticNewBuildPage() {
  return (
    <div className="service-page-root min-h-screen overflow-x-hidden text-white">
      <ServicePageHero
        title={
          <>
            <span className="block">Domestic & new builds:</span>
            <span className="block">1st & 2nd fix</span>
          </>
        }
        intro={
          <>
            <p>
              APX MEP delivers first and second fix mechanical and electrical work for new builds, extensions and major
              refurbishments across Greater London and the Home Counties — coordinated with programme, structure and
              other trades so testing, certification and handover stay on track.
            </p>
            <p>
              For larger commercial and industrial installation, see{" "}
              <Link href="/services/mechanical-engineering" className="underline underline-offset-4 hover:text-white/90">
                Commercial and industrial installations
              </Link>
              . For inspection and testing only, see{" "}
              <Link href="/services/electrical-systems" className="underline underline-offset-4 hover:text-white/90">
                Inspection and testing
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

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} relative z-[1] py-12 lg:py-16`}>
          <h2 className="mb-10 text-left font-title text-3xl font-bold text-white sm:text-4xl">
            What we deliver on site
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Hammer className="h-8 w-8" strokeWidth={1.75} />,
                title: "1st fix MEP",
                description:
                  "Containment, back-boxes, primary wiring and rough-in for power, lighting and data before plaster and finishes.",
              },
              {
                icon: <Zap className="h-8 w-8" strokeWidth={1.75} />,
                title: "2nd fix & fit-off",
                description:
                  "Devices, accessories, luminaires, heating and ventilation terminals — aligned to interior design and snagging.",
              },
              {
                icon: <Home className="h-8 w-8" strokeWidth={1.75} />,
                title: "Distribution & small power",
                description:
                  "Consumer units, sub-mains and circuiting for domestic-scale and small commercial new-build shells.",
              },
              {
                icon: <ClipboardCheck className="h-8 w-8" strokeWidth={1.75} />,
                title: "Testing & certification",
                description:
                  "Inspection, testing and certification to BS 7671 with clear schedules for building control and handover.",
              },
              {
                icon: <Shield className="h-8 w-8" strokeWidth={1.75} />,
                title: "Part P & building regulations",
                description:
                  "Domestic electrical work aligned to Part P and notification routes where applicable, plus RAMS under CDM.",
              },
              {
                icon: <Users className="h-8 w-8" strokeWidth={1.75} />,
                title: "Coordination",
                description:
                  "Interfaces with kitchen, bathroom, smart home and specialist packages — one coordinated delivery team.",
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

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-12 lg:py-16`}>
          <h2 className="mb-10 text-left font-title text-3xl font-bold text-white sm:text-4xl">Standards & compliance</h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-left text-2xl font-semibold text-white">Electrical</h3>
              <ul className="space-y-4">
                {[
                  "BS 7671 (IET Wiring Regulations) — design, installation and verification",
                  "Building Regulations Part P where notifiable domestic work applies",
                  "EIC and minor works certification where appropriate",
                  "CDM 2015 and site-specific RAMS",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-left text-gray-300">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/50" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-left text-2xl font-semibold text-white">Handover</h3>
              <ul className="space-y-4">
                {[
                  "Test certificates and schedules for the client and warranty records",
                  "As-installed information and marked-up drawings where in scope",
                  "O&M structure and user guidance for occupiers",
                  "Snag support before practical completion",
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

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-12 lg:py-16`}>
          <h2 className="mb-6 text-left font-title text-3xl font-bold text-white sm:text-4xl">
            Typical domestic & new-build projects
          </h2>
          <p className="mb-8 max-w-3xl text-left text-lg text-gray-300">
            We support developers, contractors and homeowners on schemes that need reliable MEP delivery without losing
            programme — from single dwellings to small blocks and mixed-use shells.
          </p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "New-build houses and apartments",
              "Extensions and loft conversions with full rewire",
              "Developer plots and small sites",
              "Refurbishments with staged power and lighting",
              "Garage, annex and outbuilding supplies",
              "Smart-ready and EV-ready containment",
            ].map((line, i) => (
              <li key={i} className="flex items-start gap-3 text-left text-gray-200">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/60" strokeWidth={2} />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <OurCustomers serviceTitleShort="Domestic & new build" />

        <ServicePageBottomCta
          imageSrc={serviceHeroImages.videoDoor}
          title="Discuss your domestic or new-build MEP"
          description="Tell us about your programme, shell stage and certification needs — we can advise on scope, interfaces and a proportionate installation plan."
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
