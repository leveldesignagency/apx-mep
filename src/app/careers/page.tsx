import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CareersSearchAndRoles } from "@/components/careers/CareersSearchAndRoles"
import { MEP_SITE_NAME } from "@/lib/seo"
import { MEP_CAREER_ROLES } from "@/data/mepCareersRoles"

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${MEP_SITE_NAME}. View open roles in mechanical and electrical engineering across London and the Home Counties.`,
}

const careersPageInset =
  "mx-auto w-full max-w-[1920px] px-6 pb-28 pt-16 sm:px-14 md:px-20 lg:px-28 xl:px-40 2xl:px-52"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className={careersPageInset}>
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/__APX Web Logo MEP.svg"
              alt={`${MEP_SITE_NAME} logo`}
              width={280}
              height={94}
              className="h-24 w-auto sm:h-28 md:h-32"
              priority
            />
          </Link>

          <p className="mx-auto mt-14 max-w-[42rem] text-base leading-relaxed text-white/70 sm:mt-16 sm:text-lg">
            We are always interested in hearing from skilled engineers and technicians who share our standards for compliant, quality delivery on site.
          </p>
        </div>

        <CareersSearchAndRoles roles={MEP_CAREER_ROLES} />
      </section>
    </div>
  )
}
