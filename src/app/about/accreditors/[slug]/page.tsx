import { notFound, redirect } from "next/navigation"
import { getMepAccreditation } from "@/data/mepAccreditations"

type Props = { params: Promise<{ slug: string }> }

/** Legacy URLs: `/about/accreditors/[slug]` → `/accreditations/[slug]` */
export default async function LegacyAccreditorRedirect({ params }: Props) {
  const { slug } = await params
  if (!getMepAccreditation(slug)) notFound()
  redirect(`/accreditations/${slug}`)
}
