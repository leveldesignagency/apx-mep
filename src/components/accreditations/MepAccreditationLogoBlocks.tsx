import Link from "next/link"
import {
  MEP_ACCREDITATION_HERO_STRIP,
  MEP_ACCREDITATION_HUB_BOTTOM,
  MEP_ACCREDITATION_HUB_TOP,
  MEP_ACCREDITATIONS,
  mepAccreditationLogoSrc,
  type MepAccreditationSlug,
} from "@/data/mepAccreditations"

/** Homepage light strip: single row — NICEIC, ISO trio, Gas Safe (matches hero order). */
const MEP_ACCREDITATION_HOME_ROW: MepAccreditationSlug[] = [
  MEP_ACCREDITATION_HUB_TOP[0],
  ...MEP_ACCREDITATION_HUB_BOTTOM,
  MEP_ACCREDITATION_HUB_TOP[1],
]

/** Hero (dark): NICEIC — ISO 9001 / 14001 / 45001 (grouped) — Gas Safe. */
export function MepAccreditationHeroStrip() {
  const isoItems = MEP_ACCREDITATION_HERO_STRIP.filter((x) => x.isoGroup)
  const [lead, tail] = (() => {
    const rest = MEP_ACCREDITATION_HERO_STRIP.filter((x) => !x.isoGroup)
    return [rest[0], rest[1]] as const
  })()
  if (!lead || !tail) return null

  return (
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-5 sm:gap-7 md:gap-9">
      <div
        className="flex h-16 w-auto max-w-[170px] items-center justify-center sm:h-[4.75rem] sm:max-w-[200px] md:h-20 md:max-w-[220px]"
        aria-hidden
      >
        <img
          src={mepAccreditationLogoSrc(lead.slug as MepAccreditationSlug, "dark")}
          alt={MEP_ACCREDITATIONS[lead.slug].name}
          className="h-full w-auto object-contain opacity-90"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4" aria-hidden>
        {isoItems.map(({ slug }) => (
          <div
            key={slug}
            className="flex h-[5.25rem] w-auto max-w-[200px] items-center justify-center sm:h-[6.25rem] sm:max-w-[240px] md:h-[7rem] md:max-w-[260px]"
          >
            <img
              src={mepAccreditationLogoSrc(slug, "dark")}
              alt=""
              className="h-full w-auto max-h-full object-contain opacity-90"
            />
          </div>
        ))}
      </div>
      <div
        className="flex h-16 w-auto max-w-[170px] items-center justify-center sm:h-[4.75rem] sm:max-w-[200px] md:h-20 md:max-w-[220px]"
        aria-hidden
      >
        <img
          src={mepAccreditationLogoSrc(tail.slug as MepAccreditationSlug, "dark")}
          alt={MEP_ACCREDITATIONS[tail.slug].name}
          className="h-full w-auto object-contain opacity-90"
        />
      </div>
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

/** Footer: NICEIC + Gas Safe row, then three ISO marks. */
export function MepAccreditationFooterStrip() {
  return (
    <div className="mt-4 flex flex-col gap-3 sm:gap-4">
      <div className="flex flex-wrap items-center gap-4 sm:gap-5">
        {MEP_ACCREDITATION_HUB_TOP.map((slug) => {
          const a = MEP_ACCREDITATIONS[slug]
          return (
            <img
              key={slug}
              src={mepAccreditationLogoSrc(slug, "dark")}
              alt={a.name}
              className="h-10 w-auto max-w-[100px] flex-shrink-0 opacity-80 transition-opacity duration-300 hover:opacity-100 sm:max-w-[110px]"
            />
          )
        })}
      </div>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {MEP_ACCREDITATION_HUB_BOTTOM.map((slug) => {
          const a = MEP_ACCREDITATIONS[slug]
          return (
            <img
              key={slug}
              src={mepAccreditationLogoSrc(slug, "dark")}
              alt={a.name}
              className="h-9 w-auto max-w-[72px] flex-shrink-0 opacity-80 transition-opacity duration-300 hover:opacity-100 sm:h-10 sm:max-w-[80px]"
            />
          )
        })}
      </div>
    </div>
  )
}
