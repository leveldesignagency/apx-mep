"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/Button"
import { Phone, Mail, Menu, X, ArrowRight, Check, Facebook, Instagram, Linkedin, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useTheme } from '@/contexts/ThemeContext'
import { isMepCapabilityPath } from "@/lib/mepCapabilityPaths"
import { MEP_SERVICE_HUB_ITEMS } from "@/lib/mep-service-hub"

export default function Header() {
  const pathname = usePathname()
  const { theme } = useTheme()
  /** Normalise so `/services` and `/services/` are the hub; only `/services/...` subpaths use transparent overlay bar */
  const path = pathname.replace(/\/$/, "") || "/"
  const isCareersPage = path === "/careers"
  const isHomePage = path === "/"
  const isAboutPage = path === "/about"
  const isServicesHub = path === "/services"
  const isMepCapabilityPage = isMepCapabilityPath(path)
  const isServiceSubpage = path.startsWith("/services/")
  /** Case study hero — same idea as FS: transparent bar over full-bleed image, not solid black */
  const isProjectDetailPage = path.startsWith("/projects/")
  /** Service-line pages + project detail — capability hub & projects index use solid black */
  const isTransparentHeaderPage = (isServiceSubpage && !isMepCapabilityPage) || isProjectDetailPage
  /**
   * Absolute top of .site-shell (see layout) — hero/main start at y=0 so imagery sits behind the bar.
   * Not `fixed`: the bar scrolls away with the page because the shell is the positioning context.
   */
  const headerLayoutClass =
    "absolute top-0 left-0 right-0 z-[100] w-full max-w-[100vw] pointer-events-auto"
  const headerSolidBlack = isServicesHub || isMepCapabilityPage || path === "/projects"
  const isServicesPage = pathname.startsWith("/services") || pathname.startsWith("/projects")
  const isDark = theme === 'dark'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'phone' | 'email' } | null>(null)
  const [contactTabReady, setContactTabReady] = useState(false)
  const servicesCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openServices = () => {
    if (servicesCloseTimeoutRef.current) {
      clearTimeout(servicesCloseTimeoutRef.current)
      servicesCloseTimeoutRef.current = null
    }
    setIsServicesOpen(true)
  }
  const closeServices = () => {
    servicesCloseTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 280)
  }

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [isMenuOpen])

  const copyToClipboard = async (text: string, type: 'phone' | 'email') => {
    try {
      await navigator.clipboard.writeText(text)
      setToast({ message: type === 'phone' ? 'Phone copied' : 'Email copied', type })
      setTimeout(() => setToast(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const handleContactClick = (type: 'phone' | 'email', value: string) => {
    // Below lg breakpoint: open tel/mailto instead of copy
    if (window.innerWidth < 1024) {
      if (type === 'phone') {
        window.open(`tel:${value}`, '_self')
      } else {
        window.open(`mailto:${value}`, '_self')
      }
    } else {
      // Desktop: copy to clipboard
      copyToClipboard(value, type)
    }
  }

  if (isCareersPage) {
    return null
  }

  return (
    <header
      className={`site-header ${headerLayoutClass} ${headerSolidBlack ? "bg-black header--solid-black" : "bg-transparent"} ${isHomePage || isTransparentHeaderPage || isAboutPage ? "header-bg-transparent-page" : ""} ${isServicesPage ? "header--no-animate" : ""}`}
      style={{ backgroundColor: headerSolidBlack ? "#000000" : "transparent" }}
    >
      {/* ========== SAVED VERSION (original header – not rendered) ========== */}
      {false && (
        <>
          <nav className="w-full px-6 pt-7 pb-3">
            <div className="flex items-center justify-between h-11">
              <Link href="/" className="flex items-center relative overflow-hidden w-[500px] h-18 cursor-pointer">
                <div className="hidden md:block absolute left-0 top-2 h-16 w-full overflow-hidden flex items-center justify-center" style={{ clipPath: 'inset(0 0px 0 92px)' }}>
                  <Image src="/__APX Web Logo FS Banner.svg" alt="APX Fire & Security Banner" width={550} height={55} className="h-14 w-auto animate-banner-in" style={{ transform: 'translateX(-100%)' }} />
                </div>
                <Image src="/__APX Web Logo FS.svg" alt="APX Fire & Security Logo" width={200} height={67} className="h-18 w-auto relative z-10 md:z-10 z-0" />
                <div className="md:hidden absolute left-0 top-0 h-16 w-full flex items-center justify-center">
                  <Image src="/__APX Web Logo FS Banner.svg" alt="APX Fire & Security Banner" width={200} height={60} className="h-16 w-auto opacity-80 transform translate-x-2" />
                </div>
              </Link>
              <div className="header-nav-in flex items-center">
          <div
            className="header-pill hidden md:flex items-center rounded-tl-2xl rounded-br-2xl px-8 py-1.5 space-x-8"
            style={{
              backgroundColor: 'black',
              border: '1px solid white',
            }}
          >
            <div className="relative">
              <div 
                className="nav-menu-item relative text-sm font-medium leading-relaxed cursor-pointer group uppercase opacity-100 hover:opacity-100"
                style={{ color: 'white' }}
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
              Services
                <span 
                  className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: 'white' }}
                ></span>
                <span 
                  className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: 'white' }}
                ></span>
              </div>
              
              {/* Services Dropdown – border on outer so bottom border stays visible during accordion collapse */}
              <div
                className="absolute z-40 overflow-hidden rounded-br-2xl"
                style={{
                  top: 'calc(100% + 1.2rem)',
                  left: '-32.5px',
                  width: '264.5px',
                  maxHeight: isServicesOpen ? '520px' : '0',
                  pointerEvents: isServicesOpen ? 'auto' : 'none',
                  transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  backgroundColor: 'black',
                  border: '1px solid white',
                  borderTop: 'none',
                }}
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <div className="py-0 rounded-br-2xl">
                  {[
                    { href: "/services/project-management", label: "Design & build" },
                    { href: "/services/electrical", label: "Domestic & new build" },
                    { href: "/services/mechanical-engineering", label: "Commercial & industrial" },
                    { href: "/services/building-services", label: "Refurb & fit-out" },
                    { href: "/services/electrical-systems", label: "Inspection & testing" },
                    { href: "/services/energy-efficiency", label: "Solar PV" },
                    { href: "/services/security-systems", label: "Access & entry" },
                    { href: "/services/bms-control-wiring", label: "BMS & controls" },
                    { href: "/services/fire-life-safety", label: "Security, IRS & fire" },
                  ].map(({ href, label }, i) => (
                    <a
                      key={href}
                      href={href}
                      className={`dropdown-item relative group block px-4 py-2 text-sm leading-relaxed cursor-pointer uppercase ${i < 8 ? 'border-b' : ''}`}
                      style={{ color: 'white', borderBottomColor: i < 8 ? 'rgba(255, 255, 255, 0.2)' : undefined }}
                      onClick={() => {
                        setIsServicesOpen(false)
                        if (servicesCloseTimeoutRef.current) {
                          clearTimeout(servicesCloseTimeoutRef.current)
                          servicesCloseTimeoutRef.current = null
                        }
                      }}
                    >
                      <span className="absolute top-0 left-0 w-full h-0.5 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: 'white' }} />
                      <span className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: 'white' }} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-4 w-[0.75px] vertical-separator flex-shrink-0"></div>
            <Link href="/about" className="nav-menu-item relative text-sm font-medium leading-relaxed cursor-pointer group uppercase opacity-100 hover:opacity-100" style={{ color: 'white' }}>
              About
              <span 
                className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: 'white' }}
              ></span>
              <span 
                className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: 'white' }}
              ></span>
            </Link>
            <div className="h-4 w-[0.75px] vertical-separator flex-shrink-0"></div>
            <Link href="/projects" className="nav-menu-item relative text-sm font-medium leading-relaxed cursor-pointer group uppercase opacity-100 hover:opacity-100" style={{ color: 'white' }}>
              Projects
              <span 
                className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: 'white' }}
              ></span>
              <span 
                className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: 'white' }}
              ></span>
            </Link>
            <div className="h-4 w-[0.75px] vertical-separator flex-shrink-0"></div>
            <Link href="/contact" className="nav-menu-item relative text-sm font-medium leading-relaxed cursor-pointer group uppercase opacity-100 hover:opacity-100" style={{ color: 'white' }}>
              Contact
              <span 
                className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: 'white' }}
              ></span>
              <span 
                className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: 'white' }}
              ></span>
            </Link>
            <a href={process.env.NEXT_PUBLIC_APX_FS_URL || 'http://localhost:3003'} className="group relative header-pill-apx-link" style={{ color: 'white' }}>
              <div className="flex items-center justify-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] w-8 h-8 min-w-8 min-h-8 group-hover:w-52 group-hover:backdrop-blur-sm rounded-full border-2 pulse-glow" style={{ borderColor: 'white' }}>
                <div className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex-shrink-0 absolute left-0 top-0" style={{ color: 'white' }}>
                  <ArrowRight className="h-3.5 w-3.5 transition-all duration-500 group-hover:opacity-0 group-hover:rotate-180 shrink-0" style={{ color: 'white', stroke: 'white' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 group-hover:delay-200"></div>
                  <span className="apx-switch-label text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 group-hover:delay-300 text-disappear relative z-10" style={{ color: 'white' }}>SWITCH TO APX FS</span>
                </div>
              </div>
            </a>
            <div className="flex items-center gap-4 pl-1">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity" aria-label="Facebook">
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            style={{ color: theme === 'dark' ? 'white' : 'black' }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-t-[0.75px] pt-6">
            <div className="flex flex-col space-y-4">
              <Link href="/services" className="nav-menu-item relative text-lg font-medium group uppercase opacity-100 hover:opacity-100" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                Services
                <span className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: theme === 'dark' ? 'white' : 'black' }}></span>
                <span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: theme === 'dark' ? 'white' : 'black' }}></span>
              </Link>
              <Link href="/about" className="nav-menu-item relative text-lg font-medium group uppercase opacity-100 hover:opacity-100" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                About
                <span className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: theme === 'dark' ? 'white' : 'black' }}></span>
                <span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: theme === 'dark' ? 'white' : 'black' }}></span>
              </Link>
              <Link href="/projects" className="nav-menu-item relative text-lg font-medium group uppercase opacity-100 hover:opacity-100" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                Projects
                <span className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: theme === 'dark' ? 'white' : 'black' }}></span>
                <span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: theme === 'dark' ? 'white' : 'black' }}></span>
              </Link>
              <Link href="/contact" className="nav-menu-item relative text-lg font-medium group uppercase opacity-100 hover:opacity-100" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                Contact
                <span className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: theme === 'dark' ? 'white' : 'black' }}></span>
                <span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: theme === 'dark' ? 'white' : 'black' }}></span>
              </Link>
              <div className="pt-4">
                <a href={process.env.NEXT_PUBLIC_APX_FS_URL || 'http://localhost:3003'} className="group relative">
                  <div className="flex items-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-52 w-10 group-hover:backdrop-blur-sm rounded-full border pulse-glow">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex-shrink-0">
                      <ArrowRight className="h-4 w-4 transition-all duration-500 group-hover:opacity-0 group-hover:rotate-180" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 group-hover:delay-200"></div>
                      <span className="apx-switch-label text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 group-hover:delay-300 text-disappear relative z-10">SWITCH TO APX FS</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
        </>
      )}

      <nav className="relative z-10 w-full px-4 pt-4 pb-3 sm:px-6 lg:px-6 lg:pt-5 lg:pb-4">
        <div className="relative flex w-full min-h-[4.75rem] items-center lg:min-h-[6.5rem]">
          {/* Expanding nav bar — desktop (lg+) only; tablet/phone use compact header + hamburger */}
          <div className="pointer-events-none absolute left-[8rem] right-0 top-1/2 z-0 hidden h-16 -translate-y-1/2 overflow-hidden lg:block">
            <div
              className="header-bar-expand h-full w-full rounded-br-[30px] border-2"
              style={{
                /* Dark tint + blur — transparent + blur alone reads white over html:not(.dark) body */
                backgroundColor: isHomePage || isTransparentHeaderPage || isAboutPage ? "rgba(0,0,0,0.42)" : "#000",
                boxSizing: "border-box",
                borderColor: "#fff",
                ...(isHomePage || isTransparentHeaderPage || isAboutPage
                  ? { backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" as const }
                  : {}),
              }}
            />
          </div>
          <div className="relative z-10 flex h-14 min-h-[3.5rem] w-full items-center justify-center px-2 sm:h-16 sm:px-4 lg:h-16 lg:min-h-0 lg:justify-between lg:px-6">
            {/* Logo: drop-in animation lives on inner span so transform does not override mobile centre (-translate-x-1/2) on the link */}
            <Link
              href="/"
              className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 shrink-0 cursor-pointer items-center lg:static lg:translate-x-0 lg:translate-y-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="header-logo-drop-in inline-block">
                <span className="header-logo-hover-wrap relative inline-block overflow-hidden">
                  <Image
                    src="/__APX Web Logo MEP.svg"
                    alt="APX Mechanical & Electrical Logo"
                    width={334}
                    height={112}
                    className="relative z-10 h-20 w-auto sm:h-24 lg:h-28"
                  />
                </span>
              </span>
            </Link>
            {/* FIRE & SECURITY: absolute, same as MEP – own stack so alignment isn’t affected by switch button */}
            {/* Same as MEP: top-1/2 with NO transform – tagline top edge at row center, box hangs down */}
            <div
              className="header-mech-security-in absolute left-[12.25rem] top-1/2 z-0 hidden w-fit items-center rounded-br-2xl py-1 pl-7 pr-3.5 lg:flex"
              style={{
                backgroundColor: "black",
                border: "2px solid white",
              }}
            >
              <span className="inline-block text-base font-semibold tracking-wide uppercase whitespace-nowrap !text-white" style={{ fontFamily: 'var(--font-menu)', color: '#ffffff' }}>
                MECHANICAL & ELECTRICAL
              </span>
            </div>
            <div className="relative z-10 hidden flex-shrink-0 items-center space-x-8 text-white lg:flex [&_.nav-menu-item]:!text-white [&_a]:!text-white [&_svg]:stroke-white">
              <div className="relative header-nav-item-in flex items-center" style={{ animationDelay: '2.9s' }}>
                <Link
                  href="/services"
                  className="nav-menu-item relative text-sm font-medium leading-relaxed cursor-pointer group uppercase opacity-100 hover:opacity-100"
                  style={{ color: '#fff' }}
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                >
                  Services
                  <span className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: '#fff' }} />
                  <span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: '#fff' }} />
                </Link>
                <div
                  className="absolute z-40 overflow-hidden rounded-br-2xl"
                  style={{
                    top: 'calc(100% + 1.2rem)',
                    left: '-32.5px',
                    width: '264.5px',
                    maxHeight: isServicesOpen ? '560px' : '0',
                    pointerEvents: isServicesOpen ? 'auto' : 'none',
                    transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    backgroundColor: 'black',
                    border: '1px solid white',
                    borderTop: 'none',
                  }}
                  onMouseEnter={openServices}
                  onMouseLeave={() => closeServices()}
                >
                  <div className="py-0 rounded-br-2xl">
                    {/* Service-line pages (not core capability pillars — those are homepage-only) */}
                    {MEP_SERVICE_HUB_ITEMS.map(({ href, navLabel }, i) => (
                      <a
                        key={href}
                        href={href}
                        className={`dropdown-item relative group block px-4 py-2 text-sm leading-relaxed cursor-pointer uppercase ${i < MEP_SERVICE_HUB_ITEMS.length - 1 ? 'border-b' : ''}`}
                        style={{ color: '#fff', borderBottomColor: i < MEP_SERVICE_HUB_ITEMS.length - 1 ? 'rgba(255,255,255,0.2)' : undefined }}
                        onClick={() => {
                          setIsServicesOpen(false)
                          if (servicesCloseTimeoutRef.current) {
                            clearTimeout(servicesCloseTimeoutRef.current)
                            servicesCloseTimeoutRef.current = null
                          }
                        }}
                      >
                        <span className="absolute top-0 left-0 w-full h-0.5 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: '#fff' }} />
                        <span className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: '#fff' }} />
                        {navLabel}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-5 w-px flex-shrink-0 header-nav-item-in bg-white/90" style={{ animationDelay: '2.98s' }} aria-hidden />
              <Link href="/about" className="nav-menu-item relative text-sm font-medium leading-relaxed cursor-pointer group uppercase header-nav-item-in" style={{ color: '#fff', animationDelay: '3.06s' }}>
                About
                <span className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: '#fff' }} />
                <span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: '#fff' }} />
              </Link>
              <div className="h-5 w-px flex-shrink-0 header-nav-item-in bg-white/90" style={{ animationDelay: '3.1s' }} aria-hidden />
              <Link href="/methodology" className="nav-menu-item relative text-sm font-medium leading-relaxed cursor-pointer group uppercase header-nav-item-in" style={{ color: '#fff', animationDelay: '3.14s' }}>
                Methodology
                <span className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: '#fff' }} />
                <span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: '#fff' }} />
              </Link>
              <div className="h-5 w-px flex-shrink-0 header-nav-item-in bg-white/90" style={{ animationDelay: '3.18s' }} aria-hidden />
              <Link href="/projects" className="nav-menu-item relative text-sm font-medium leading-relaxed cursor-pointer group uppercase header-nav-item-in" style={{ color: '#fff', animationDelay: '3.22s' }}>
                Projects
                <span className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: '#fff' }} />
                <span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: '#fff' }} />
              </Link>
              <div className="h-5 w-px flex-shrink-0 header-nav-item-in bg-white/90" style={{ animationDelay: '3.3s' }} aria-hidden />
              <Link href="/contact" className="nav-menu-item relative text-sm font-medium leading-relaxed cursor-pointer group uppercase header-nav-item-in" style={{ color: '#fff', animationDelay: '3.38s' }}>
                Contact
                <span className="absolute top-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: '#fff' }} />
                <span className="absolute bottom-0 left-1/2 w-full h-0.5 transform -translate-x-1/2 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: '#fff' }} />
              </Link>
              <a href={process.env.NEXT_PUBLIC_APX_FS_URL || 'http://localhost:3003'} className="group relative header-pill-apx-link header-nav-item-in" style={{ color: 'white', animationDelay: '3.46s' }}>
                <div className="flex items-center justify-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] w-8 h-8 min-w-8 min-h-8 group-hover:w-52 group-hover:backdrop-blur-sm rounded-full border-2 pulse-glow" style={{ borderColor: 'white' }}>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex-shrink-0 absolute left-0 top-0" style={{ color: 'white' }}>
                    <ArrowRight className="h-3.5 w-3.5 transition-all duration-500 group-hover:opacity-0 group-hover:rotate-180 shrink-0" style={{ color: 'white', stroke: 'white' }} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 group-hover:delay-200" />
                    <span className="apx-switch-label text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 group-hover:delay-300 text-disappear relative z-10" style={{ color: 'white' }}>SWITCH TO APX FS</span>
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4 pl-1 header-nav-item-in" style={{ animationDelay: '3.54s' }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity" aria-label="Facebook">
                  <Facebook className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
                  <Instagram className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 p-2 sm:right-4 lg:hidden"
            style={{ color: 'white' }}
            aria-expanded={isMenuOpen}
            aria-controls="mep-mobile-nav"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div
            id="mep-mobile-nav"
            className="mt-4 border-t border-t-white/20 pb-6 pt-6 lg:hidden"
            style={{ backgroundColor: 'black' }}
          >
            <div className="flex flex-col space-y-4 px-1">
              <Link href="/services" onClick={() => setIsMenuOpen(false)} className="nav-menu-item relative text-lg font-medium group uppercase opacity-100 hover:opacity-100" style={{ color: 'white' }}>Services</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="nav-menu-item relative text-lg font-medium group uppercase opacity-100 hover:opacity-100" style={{ color: 'white' }}>About</Link>
              <Link href="/methodology" onClick={() => setIsMenuOpen(false)} className="nav-menu-item relative text-lg font-medium group uppercase opacity-100 hover:opacity-100" style={{ color: 'white' }}>Methodology</Link>
              <Link href="/projects" onClick={() => setIsMenuOpen(false)} className="nav-menu-item relative text-lg font-medium group uppercase opacity-100 hover:opacity-100" style={{ color: 'white' }}>Projects</Link>
              <Link href="/accreditations" onClick={() => setIsMenuOpen(false)} className="nav-menu-item relative text-lg font-medium group uppercase opacity-100 hover:opacity-100" style={{ color: 'white' }}>Accreditations</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="nav-menu-item relative text-lg font-medium group uppercase opacity-100 hover:opacity-100" style={{ color: 'white' }}>Contact</Link>
              <div className="flex flex-col gap-3 border-t border-white/15 pt-4">
                <a href="tel:02045685986" className="text-sm font-medium text-white/90" onClick={() => setIsMenuOpen(false)}>020 4568 5986</a>
                <a href="mailto:enquiries@apx-mep.co.uk" className="text-sm font-medium text-white/90" onClick={() => setIsMenuOpen(false)}>enquiries@apx-mep.co.uk</a>
              </div>
              <div className="pt-2">
                <a href={process.env.NEXT_PUBLIC_APX_FS_URL || 'http://localhost:3003'} className="group relative" onClick={() => setIsMenuOpen(false)}>
                  <div className="flex items-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-52 w-10 group-hover:backdrop-blur-sm rounded-full border border-white pulse-glow">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex-shrink-0">
                      <ArrowRight className="h-4 w-4 transition-all duration-500 group-hover:opacity-0 group-hover:rotate-180" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <span className="apx-switch-label text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 group-hover:delay-300 text-disappear relative z-10 text-white">SWITCH TO APX FS</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Contact tab: desktop only — phone/tablet use hamburger contact links */}
      <div className={`absolute top-full right-[54px] hidden lg:block ${contactTabReady ? 'z-20' : 'z-0'}`}>
        <div className="relative">
          <div
            className="header-contact-tab--dark header-contact-tab-drop-in rounded-t-none rounded-b-xl border-2 border-t-0 px-4 py-2 flex items-center space-x-3"
            style={{
              borderColor: "#fff",
              backgroundColor: "#000",
            }}
            onAnimationEnd={(e) => {
              if (e.animationName === 'header-contact-tab-drop-in') setContactTabReady(true)
            }}
          >
            <button
              type="button"
              onClick={() => handleContactClick('phone', '020 4568 5986')}
              className="header-contact-btn relative flex items-center space-x-1.5 px-2.5 py-1.5 rounded-full cursor-pointer"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="text-xs">020 4568 5986</span>
            </button>
            <button
              type="button"
              onClick={() => handleContactClick('email', 'enquiries@apx-mep.co.uk')}
              className="header-contact-btn relative flex items-center space-x-1.5 px-2.5 py-1.5 rounded-full cursor-pointer"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="text-xs">enquiries@apx-mep.co.uk</span>
            </button>
          </div>
          {toast && (
            <div
              role="status"
              aria-live="polite"
              className="absolute left-1/2 z-[110] -translate-x-1/2 whitespace-nowrap rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-black shadow-md"
              style={{
                /* Tab uses translateY(-36px); layout box is still full height — anchor toast to visual bottom + ~5px */
                top: "calc(100% - 36px + 0.3125rem)",
              }}
            >
              {toast.message}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
