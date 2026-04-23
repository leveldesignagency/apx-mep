"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { CustomPillButton } from "@/components/ui/CustomPillButton";
import { MepAccreditationLogosAboutGrid } from "@/components/accreditations/MepAccreditationLogoBlocks";

/** Commitment icons: public/__quality assurance.svg, __health and safety.svg, __environmental.svg */
const ABOUT_COMMITMENTS = [
  { line1: "QUALITY", line2: "ASSURANCE", iconSrc: "/__quality assurance.svg", iconAlt: "Quality assurance" },
  { line1: "HEALTH", line2: "& SAFETY", iconSrc: "/__health and safety.svg", iconAlt: "Health and safety" },
  { line1: "ENVIRONMENTAL", line2: "COMMITMENT", iconSrc: "/__environmental.svg", iconAlt: "Environmental commitment" },
] as const;

/** Full-bleed About hero (MEP) */
const ABOUT_HERO_BG_SRC = "/images/electrician-inspecting-electrical-panel-industrial-facility-with-blue-lighting.jpg";

/** `public/Who we support/` — filenames must match on disk (spaces / & encoded for URLs). */
const WHO_SUPPORT_DIR = "/Who%20we%20support" as const

function whoSupportImage(filename: string): string {
  return `${WHO_SUPPORT_DIR}/${encodeURIComponent(filename)}`
}

type WhoWeSupportItem = {
  title: string;
  description: string;
  highlights: string;
  imageSrc: string;
};

const WHO_WE_SUPPORT: WhoWeSupportItem[] = [
  {
    title: "M&E contractors",
    description:
      "We integrate mechanical, electrical and plumbing packages with clear interfaces, coordinated drawings, and commissioning that lines up with your wider MEP strategy — from containment and plant rooms through to testing, balancing and handover.",
    highlights: "Coordinated delivery · Testing & commissioning",
    imageSrc: whoSupportImage("M&E contractors.jpg"),
  },
  {
    title: "Facility management teams",
    description:
      "Planned maintenance, reactive callouts and lifecycle upgrades for building services across estates and portfolios. We help keep plant and distribution systems reliable, efficient and documented for compliance and insurance.",
    highlights: "PPM & reactive · Lifecycle planning",
    imageSrc: whoSupportImage("Facility management teams.jpg"),
  },
  {
    title: "Consultants and architects",
    description:
      "Early engagement on loads, routes, plant space and energy strategy so specifications are deliverable on site. We support design reviews, RIBA stages and value engineering without losing performance or compliance intent.",
    highlights: "Design stages · Technical workshops",
    imageSrc: whoSupportImage("Consultants and architects.jpg"),
  },
  {
    title: "Main contractors",
    description:
      "Programme-led site delivery with disciplined coordination with other trades, clear lookahead and snag-free interfaces — plus the O&M and record documentation your package needs to close out and hand over.",
    highlights: "Site logistics · Handover documentation",
    imageSrc: whoSupportImage("Main contractors.jpg"),
  },
];

