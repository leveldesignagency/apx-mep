"use client"

import { ServicePageBottomCta } from "@/components/ServicePageBottomCta"
import { OurCustomers } from "@/components/ServicePageSharedSections"
import { CustomPillButton } from "@/components/ui/CustomPillButton"
import { ServicePageHero } from "@/components/ServicePageHero"
import { serviceHeroImages } from "@/lib/serviceHeroImages"
import { MEP_SERVICE_CONTENT_OUTER_CLASS } from "@/lib/mep-service-layout"
import { MEP_SERVICE_SHIMMER_CARD } from "@/lib/mepServicePageCards"
import { Target, Calendar, Users, CheckCircle, ArrowRight, BarChart3, Layers } from "lucide-react"

export default function ProjectManagementPage() {
  return (
    <div className="service-page-root min-h-screen overflow-x-hidden text-white">
      <ServicePageHero
        title="Design and Build"
        intro="APX MEP delivers coordinated M&E design and build — from early design input and procurement through installation, commissioning and handover. We align mechanical and electrical packages with programme, interfaces and employer requirements so your project stays on track."
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
          <h2 className="mb-10 text-left font-title text-3xl font-bold text-white sm:text-4xl">MEP project delivery</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Target className="h-8 w-8" strokeWidth={1.75} />,
                title: "Scope & programme",
                description:
                  "Clear scope, milestones and resource planning for mechanical, electrical and plumbing packages.",
              },
              {
                icon: <Calendar className="h-8 w-8" strokeWidth={1.75} />,
                title: "Site coordination",
                description: "Sequencing with structure, fit-out and specialist contractors to protect programme and quality.",
              },
              {
                icon: <Users className="h-8 w-8" strokeWidth={1.75} />,
                title: "Stakeholder communication",
                description: "Structured reporting for clients, designers and facilities teams through delivery and handover.",
              },
              {
                icon: <BarChart3 className="h-8 w-8" strokeWidth={1.75} />,
                title: "Cost & change control",
                description: "Variations, early warnings and commercial discipline aligned to contract and specification.",
              },
              {
                icon: <CheckCircle className="h-8 w-8" strokeWidth={1.75} />,
                title: "Quality & testing",
                description: "Inspections, witnessed tests and snag management for safe, compliant installation.",
              },
              {
                icon: <ArrowRight className="h-8 w-8" strokeWidth={1.75} />,
                title: "Commissioning & handover",
                description: "O&M structure, training and documentation ready for occupation and operations.",
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
          <h2 className="mb-10 text-left font-title text-3xl font-bold text-white sm:text-4xl">Project types</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "New build MEP",
                description:
                  "Full mechanical, electrical and plumbing for commercial, education, healthcare and residential schemes.",
                icon: <Layers className="h-8 w-8" strokeWidth={1.75} />,
              },
              {
                title: "Refurbishment & fit-out",
                description: "Upgrades and tenant improvements in live buildings with phased access and minimal disruption.",
                icon: <Calendar className="h-8 w-8" strokeWidth={1.75} />,
              },
              {
                title: "Plant replacement",
                description: "Structured replacement of distribution, plant and terminal devices with testing and handover.",
                icon: <BarChart3 className="h-8 w-8" strokeWidth={1.75} />,
              },
              {
                title: "Design & build packages",
                description: "Single-contract MEP delivery from concept through installation and commissioning.",
                icon: <Target className="h-8 w-8" strokeWidth={1.75} />,
              },
              {
                title: "BMS & controls interfaces",
                description: "Coordination of field wiring, panels and specialist controls with HVAC and electrical systems.",
                icon: <CheckCircle className="h-8 w-8" strokeWidth={1.75} />,
              },
              {
                title: "Multi-phase programmes",
                description: "Roll-outs and staged handovers aligned to occupation, validation and defects periods.",
                icon: <ArrowRight className="h-8 w-8" strokeWidth={1.75} />,
              },
            ].map((project, index) => (
              <div key={index} className={`${MEP_SERVICE_SHIMMER_CARD} p-8`}>
                <div className="mb-4 text-white">{project.icon}</div>
                <h3 className="mb-3 text-left text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-left text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <OurCustomers serviceTitleShort="Design & build" />

        <ServicePageBottomCta
          imageSrc={serviceHeroImages.accessControl}
          title="Plan your next MEP package"
          description="From single disciplines to fully integrated design and build, we can structure delivery around your programme and compliance needs."
        >
          <CustomPillButton href="/contact" size="md">
            Discuss your project
          </CustomPillButton>
          <CustomPillButton href="tel:02045685986" size="md" variant="outline">
            Call 020 4568 5986
          </CustomPillButton>
        </ServicePageBottomCta>
      </div>
    </div>
  )
}
