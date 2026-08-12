"use client"

import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/Reveal"
import type { MepProject } from "@/data/mepProjects"

const MEP_EXT_LINK =
  "relative group inline-block max-w-full cursor-pointer pb-1 text-inherit no-underline transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50"
const MEP_EXT_LINK_LINE =
  "pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-full -translate-x-1/2 origin-center scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100"

type MepProjectDetailStoryProps = {
  project: Pick<MepProject, "scope" | "systems" | "status" | "challenge" | "solution" | "outcome">
}

const META_FIELDS = [
  { key: "scope", label: "Scope" },
  { key: "systems", label: "Systems" },
  { key: "status", label: "Status" },
] as const satisfies ReadonlyArray<{ key: keyof Pick<MepProject, "scope" | "systems" | "status">; label: string }>

const STORY_FIELDS = [
  { key: "challenge", label: "Challenge" },
  { key: "solution", label: "Solution" },
  { key: "outcome", label: "Outcome" },
] as const satisfies ReadonlyArray<{ key: keyof Pick<MepProject, "challenge" | "solution" | "outcome">; label: string }>

export function MepProjectDetailStory({ project }: MepProjectDetailStoryProps) {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {META_FIELDS.map(({ key, label }, index) => (
          <Reveal key={key} delayMs={index * 65} className="block">
            <div className="h-auto min-h-[8.5rem] overflow-visible border border-white/10 bg-white/[0.03] p-3.5 md:p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.06em] text-white">{label}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/90">{project[key]}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {STORY_FIELDS.map(({ key, label }, index) => (
          <Reveal key={key} delayMs={80 + index * 70} className="block">
            <div className="h-auto min-h-[10.5rem] overflow-visible border border-white/10 bg-white/[0.02] p-4 md:p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.06em] text-white">{label}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{project[key]}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  )
}

type MepProjectDetailGalleryProps = {
  title: string
  images: string[]
}

export function MepProjectDetailGallery({ title, images }: MepProjectDetailGalleryProps) {
  return (
    <>
      <Reveal>
        <h2 className="text-xl font-title font-semibold md:text-2xl">Project Images</h2>
      </Reveal>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {images.map((img, idx) => (
          <Reveal key={`${img}-${idx}`} delayMs={idx * 65} className="block">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image src={img} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </Reveal>
        ))}
      </div>
    </>
  )
}

type MepProjectDetailClientReviewProps = {
  review: NonNullable<MepProject["clientReview"]>
}

export function MepProjectDetailClientReview({ review }: MepProjectDetailClientReviewProps) {
  return (
    <Reveal>
      <p
        id="mep-project-client-review-heading"
        className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/80"
        style={{ fontFamily: "var(--font-menu), sans-serif" }}
      >
        Client review
      </p>
      <blockquote className="mt-6 border-l border-white/25 pl-5 md:pl-7">
        <div className="space-y-5 text-sm font-normal leading-relaxed text-white/85 md:text-base md:leading-relaxed">
          {review.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <footer className="mt-10 border-t border-white/15 pt-7">
          <p className="font-title text-xl font-semibold leading-snug text-white md:text-2xl">
            {review.organizationUrl ? (
              <a href={review.organizationUrl} target="_blank" rel="noopener noreferrer" className={MEP_EXT_LINK}>
                {review.organization}
                <span className={MEP_EXT_LINK_LINE} aria-hidden />
              </a>
            ) : (
              review.organization
            )}
          </p>
          <p className="mt-3 text-base font-medium text-white md:text-lg">{review.author}</p>
          <p className="mt-1 text-sm text-white/65">{review.role}</p>
        </footer>
      </blockquote>
    </Reveal>
  )
}

type RelatedProject = Pick<MepProject, "slug" | "title" | "heroImage">

type MepProjectDetailRelatedProps = {
  related: RelatedProject[]
}

export function MepProjectDetailRelated({ related }: MepProjectDetailRelatedProps) {
  return (
    <>
      <Reveal>
        <h2 className="pt-4 font-title text-2xl font-semibold md:pt-6 md:text-3xl">Explore other projects</h2>
      </Reveal>
      <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {related.map((item, idx) => (
          <Reveal key={item.slug} delayMs={idx * 55} className="block">
            <Link href={`/projects/${item.slug}`} className="group block border border-white/10 p-2 hover:border-white/40">
              <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                <Image
                  src={item.heroImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
              </div>
              <p className="mt-2 line-clamp-2 text-xs uppercase tracking-[0.08em] text-white/70 group-hover:text-white">
                {item.title}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  )
}