export default function AboutPage() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [heroReveal, setHeroReveal] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setHeroReveal(true);
      return;
    }
    const id = requestAnimationFrame(() => setHeroReveal(true));
    return () => cancelAnimationFrame(id);
  }, [reduceMotion]);

  useEffect(() => {
    document.documentElement.classList.add("about-page-active");
    return () => document.documentElement.classList.remove("about-page-active");
  }, []);

  return (
    <div className="about-parallax-page about-page-shell mep-about-page overflow-x-hidden">
      {/* Hero — full-viewport background (no angled clip: clip-path left transparent gaps above white sections) */}
      <section className="about-block about-block--black about-hero-parallax relative flex min-h-[100dvh] flex-col overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <div className="about-parallax-bg about-hero-parallax__bg about-hero-parallax__bg--photo relative">
            <Image
              src={ABOUT_HERO_BG_SRC}
              alt=""
              fill
              priority
              className="about-hero-parallax__photo object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-black/50 to-black/88"
            aria-hidden
          />
        </div>
        <div className="container relative z-20 mx-auto flex w-full min-h-0 flex-1 flex-col justify-start px-6 pt-44 pb-16 sm:pt-48 sm:pb-20 lg:pt-52 lg:pb-24">
          <div className="max-w-3xl space-y-5">
            <h1
              className="mb-3 text-left leading-[0.95] text-white drop-shadow-sm md:mb-4"
              style={{ fontFamily: "var(--font-menu)" }}
            >
              <Reveal show={heroReveal} delayMs={0}>
                <span className="block text-4xl font-normal italic text-white/95 sm:text-5xl md:text-6xl lg:text-7xl">
                  everything you
                </span>
              </Reveal>
              <Reveal show={heroReveal} delayMs={75}>
                <span className="block text-4xl font-normal italic text-white/95 sm:text-5xl md:text-6xl lg:text-7xl">
                  need to know
                </span>
              </Reveal>
              <Reveal show={heroReveal} delayMs={150}>
                <span className="mt-1 block text-4xl font-bold not-italic sm:text-5xl md:text-6xl lg:text-7xl">
                  About APX
                </span>
              </Reveal>
              <Reveal show={heroReveal} delayMs={225}>
                <span className="block text-4xl font-bold not-italic sm:text-5xl md:text-6xl lg:text-7xl">
                  Mechanical &amp; Electrical
                </span>
              </Reveal>
            </h1>
            <Reveal show={heroReveal} delayMs={300}>
              <p className="max-w-xl text-left text-lg font-normal tracking-tight text-white/95 drop-shadow-sm sm:text-xl md:text-xl">
                APX Mechanical &amp; Electrical delivers integrated mechanical, electrical and building services for commercial and industrial projects across London
                and the Southeast. We work with main contractors, consultants and facility teams — programme-led, safety-first delivery from first fix to handover.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Accreditation section (keep white background) */}
      <section className="about-block about-block--white about-section-px pt-24 pb-36 md:pt-28 md:pb-40 lg:pt-32 lg:pb-48">
        <div className="about-section-inner grid grid-cols-1 justify-items-center gap-12 lg:grid-cols-2 lg:items-center lg:justify-items-stretch lg:gap-x-16 lg:gap-y-10 xl:gap-x-24">
          <Reveal>
            <div className="w-full max-w-xl text-center lg:max-w-none lg:text-left">
              <span className="section-label section-label--black mb-3 block leading-none tracking-[0.12em]">Accreditations</span>
              <h2 className="mb-6 text-4xl font-bold leading-tight text-black lg:text-5xl" style={{ fontFamily: "var(--font-menu)" }}>
                Certified MEP specialists
              </h2>
              <p className="mb-6 text-lg leading-snug text-black/80">
                Our engineers are trained across mechanical, electrical, plumbing and building services interfaces — so installations align with programme,
                specification and the latest standards, with testing, certification and clear handover documentation.
              </p>
              <ul className="space-y-2.5 text-black/90">
                <li>• Qualified mechanical, electrical and plumbing engineers</li>
                <li>• NICEIC, Gas Safe and UKAS ISO–aligned governance</li>
                <li>• Coordinated delivery alongside fire, security and controls where required</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <MepAccreditationLogosAboutGrid />
          </Reveal>
        </div>
      </section>

      {/* Brand-led black sections (no canted dividers) */}
      <section className="about-block about-block--black about-section-y about-section-px">
        <div className="about-section-inner space-y-10 md:space-y-12">
          <Reveal>
            <div className="max-w-3xl">
              <span className="section-label mb-3 block text-white/65">Who we support</span>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-menu)" }}>
                Delivery-first partner for complex projects
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 pt-6 sm:gap-7 md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:gap-x-10 lg:gap-y-10">
            {WHO_WE_SUPPORT.map(({ title, description, highlights, imageSrc }, i) => (
              <Reveal key={title} delayMs={i * 55} className="h-full min-h-0">
                <article
                  className="relative flex min-h-[21rem] flex-col overflow-hidden rounded-[1.85rem] border border-white/[0.1] bg-[#0a0a0a] shadow-[0_18px_50px_rgba(0,0,0,0.45)] sm:min-h-[22rem] md:grid md:min-h-[23rem] md:grid-cols-[minmax(0,1fr)_11.25rem] md:grid-rows-[auto_auto] md:gap-x-5 md:gap-y-4 md:p-6 lg:min-h-[24rem] lg:grid-cols-[minmax(0,1fr)_14.25rem] lg:gap-x-6 lg:gap-y-5 lg:p-7"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
                    style={{
                      backgroundImage: [
                        "radial-gradient(circle at 0 0, rgba(255,255,255,0.35) 0.8px, transparent 1px)",
                        "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.12) 0.9px, transparent 1.2px)",
                      ].join(", "),
                      backgroundSize: "3px 3px, 4px 4px",
                      backgroundPosition: "0 0, 1px 1px",
                    }}
                    aria-hidden
                  />

                  <div className="relative z-10 order-1 min-w-0 px-6 pb-2 pt-8 sm:px-8 sm:pt-10 md:col-start-1 md:row-start-1 md:px-0 md:pb-0 md:pt-1">
                    <h3
                      className="text-left text-2xl font-bold leading-[1.12] tracking-tight text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.18)] sm:text-3xl"
                      style={{ fontFamily: "var(--font-menu)" }}
                    >
                      {title}
                    </h3>
                    <p className="mt-4 min-w-0 max-w-full text-left text-sm leading-relaxed text-white/95 drop-shadow-sm sm:text-[0.9375rem]">
                      {description}
                    </p>
                  </div>

                  <div className="relative z-[5] order-2 mx-6 mt-3 h-48 min-h-0 shrink-0 overflow-hidden rounded-2xl shadow-[0_14px_44px_rgba(0,0,0,0.22)] sm:mt-4 sm:h-52 md:col-start-2 md:row-span-2 md:row-start-1 md:mx-0 md:mt-0 md:min-h-[20rem] md:h-full md:self-stretch md:shadow-[0_20px_55px_rgba(0,0,0,0.28)] lg:min-h-[21rem]">
                    <Image src={imageSrc} alt="" fill className="object-cover object-center" sizes="(min-width: 768px) 28vw, 100vw" />
                  </div>

                  <div className="relative z-20 order-3 mx-6 mb-7 mt-2 min-w-0 sm:mb-8 md:col-start-1 md:row-start-2 md:mx-0 md:mb-1 md:mt-0 md:self-start">
                    <div className="max-w-full overflow-x-auto pb-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                      <div className="inline-block w-max max-w-none rounded-2xl bg-white px-3.5 py-2.5 text-left shadow-[0_12px_36px_rgba(0,0,0,0.14)] sm:px-4 sm:py-3 md:px-3.5 md:py-2.5">
                        <p className="whitespace-nowrap text-[0.62rem] font-semibold uppercase leading-snug tracking-[0.08em] text-black/88 sm:text-[0.68rem] md:text-[0.62rem] lg:text-[0.7rem]">
                          {highlights}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-block about-block--black about-section-y about-section-px">
        <div className="about-section-inner max-w-3xl">
          <Reveal>
            <span className="section-label mb-3 block text-white/65">Our mission</span>
            <h2
              className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-menu)" }}
            >
              The highest level of work and customer care
            </h2>
            <p className="text-base leading-relaxed text-white/82 md:text-lg">
              We are driven by the desire to deliver the highest level of work and customer care in the industry. By doing this, we can build on our already impressive
              reputation — and deliver more high quality projects.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about-block about-block--black about-section-y about-section-px">
        <div className="about-section-inner space-y-10 md:space-y-12">
          <Reveal>
            <div className="max-w-3xl">
              <span className="section-label mb-3 block text-white/65">Our values</span>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-menu)" }}>
                How we operate every day
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 md:items-stretch">
            {(
              [
                {
                  title: "Knowledge",
                  body: "Every job for every customer is backed by the extensive knowledge and expertise we have acquired from the industry.",
                },
                {
                  title: "Workmanship",
                  body: "Quality of work is a defining factor for our business, and perfection being the driving force.",
                },
                {
                  title: "Safety",
                  body: "Underpinning every aspect of our work, safety is our most important value. On site, in design, and at handover, we protect people, plant, and programme without compromise.",
                },
                {
                  title: "Customer care",
                  body: "We pride ourselves on an enduring reputation for excellent customer care. We know that strong partnerships and trust are the foundation of successful projects.",
                },
              ] as const
            ).map((v, i) => (
              <Reveal key={v.title} delayMs={i * 60} className="h-full min-h-0">
                <div className="flex h-full flex-col rounded-2xl border border-white/25 bg-white/[0.06] p-6 text-white backdrop-blur-md md:p-7">
                  <p className="text-lg font-semibold text-white md:text-xl">{v.title}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/80 md:text-base">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-block about-block--black about-section-y about-section-px">
        <div className="about-section-inner max-w-3xl">
          <Reveal>
            <span className="section-label mb-3 block text-white/65">Our vision</span>
            <h2
              className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-menu)" }}
            >
              The best choice for high-value contracts
            </h2>
            <p className="text-base leading-relaxed text-white/82 md:text-lg">
              To build on our reputation for professionalism, safety, workmanship and delivery that makes APX Mechanical &amp; Electrical Ltd, without a doubt, the best
              choice for large, high-value contracts in London and the South East.
            </p>
            <p className="mt-6 text-base leading-relaxed text-white/82 md:text-lg">
              We invest in innovation on site, clear communication with project teams, and delivery that respects programme and specification &mdash; so complex MEP packages
              land on time and perform after handover.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about-block about-block--black about-section-y about-section-px about-mep-commitments-spacing">
        <div className="about-section-inner w-full">
          <Reveal>
            <span className="section-label mb-3 block text-white/70">Our commitments</span>
            <h2
              className="mb-8 text-3xl font-bold leading-tight text-white md:mb-10 md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-menu)" }}
            >
              Quality, safety &amp; environment
            </h2>
          </Reveal>
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-16 md:flex-row md:flex-wrap md:justify-center md:gap-x-16 md:gap-y-12 lg:max-w-7xl lg:gap-x-28 xl:gap-x-32">
            {ABOUT_COMMITMENTS.map((item, i) => (
              <Reveal key={item.line1} delayMs={i * 85}>
                <div className="group flex w-full max-w-[12.5rem] flex-col items-center gap-3 text-center sm:max-w-[13rem] md:w-auto md:max-w-none md:shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element -- local SVG commitment artwork */}
                  <img
                    src={item.iconSrc}
                    alt={item.iconAlt}
                    className="h-28 w-auto max-w-[7.5rem] origin-center object-contain object-center transition-transform duration-300 ease-out motion-reduce:transition-none sm:h-32 sm:max-w-[8.75rem] md:h-36 md:max-w-[10rem] motion-safe:group-hover:scale-[1.07]"
                  />
                  <div className="flex flex-col items-center gap-1.5">
                    <p
                      className="text-base font-bold uppercase leading-none tracking-[0.12em] text-white"
                      style={{ fontFamily: "var(--font-menu)" }}
                    >
                      {item.line1}
                    </p>
                    <p
                      className="text-base uppercase leading-none tracking-[0.12em] text-white/85"
                      style={{ fontFamily: "var(--font-menu)" }}
                    >
                      {item.line2}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-block about-block--black about-section-y about-section-px about-mep-proof-quote-spacing">
        <div className="about-section-inner rounded-3xl border border-white/20 bg-white/[0.04] p-7 text-center sm:p-9 lg:p-12 backdrop-blur-md">
          <Reveal>
            <p className="mx-auto max-w-4xl text-2xl font-medium leading-relaxed text-white/90 md:text-3xl lg:text-[2.45rem]">
              &ldquo;We don&apos;t just install plant and pipework — we deliver coordinated MEP that fits programme and performs long after handover.&rdquo;
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-6">
            {[
              { value: "500+", label: "Projects completed" },
              { value: "99%", label: "Customer satisfaction" },
              { value: "8+", label: "Years Experience" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delayMs={i * 90}>
                <div className="rounded-2xl border border-white/20 bg-black/35 p-6">
                  <div className="text-4xl font-bold text-white md:text-5xl">{stat.value}</div>
                  <div className="mt-2 text-sm text-white/70 md:text-base">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-block about-block--black about-section-y about-section-px">
        <div className="about-section-inner text-center">
          <Reveal>
            <h2 className="mb-6 text-4xl font-bold text-white lg:mb-8 lg:text-5xl" style={{ fontFamily: "var(--font-menu)" }}>
              Get in touch
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Ready to discuss mechanical, electrical, plumbing or building services? We&apos;d love to hear from you.
            </p>
          </Reveal>
          <Reveal delayMs={140}>
            <CustomPillButton href="/contact" size="md">
              Contact us
            </CustomPillButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
