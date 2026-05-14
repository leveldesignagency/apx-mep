"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronUp } from "lucide-react"
import { MepAccreditationFooterStrip } from "@/components/accreditations/MepAccreditationLogoBlocks"
import { MEP_SHOW_NEWS_AND_ARTICLES } from "@/lib/mepSiteFlags"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  const scrollFooterIntoView = () => {
    setTimeout(() => {
      footerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
    }, 200)
  }

  return (
    <div className="footer-outer-wrapper">
      {/* Square-edged black fill behind footer so hero never shows through; sibling keeps footer border/radius intact */}
      <div className="footer-black-fill" aria-hidden />
      <footer
        ref={footerRef}
        className="footer-expand-wrapper text-white relative z-10"
        onMouseEnter={scrollFooterIntoView}
      >
      {/* Top strip: logo (over junction) + hover hint */}
      <div className="footer-head relative flex min-h-[6rem] items-end justify-center overflow-visible px-6 lg:px-8">
        <div className="footer-logo-bridge absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0">
          <Link href="/" className="flex items-center cursor-pointer block">
            <Image
              src="/__APX Web Logo MEP.svg"
              alt="APX Mechanical & Electrical Logo"
              width={280}
              height={94}
              className="h-28 sm:h-32 w-auto"
            />
          </Link>
        </div>
        <div className="footer-hint flex items-center gap-2 pb-3 opacity-70">
          <span className="text-xs uppercase tracking-wide">Hover to expand</span>
          <ChevronUp className="w-4 h-4 footer-chevron" />
        </div>
      </div>

      {/* Expandable content: visible on footer hover */}
      <div className="footer-expand">
        <div className="container mx-auto w-full max-w-7xl px-6 py-12 pt-16 lg:px-8">
          <div className="grid w-full min-w-0 grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-12">
            {/* Company Info */}
            <div className="min-w-0 space-y-6">
              <p className="text-gray-400 leading-relaxed">
                We deliver mechanical, electrical and building services to London and the Home Counties. From design and installation to maintenance and compliance.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our experienced engineers provide HVAC, electrical systems, plumbing and integrated MEP solutions for commercial, education, healthcare and industrial sectors.
              </p>
              <div className="flex space-x-6">
                <Facebook className="h-6 w-6 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Services */}
            <div className="min-w-0 space-y-6">
              <h4 className="text-xl font-semibold">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/services" className="relative group hover:text-white transition-colors text-sm cursor-pointer pb-1">All services<span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: 'white' }}></span></Link></li>
                <li><Link href="/services/project-management" className="relative group hover:text-white transition-colors text-sm cursor-pointer pb-1">M&amp;E design &amp; build<span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: 'white' }}></span></Link></li>
                <li><Link href="/services/bms-control-wiring" className="relative group hover:text-white transition-colors text-sm cursor-pointer pb-1">BMS &amp; control wiring<span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: 'white' }}></span></Link></li>
                <li><Link href="/services/maintenance-support" className="relative group hover:text-white transition-colors text-sm cursor-pointer pb-1">Maintenance &amp; support<span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: 'white' }}></span></Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="min-w-0 space-y-6">
              <h4 className="text-xl font-semibold">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="relative group hover:text-white transition-colors text-sm cursor-pointer pb-1">About Us<span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: 'white' }}></span></Link></li>
                <li><Link href="/contact" className="relative group hover:text-white transition-colors text-sm cursor-pointer pb-1">Contact<span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: 'white' }}></span></Link></li>
                <li><Link href="/projects" className="relative group hover:text-white transition-colors text-sm cursor-pointer pb-1">Our Projects<span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: 'white' }}></span></Link></li>
                <li><Link href="/accreditations" className="relative group hover:text-white transition-colors text-sm cursor-pointer pb-1">Accreditations<span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: 'white' }}></span></Link></li>
                <li><Link href="/careers" className="relative group hover:text-white transition-colors text-sm cursor-pointer pb-1">Careers<span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: 'white' }}></span></Link></li>
                {MEP_SHOW_NEWS_AND_ARTICLES ? (
                  <li>
                    <Link href="/news" className="relative group hover:text-white transition-colors text-sm cursor-pointer pb-1">
                      News
                      <span
                        className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                        style={{ backgroundColor: "white" }}
                      />
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="min-w-0 space-y-6">
              <h4 className="text-xl font-semibold">Contact Info</h4>
              <div className="space-y-4 text-gray-400">
                <a href="tel:02045685986" className="flex min-w-0 items-center gap-4 hover:text-white transition-colors cursor-pointer" style={{ cursor: "pointer !important" }}>
                  <Phone className="h-6 w-6 flex-shrink-0" />
                  <span className="min-w-0 text-sm">020 4568 5986</span>
                </a>
                <a href="mailto:enquiries@apx-mep.co.uk" className="flex min-w-0 items-center gap-4 hover:text-white transition-colors cursor-pointer" style={{ cursor: "pointer !important" }}>
                  <Mail className="h-6 w-6 flex-shrink-0" />
                  <span className="min-w-0 break-words text-sm">enquiries@apx-mep.co.uk</span>
                </a>
                <a href="https://maps.google.com/?q=365-369+Bexley+Road+Northumberland+Heath+Erith+Kent+DA8+3EZ" target="_blank" rel="noopener noreferrer" className="flex min-w-0 items-start gap-4 hover:text-white transition-colors cursor-pointer" style={{ cursor: "pointer !important" }}>
                  <MapPin className="mt-1 h-6 w-6 flex-shrink-0" />
                  <div className="min-w-0 text-sm text-left">
                    <p>365-369 Bexley Road</p>
                    <p>Northumberland Heath, Erith</p>
                    <p>Kent, DA8 3EZ</p>
                  </div>
                </a>
              </div>
              <MepAccreditationFooterStrip />
            </div>
          </div>

          <div className="mt-16 border-t border-t-white/10 pt-8 text-gray-500">
            <div className="flex w-full flex-col items-center justify-center gap-4 text-center sm:gap-5 md:flex-row md:items-center md:justify-between md:gap-6 md:text-left">
              <p className="w-full min-w-0 text-balance text-sm md:max-w-[min(100%,40rem)] md:text-left">
                <span className="text-inherit">&copy; 2026 APX. All rights reserved.</span>
                <span className="text-inherit" aria-hidden>
                  {" "}|{" "}
                </span>
                <Link
                  href="/privacy"
                  className="relative group inline hover:text-white transition-colors cursor-pointer pb-1"
                >
                  Privacy Policy
                  <span
                    className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundColor: "white" }}
                    aria-hidden
                  />
                  <span
                    className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundColor: "white" }}
                    aria-hidden
                  />
                </Link>
                <span className="text-inherit" aria-hidden>
                  {" "}|{" "}
                </span>
                <Link
                  href="/terms"
                  className="relative group inline hover:text-white transition-colors cursor-pointer pb-1"
                >
                  Terms of Service
                  <span
                    className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundColor: "white" }}
                    aria-hidden
                  />
                  <span
                    className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundColor: "white" }}
                    aria-hidden
                  />
                </Link>
              </p>
              <span className="w-full shrink-0 text-center text-xs opacity-80 md:w-auto md:self-center md:text-right">
                <span className="hover:opacity-100 transition-opacity duration-200">Designed by </span>
                <a href="https://www.leveldesignagency.com/" target="_blank" rel="noopener noreferrer" className="footer-level-credit font-bold opacity-80 hover:opacity-100 transition-colors duration-200">LEVEL DESIGN AGENCY LTD</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </div>
  )
}
