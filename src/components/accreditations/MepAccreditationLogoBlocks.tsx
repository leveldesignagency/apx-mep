import Link from "next/link"
import {
  MEP_ACCREDITATION_HERO_STRIP,
  MEP_ACCREDITATION_HUB_BOTTOM,
  MEP_ACCREDITATION_HUB_TOP,
  MEP_ACCREDITATION_SINGLE_ROW,
  MEP_ACCREDITATIONS,
  mepAccreditationLogoSrc,
  type MepAccreditationSlug,
} from "@/data/mepAccreditations"

/** Homepage light strip: single row — NICEIC, ISO trio, Gas Safe (same order as {@link MEP_ACCREDITATION_SINGLE_ROW}). */
const MEP_ACCREDITATION_HOME_ROW: MepAccreditationSlug[] = [...MEP_ACCREDITATION_SINGLE_ROW]

/** Hero (dark): NICEIC — ISO 9001 / 14001 / 45001 (grouped) — Gas Safe. */
export function MepAccreditationHeroStrip() {
  const isoItems = MEP_ACCREDITATION_HERO_STRIP.filter((x) => x.isoGroup)
  const [lead, tail] = (() => {
    const rest = MEP_ACCREDITATION_HERO_STRIP.filter((x) => !x.isoGroup)
    return [rest[0], rest[1]] as const
  })()
  if (!lead || !tail) return null

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-nowrap items-center justify-center gap-5 px-1 sm:gap-8 sm:px-0 md:gap-12 lg:gap-14">
      <Link
        href={`/accreditations/${lead.slug}`}
        className="flex h-14 max-h-14 w-auto shrink-0 items-center justify-center sm:h-[4.75rem] sm:max-h-none sm:max-w-[200px] md:h-20 md:max-w-[240px]"
        aria-label={`${MEP_ACCREDITATIONS[lead.slug].name} — view dedicated accreditation page`}
      >
        <img
          src={mepAccreditationLogoSrc(lead.slug as MepAccreditationSlug, "dark")}
          alt={MEP_ACCREDITATIONS[lead.slug].name}
          className="h-full w-auto max-w-[min(100%,9rem)] object-contain opacity-90 sm:max-w-full"
        />
      </Link>
      <div className="flex min-h-0 w-auto max-w-[12rem] shrink-0 flex-nowrap items-center justify-center gap-2 sm:max-w-none sm:shrink sm:gap-4 md:gap-6">
        {isoItems.map(({ slug }) => (
          <Link
            key={slug}
            href={`/accreditations/${slug}`}
            className="flex h-14 max-h-14 min-h-0 shrink-0 items-center justify-center sm:h-[6.25rem] sm:max-h-none sm:max-w-[240px] md:h-[7rem] md:max-w-[280px]"
            aria-label={`${MEP_ACCREDITATIONS[slug].name} — view dedicated accreditation page`}
          >
            <img
              src={mepAccreditationLogoSrc(slug, "dark")}
              alt={MEP_ACCREDITATIONS[slug].name}
              className="h-full w-auto max-h-full max-w-full object-contain opacity-90"
            />
          </Link>
        ))}
      </div>
      <Link
        href={`/accreditations/${tail.slug}`}
        className="flex h-14 max-h-14 w-auto shrink-0 items-center justify-center sm:h-[4.75rem] sm:max-h-none sm:max-w-[200px] md:h-20 md:max-w-[240px]"
        aria-label={`${MEP_ACCREDITATIONS[tail.slug].name} — view dedicated accreditation page`}
      >
        <img
          src={mepAccreditationLogoSrc(tail.slug as MepAccreditationSlug, "dark")}
          alt={MEP_ACCREDITATIONS[tail.slug].name}
          className="h-full w-auto max-w-[min(100%,9rem)] object-contain opacity-90 sm:max-w-full"
        />
      </Link>
    </div>
  )
}

const linkCardClass =
  "group flex aspect-[5/4] w-full min-h-[5.5rem] items-center justify-center rounded-xl outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black/40 sm:min-h-[6.5rem]"

