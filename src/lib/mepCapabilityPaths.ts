/** Pillar / “core capabilities” routes — not the service-line pages from the /services hub. */
export const MEP_CAPABILITY_PATHS = new Set([
  "/services/electrical",
  "/services/building-services",
  "/services/plumbing",
  "/services/mechanical",
  "/services/fire-life-safety",
  "/services/maintenance-support",
  "/services/bms-control-wiring",
  "/services/security-systems",
])

export function isMepCapabilityPath(pathname: string): boolean {
  const p = pathname.replace(/\/$/, "") || "/"
  return MEP_CAPABILITY_PATHS.has(p)
}
