import { MEP_SERVICE_HUB_ITEMS } from "@/lib/mep-service-hub"

/** Same three capability pillar routes as FS — not listed in hero quick nav */
export const MEP_QUICK_NAV_EXCLUDE_HREFS = new Set([
  "/services/security-systems",
  "/services/fire-life-safety",
  "/services/maintenance-support",
])

export const MEP_SERVICE_QUICK_LINKS: { href: string; label: string }[] = [
  ...MEP_SERVICE_HUB_ITEMS.filter((item) => !MEP_QUICK_NAV_EXCLUDE_HREFS.has(item.href)).map((item) => ({
    href: item.href,
    label: item.title,
  })),
]

export const MEP_CCTV_TAB_LINKS = [
  { href: "/services/cctv/domestic", label: "Domestic" },
  { href: "/services/cctv/commercial", label: "Commercial" },
  { href: "/services/cctv/advice", label: "Useful advice" },
] as const

export function normalizeMepPath(pathname: string): string {
  return pathname.replace(/\/$/, "") || "/"
}
