import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Commercial CCTV | Integrated with Electrical | APX MEP",
  description:
    "Commercial CCTV coordinated with power and containment — installation across London offices, retail and industrial estates.",
  pathname: "/services/cctv/commercial",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
