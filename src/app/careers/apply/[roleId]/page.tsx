import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CareerApplicationForm } from "@/components/careers/CareerApplicationForm"
import { MEP_CAREER_ROLES, getMepCareerRoleById } from "@/data/mepCareersRoles"
import { MEP_SITE_NAME } from "@/lib/seo"

const inset =
  "mx-auto w-full max-w-[1920px] px-6 pb-28 pt-16 sm:px-14 md:px-20 lg:px-28 xl:px-40 2xl:px-52"

type Props = { params: Promise<{ roleId: string }> }

export function generateStaticParams() {
  return MEP_CAREER_ROLES.map((r) => ({ roleId: r.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { roleId } = await params
  const role = getMepCareerRoleById(roleId)
  if (!role) return {}
  return {
    title: `Apply — ${role.title}`,
    description: `Submit your CV for the ${role.title} role at ${MEP_SITE_NAME}.`,
    robots: { index: false, follow: true },
  }
}

export default async function CareersApplyPage({ params }: Props) {
  const { roleId } = await params
  const role = getMepCareerRoleById(roleId)
  if (!role) notFound()

  return (
    <div className="min-h-screen bg-black text-white">
      <section className={inset}>
        <CareerApplicationForm
          role={role}
          siteName={MEP_SITE_NAME}
          logoSrc="/__APX Web Logo MEP.svg"
          homeHref="/"
        />
      </section>
    </div>
  )
}
