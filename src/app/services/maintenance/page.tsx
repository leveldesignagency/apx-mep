"use client"

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { CustomPillButton } from "@/components/ui/CustomPillButton";
import { OurCustomers, RequestFreeSurvey } from "@/components/ServicePageSharedSections";
import { Eye, Bell, Shield, Link2, Smartphone } from "lucide-react";

export default function PlumbingBuildingServicesPage() {
  const { theme } = useTheme();
  const heroImageSrc = "/client%20logos/service%20pages%20image/home-video-door-entry-system-installer-800x533.jpg";
  const textClass = theme === "dark" ? "text-white" : "text-black";
  const mutedClass = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const borderClass = theme === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: theme === "dark" ? "#000000" : "#ffffff" }}>
      <div className="w-full h-[0.75px] bg-black dark:bg-white" />

      {/* Hero */}
      <section className="relative h-screen overflow-visible flex flex-col bg-transparent">
        <div className="fixed inset-0 z-0" aria-hidden>
          <Image src={heroImageSrc} alt="" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-black/50" aria-hidden />
        </div>
        <div className="container mx-auto px-6 flex-1 flex flex-col justify-start pt-44 pb-40 relative z-20">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 text-left font-title text-white">
              Plumbing & Building Services
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-normal text-left tracking-tight max-w-2xl text-white">
              APX MEP delivers plumbing, drainage and building services for domestic and commercial premises across London and the Home Counties.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-normal text-left tracking-tight max-w-2xl text-white">
              We design, install and maintain plumbing systems, from repairs and upgrades through to full commercial installations. Our qualified engineers work with developers, landlords and facility managers to deliver reliable building services and compliance.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <CustomPillButton href="/contact" size="md">
                Get a free quote
              </CustomPillButton>
              <Link href="/contact" className="text-white font-normal text-base underline underline-offset-4 hover:text-white/90 transition-colors">
                Question? get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 -mt-64 sm:-mt-72">
        <div className="w-full h-[0.75px] bg-black dark:bg-white" />

        {/* Plumbing & Building Services */}
        <section className={`py-12 lg:py-16 ${textClass}`} style={{ backgroundColor: theme === "dark" ? "#000000" : "#ffffff" }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 font-title">Plumbing & Building Services</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className={mutedClass}>
                APX MEP has extensive experience in designing and installing plumbing and building services for domestic, commercial and industrial premises. We offer repairs, upgrades and full installations, including drainage and compliance.
              </p>
              <p className={mutedClass}>
                We work throughout London and the Home Counties with developers, landlords and facility managers. Our qualified engineers deliver planned and reactive maintenance to keep your systems running safely and efficiently.
              </p>
              <p className={mutedClass}>
                From single property repairs through to multi-site contracts, we provide plumbing and building services you can rely on. Contact us for a free quote or survey.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full h-[0.75px] bg-black dark:bg-white" />

        {/* The Latest Technology – brands */}
        <section className={`py-12 lg:py-16 ${textClass}`} style={{ backgroundColor: theme === "dark" ? "#000000" : "#ffffff" }}>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6 text-center font-title">Products & Partners</h2>
            <p className={`text-center max-w-2xl mx-auto mb-10 ${mutedClass}`}>
              We work with leading manufacturers and suppliers for plumbing and building services
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
              {["Wavin", "Polypipe", "Worcester", "Vaillant", "Ideal"].map((brand, i) => (
                <div key={i} className={`px-6 py-4 rounded-lg border ${borderClass} min-w-[140px] text-center font-semibold`}>
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full h-[0.75px] bg-black dark:bg-white" />

        {/* Full-Service Plumbing & Building */}
        <section className={`py-12 lg:py-16 ${textClass}`} style={{ backgroundColor: theme === "dark" ? "#000000" : "#ffffff" }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 font-title">Full-Service Plumbing & Building</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className={mutedClass}>
                We work closely with developers, facility managers and building owners to deliver plumbing and building services that meet their requirements and compliance needs.
              </p>
              <p className={mutedClass}>
                Our engineers carry out design, installation, maintenance and repairs for domestic and commercial plumbing, drainage and building services. We provide condition reports and support compliance for landlords and commercial premises.
              </p>
              <p className={mutedClass}>
                From emergency call-outs to planned maintenance and full installations, we offer a range of plumbing and building services. Contact us for a free quote or to arrange a survey.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full h-[0.75px] bg-black dark:bg-white" />

        {/* Plumbing & Building – benefits */}
        <section className={`py-12 lg:py-16 ${textClass}`} style={{ backgroundColor: theme === "dark" ? "#000000" : "#ffffff" }}>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-10 text-center font-title">Why Choose APX MEP for Plumbing & Building</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: Eye, title: "Qualified Engineers", text: "All our plumbing and building services are carried out by qualified, experienced engineers." },
                { icon: Bell, title: "Reactive & Planned", text: "We offer both emergency call-outs and planned maintenance contracts." },
                { icon: Shield, title: "Compliance", text: "We support landlords and commercial premises with compliance and condition reporting." },
                { icon: Link2, title: "Full Scope", text: "From repairs and upgrades to full design and installation projects." },
                { icon: Smartphone, title: "Responsive", text: "Clear communication and responsive service when you need us." },
              ].map(({ icon: Icon, title, text }, i) => (
                <div key={i} className={`p-6 rounded-xl border ${borderClass}`}>
                  <Icon className={`w-10 h-10 mb-4 ${theme === "dark" ? "text-white" : "text-black"}`} />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className={mutedClass}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full h-[0.75px] bg-black dark:bg-white" />

        {/* Our Video Entry Installations */}
        <section className={`py-12 lg:py-16 ${textClass}`} style={{ backgroundColor: theme === "dark" ? "#000000" : "#ffffff" }}>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-10 text-center font-title">Our Plumbing & Building Projects</h2>
            <p className={`text-center max-w-2xl mx-auto mb-12 ${mutedClass}`}>
              Examples of plumbing and building services we have delivered for our customers:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Aspire Herschel Street", subtitle: "Apartment Block" },
                { title: "Fizzy Living, Lewisham", subtitle: "Apartment Blocks" },
                { title: "Richmond Buildings Workspace", subtitle: "Firmdale Hotels" },
                { title: "United Living Welbourne", subtitle: "Apartment Block" },
              ].map((project, i) => (
                <div key={i} className={`rounded-xl border ${borderClass} overflow-hidden`}>
                  <div className={`aspect-video flex items-center justify-center ${theme === "dark" ? "bg-white/5" : "bg-gray-100"}`}>
                    <span className={`text-sm ${mutedClass}`}>Image placeholder</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className={mutedClass}>{project.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OurCustomers />
        <RequestFreeSurvey />
      </div>
    </div>
  );
}
