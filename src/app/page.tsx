"use client"

import { Button } from "@/components/ui/Button"
import { Shield, Wrench, Zap, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Clock, ChevronRight, ChevronLeft } from "lucide-react"
import { useEffect, useState, useMemo } from "react"
import { Montserrat, Poppins, Oswald, Anton, Bebas_Neue, Barlow, Urbanist, Work_Sans, Plus_Jakarta_Sans, Manrope, Inter, Rubik, Outfit } from 'next/font/google'
import { GlobalStyles, lightTheme, darkTheme } from '@/components/ThemeToggle'
import { useTheme } from '@/contexts/ThemeContext'

// Font trials: bold display titles + readable sans paragraphs (module scope as required by next/font)
const montserrat = Montserrat({ subsets: ['latin'], weight: ['800'], display: 'swap' })
const poppins = Poppins({ subsets: ['latin'], weight: ['800'], display: 'swap' })
const oswald = Oswald({ subsets: ['latin'], weight: ['700'], display: 'swap' })
const anton = Anton({ subsets: ['latin'], weight: '400', display: 'swap' })
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400', display: 'swap' })
const barlow = Barlow({ subsets: ['latin'], weight: ['800'], display: 'swap' })
const urbanist = Urbanist({ subsets: ['latin'], weight: ['800'], display: 'swap' })
const workSans = Work_Sans({ subsets: ['latin'], weight: ['800'], display: 'swap' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['800'], display: 'swap' })
const rubik = Rubik({ subsets: ['latin'], weight: ['800'], display: 'swap' })
const outfit = Outfit({ subsets: ['latin'], weight: ['800'], display: 'swap' })

// Paragraph/display companion (stand-in for Madefor Display)
const paragraphSans = Manrope({ subsets: ['latin'], weight: ['400'], display: 'swap' })
const paragraphAlt = Inter({ subsets: ['latin'], weight: ['400'], display: 'swap' })

const fontOptions = [
  { name: 'Montserrat 800', className: montserrat.className },
  { name: 'Poppins 800', className: poppins.className },
  { name: 'Oswald 700', className: oswald.className },
  { name: 'Anton', className: anton.className },
  { name: 'Bebas Neue', className: bebasNeue.className },
  { name: 'Barlow 800', className: barlow.className },
  { name: 'Urbanist 800', className: urbanist.className },
  { name: 'Work Sans 800', className: workSans.className },
  { name: 'Plus Jakarta Sans 800', className: plusJakarta.className },
  { name: 'Rubik 800', className: rubik.className },
  { name: 'Outfit 800', className: outfit.className }
]

