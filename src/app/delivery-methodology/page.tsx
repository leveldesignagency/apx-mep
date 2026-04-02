import type { Metadata } from "next"
import { DeliveryMethodologyPageContent } from "@/components/DeliveryMethodologyPageContent"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Delivery Methodology | MEP Process | London & South East | APX",
  description:
    "How APX MEP delivers mechanical, electrical and plumbing — pre-construction through commissioning, handover and aftercare across Greater London, Kent, Essex and the Home Counties.",
  pathname: "/delivery-methodology",
})

export default function DeliveryMethodologyPage() {
  return <DeliveryMethodologyPageContent />
}
