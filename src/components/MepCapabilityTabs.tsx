"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const TABS = [
  { href: "/services/electrical", label: "Electrical" },
  { href: "/services/mechanical", label: "Mechanical" },
  { href: "/services/plumbing", label: "Plumbing" },
  { href: "/services/building-services", label: "Building services" },
] as const

export function MepCapabilityTabs() {
  const pathname = usePathname()

  return (
    <nav
      className="fs-capability-tabs-nav flex flex-wrap items-center justify-start gap-2 sm:gap-2.5"
      aria-label="Switch MEP service area"
    >
      {TABS.map(({ href, label }) => {
        const active = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={
              active
                ? "fs-capability-tab-link fs-capability-tab-link--active"
                : "fs-capability-tab-link"
            }
            aria-current={active ? "page" : undefined}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
