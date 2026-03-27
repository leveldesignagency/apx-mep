"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";

const ACCREDITORS = {
  bafe: {
    name: "BAFE",
    title: "About BAFE",
    icon: "/accreditations%20mono/Coloured/BAFE-01.svg",
    intro:
      "BAFE (British Approvals for Fire Equipment) is an independent, UKAS-accredited certification body focused on competence and quality across fire safety services.",
    sections: [
      {
        heading: "BAFE In The Built Environment",
        body:
          "BAFE maintains third-party certification schemes for organisations delivering life-safety services. These schemes are structured to verify competence, management controls and technical consistency. For project stakeholders, this provides stronger confidence that provider capability has been independently assessed rather than self-declared.",
      },
      {
        heading: "Why It Matters To MEP Projects",
        body:
          "On complex projects, fire and life-safety systems must integrate cleanly with wider mechanical and electrical packages. BAFE-aligned delivery expectations help teams maintain robust records, dependable commissioning controls and clear evidence at handover. This improves risk management through design, build and operational readiness.",
      },
      {
        heading: "Assurance Through Documentation",
        body:
          "Certification-driven practices encourage stronger audit trails, clearer test evidence and improved accountability throughout delivery. That becomes especially valuable where multiple parties rely on the same compliance pack, including principal contractors, duty holders and facilities teams.",
      },
      {
        heading: "How APX MEP Applies This",
        body:
          "We align our coordination, commissioning and handover processes with recognised quality frameworks so clients receive clear, traceable and operationally useful documentation — not just paperwork for completion.",
      },
    ],
  },
  nsi: {
    name: "NSI",
    title: "About NSI",
    icon: "/accreditations%20mono/NSI-01.svg",
    intro:
      "NSI (National Security Inspectorate) is one of the UK’s most recognised independent certification bodies for security and fire safety providers.",
    sections: [
      {
        heading: "What NSI Certifies",
        body:
          "NSI approval frameworks assess technical competence, process control, quality systems and operational performance. These standards are widely trusted by insurers, consultants, procurement teams and clients because they provide independent assurance of delivery capability.",
      },
      {
        heading: "Project And Operational Relevance",
        body:
          "Security and life-safety systems frequently sit at the centre of risk, compliance and continuity planning. NSI-recognised standards support more consistent outcomes from design through maintenance. They also improve confidence that installed systems will perform as intended in live operation.",
      },
      {
        heading: "Benefits For Multi-Discipline Teams",
        body:
          "In MEP contexts, systems often cross package boundaries. NSI-aligned process discipline helps improve interface control, test evidence quality and handover consistency. This supports better coordination between project teams and FM teams after completion.",
      },
      {
        heading: "APX MEP Delivery Approach",
        body:
          "Our teams focus on structured quality checks, clear technical records and transparent communication at each stage. The result is stronger delivery confidence for clients managing programme, safety and asset performance objectives.",
      },
    ],
  },
  constructionline: {
    name: "Constructionline",
    title: "About Constructionline",
    icon: "/accreditations%20mono/Coloured/ConstructionOnline-01.svg",
    intro:
      "Constructionline is a UK pre-qualification and supplier assurance platform that supports better-informed contractor selection and procurement control.",
    sections: [
      {
        heading: "Purpose Of Constructionline",
        body:
          "Constructionline centralises pre-qualification information so buyers can review supplier capability and compliance data efficiently. It streamlines due diligence, reduces duplicated checks and supports more consistent procurement governance across projects and frameworks.",
      },
      {
        heading: "Why This Helps Delivery",
        body:
          "When programme timelines are tight, procurement certainty becomes critical. Using suppliers with robust pre-qualification profiles can accelerate onboarding and reduce risk exposure at mobilisation. It also supports stronger confidence during package award and early-stage delivery planning.",
      },
      {
        heading: "Commercial And Compliance Value",
        body:
          "For clients and principal contractors, pre-validated records improve auditability and reduce ambiguity around supplier readiness. This contributes to stronger decision-making and fewer avoidable delays linked to missing or inconsistent assurance information.",
      },
      {
        heading: "APX MEP Perspective",
        body:
          "We view procurement readiness as part of project quality. Maintaining clear and current assurance information helps us support clients from bid stage through delivery and handover with fewer administrative bottlenecks.",
      },
    ],
  },
  fia: {
    name: "FIA",
    title: "About FIA",
    icon: "/accreditations%20mono/Coloured/FIA-01.svg",
    intro:
      "The Fire Industry Association (FIA) is a leading UK trade association that supports technical standards, training and best practice in fire safety.",
    sections: [
      {
        heading: "FIA’s Industry Role",
        body:
          "The FIA contributes to technical guidance, competency development and standards engagement across the fire sector. Its work helps members keep pace with evolving requirements and supports more informed technical decision-making in project and service environments.",
      },
      {
        heading: "Importance For Building Services Projects",
        body:
          "In MEP-led environments, fire systems must be coordinated with electrical, controls and broader building interfaces. Alignment with high-quality technical guidance helps teams reduce specification gaps and improve commissioning confidence at completion.",
      },
      {
        heading: "Competence And Continuous Learning",
        body:
          "Association-led development supports stronger engineering capability, better quality control and more reliable delivery consistency. For clients, this improves confidence that systems are not only installed correctly but also documented and handed over effectively.",
      },
      {
        heading: "How APX MEP Applies This",
        body:
          "We emphasise technical consistency, compliance awareness and disciplined project communication to help clients manage risk through design, installation, commissioning and operational handover.",
      },
    ],
  },
} as const;

