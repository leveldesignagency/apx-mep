"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Building2, DraftingCompass, HardHat, Wrench, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CustomPillButton } from "@/components/ui/CustomPillButton";
import { FS_SERVICE_SHIMMER_CARD } from "@/lib/fsServicePageCards";

/** Commitment icons: public/__quality assurance.svg, __health and safety.svg, __environmental.svg */
const ABOUT_COMMITMENTS = [
  { line1: "QUALITY", line2: "ASSURANCE", iconSrc: "/__quality assurance.svg", iconAlt: "Quality assurance" },
  { line1: "HEALTH", line2: "& SAFETY", iconSrc: "/__health and safety.svg", iconAlt: "Health and safety" },
  { line1: "ENVIRONMENTAL", line2: "COMMITMENT", iconSrc: "/__environmental.svg", iconAlt: "Environmental commitment" },
] as const;

/**
 * Parallax multipliers (px translate per px of “scroll through” distance).
 * Uses scroll position through the hero so text/image drift vs the page while you scroll.
 */
const PARALLAX = { bg: 0.38, text: 0.42, image: 0.22 } as const;

/** Public folder uses a space in "accreditations mono" — literal paths load reliably in <img> */
const ACC_MONO = "/accreditations mono";
const EXPERTISE_ACCRED_LOGOS = [
  { href: "/accreditations/bafe", src: `${ACC_MONO}/Coloured/BAFE-01.svg`, alt: "BAFE" },
  { href: "/accreditations/nsi", src: `${ACC_MONO}/NSI-01.svg`, alt: "NSI" },
  { href: "/accreditations/constructionline", src: `${ACC_MONO}/Coloured/ConstructionOnline-01.svg`, alt: "Constructionline" },
  { href: "/accreditations/fia", src: `${ACC_MONO}/Coloured/FIA-01.svg`, alt: "FIA" },
] as const;

type WhoWeSupportItem = {
  title: string;
  description: string;
  highlights: string;
  Icon: LucideIcon;
};

const WHO_WE_SUPPORT: WhoWeSupportItem[] = [
  {
    title: "M&E contractors",
    description:
      "We integrate mechanical, electrical and plumbing packages with clear interfaces, coordinated drawings, and commissioning that lines up with your wider MEP strategy — from containment and plant rooms through to testing, balancing and handover.",
    highlights: "Coordinated delivery · Testing & commissioning",
    Icon: Wrench,
  },
  {
    title: "Facility management teams",
    description:
      "Planned maintenance, reactive callouts and lifecycle upgrades for building services across estates and portfolios. We help keep plant and distribution systems reliable, efficient and documented for compliance and insurance.",
    highlights: "PPM & reactive · Lifecycle planning",
    Icon: Building2,
  },
  {
    title: "Consultants and architects",
    description:
      "Early engagement on loads, routes, plant space and energy strategy so specifications are deliverable on site. We support design reviews, RIBA stages and value engineering without losing performance or compliance intent.",
    highlights: "Design stages · Technical workshops",
    Icon: DraftingCompass,
  },
  {
    title: "Main contractors",
    description:
      "Programme-led site delivery with disciplined coordination with other trades, clear lookahead and snag-free interfaces — plus the O&M and record documentation your package needs to close out and hand over.",
    highlights: "Site logistics · Handover documentation",
    Icon: HardHat,
  },
];

