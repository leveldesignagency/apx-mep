import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Access Control & Door Entry | MEP London | APX",
  description:
    "Access control and door entry systems with power, containment and commissioning — coordinated MEP delivery across Greater London and the Home Counties.",
  pathname: "/services/security-systems",
})

export default function SecuritySystemsLayout({ children }: { children: React.ReactNode }) {
  return children
}