const imgClass =
  "max-h-[min(100%,7rem)] w-auto max-w-[85%] origin-center object-contain opacity-90 transition-[opacity,transform] duration-300 ease-out group-hover:scale-110 group-hover:opacity-100 sm:max-h-[min(100%,8.5rem)]"

const homeRowLinkClass =
  "group flex h-[4.5rem] min-w-[7rem] items-center justify-center px-2 outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black/40 sm:h-20 sm:min-w-[9rem] md:h-[5.25rem] md:min-w-[10rem]"

const homeRowImgClass =
  "max-h-14 w-auto max-w-[11rem] origin-center object-contain opacity-85 transition-[opacity,transform] duration-300 ease-out group-hover:scale-[1.06] group-hover:opacity-100 sm:max-h-16 sm:max-w-[12rem] md:max-h-[5.25rem] md:max-w-[13rem]"

/** Homepage light section: single horizontal row of marks (wraps on narrow viewports). */
export function MepAccreditationLogosHomeGrid() {
  return (
    <div className="flex w-full max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-12 sm:gap-y-9 md:gap-x-16 lg:max-w-6xl">
      {MEP_ACCREDITATION_HOME_ROW.map((slug) => {
        const a = MEP_ACCREDITATIONS[slug]
        return (
          <Link
            key={slug}
            href={`/accreditations/${slug}`}
            className={homeRowLinkClass}
            aria-label={`${a.name} — view dedicated accreditation page`}
          >
            <img src={a.icon} alt="" className={homeRowImgClass} aria-hidden />
          </Link>
        )
      })}
    </div>
  )
}

/** About page (dark strip): same two-row logic, slightly wider cells. */
export function MepAccreditationLogosAboutGrid() {
  return (
    <div className="flex w-full min-w-0 max-w-lg flex-col gap-8 lg:max-w-none">
      <div className="grid grid-cols-2 justify-items-center gap-4 sm:gap-6">
        {MEP_ACCREDITATION_HUB_TOP.map((slug) => {
          const a = MEP_ACCREDITATIONS[slug]
          return (
            <Link
              key={slug}
              href={`/accreditations/${slug}`}
              className="group flex w-full max-w-[210px] items-center justify-center px-3 py-4 transition-opacity hover:opacity-90 sm:px-4 sm:py-5"
              aria-label={`Learn more about ${a.name}`}
            >
              <img
                src={a.icon}
                alt={a.name}
                width={280}
                height={180}
                loading="eager"
                decoding="async"
                className="h-auto max-h-24 w-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:max-h-28 lg:max-h-32"
              />
            </Link>
          )
        })}
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-2 sm:gap-4">
        {MEP_ACCREDITATION_HUB_BOTTOM.map((slug) => {
          const a = MEP_ACCREDITATIONS[slug]
          return (
            <Link
              key={slug}
              href={`/accreditations/${slug}`}
              className="group flex w-full max-w-[140px] items-center justify-center px-2 py-3 transition-opacity hover:opacity-90 sm:max-w-[160px] sm:px-3 sm:py-4"
              aria-label={`Learn more about ${a.name}`}
            >
              <img
                src={a.icon}
                alt={a.name}
                width={200}
                height={120}
                loading="eager"
                decoding="async"
                className="h-auto max-h-20 w-full object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:max-h-24 lg:max-h-28"
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

/** Footer: one row, same order as hero — 5-up grid so marks never wrap in the contact column. */
export function MepAccreditationFooterStrip() {
  return (
    <div className="mt-4 grid w-full min-w-0 grid-cols-5 items-center justify-items-center gap-x-1.5 gap-y-0 sm:gap-x-2">
      {MEP_ACCREDITATION_SINGLE_ROW.map((slug) => {
        const a = MEP_ACCREDITATIONS[slug]
        return (
          <img
            key={slug}
            src={mepAccreditationLogoSrc(slug, "dark")}
            alt={a.name}
            className="h-8 w-full max-h-10 max-w-full min-w-0 object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 sm:h-9"
          />
        )
      })}
    </div>
  )
}
