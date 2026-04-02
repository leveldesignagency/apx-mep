import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MEP_PROJECTS, getMepProjectBySlug } from "@/data/mepProjects"
import { buildMepMetadata } from "@/lib/seo-metadata"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return MEP_PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getMepProjectBySlug(slug)
  if (!project) return { title: "Project | APX MEP" }
  const desc =
    project.description.length > 160 ? `${project.description.slice(0, 157)}…` : project.description
  return buildMepMetadata({
    title: `${project.title} | MEP Case Study | APX`,
    description: `${desc} ${project.sector} — London & South East.`,
    pathname: `/projects/${slug}`,
  })
}

export default async function MepProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getMepProjectBySlug(slug)
  if (!project) notFound()

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative isolate min-h-[50vh] overflow-hidden border-b border-white/10 md:min-h-[56vh]">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/70" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[min(100%,92rem)] px-4 pb-14 pt-28 sm:px-6 md:pb-16 md:pt-32 lg:px-8">
          <Link href="/projects" className="text-sm uppercase tracking-[0.18em] text-white/70 hover:text-white">
            Back to projects
          </Link>
          <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/75">{project.sector}</p>
          <h1
            className="mt-2 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-menu)" }}
          >
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">{project.description}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[min(100%,92rem)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl border border-white/15 bg-white/[0.04] p-6 md:p-8 backdrop-blur-sm">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-white/80">Overview</h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">{project.summary}</p>
        </div>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex rounded-xl border border-white bg-white px-8 py-3 text-base font-semibold text-black transition-colors hover:bg-white/90"
          >
            Discuss a similar project
          </Link>
        </div>
      </section>
    </div>
  )
}
