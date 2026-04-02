"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { MEP_SERVICE_HUB_ITEMS } from "@/lib/mep-service-hub"

export default function MepServicesHubPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="h-[0.75px] w-full bg-white" aria-hidden />

      <main className="pb-20">
        <section className="container mx-auto px-6 pt-16 lg:px-8 lg:pt-24">
          <h1 className="font-title text-4xl font-bold tracking-tight text-white md:text-5xl">
            APX Mechanical & Electrical Services
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
            Our service lines cover M&amp;E design and build, domestic and new-build 1st and 2nd fix, commercial and
            industrial work, refurbishment and fit-out, inspection and testing, solar PV, access control and door entry,
            BMS and control wiring, and security, IRS and fire systems. For a snapshot on the homepage see{" "}
            <Link
              href="/#core-capabilities"
              className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              Core capabilities
            </Link>
            .
          </p>

          <p className="section-label mt-12 text-white/75">Browse</p>

          <div className="mt-8 border-y border-white/25">
            {MEP_SERVICE_HUB_ITEMS.map((service, index) => {
              const expanded = hoveredIndex === index
              return (
                <article
                  key={service.href}
                  className="border-b border-white/20 last:border-b-0"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onFocusCapture={() => setHoveredIndex(index)}
                >
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
                    <Link
                      href={service.href}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-tl-xl rounded-br-xl border border-white px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-white hover:text-black sm:text-sm"
                    >
                      {service.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
