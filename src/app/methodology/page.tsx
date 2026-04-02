import type { Metadata } from "next"
import { DeliveryMethodologyPageContent } from "@/components/DeliveryMethodologyPageContent"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Methodology | MEP Delivery Steps | London Contractors | APX",
  description:
    "APX MEP delivery methodology — coordinated mechanical, electrical and plumbing for commercial and industrial projects across London boroughs and the South East.",
  pathname: "/methodology",
})

export default function MethodologyPage() {
  return <DeliveryMethodologyPageContent />
}
