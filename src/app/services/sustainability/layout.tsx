import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Sustainable MEP & Building Services | APX",
  description:
    "Lifecycle thinking and responsible specification for mechanical, electrical and plumbing — supporting environmental targets across Greater London and the South East.",
  pathname: "/services/sustainability",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
