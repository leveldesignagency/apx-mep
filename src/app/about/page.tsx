"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const ABOUT_PROJECTS = [
  { image: "/cctv%20systems.jpg", title: "PROJECT 1", description: "Electrical and HVAC installation for commercial premises", quote: "Delivered on time and to a high standard." },
  { image: "/home-fire-alarm-system-installer-800x533.jpg", title: "PROJECT 2", description: "Mechanical systems design and commissioning", quote: "Professional from design through handover." },
  { image: "/intruder%20alarm%20systems.jpg", title: "PROJECT 3", description: "Plumbing and building services upgrade", quote: "Reliable support with clear communication." },
  { image: "/access%20control%20systems.jpg", title: "PROJECT 4", description: "Multi-site electrical and mechanical integration", quote: "The coordinated approach exceeded expectations." },
  { image: "/video%20door%20entry%20systems.jpg", title: "PROJECT 5", description: "HVAC and electrical system upgrade", quote: "Quality delivery with strong site coordination." },
] as const;

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(typeof window !== "undefined" ? window.scrollY : 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("about-page-active");
    return () => document.documentElement.classList.remove("about-page-active");
  }, []);

  return (
    <div className="about-parallax-page about-page-shell overflow-x-hidden snap-y snap-mandatory">
      {/* Hero – same vertical rhythm/structure as homepage hero */}
      <section className="about-block about-block--black about-block--angle-bottom relative h-screen overflow-visible flex flex-col snap-start">
        <div className="about-parallax-bg" style={{ transform: `translateY(${scrollY * 0.12}px)` }} aria-hidden />
        <div className="container mx-auto px-6 flex-1 flex flex-col justify-start pt-44 pb-40 relative z-20">
          <div className="space-y-4">
            <div className="max-w-2xl">
              <span className="section-label mb-3 block text-white/75">About</span>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 text-left text-white"
                style={{ fontFamily: "var(--font-menu)" }}
              >
                Why Choose APX Mechanical &amp; Electrical?
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-normal text-left tracking-tight max-w-lg text-white/90">
                APX MEP delivers coordinated mechanical, electrical and plumbing services across London and the Home Counties — from design and installation to commissioning, maintenance and compliance. We work with contractors, consultants and end clients across commercial, education, healthcare and industrial projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2 – white, angled top & bottom, image placeholder */}
      <section className="about-block about-block--white about-block--angle-top about-block--angle-bottom-alt about-section-y about-section-px flex snap-start items-center min-h-screen">
        <div className="about-section-inner grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div>
            <span className="section-label section-label--black mb-3 block">Expertise</span>
            <h2 className="mb-6 text-4xl font-bold text-black lg:text-5xl" style={{ fontFamily: "var(--font-menu)" }}>
              Certified MEP Specialists
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-black/80">
              Our engineers are trained across electrical, mechanical, plumbing and building services interfaces — so installations align with programme, specification and the latest regulations.
            </p>
            <ul className="space-y-3 text-black/90">
              <li>• Qualified mechanical, electrical and plumbing engineers</li>
              <li>• Testing, certification and clear handover documentation</li>
              <li>• Ongoing training on standards, safety and best practice</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-0 sm:gap-1 lg:min-h-full">
            {[
              { href: "/about/accreditors/bafe", src: "/accreditations%20mono/Coloured/BAFE-01.svg", alt: "BAFE" },
              { href: "/about/accreditors/nsi", src: "/accreditations%20mono/NSI-01.svg", alt: "NSI" },
              { href: "/about/accreditors/constructionline", src: "/accreditations%20mono/Coloured/ConstructionOnline-01.svg", alt: "Constructionline" },
              { href: "/about/accreditors/fia", src: "/accreditations%20mono/Coloured/FIA-01.svg", alt: "FIA" },
            ].map((item) => (
              <Link
                key={item.alt}
                href={item.href}
                className="group flex items-center justify-center py-3 sm:py-4"
                aria-label={`Learn more about ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-24 sm:max-h-28 lg:max-h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Block 3 – black, homepage-style projects strip (smaller cards) */}
      <section className="about-block about-block--black about-block--angle-top about-section-y flex snap-start flex-col justify-center">
        <div className="about-section-px mb-12 md:mb-14">
          <span className="section-label mb-3 block text-white/75">Portfolio</span>
          <h2 className="text-4xl font-bold text-white lg:text-5xl" style={{ fontFamily: "var(--font-menu)" }}>
            Our Work
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            MEP projects across London and the South East.
          </p>
        </div>
        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <div className="about-horizontal-scroll about-section-px pb-2">
            <div className="about-horizontal-scroll__inner">
              {ABOUT_PROJECTS.map((project, i) => (
                <Link key={project.title} href="/projects" className="projects-card group flex-shrink-0 flex flex-col rounded-xl overflow-hidden bg-black w-[260px] sm:w-[290px]">
                  <div className="relative aspect-[3/4] min-h-[360px] projects-card__inner">
                    <span className="projects-card-number absolute top-4 right-4 z-10 text-4xl font-bold text-white tabular-nums drop-shadow-md" style={{ fontFamily: 'var(--font-title, "Outfit", sans-serif)' }} aria-hidden>
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${project.image})` }} />
                    <div className="projects-card-glass absolute inset-x-0 bottom-0 top-1/2 overflow-hidden p-4 pt-14 pb-4 pr-12 flex flex-col justify-end">
                      <div className="projects-card-glass-overlay absolute inset-0" aria-hidden />
                      <p className="text-2xl font-bold text-white mb-1 relative z-10">{project.title}</p>
                      <p className="text-white/90 text-xs mb-2 relative z-10">{project.description}</p>
                      <p className="text-white/80 text-xs italic line-clamp-2 relative z-10">&ldquo;{project.quote}&rdquo;</p>
                      <span className="projects-card-arrow absolute bottom-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white transition-transform duration-200 group-hover:rotate-12" aria-hidden>
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Block 4 – white, angled top & bottom, text + image */}
      <section className="about-block about-block--white about-block--angle-bottom about-block--angle-top-alt about-section-y about-section-px flex snap-start items-center">
        <div className="about-section-inner grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="order-2 relative aspect-[3/4] overflow-hidden rounded-xl lg:order-1">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/intruder%20alarm%20systems.jpg')" }} />
          </div>
          <div className="order-1 lg:order-2">
            <span className="section-label section-label--black mb-3 block">Support</span>
            <h2 className="mb-6 text-4xl font-bold text-black lg:text-5xl" style={{ fontFamily: "var(--font-menu)" }}>
              Maintenance &amp; Response
            </h2>
            <p className="text-lg leading-relaxed text-black/80">
              Planned preventative maintenance and responsive support for critical building services. We help keep plant, power and water systems reliable — with clear communication and minimal disruption to your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Block 5 – black, angled, stats / quote */}
      <section className="about-block about-block--black about-block--angle-top about-block--angle-bottom-alt about-section-y about-section-px flex snap-start flex-col justify-center">
        <div className="about-section-inner mx-auto max-w-5xl text-center">
          <p className="text-2xl font-medium leading-relaxed text-white/90 md:text-3xl lg:text-4xl">
            &ldquo;We don&apos;t just install plant and pipework — we deliver coordinated MEP that fits programme and performs long after handover.&rdquo;
          </p>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-3 sm:gap-12 md:gap-14">
            <div>
              <div className="text-4xl font-bold text-white md:text-5xl">500+</div>
              <div className="mt-2 text-sm text-white/60 md:text-base">Projects completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white md:text-5xl">99%</div>
              <div className="mt-2 text-sm text-white/60 md:text-base">Customer satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white md:text-5xl">20+</div>
              <div className="mt-2 text-sm text-white/60 md:text-base">Years experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 6 – white, angled, image grid placeholders */}
      <section className="about-block about-block--white about-block--angle-top about-block--angle-bottom-alt about-section-y about-section-px flex snap-start items-center">
        <div className="about-section-inner w-full">
          <span className="section-label section-label--black mb-3 block">Assurance</span>
          <h2 className="mb-10 text-4xl font-bold text-black lg:mb-14 lg:text-5xl" style={{ fontFamily: "var(--font-menu)" }}>
            Quality &amp; Compliance
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {["/cctv%20systems.jpg", "/access%20control%20systems.jpg", "/video%20door%20entry%20systems.jpg"].map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-black/80 md:text-lg">
            Robust QA processes, clear documentation and standards-led delivery — so your building services meet specification and regulation.
          </p>
        </div>
      </section>

      {/* Block 7 – black, angled bottom, CTA */}
      <section className="about-block about-block--black about-block--angle-top about-section-y about-section-px flex snap-start flex-col items-center justify-center text-center">
        <h2 className="mb-5 text-4xl font-bold text-white lg:text-5xl" style={{ fontFamily: "var(--font-menu)" }}>
          Get in touch
        </h2>
        <p className="mb-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          Ready to discuss mechanical, electrical or plumbing requirements? We&apos;d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="rounded-xl bg-white px-10 py-4 text-lg font-semibold text-black transition-colors hover:bg-white/90"
        >
          Contact us
        </Link>
      </section>
    </div>
  );
}
