import { notFound } from "next/navigation"
import { AccreditationDetailClient } from "@/components/accreditations/AccreditationDetailClient"
import { MEP_ACCREDITATIONS, type MepAccreditationSlug } from "@/data/mepAccreditations"

type Props = { params: Promise<{ slug: string }> }

export default async function AccreditationDetailPage({ params }: Props) {
  const { slug } = await params
  const key = slug as MepAccreditationSlug
  const accred = MEP_ACCREDITATIONS[key]
  if (!accred) notFound()

  return <AccreditationDetailClient activeSlug={key} accred={accred} />
}
