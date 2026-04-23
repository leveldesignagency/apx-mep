"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { MechanicalHomeCountiesSlideshow } from "@/components/MechanicalHomeCountiesSlideshow"
import { CustomPillButton } from "@/components/ui/CustomPillButton"
import { ServicePageBottomCta } from "@/components/ServicePageBottomCta"
import { OurCustomers } from "@/components/ServicePageSharedSections"
import { ServicePageHero } from "@/components/ServicePageHero"
import { serviceHeroImages } from "@/lib/serviceHeroImages"
import { MEP_SERVICE_CONTENT_OUTER_CLASS } from "@/lib/mep-service-layout"
import { MEP_SERVICE_SHIMMER_CARD } from "@/lib/mepServicePageCards"

const MEP_SURVEY_TITLE = "Request your free mechanical systems survey"
const MEP_SURVEY_DESCRIPTION =
  "Not sure what HVAC or mechanical scope you need? We offer a free, no-obligation discussion to review your building and outline heating, ventilation, air conditioning and plant options. Contact us to talk through your requirements."

const SYSTEM_TYPES = [
  "HVAC design & installation",
  "Heating systems",
  "Ventilation & air conditioning",
  "Building management systems (BMS) interfaces",
]

/** Hero photography matches APX Fire & Security case studies (`apx-fs-website/src/data/projects.ts`). */
const MEP_INSTALLATIONS: { title: string; org: string; heroImage: string }[] = [
  {
    title: "University of West London",
    org: "Higher education, London",
    heroImage:
      "/projects/case-studies/university-of-west-london/fire-alarm-installation-university-of-west-london-exterior.jpg",
  },
  {
    title: "Sancroft Building, Paternoster Square",
    org: "Commercial offices, City of London",
    heroImage:
      "/projects/case-studies/sancroft-building/case-study-sancroft-building-fire-alarm-installation-exterior.jpg",
  },
  {
    title: "Scape Bloomsbury",
    org: "Student accommodation, Central London",
    heroImage:
      "/projects/case-studies/scape-bloomsbury/fire-alarm-system-installation-scape-bloomsbury-exterior.jpg",
  },
]

/** Files in `images/HVAC Equipment Logos/` → `public/images/` via `npm run sync-public-images`. */
const HVAC_EQUIPMENT_LOGOS: { file: string; alt: string }[] = [
  { file: "DAIKIN_logo.svg.png", alt: "Daikin" },
  { file: "Mitsubishi-Electric-base-white-640w.webp", alt: "Mitsubishi Electric" },
  { file: "Vaillant+Logo.webp", alt: "Vaillant" },
  { file: "worcester.webp", alt: "Worcester" },
  { file: "Viessmann-logo.svg.png", alt: "Viessmann" },
  { file: "Ideal-Boilers-Logo-trans.png", alt: "Ideal Boilers" },
]

const SPECIALIST_QUESTIONS = [
  "Is the building use or occupancy changing (e.g. office to lab or residential)?",
  "Does the landlord or lease require specific efficiency or metering targets?",
  "Are you replacing plant while the building stays occupied?",
  "Do you need BMS or controls integration with existing site systems?",
  "Is ventilation or overheating risk a concern for compliance or comfort?",
  "Are acoustic, space or structural constraints limiting plant location?",
]