function readDocumentScrollY(): number {
  if (typeof window === "undefined") return 0;
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

export default function AboutPage() {
  const [parallaxY, setParallaxY] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [heroReveal, setHeroReveal] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const rafRef = useRef(0);

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
    const update = () => {
      rafRef.current = 0;
      if (reduceMotion) {
        setParallaxY(0);
        return;
      }
      const scrollY = readDocumentScrollY();
      const hero = heroRef.current;
      if (!hero) {
        setParallaxY(scrollY);
        return;
      }
      const rect = hero.getBoundingClientRect();
      const vh = window.innerHeight;
      const h = Math.max(rect.height, 1);
      // Distance the hero block has moved up past the viewport top (0 while hero top is still below/at top edge)
      const scrolledPastHeroTop = Math.max(0, -rect.top);
      // While hero is still entering (top below viewport top), blend in movement from document scroll
      const leadIn = rect.top > 0 ? scrollY * 0.45 : 0;
      const t = Math.min(scrolledPastHeroTop + leadIn, h + vh * 0.35);
      setParallaxY(t);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll, { passive: true });
    const vv = window.visualViewport;
    vv?.addEventListener("scroll", onScroll, { passive: true });
    vv?.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
      vv?.removeEventListener("scroll", onScroll);
      vv?.removeEventListener("resize", onScroll);
    };
  }, [reduceMotion]);

  const py = reduceMotion ? 0 : parallaxY;

  useEffect(() => {
    document.documentElement.classList.add("about-page-active");
    return () => document.documentElement.classList.remove("about-page-active");
  }, []);

  return (
    <div className="about-parallax-page about-page-shell mep-about-page overflow-x-hidden">
      {/* Hero – same vertical rhythm/structure as homepage hero */}
      {/* overflow-visible on the section keeps angled splice + margin behaviour with the next block; parallax is clipped inside inner layers only */}
      <section
        ref={heroRef}
        className="about-block about-block--black about-block--angle-bottom about-hero-parallax relative h-screen overflow-visible flex flex-col"
      >
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div
            className="about-parallax-bg about-hero-parallax__bg will-change-transform"
            style={{ transform: `translate3d(0, ${py * PARALLAX.bg}px, 0)` }}
          />
        </div>
        <div className="container mx-auto px-6 flex-1 flex flex-col justify-start pt-6 pb-6 sm:pt-8 lg:pt-10 lg:pb-10 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-start w-full">
            <div
              className="mt-6 space-y-4 max-w-2xl sm:mt-8 lg:mt-12 xl:mt-16 lg:max-w-none will-change-transform"
              style={reduceMotion ? undefined : { transform: `translate3d(0, ${py * PARALLAX.text}px, 0)` }}
            >
              <h1
                className="mb-2 md:mb-3 text-left text-white leading-[0.95]"
                style={{ fontFamily: "var(--font-menu)" }}
              >
                <Reveal show={heroReveal} delayMs={0}>
                  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal italic text-white/75">
                    everything you
                  </span>
                </Reveal>
                <Reveal show={heroReveal} delayMs={75}>
                  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal italic text-white/75">
                    need to know
                  </span>
                </Reveal>
                <Reveal show={heroReveal} delayMs={150}>
                  <span className="mt-1 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold not-italic">
                    ABOUT APX
                  </span>
                </Reveal>
                <Reveal show={heroReveal} delayMs={225}>
                  <span className="block whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold not-italic">
                    MECHANICAL &amp; ELECTRICAL
                  </span>
                </Reveal>
              </h1>
              <Reveal show={heroReveal} delayMs={300}>
                <div className="space-y-4 text-lg sm:text-xl md:text-xl font-normal text-left tracking-tight max-w-xl text-white/90">
                  <p>
                    APX is a go-to contractor for major commercial and industrial projects in London and the Southeast. With established divisions for mechanical,
                    electrical and security services, we can now offer a comprehensive range of expert services for your project.
                  </p>
                  <p>
                    With over 8 successful years as an independent company, we have the robust and trusted experience to deliver exceptional, efficient and safe
                    workmanship from start to finish on any type or scale of project.
                  </p>
                  <p>
                    We&apos;re known on site for our innovation and for bringing good ideas to the table. Our experience and reliability means projects are delivered on
                    time, every time &ndash; within programme parameters and to specification.
                  </p>
                  <p>At APX, we have the strength, capability, expertise and resources to power your next project.</p>
                </div>
              </Reveal>
            </div>
            <Reveal show={heroReveal} delayMs={200} className="self-start">
              <div
                className="relative w-full max-w-md mx-auto lg:max-w-none aspect-[3/4] sm:aspect-[4/5] lg:aspect-[5/6] overflow-hidden rounded-2xl shadow-[0_20px_48px_rgba(0,0,0,0.35)] will-change-transform"
                style={reduceMotion ? undefined : { transform: `translate3d(0, ${py * PARALLAX.image}px, 0)` }}
              >
                <Image
                  src="/access%20control%20systems.jpg"
                  alt="MEP building services"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 44vw"
                  priority
                />
              </div>
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
                <li>• Industry accreditations and ongoing compliance training</li>
                <li>• Coordinated delivery alongside fire, security and controls where required</li>
              </ul>
            </div>
          </Reveal>
          <div className="grid w-full min-w-0 max-w-md grid-cols-2 justify-items-center gap-2 lg:max-w-none">
            {EXPERTISE_ACCRED_LOGOS.map((item, i) => (
              <Reveal key={item.alt} delayMs={i * 70}>
                <Link
                  href={item.href}
                  className="group flex w-full max-w-[210px] items-center justify-center px-4 py-5 transition-opacity hover:opacity-90"
                  aria-label={`Learn more about ${item.alt}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={280}
                    height={180}
                    loading="eager"
                    decoding="async"
                    className="h-auto max-h-24 w-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:max-h-28 lg:max-h-32"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
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
          <div className="grid grid-cols-1 gap-y-12 gap-x-6 pt-6 md:grid-cols-2 md:gap-x-7 md:gap-y-14 xl:grid-cols-4 xl:gap-x-8">
            {WHO_WE_SUPPORT.map(({ title, description, highlights, Icon }, i) => (
              <Reveal key={title} delayMs={i * 55}>
                <div className="flex h-full flex-col items-center">
                  <div
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-black shadow-[0_8px_28px_rgba(0,0,0,0.55)]"
                    aria-hidden
                  >
                    <Icon className="h-7 w-7 shrink-0 text-white/90" strokeWidth={1.5} />
                  </div>
                  <article
                    className={`${FS_SERVICE_SHIMMER_CARD} -mt-7 flex w-full min-w-0 flex-1 flex-col px-6 pb-6 pt-11 text-center md:px-7 md:pb-7 md:pt-12`}
                  >
                    <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">{title}</h3>
                    <p className="mb-5 mt-3 flex-1 text-left text-sm leading-relaxed text-white/80 md:mt-4 md:text-[0.9375rem]">
                      {description}
                    </p>
                    <p className="border-t border-white/10 pt-4 text-center text-xs font-medium uppercase tracking-[0.14em] text-white/55">
                      {highlights}
                    </p>
                  </article>
                </div>
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
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
                  body: "Underpinning every aspect of our work, safety is our most important value.",
                },
                {
                  title: "Customer care",
                  body: "We pride ourselves on an enduring reputation for excellent customer care. We know that strong partnerships and trust are the foundation of successful projects.",
                },
              ] as const
            ).map((v, i) => (
              <Reveal key={v.title} delayMs={i * 60}>
                <div className="rounded-2xl border border-white/25 bg-white/[0.06] p-6 text-white backdrop-blur-md md:p-7">
                  <p className="text-lg font-semibold text-white md:text-xl">{v.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">{v.body}</p>
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

      <section className="about-block about-block--black about-section-y about-section-px">
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {ABOUT_COMMITMENTS.map((item, i) => (
              <Reveal key={item.line1} delayMs={i * 85}>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element -- local SVG commitment artwork */}
                    <img
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      className="h-20 w-auto max-w-[5.75rem] object-contain object-center sm:h-24 sm:max-w-[6.5rem] md:max-w-[7rem]"
                    />
                  </div>
                  <p
                    className="text-base font-bold uppercase tracking-[0.12em] text-white"
                    style={{ fontFamily: "var(--font-menu)" }}
                  >
                    {item.line1}
                  </p>
                  <p
                    className="mt-1 text-base uppercase tracking-[0.12em] text-white/85"
                    style={{ fontFamily: "var(--font-menu)" }}
                  >
                    {item.line2}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-block about-block--black about-section-y about-section-px">
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
        <div className="about-section-inner">
          <Reveal>
            <span className="section-label mb-3 block text-white/70">Assurance</span>
            <h2 className="mb-8 text-4xl font-bold text-white lg:mb-10 lg:text-5xl" style={{ fontFamily: "var(--font-menu)" }}>
              Quality &amp; Compliance
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {["/cctv%20systems.jpg", "/access%20control%20systems.jpg", "/video%20door%20entry%20systems.jpg"].map((src, i) => (
              <Reveal key={src} delayMs={i * 75}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/80 md:mt-12 md:text-lg">
              Robust QA processes, clear documentation and standards-led delivery — so your mechanical, electrical and building services meet specification and
              regulation.
            </p>
          </Reveal>
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
