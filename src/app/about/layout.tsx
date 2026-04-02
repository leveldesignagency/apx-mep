import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "About APX MEP | Mechanical & Electrical Contractors | London",
  description:
    "APX Mechanical & Electrical — mission, values and accreditations. MEP design and installation across Greater London, all boroughs, Kent, Essex, Surrey and the Home Counties.",
  pathname: "/about",
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