export default function MechanicalEngineeringPage() {
  return (
    <div className="service-page-root min-h-screen overflow-x-hidden text-white">
      <ServicePageHero
        title="Commercial and industrial installations"
        intro={
          <>
            <p className="mb-4">
              APX MEP designs and installs mechanical and electrical systems at scale for commercial, education, healthcare and industrial premises across London and the Home Counties — plant, distribution, HVAC and site delivery.
            </p>
            <p>
              For dedicated BMS field wiring, panels and controls interfaces, see our{" "}
              <Link href="/services/bms-control-wiring" className="underline underline-offset-4 hover:text-white/90">
                BMS and control wiring
              </Link>{" "}
              service line.
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

        <section className="relative z-[1]">
          <div className={MEP_SERVICE_CONTENT_OUTER_CLASS}>
            <div className="grid grid-cols-1 items-start gap-10 pt-8 pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 lg:gap-x-12 lg:pt-10 lg:pb-16">
              <div className="min-w-0 max-w-xl lg:max-w-2xl">
                <h2 className="mb-4 text-left font-title text-3xl font-bold text-white">Mechanical & HVAC in London & the Home Counties</h2>
                <h3 className="mb-6 text-left font-title text-2xl font-semibold text-white">Tailored mechanical packages</h3>
                <div className="space-y-4 text-left text-gray-300">
                  <p>
                    We work throughout London and the Home Counties to design and install mechanical systems that combine robust equipment with clear communication and site
                    discipline. We support commercial, education, healthcare and industrial clients from early coordination through commissioning.
                  </p>
                  <p>We routinely deliver:</p>
                </div>
                <ul className="mb-6 list-inside list-disc space-y-2 text-left text-gray-300">
                  {SYSTEM_TYPES.map((name, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ul>
                <p className="text-left text-gray-300">
                  A structured survey or design review helps confirm scope, interfaces and programme before we commit to installation — contact us to arrange a conversation.
                </p>
              </div>

              {/* Map column — negate row top padding on large screens so the map sits flush with the section top */}
              <div className="relative w-full min-w-0 lg:-mt-10">
                <MechanicalHomeCountiesSlideshow />
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-16 lg:py-16`}>
          <h2 className="mb-8 text-left font-title text-3xl font-bold text-white">Design standards & compliance</h2>
          <div className="space-y-4 text-left text-gray-300">
            <p>
              Mechanical work is delivered against employer requirements, statutory guidance and good practice — including Building Regulations Part L and ventilation expectations where they apply, manufacturer data, and project-specific performance criteria (often aligned with CIBSE or client standards).
            </p>
            <p>
              We plan RAMS under CDM, coordinate builders work in connection, and support pressure testing, cleanliness and balancing activities in line with the specification so handover evidence is clear for facilities teams.
            </p>
          </div>
        </section>

        <OurCustomers serviceTitleShort="Mechanical systems" />

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-16 lg:py-16`}>
          <h2 className="mb-4 text-left font-title text-3xl font-bold text-white">Mechanical installations</h2>
          <p className="mb-12 text-left text-gray-300">
            Three sites with photography from verified APX Group case studies.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {MEP_INSTALLATIONS.map((item, index) => (
              <div key={index} className={`${MEP_SERVICE_SHIMMER_CARD} overflow-hidden p-0`}>
                <div className="relative aspect-[16/10] w-full bg-white/[0.06]">
                  <Image
                    src={item.heroImage}
                    alt={`Project photograph: ${item.title}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="mb-2 text-left text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-left text-gray-300">{item.org}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-16 lg:py-16`}>
          <h2 className="mb-2 text-left font-title text-3xl font-bold text-white">HVAC & mechanical equipment</h2>
          <p className="mb-12 text-left text-gray-300">We install equipment from leading manufacturers where the specification requires.</p>
          <div className="flex flex-wrap items-center justify-start gap-x-8 gap-y-8 sm:gap-x-10 sm:gap-y-10">
            {HVAC_EQUIPMENT_LOGOS.map((logo) => (
              <Image
                key={logo.file}
                src={`/images/${encodeURIComponent("HVAC Equipment Logos")}/${encodeURIComponent(logo.file)}`}
                alt={logo.alt}
                width={140}
                height={50}
                className="h-auto max-h-11 w-auto max-w-[140px] object-contain object-left sm:max-h-12 sm:max-w-[160px]"
                sizes="(min-width: 640px) 160px, 36vw"
              />
            ))}
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-16 lg:py-16`}>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-12">
            <div className="min-w-0 max-w-xl lg:max-w-none">
              <h2 className="mb-4 text-left font-title text-3xl font-bold text-white">When to involve a mechanical specialist</h2>
              <div className="space-y-4 text-left text-gray-300">
                <p>
                  Early mechanical input reduces rework on plant space, risers, acoustics and electrical load. If any of the following apply, it is worth a structured review before you fix the design or programme.
                </p>
              </div>
              <ul className="my-6 space-y-3 text-left text-gray-300">
                {SPECIALIST_QUESTIONS.map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/60" strokeWidth={2} aria-hidden />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative w-full min-w-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03]">
                <Image
                  src={serviceHeroImages.accessControl}
                  alt="Engineer reviewing documentation at a mechanical or electrical services installation"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-white/15" />

        <ServicePageBottomCta
          imageSrc={serviceHeroImages.intruder}
          title={MEP_SURVEY_TITLE}
          description={MEP_SURVEY_DESCRIPTION}
          includeFaq={false}
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
