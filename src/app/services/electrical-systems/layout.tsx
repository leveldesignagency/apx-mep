import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Commercial Electrical Systems | Testing & Certification | APX",
  description:
    "Power, lighting, containment, inspection and testing — electrical systems for commercial and industrial projects across London and the Home Counties.",
  pathname: "/services/electrical-systems",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
