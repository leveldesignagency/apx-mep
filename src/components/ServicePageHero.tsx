"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { MepCctvHeroNav } from "@/components/MepCctvHeroNav"
import { MepServiceHeroQuickNav } from "@/components/MepServiceHeroQuickNav"
import { HERO_BG_GRADIENT_BOTTOM, HERO_BG_GRADIENT_LEFT } from "@/lib/heroBackgroundGradients"
import { MEP_SERVICE_CONTENT_OUTER_CLASS } from "@/lib/mep-service-layout"
import { mepHeroImages } from "@/lib/serviceHeroImages"

const DEFAULT_HERO_IMAGE = mepHeroImages.panelIndustrialBlue

export type ServicePageHeroProps = {
  title: ReactNode
  intro: ReactNode
  /**
   * Service-line pages: default `true` uses the stock hero photo (or `imageSrc` when set).
   * Core capability pillar pages: set `false` for text-only hero on solid black (no photo).
   */
  backgroundImage?: boolean
  /** Override default stock photo; ignored when `backgroundImage` is false */
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
 * Default: stock hero image from `mepHeroImages`. Capability pillars: `backgroundImage={false}` — no photo.
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
      className="service-page-hero relative flex min-h-[70vh] flex-col overflow-x-hidden bg-transparent"
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
            <div
              className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
              style={{
                backgroundImage: [
                  "radial-gradient(circle at 0 0, rgba(255,255,255,0.28) 0.8px, transparent 1px)",
                  "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.42) 0.9px, transparent 1.2px)",
                ].join(", "),
                backgroundSize: "3px 3px, 4px 4px",
                backgroundPosition: "0 0, 1px 1px",
              }}
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 bg-black/45" aria-hidden />
          </>
        ) : (
          <div className="absolute inset-0 bg-black" aria-hidden />
        )}
      </div>

      {heroNav === "cctv-tabs" ? <MepCctvHeroNav /> : null}

      <div
        className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} relative z-20 flex min-h-[70vh] w-full min-w-0 flex-1 flex-col pt-44 pb-8 sm:pb-10`}
      >
        <div
          className={
            heroNav === "quick-links" || heroNav === "cctv-tabs"
              ? "flex w-full min-w-0 flex-1 flex-col gap-6 sm:gap-8"
              : "space-y-4"
          }
        >
          <div className="w-full min-w-0 max-w-full space-y-4 md:max-w-[min(52rem,68vw)] lg:max-w-[min(60rem,72vw)]">
            <h1 className="mb-2 font-title text-3xl font-bold text-left text-white sm:mb-3 sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <HeroIntro>{intro}</HeroIntro>
          </div>
          {heroNav === "quick-links" || heroNav === "cctv-tabs" ? (
            <div className="mt-auto shrink-0 border-t border-white/15 pt-6 sm:pt-8">
              <MepServiceHeroQuickNav />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
