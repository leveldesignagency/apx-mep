/**
 * Trade “pillar” routes only — solid header + `MepCapabilityPageLayout` with Electrical/Mechanical/Plumbing/Building tabs.
 * Other `/services/...` routes use the standard transparent overlay header on hero imagery (or solid black on hub).
 */
/** Trade pillar pages that use `MepCapabilityPageLayout` variant `pillar` (tabs + 3-column table). */
/** Only Mechanical & Plumbing still use the pillar layout (tabs + 3-column table). */
export const MEP_TRADE_PILLAR_PATHS = new Set(["/services/plumbing", "/services/mechanical"])

export function isMepCapabilityPath(pathname: string): boolean {
  const p = pathname.replace(/\/$/, "") || "/"
  return MEP_TRADE_PILLAR_PATHS.has(p)
}
