import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Contact | MEP Quotes & Surveys | London & Home Counties | APX",
  description:
    "Contact APX MEP for mechanical, electrical and plumbing — design, installation, testing and maintenance across Greater London, Kent, Essex, Surrey and Hertfordshire.",
  pathname: "/contact",
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
