import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MEP_PROJECTS, getMepProjectBySlug } from "@/data/mepProjects"
import { buildMepMetadata } from "@/lib/seo-metadata"
import {
  MepProjectDetailClientReview,
  MepProjectDetailGallery,
  MepProjectDetailRelated,
  MepProjectDetailStory,
} from "@/components/projects/MepProjectDetailAnimatedSections"

/** Matches FS project detail: grow-from-centre underline on external links */
const MEP_EXT_LINK =
  "relative group inline-block max-w-full cursor-pointer pb-1 text-inherit no-underline transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50"
const MEP_EXT_LINK_LINE =
  "pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-full -translate-x-1/2 origin-center scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return MEP_PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getMepProjectBySlug(slug)
  if (!project) {
    return { title: "Project | APX Mechanical & Electrical" }
  }
  const desc =
    project.shortDescription.length > 160
      ? `${project.shortDescription.slice(0, 157)}…`
      : project.shortDescription
  return buildMepMetadata({
    title: `${project.title} | MEP Case Study | APX`,
    description: `${desc} ${project.location} — London & South East.`,
    pathname: `/projects/${slug}`,
  })
}

export default async function MepProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getMepProjectBySlug(slug)
  if (!project) notFound()

  const related = MEP_PROJECTS.filter((item) => item.slug !== project.slug).slice(0, 6)
  const galleryImages = project.gallery.filter((img) => img !== project.heroImage)

  return (
    <div
      className="mep-projects-page mep-project-detail-page min-h-screen bg-black text-white"
      style={{ backgroundColor: "#000000" }}
    >
      <section className="relative isolate min-h-[56vh] overflow-hidden border-b border-white/10 md:min-h-[62vh]">
        <div className="absolute inset-0">
          <Image src={project.heroImage} alt={project.title} fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[min(100%,92rem)] px-4 pb-14 page-title-top sm:px-6 md:pb-16 lg:px-8">
          <Link href="/projects" className="text-sm uppercase tracking-[0.18em] text-white/70 hover:text-white">
            Back to projects
          </Link>
          <h1 className="mt-3 max-w-full font-title text-4xl font-bold leading-tight min-[900px]:max-w-[75%] md:text-6xl">
            {project.heroTitleLinkUrl ? (
              <a
                href={project.heroTitleLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mep-project-hero-title-link"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h1>
          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/75">
            <span>{project.sector}</span>
            <span aria-hidden="true"> · </span>
            {project.heroLocationLinkUrl ? (
              <a
                href={project.heroLocationLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={MEP_EXT_LINK}
              >
                {project.location}
                <span className={MEP_EXT_LINK_LINE} aria-hidden />
              </a>
            ) : (
              project.location
            )}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">{project.summary}</p>
        </div>
      </section>

      <section className="relative z-20 overflow-visible bg-black">
        <div className="mx-auto w-full max-w-[min(100%,92rem)] px-4 pb-20 pt-10 sm:px-6 lg:px-8">
          <MepProjectDetailStory project={project} />
        </div>
      </section>

      <section className="relative z-10 mt-6 border-t border-white/10 bg-black">
        <div className="mx-auto w-full max-w-[min(100%,92rem)] px-4 py-12 sm:px-6 lg:px-8">
          <MepProjectDetailGallery title={project.title} images={galleryImages} />
        </div>
      </section>

      {project.clientReview && (
        <section
          className="mep-project-client-review relative border-t border-white/10 bg-black"
          aria-labelledby="mep-project-client-review-heading"
        >
          <div className="mx-auto w-full max-w-[min(100%,92rem)] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
            <MepProjectDetailClientReview review={project.clientReview} />
          </div>
        </section>
      )}

      <section className="mt-12 border-t border-white/10 md:mt-16">
        <div className="mx-auto w-full max-w-[min(100%,92rem)] px-4 py-14 pb-24 sm:px-6 md:py-16 md:pb-28 lg:px-8">
          <MepProjectDetailRelated related={related} />
        </div>
      </section>
    </div>
  )
}