type AccreditorKey = keyof typeof ACCREDITORS;
const TAB_ORDER: AccreditorKey[] = ["bafe", "nsi", "constructionline", "fia"];

export default function AccreditorDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug as AccreditorKey | undefined;
  const accreditor = slug ? ACCREDITORS[slug] : undefined;
  const logoScaleClass = slug === "bafe" || slug === "fia" ? "w-[74%] mx-auto" : "w-full";

  if (!accreditor) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black pt-20 pb-24">
      <section className="container mx-auto px-6 lg:px-8">
        <div className="mb-0 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="inline-flex items-center border border-black/20 border-b-0 rounded-t-lg rounded-b-none px-2 pt-2 pb-2">
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-black/30 px-4 py-1.5 text-sm font-medium text-black/80 transition-colors hover:bg-black hover:text-white hover:border-black"
            >
              Back to About
            </Link>
          </div>
          <nav
            aria-label="Accreditor tabs"
            className="flex flex-wrap items-end gap-2 border border-black/20 border-b-0 rounded-t-lg rounded-b-none px-2 pt-2 pb-2 sm:justify-end sm:px-2.5"
          >
            {TAB_ORDER.map((key) => {
              const item = ACCREDITORS[key];
              const active = key === slug;
              return (
                <Link
                  key={key}
                  href={`/about/accreditors/${key}`}
                  className={`inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wide transition-colors ${
                    active
                      ? "border-black bg-black text-white"
                      : "border-black/25 text-black/70 hover:border-black hover:bg-black hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="-mt-px border border-black/20 px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black" style={{ fontFamily: "var(--font-menu)" }}>
                {accreditor.title}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-black/80 leading-relaxed">{accreditor.intro}</p>
            </div>
            <div className="w-full max-w-[240px] py-2">
              <img src={accreditor.icon} alt={accreditor.name} className={`${logoScaleClass} h-auto object-contain`} />
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8">
            {accreditor.sections.map((section) => (
              <article key={section.heading} className="border-t border-black/15 pt-6 sm:pt-7">
                <h2 className="text-2xl sm:text-3xl font-semibold text-black" style={{ fontFamily: "var(--font-menu)" }}>
                  {section.heading}
                </h2>
                <p className="mt-4 text-black/80 leading-relaxed text-sm sm:text-base">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
