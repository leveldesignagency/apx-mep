"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { MepCctvHeroNav } from "@/components/MepCctvHeroNav"
import { MepServiceHeroQuickNav } from "@/components/MepServiceHeroQuickNav"
import { HERO_BG_GRADIENT_BOTTOM, HERO_BG_GRADIENT_LEFT } from "@/lib/heroBackgroundGradients"

const DEFAULT_HERO_IMAGE = "/placeholders/mep-placeholder.svg"

export type ServicePageHeroProps = {
  title: string
  intro: ReactNode
  /**
   * Service-line pages: default `true` uses the placeholder image (or `imageSrc` when set).
   * Core capability pillar pages: set `false` for text-only hero on solid black (no photo).
   */
  backgroundImage?: boolean
  /** Override default placeholder; ignored when `backgroundImage` is false */
  imageSrc?: string
  imageAlt?: string
  imageClassName?: string
  /**
   * `quick-links` — pill links to other services at bottom of hero (default).
   * `cctv-tabs` — top-right jump links between CCTV subpages.
   */
  heroNav?: "quick-links" | "cctv-tabs" | false
}

function HeroIntro({ children }: { children: ReactNode }) {
  return (
    <div className="service-page-hero__intro w-full text-base font-normal tracking-tight text-left text-white sm:text-lg md:text-xl mb-0 [&_p+p]:mt-4">
      {typeof children === "string" ? <p>{children}</p> : children}
    </div>
  )
}

/**
 * Same text block as homepage #hero. Band is 70vh.
 * Default: placeholder image. Capability pillars: `backgroundImage={false}` — no photo.
 */
export function ServicePageHero({
  title,
  intro,
  backgroundImage = true,
  imageSrc = DEFAULT_HERO_IMAGE,
  imageAlt = "",
  imageClassName,
  heroNav = "quick-links",
}: ServicePageHeroProps) {
  return (
    <section
      className="service-page-hero relative flex h-[70vh] min-h-0 flex-col overflow-hidden bg-transparent"
      style={{ background: "transparent" }}
      aria-label="Introduction"
    >
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="100vw"
              className={imageClassName ?? "object-cover object-center"}
            />
            <div className="pointer-events-none absolute inset-0" style={{ background: HERO_BG_GRADIENT_LEFT }} />
            <div className="pointer-events-none absolute inset-0" style={{ background: HERO_BG_GRADIENT_BOTTOM }} />
            <div className="pointer-events-none absolute inset-0 bg-black/45" aria-hidden />
          </>
        ) : (
          <div className="absolute inset-0 bg-black" aria-hidden />
        )}
      </div>

      {heroNav === "cctv-tabs" ? <MepCctvHeroNav /> : null}

      <div className="container relative z-20 mx-auto flex h-full min-h-0 flex-1 flex-col px-6 pt-44 pb-8 sm:pb-10">
        <div
          className={
            heroNav === "quick-links"
              ? "flex min-h-0 w-full min-w-0 flex-1 flex-col"
              : "space-y-4"
          }
        >
          <div className="w-full min-w-0 max-w-full space-y-4 md:max-w-[min(40rem,40vw)]">
            <h1 className="mb-2 font-title text-3xl font-bold text-left text-white sm:mb-3 sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <HeroIntro>{intro}</HeroIntro>
          </div>
          {heroNav === "quick-links" ? (
            <div className="mt-auto shrink-0 border-t border-white/15 pt-6 sm:pt-8">
              <MepServiceHeroQuickNav />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
