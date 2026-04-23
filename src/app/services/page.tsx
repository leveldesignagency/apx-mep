"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { MEP_SERVICE_HUB_ITEMS } from "@/lib/mep-service-hub"
import { MEP_SERVICE_CONTENT_OUTER_CLASS } from "@/lib/mep-service-layout"

export default function MepServicesHubPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="h-[0.75px] w-full bg-white" aria-hidden />

      <main className="pb-24 lg:pb-20">
        <section className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} page-title-top`}>
          <h1 className="font-title text-4xl font-bold tracking-tight text-white md:text-5xl">
            APX Mechanical & Electrical Services
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
            Our service lines cover M&amp;E design and build, domestic and new-build 1st and 2nd fix, commercial and
            industrial work, refurbishment and fit-out, inspection and testing, solar PV, access control and door entry,
            BMS and control wiring, and security, IRS and fire systems.
          </p>

          <p className="section-label mt-12 text-white/75">Browse</p>

          <div className="mt-8 border-y border-white/25">
            {MEP_SERVICE_HUB_ITEMS.map((service, index) => {
              const expanded = hoveredIndex === index
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative block overflow-visible border-b border-white/20 last:border-b-0 bg-transparent text-inherit no-underline outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onFocus={() => setHoveredIndex(index)}
                >
                  <span
                    className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.02)_18%,rgba(255,255,255,0.035)_50%,rgba(255,255,255,0.02)_82%,transparent_100%)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
                    aria-hidden
                  />
                  <article className="relative z-[1]">
                    <div className="py-5">
                      <h2 className="text-left font-title text-2xl font-semibold tracking-tight text-white normal-case sm:text-3xl lg:text-4xl [line-height:1]">
                        {service.title}
                      </h2>
                    </div>
                    <div
                      className={`grid grid-cols-1 items-center gap-5 overflow-hidden transition-all duration-300 md:grid-cols-[1fr_auto] ${
                        expanded ? "max-h-56 pb-6 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="pr-4 text-left text-sm leading-relaxed text-white/75 sm:text-base">{service.description}</p>
                      <span className="inline-flex items-center justify-center gap-2 self-start whitespace-nowrap rounded-tl-xl rounded-br-xl border border-white/35 bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black sm:text-sm md:self-center">
                        {service.cta}
                        <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
                      </span>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