export default function Home() {
  const { theme } = useTheme()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  
  const [activeSection, setActiveSection] = useState(0)
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [heroAnimation, setHeroAnimation] = useState({
    videoVisible: false,
    titleVisible: false,
    subtitleVisible: false,
    statsVisible: false,
    clientsVisible: false
  })
  
  
  const sections = useMemo(() => [
    { id: 'hero', name: 'Home' },
    { id: 'services', name: 'Services' },
    { id: 'about', name: 'About' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'contact', name: 'Contact' }
  ], [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Office Manager, TechCorp",
      text: "APX MEP provided exceptional mechanical services for our office building. Professional, reliable, and competitively priced.",
      rating: 5
    },
    {
      name: "Michael Chen", 
      role: "Facilities Director, Manufacturing Ltd",
      text: "Outstanding electrical work for our new facility. The team was efficient, clean, and completed everything on time.",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Property Manager, Retail Group", 
      text: "The plumbing system installation was flawless. Great communication throughout the project and excellent after-sales support.",
      rating: 5
    }
  ]

  // Hero animation sequence
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setHeroAnimation(prev => ({ ...prev, videoVisible: true }))
    }, 100)

    const timer2 = setTimeout(() => {
      setHeroAnimation(prev => ({ ...prev, titleVisible: true }))
    }, 2000)

    const timer3 = setTimeout(() => {
      setHeroAnimation(prev => ({ ...prev, subtitleVisible: true }))
    }, 2500)

    const timer4 = setTimeout(() => {
      setHeroAnimation(prev => ({ ...prev, statsVisible: true }))
    }, 3000)

    const timer5 = setTimeout(() => {
      setHeroAnimation(prev => ({ ...prev, clientsVisible: true }))
    }, 5000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [])

  useEffect(() => {
    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            updateActiveSection(sectionId)
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of section is visible
        rootMargin: '-20% 0px -20% 0px' // Add some margin to avoid multiple triggers
      }
    )

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    // Pointer tracking for service cards
    const setupPointerTracking = () => {
      const cards = document.querySelectorAll('.service-card')
      
      const centerOfElement = ($el: Element) => {
        const rect = $el.getBoundingClientRect()
        return [rect.width / 2, rect.height / 2]
      }

      const pointerPositionRelativeToElement = ($el: Element, e: MouseEvent) => {
        const pos = [e.clientX, e.clientY]
        const rect = $el.getBoundingClientRect()
        const x = pos[0] - rect.left
        const y = pos[1] - rect.top
        const px = Math.min(Math.max((100 / rect.width) * x, 0), 100)
        const py = Math.min(Math.max((100 / rect.height) * y, 0), 100)
        return { pixels: [x, y], percent: [px, py] }
      }

      const angleFromPointerEvent = ($el: Element, dx: number, dy: number) => {
        let angleRadians = 0
        let angleDegrees = 0
        if (dx !== 0 || dy !== 0) {
          angleRadians = Math.atan2(dy, dx)
          angleDegrees = angleRadians * (180 / Math.PI) + 90
          if (angleDegrees < 0) {
            angleDegrees += 360
          }
        }
        return angleDegrees
      }

      const distanceFromCenter = ($card: Element, x: number, y: number) => {
        const [cx, cy] = centerOfElement($card)
        return [x - cx, y - cy]
      }

      const closenessToEdge = ($card: Element, x: number, y: number) => {
        const [cx, cy] = centerOfElement($card)
        const [dx, dy] = distanceFromCenter($card, x, y)
        let k_x = Infinity
        let k_y = Infinity
        if (dx !== 0) {
          k_x = cx / Math.abs(dx)
        }
        if (dy !== 0) {
          k_y = cy / Math.abs(dy)
        }
        return Math.min(Math.max(1 / Math.min(k_x, k_y), 0), 1)
      }

      const cardUpdate = (e: Event) => {
        const mouseEvent = e as MouseEvent
        const $card = e.currentTarget as Element
        const position = pointerPositionRelativeToElement($card, mouseEvent)
        const [px, py] = position.pixels
        const [perx, pery] = position.percent
        const [dx, dy] = distanceFromCenter($card, px, py)
        const edge = closenessToEdge($card, px, py)
        const angle = angleFromPointerEvent($card, dx, dy)

        ;($card as HTMLElement).style.setProperty('--pointer-x', `${perx.toFixed(3)}%`)
        ;($card as HTMLElement).style.setProperty('--pointer-y', `${pery.toFixed(3)}%`)
        ;($card as HTMLElement).style.setProperty('--pointer-°', `${angle.toFixed(3)}deg`)
        ;($card as HTMLElement).style.setProperty('--pointer-d', `${(edge * 100).toFixed(3)}`)
        
        $card.classList.remove('animating')
      }

      cards.forEach(card => {
        card.addEventListener('pointermove', cardUpdate as EventListener)
        card.addEventListener('mousemove', cardUpdate as EventListener) // Fallback for mouse events
      })

      return () => {
        cards.forEach(card => {
          card.removeEventListener('pointermove', cardUpdate as EventListener)
          card.removeEventListener('mousemove', cardUpdate as EventListener)
        })
      }
    }


    
    const cleanup = setupPointerTracking()
    
    return () => {
      observer.disconnect()
      cleanup()
    }
  }, [])

  // Testimonial carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const updateActiveSection = (sectionId: string) => {
    const sectionIndex = sections.findIndex(section => section.id === sectionId)
    if (sectionIndex !== -1) {
      setActiveSection(sectionIndex)
    }
  }

  const scrollToSection = (sectionId: string) => {
    // Update the active section immediately
    updateActiveSection(sectionId)
    
    // Find the section element
    const element = document.getElementById(sectionId)
    
    if (element) {
      // For hero section, scroll to top
      if (sectionId === 'hero') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        return
      }
      
      // For other sections, use scrollIntoView
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  return (
    <>
      <GlobalStyles theme={themeMode} />
      <div className="min-h-screen overflow-x-hidden">
      

      {/* Hero Section - Full Page Height */}
      <section id="hero" className="relative h-[90vh] overflow-visible">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            heroAnimation.videoVisible ? 'opacity-30' : 'opacity-0'
          }`}
          preload="auto"
        >
          <source src="/APX MEP INTRO.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Full Screen Gradient Overlay - Transparent top 2/3, Black bottom 1/3 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10" style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 66%, black 100%)'
        }}></div>
        
        {/* Content */}
        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-20">
          <div className="max-w-4xl">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-white text-left transition-opacity duration-1000 ${outfit.className} ${
                  heroAnimation.titleVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  Engineered solutions for energy efficiency and sustainability
                </h1>
                <p className={`text-xl text-gray-300 mb-8 text-left transition-opacity duration-1000 ${
                  heroAnimation.subtitleVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  As a trusted partner, we guide industries in their transition to sustainable energy.
                </p>
              </div>
              
              {/* Stats Section - Shrunk */}
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 transition-opacity duration-1000 ${
                heroAnimation.statsVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="text-left">
                  <div className="text-xl font-bold text-white mb-1">250+</div>
                  <div className="text-gray-300 text-xs max-w-48">Industrial projects delivered across three continents.</div>
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-white mb-1">99.2%</div>
                  <div className="text-gray-300 text-xs max-w-48">Uptime in monitored energy systems.</div>
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-white mb-1">20+</div>
                  <div className="text-gray-300 text-xs max-w-48">Years of engineering expertise in industrial efficiency.</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Client Logos - Part of Hero Section */}
          <div className={`mt-16 relative overflow-hidden transition-opacity duration-1000 ${
            heroAnimation.clientsVisible ? 'opacity-100' : 'opacity-0'
          }`}
               style={{
                 maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)'
               }}>
            
            <div className="flex space-x-12 animate-scroll" style={{ width: 'max-content' }}>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 1</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 2</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 3</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 4</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 5</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 6</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 7</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 8</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 9</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 10</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 1</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 2</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 3</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 4</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 5</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 6</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 7</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 8</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 9</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Client 10</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Custom Scroll Indicator */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
          <div className="flex flex-col items-center max-h-[200px] relative">
            {/* Progress line overlay */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-white/30" 
                 style={{ height: `${(sections.length - 1) * 60}px` }}>
              <div 
                className="w-px bg-white transition-all duration-500 ease-out"
                style={{ 
                  height: `${(activeSection / (sections.length - 1)) * 100}%`,
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                }}
              ></div>
      </div>

            {sections.map((section, index) => {
              const isActive = activeSection === index
              return (
                <div key={section.id} className="flex flex-col items-center relative z-10">
                  {/* Square indicator */}
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-3 h-3 border border-white transition-all duration-300 hover:scale-110 ${
                      isActive
                        ? 'bg-white' 
                        : 'bg-transparent hover:bg-white/20'
                    }`}
                    title={section.name}
                  />
                
                  {/* Faded vertical line connecting to next square */}
                  {index < sections.length - 1 && (
                    <div className="w-px h-12 bg-gray-600/30"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        
      </section>

      {/* Section Separator */}
      <div className="w-full h-px bg-black dark:bg-white"></div>

      {/* Services Section */}
      <section id="services" className="py-32 relative overflow-visible">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {/* Top Section - Title and Description */}
            <div>
              <h2 className={`text-5xl font-bold mb-6 text-left uppercase ${outfit.className}`}>APX MEP SERVICES</h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                Comprehensive mechanical, electrical, and plumbing solutions tailored to your business needs. 
                We provide end-to-end MEP services with certified professionals and cutting-edge technology.
              </p>
            </div>
            
            {/* Service Cards - 4 Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Mechanical Services */}
              <div className="service-card text-white">
                <span className="glow"></span>
                
                <div className={`relative z-10 ${outfit.className}`}>
                  <h4 className="text-3xl md:text-4xl font-extrabold tracking-wide leading-none text-white mb-3 uppercase">Mechanical Services</h4>
                </div>
                <div className="space-y-2 relative z-10">
                  <div className="text-gray-300 text-sm">• HVAC System Installation & Maintenance</div>
                  <div className="text-gray-300 text-sm">• Boiler & Heating Systems</div>
                  <div className="text-gray-300 text-sm">• Air Conditioning & Ventilation</div>
                  <div className="text-gray-300 text-sm">• Mechanical Equipment Repair</div>
                  <div className="text-gray-300 text-sm">• Energy Efficiency Solutions</div>
                </div>
              </div>
              
              {/* Electrical Services */}
              <div className="service-card text-white">
                <span className="glow"></span>
                
                <div className={`relative z-10 ${outfit.className}`}>
                  <h4 className="text-3xl md:text-4xl font-extrabold tracking-wide leading-none text-white mb-3 uppercase">Electrical Services</h4>
                </div>
                <div className="space-y-2 relative z-10">
                  <div className="text-gray-300 text-sm">• Electrical Installation & Wiring</div>
                  <div className="text-gray-300 text-sm">• Power Distribution Systems</div>
                  <div className="text-gray-300 text-sm">• Emergency Lighting & Fire Alarms</div>
                  <div className="text-gray-300 text-sm">• Electrical Testing & Inspection</div>
                  <div className="text-gray-300 text-sm">• Smart Building Solutions</div>
                </div>
              </div>
              
              {/* Plumbing Services */}
              <div className="service-card text-white">
                <span className="glow"></span>
                
                <div className={`relative z-10 ${outfit.className}`}>
                  <h4 className="text-3xl md:text-4xl font-extrabold tracking-wide leading-none text-white mb-3 uppercase">Plumbing Services</h4>
                </div>
                <div className="space-y-2 relative z-10">
                  <div className="text-gray-300 text-sm">• Water Supply & Distribution</div>
                  <div className="text-gray-300 text-sm">• Drainage & Waste Systems</div>
                  <div className="text-gray-300 text-sm">• Water Treatment & Filtration</div>
                  <div className="text-gray-300 text-sm">• Emergency Plumbing Repairs</div>
                  <div className="text-gray-300 text-sm">• Water Conservation Systems</div>
                </div>
              </div>
              
              {/* Maintenance Services */}
              <div className="service-card text-white">
                <span className="glow"></span>
                
                <div className={`relative z-10 ${outfit.className}`}>
                  <h4 className="text-3xl md:text-4xl font-extrabold tracking-wide leading-none text-white mb-3 uppercase">Maintenance & Support</h4>
                </div>
                <div className="space-y-2 relative z-10">
                  <div className="text-gray-300 text-sm">• Preventive Maintenance Programs</div>
                  <div className="text-gray-300 text-sm">• 24/7 Emergency Response</div>
                  <div className="text-gray-300 text-sm">• System Upgrades & Modernization</div>
                  <div className="text-gray-300 text-sm">• Compliance & Certification</div>
                  <div className="text-gray-300 text-sm">• Remote Monitoring Services</div>
                </div>
              </div>
            </div>
            
            {/* Benefits Section - 3 Columns Below Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <CheckCircle className="h-8 w-8 text-white" />
                <div className="max-w-xs">
                  <h3 className={`text-lg font-semibold mb-2 ${outfit.className}`}>Expert Installation</h3>
                  <p className="text-gray-400">Professional installation of all MEP systems with precision and care</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <CheckCircle className="h-8 w-8 text-white" />
                <div className="max-w-xs">
                  <h3 className={`text-lg font-semibold mb-2 ${outfit.className}`}>24/7 Maintenance</h3>
                  <p className="text-gray-400">Round-the-clock maintenance and emergency repair services</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <CheckCircle className="h-8 w-8 text-white" />
                <div className="max-w-xs">
                  <h3 className={`text-lg font-semibold mb-2 ${outfit.className}`}>Quality Assurance</h3>
                  <p className="text-gray-400">All work backed by comprehensive warranties and quality guarantees</p>
                </div>
              </div>
            </div>

            {/* Typography Playground - Sans Serif Display Trials */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold uppercase">Font Options (Sans-Serif)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fontOptions.map((f) => (
                  <div key={f.name} className="p-6 rounded-lg bg-white/5 ring-1 ring-white/10">
                    <div className={`${f.className} text-left`}>
                      <div className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">ENGINEERED SOLUTIONS</div>
                    </div>
                    <div className={`${paragraphSans.className} text-left`}>
                      <p className="text-sm text-gray-300 leading-6">
                        As a trusted partner, we guide industries in their transition to sustainable energy.
                      </p>
                    </div>
                    <div className={`mt-3 text-xs text-gray-400 ${paragraphAlt.className}`}>{f.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="w-full h-px bg-black dark:bg-white"></div>

      {/* Why Choose Us Section */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {/* Top Section - Title and Description */}
            <div>
              <h2 className={`text-5xl font-bold mb-6 text-left uppercase ${outfit.className}`}>Why Choose APX MEP?</h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                With over 20 years of experience in mechanical, electrical, and plumbing services, 
                we've built a reputation for excellence, reliability, and customer satisfaction across the UK.
              </p>
            </div>
            
            {/* Benefits Cards - 3 Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Certified MEP Engineers */}
              <div className="service-card text-white">
                <span className="glow"></span>
                
                <div className="flex items-center space-x-3 mb-4 relative z-10">
                  <CheckCircle className="h-6 w-6 text-white" />
                  <h4 className={`text-lg font-semibold text-white ${outfit.className}`}>Certified MEP Engineers</h4>
                  </div>
                <div className="space-y-2 relative z-10">
                  <div className="text-gray-300 text-sm">• Fully qualified professionals</div>
                  <div className="text-gray-300 text-sm">• Certified in MEP systems</div>
                  <div className="text-gray-300 text-sm">• Regular training programs</div>
                  <div className="text-gray-300 text-sm">• Industry expertise</div>
                </div>
              </div>
              
              {/* 24/7 Emergency Service */}
              <div className="service-card text-white">
                <span className="glow"></span>
                
                <div className="flex items-center space-x-3 mb-4 relative z-10">
                  <Clock className="h-6 w-6 text-white" />
                  <h4 className={`text-lg font-semibold text-white ${outfit.className}`}>24/7 Emergency Service</h4>
                  </div>
                <div className="space-y-2 relative z-10">
                  <div className="text-gray-300 text-sm">• Round-the-clock MEP support</div>
                  <div className="text-gray-300 text-sm">• Rapid response times</div>
                  <div className="text-gray-300 text-sm">• Emergency repairs</div>
                  <div className="text-gray-300 text-sm">• When you need it most</div>
                </div>
              </div>
              
              {/* Quality Guarantee */}
              <div className="service-card text-white">
                <span className="glow"></span>
                
                <div className="flex items-center space-x-3 mb-4 relative z-10">
                  <Shield className="h-6 w-6 text-white" />
                  <h4 className={`text-lg font-semibold text-white ${outfit.className}`}>Quality Guarantee</h4>
                  </div>
                <div className="space-y-2 relative z-10">
                  <div className="text-gray-300 text-sm">• Comprehensive warranties</div>
                  <div className="text-gray-300 text-sm">• All MEP work covered</div>
                  <div className="text-gray-300 text-sm">• Quality assurance</div>
                  <div className="text-gray-300 text-sm">• Reliable service</div>
                </div>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-white text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              
              <div className="text-white text-center">
                <div className="text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-gray-300">Customer Satisfaction</div>
              </div>
              
              <div className="text-white text-center">
                <div className="text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="w-full h-px bg-black dark:bg-white"></div>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {/* Top Section - Title and Description */}
            <div className="text-left">
              <h2 className={`text-5xl font-bold mb-6 uppercase ${outfit.className}`}>What Our Clients Say</h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                Don't just take our word for it - hear from our satisfied clients about their experience with APX MEP.
              </p>
            </div>
            
            {/* Testimonial Carousel - Single View */}
            <div className="max-w-4xl mx-auto">
              <div className="service-card text-white relative overflow-hidden">
                <span className="glow"></span>
                
                <div className="flex items-center space-x-2 mb-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-white fill-current" />
                ))}
              </div>
                
                <div className="space-y-3 relative z-10">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="pt-2">
                    <div className="font-semibold text-white text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-400">{testimonials[currentTestimonial].role}</div>
                  </div>
            </div>
            
                {/* Navigation dots */}
                <div className="flex justify-center space-x-2 mt-6 relative z-10">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-white' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="w-full h-px bg-black dark:bg-white"></div>

      {/* CTA Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {/* Top Section - Title and Description */}
            <div className="text-left">
              <h2 className={`text-5xl font-bold mb-6 uppercase ${outfit.className}`}>Ready to Get Started?</h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                Contact us today for a free consultation and quote. Our expert team is ready to help with your MEP needs.
              </p>
            </div>
            
            {/* CTA Buttons - Compact style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-4xl mx-auto">
              <Button size="sm" className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-base font-medium rounded-md">
                <div className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Get Free Quote
                </div>
              </Button>
              
              <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-6 py-3 text-base font-medium rounded-md">
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
