"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MEP_CCTV_TAB_LINKS, normalizeMepPath } from "@/lib/mep-service-navigation"

const linkBaseClass =
  "quick-nav-pill-shimmer inline-block max-w-full rounded-tl-xl rounded-br-xl border border-white/40 bg-black/45 px-3 py-1.5 text-right text-sm font-semibold tracking-tight text-white/95 backdrop-blur-sm transition-[border-color,color] duration-300 hover:border-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"

const activeLinkClass = "border-white/75 bg-black/55 ring-1 ring-white/35"

/** Top-right tab list on CCTV subpages — same hover fill + shimmer as bottom quick nav pills */
export function MepCctvHeroNav() {
  const path = normalizeMepPath(usePathname())

  return (
    <nav
      aria-label="CCTV section"
      className="pointer-events-auto absolute right-4 top-28 z-30 md:right-8 lg:top-32 lg:right-10"
    >
      <p className="mb-2 text-right text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">CCTV</p>
      <ul className="flex flex-col items-end gap-2">
        {MEP_CCTV_TAB_LINKS.map(({ href, label }) => {
          const active = path === href
          return (
            <li key={href} className="flex justify-end">
              <Link
                href={href}
                className={`${linkBaseClass} ${active ? activeLinkClass : ""}`}
                aria-current={active ? "page" : undefined}
              >
                <span className="relative z-10">{label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
