import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "MEP Projects | Electrical & Mechanical Case Studies | London | APX",
  description:
    "Mechanical, electrical and building services projects — healthcare, education, public sector and commercial MEP across London, Kent, Essex and the Home Counties.",
  pathname: "/projects",
})

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
