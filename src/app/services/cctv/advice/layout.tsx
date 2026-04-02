import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "CCTV Specification Advice | MEP Security | APX",
  description:
    "Technical guidance on CCTV power, cabling and integration with building services — projects across London and the South East.",
  pathname: "/services/cctv/advice",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
