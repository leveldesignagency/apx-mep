import { MEP_SERVICE_HUB_ITEMS } from "@/lib/mep-service-hub"

/**
 * Extra service routes not in the hub list (header /services index) — shown in hero quick nav for parity.
 */
const MEP_SERVICE_QUICK_LINKS_EXTRA: { href: string; label: string }[] = [
  { href: "/services/maintenance-support", label: "Maintenance & support" },
  { href: "/services/cctv/commercial", label: "CCTV installations" },
]

/**
 * Hero “Quick navigation” pills: all hub lines (same order as /services + header dropdown) plus maintenance & CCTV.
 * The current page is omitted so users can jump to other services — we no longer omit “pillar” hub routes; that was
 * legacy and hid access, IRS/fire and made the strip feel incomplete.
 */
export const MEP_SERVICE_QUICK_LINKS: { href: string; label: string }[] = [
  ...MEP_SERVICE_HUB_ITEMS.map((item) => ({
    href: item.href,
    label: item.title,
  })),
  ...MEP_SERVICE_QUICK_LINKS_EXTRA,
]

export const MEP_CCTV_TAB_LINKS = [
  { href: "/services/cctv/domestic", label: "Domestic" },
  { href: "/services/cctv/commercial", label: "Commercial" },
  { href: "/services/cctv/advice", label: "Useful advice" },
] as const

export function normalizeMepPath(pathname: string): string {
  return pathname.replace(/\/$/, "") || "/"
}
