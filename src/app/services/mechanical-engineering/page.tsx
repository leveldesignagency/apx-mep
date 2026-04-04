"use client"

import Link from "next/link"
import { CustomPillButton } from "@/components/ui/CustomPillButton"
import { ServicePageBottomCta } from "@/components/ServicePageBottomCta"
import { OurCustomers } from "@/components/ServicePageSharedSections"
import { ServicePageHero } from "@/components/ServicePageHero"
import { serviceHeroImages } from "@/lib/serviceHeroImages"
import { MEP_SERVICE_CONTENT_OUTER_CLASS } from "@/lib/mep-service-layout"

const MEP_SURVEY_TITLE = "Request your free mechanical systems survey"
const MEP_SURVEY_DESCRIPTION =
  "Not sure what HVAC or mechanical scope you need? We offer a free, no-obligation discussion to review your building and outline heating, ventilation, air conditioning and plant options. Contact us to talk through your requirements."

const SYSTEM_TYPES = [
  "HVAC design & installation",
  "Heating systems",
  "Ventilation & air conditioning",
  "Building management systems (BMS) interfaces",
]

const MEP_CUSTOMERS = [
  { name: "The Mayfair Townhouse", tagline: "Luxury lifestyle hotel" },
  { name: "Hilton DoubleTree", tagline: "Hotel group" },
  { name: "Firmdale Hotels", tagline: "Hotel group" },
  { name: "United Living", tagline: "Housing & infrastructure" },
  { name: "Camden Council", tagline: "Local authority, London" },
  { name: "University of West London", tagline: "Higher education" },
  { name: "Scape Bloomsbury", tagline: "Student accommodation" },
]

const MEP_INSTALLATIONS = [
  { title: "HVAC installation Dimco Exhibition Building, Westfield", org: "Dimco Exhibition Building, Westfield, Stratford" },
  { title: "Mechanical systems University of West London", org: "University of West London" },
  { title: "HVAC Sancroft Building", org: "Sancroft Building, office space, London" },
  { title: "Heating & ventilation Oaklands House", org: "Oaklands House, London, apartment blocks" },
  { title: "Mechanical systems Hilton DoubleTree Kingston", org: "Hilton DoubleTree Kingston" },
  { title: "HVAC John Keats Primary School", org: "John Keats Primary School, Rotherhithe, London" },
  { title: "Mechanical systems Mayfair Townhouse", org: "Mayfair Townhouse, luxury lifestyle hotel" },
  { title: "HVAC Scape Bloomsbury", org: "Scape Bloomsbury, student accommodation" },
  { title: "Mechanical systems Wembley French School", org: "Wembley French School" },
]

const MEP_BRANDS = ["Daikin", "Mitsubishi", "Vaillant", "Worcester", "Viessmann", "Ideal"]

const SPECIALIST_QUESTIONS = [
  "Is the building use or occupancy changing (e.g. office to lab or residential)?",
  "Does the landlord or lease require specific efficiency or metering targets?",
  "Are you replacing plant while the building stays occupied?",
  "Do you need BMS or controls integration with existing site systems?",
  "Is ventilation or overheating risk a concern for compliance or comfort?",
  "Are acoustic, space or structural constraints limiting plant location?",
]

const cardBorder = "rounded-tl-[1.5rem] rounded-br-[1.5rem] border border-white/20 bg-black p-8 text-white"

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

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} relative z-[1] py-12 lg:py-16`}>
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
        </section>

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-12 lg:py-16`}>
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

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-12 lg:py-16`}>
          <h2 className="mb-4 text-left font-title text-3xl font-bold text-white">Mechanical systems customers</h2>
          <p className="mb-12 text-left text-gray-300">A selection of organisations we have supported:</p>
          <div className="flex flex-wrap justify-start gap-6 sm:gap-8">
            {MEP_CUSTOMERS.map((c, i) => (
              <div key={i} className={`min-w-[180px] ${cardBorder} text-center`}>
                <p className="font-semibold text-white">{c.name}</p>
                <p className="mt-1 text-sm text-gray-400">{c.tagline}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-12 lg:py-16`}>
          <h2 className="mb-4 text-left font-title text-3xl font-bold text-white">Mechanical installations</h2>
          <p className="mb-12 text-left text-gray-300">Examples of mechanical and HVAC projects we have delivered:</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {MEP_INSTALLATIONS.map((item, index) => (
              <div key={index} className={`${cardBorder} transition-colors hover:border-white/45`}>
                <h3 className="mb-2 text-left text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-left text-gray-300">{item.org}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-12 lg:py-16`}>
          <h2 className="mb-2 text-left font-title text-3xl font-bold text-white">HVAC & mechanical equipment</h2>
          <p className="mb-12 text-left text-gray-300">We install equipment from leading manufacturers where the specification requires.</p>
          <div className="flex flex-wrap items-center justify-start gap-8 sm:gap-12">
            {MEP_BRANDS.map((name, i) => (
              <div key={i} className="rounded-lg bg-white/10 px-6 py-3 font-semibold text-white">
                {name}
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/15" />

        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} py-12 lg:py-16`}>
          <h2 className="mb-6 text-left font-title text-3xl font-bold text-white">When to involve a mechanical specialist</h2>
          <div className="space-y-4 text-left text-gray-300">
            <p>
              Early mechanical input reduces rework on plant space, risers, acoustics and electrical load. If any of the following apply, it is worth a structured review before you fix the design or programme.
            </p>
          </div>
          <ul className="my-6 list-inside list-disc space-y-2 text-left text-gray-300">
            {SPECIALIST_QUESTIONS.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
          <p className="text-gray-300">We can help translate your brief into a proportionate scope and installation plan — start with a call or site visit.</p>
          <div className="mt-8">
            <CustomPillButton href="/contact" size="md">
              Arrange a discussion
            </CustomPillButton>
          </div>
        </section>

        <div className="border-t border-white/15" />

        <OurCustomers />

        <ServicePageBottomCta
          imageSrc={serviceHeroImages.intruder}
          title={MEP_SURVEY_TITLE}
          description={MEP_SURVEY_DESCRIPTION}
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
