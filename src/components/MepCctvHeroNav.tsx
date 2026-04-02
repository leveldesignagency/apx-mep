"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MEP_CCTV_TAB_LINKS, normalizeMepPath } from "@/lib/mep-service-navigation"

/** Top-right tab list on CCTV subpages — jump between domestic / commercial / advice */
export function MepCctvHeroNav() {
  const path = normalizeMepPath(usePathname())

  return (
    <nav
      aria-label="CCTV section"
      className="pointer-events-auto absolute right-4 top-28 z-30 md:right-8 lg:top-32 lg:right-10"
    >
      <div className="rounded-tl-[1rem] rounded-br-[1rem] border border-white/35 bg-black/55 px-3 py-2.5 shadow-lg backdrop-blur-md">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">CCTV</p>
        <ul className="flex flex-col items-end gap-1.5">
          {MEP_CCTV_TAB_LINKS.map(({ href, label }) => {
            const active = path === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block text-right text-sm font-medium transition-colors ${
                    active ? "text-white" : "text-white/75 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
