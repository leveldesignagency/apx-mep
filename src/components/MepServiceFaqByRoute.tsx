"use client"

import { usePathname } from "next/navigation"
import { getMepServiceFaqItems } from "@/lib/mep-service-faq-content"
import { MepServiceFaqSection } from "@/components/MepServiceFaqSection"

/** FAQ accordion with copy resolved from the current `/services/...` path. */
export function MepServiceFaqByRoute() {
  const pathname = usePathname() ?? ""
  const items = getMepServiceFaqItems(pathname)
  return <MepServiceFaqSection key={pathname} items={items} />
}
