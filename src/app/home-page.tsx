"use client"

import Link from "next/link"
import {
  Shield,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  Cog,
  Zap,
  Wind,
  Leaf,
  Wrench,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react"
import { useEffect, useState, useMemo, useCallback, useRef } from "react"
import { GlobalStyles, lightTheme, darkTheme } from '@/components/ThemeToggle'
import { useTheme } from '@/contexts/ThemeContext'
import { CountUp } from '@/components/ui/CountUp'
import { CustomPillButton } from '@/components/ui/CustomPillButton'
import { FormSubmitButton } from '@/components/ui/FormSubmitButton'
import { AboutIntroSection } from "@/components/home/AboutIntroSection"
import { MepWhatWeOfferSection } from "@/components/home/MepWhatWeOfferSection"
import { MEP_CORE_CAPABILITIES } from "@/data/mepCoreCapabilities"
import { FS_SERVICE_SHIMMER_CARD } from "@/lib/fsServicePageCards"
import HeroVideoBackground from "@/components/HeroVideoBackground"

const SERVICES_BENEFITS: {
  title: string
  description: string
  Icon: LucideIcon
  animationDelay: string
}[] = [
  {
    title: "Expert Installation",
    description: "Professional installation of all MEP systems with precision and care",
    Icon: Wrench,
    animationDelay: "0.1s",
  },
  {
    title: "24/7 Maintenance",
    description: "Round-the-clock maintenance and emergency repair services",
    Icon: Clock,
    animationDelay: "0.25s",
  },
  {
    title: "Quality Assurance",
    description: "All work backed by comprehensive warranties and quality guarantees",
    Icon: BadgeCheck,
    animationDelay: "0.4s",
  },
]

const WHY_CHOOSE_CARDS: { Icon: LucideIcon; title: string; bullets: string[] }[] = [
  {
    Icon: CheckCircle,
    title: "NSI Gold Accredited",
    bullets: ["BS EN ISO 9001:2015", "BAFE Fire Safety Registered", "UKAS Quality Management", "FIA Member"],
  },
  {
    Icon: Clock,
    title: "24/7 Emergency Service",
    bullets: [
      "Round-the-clock security support",
      "Rapid response times",
      "Monitored alarm response",
      "When you need it most",
    ],
  },
  {
    Icon: Shield,
    title: "Quality Guarantee",
    bullets: [
      "Constructionline Gold Member",
      "All work to NSI Gold standards",
      "Quality assurance",
      "Reliable service",
    ],
  },
]

export default function Home() {
  const { theme } = useTheme()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  
  const [activeSection, setActiveSection] = useState(0)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [testimonialsPaused, setTestimonialsPaused] = useState(false)
  const [activeMepIndex, setActiveMepIndex] = useState(0)
  const [activeNewsIndex, setActiveNewsIndex] = useState(0)
  const [newsProgress, setNewsProgress] = useState(0)
  const newsProgressRef = useRef(0)
  const newsIndexRef = useRef(0)
  const mepListRef = useRef<HTMLUListElement>(null)
  const projectsScrollRef = useRef<HTMLDivElement>(null)
  const projectsSectionRef = useRef<HTMLElement>(null)
  const projectsLabelRef = useRef<HTMLSpanElement>(null)

  const [heroAnimation, setHeroAnimation] = useState({
    videoVisible: false,
    titleVisible: false,
    subtitleVisible: false,
    statsVisible: false,
    clientsVisible: false
  })
  const clientLogoPaths = useMemo(() => {
    const base = ['_-01', '_-02', '_-03', '_-04', '_-05', '_-06', '_-07', '_-08', '_-09', '_-10', '_-11']
    const paths = base.map((name) => `/Clients/${name}.png`)
    const minPerRow = 16
    const repeated: string[] = []
    while (repeated.length < minPerRow) repeated.push(...paths)
    return repeated.slice(0, minPerRow)
  }, [])

  const sections = useMemo(() => [
    { id: 'hero', name: 'Home' },
    { id: 'core-capabilities', name: 'Capabilities' },
    { id: 'about-intro', name: 'Our story' },
    { id: 'services', name: 'Services' },
    { id: 'logo-marquee', name: 'Clients' },
    { id: 'projects', name: 'Projects' },
    { id: 'why-mep', name: 'News & Articles' },
    { id: 'about', name: 'Why Choose Us' },
    { id: 'accreditations', name: 'Accreditations' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'contact', name: 'Contact' }
  ], [])

  const mepCards = useMemo(() => [
    { id: 'retail', title: 'Retail & High Street', description: 'Electrical installations, HVAC and building services for single and multi-site retail. Lighting, power distribution and environmental systems.', href: '/services', icon: Cog, image: '/cctv%20systems.jpg' },
    { id: 'corporate', title: 'Corporate & Offices', description: 'Full MEP design and installation for commercial buildings. HVAC, electrical distribution, data cabling and compliance.', href: '/services', icon: Zap, image: '/access%20control%20systems.jpg' },
    { id: 'education', title: 'Education & Schools', description: 'Mechanical, electrical and plumbing for schools and universities. Heating, ventilation, fire systems and DfE compliance.', href: '/services', icon: Wind, image: '/home-fire-alarm-system-installer-800x533.jpg' },
    { id: 'healthcare', title: 'Healthcare & Care Homes', description: 'MEP systems for hospitals and care homes. Medical gases, nurse call, HVAC and electrical to healthcare standards.', href: '/services', icon: Leaf, image: '/intruder%20alarm%20systems.jpg' },
    { id: 'industrial', title: 'Industrial & Warehousing', description: 'Electrical, mechanical and plumbing for logistics and manufacturing. Power, lighting, heating and process systems.', href: '/services', icon: Wrench, image: '/cctv%20systems.jpg' },
  ], [])

  const newsArticles = useMemo(() => [
    { id: 'a1', title: 'Random Article 1', description: 'Placeholder description for article 1.', href: '#', icon: ArrowRight, image: '/cctv%20systems.jpg' },
    { id: 'a2', title: 'Random Article 2', description: 'Placeholder description for article 2.', href: '#', icon: ArrowRight, image: '/access%20control%20systems.jpg' },
    { id: 'a3', title: 'Random Article 3', description: 'Placeholder description for article 3.', href: '#', icon: ArrowRight, image: '/home-fire-alarm-system-installer-800x533.jpg' },
    { id: 'a4', title: 'Random Article 4', description: 'Placeholder description for article 4.', href: '#', icon: ArrowRight, image: '/intruder%20alarm%20systems.jpg' },
    { id: 'a5', title: 'Random Article 5', description: 'Placeholder description for article 5.', href: '#', icon: ArrowRight, image: '/video%20door%20entry%20systems.jpg' },
    { id: 'a6', title: 'Random Article 6', description: 'Placeholder description for article 6.', href: '#', icon: ArrowRight, image: '/cctv%20systems.jpg' },
  ], [])

  const projects = useMemo(() => [
    { image: '/cctv%20systems.jpg', stat: '250+', description: 'Electrical and HVAC installation for commercial premises', quote: 'APX MEP delivered our electrical and mechanical systems on time and to a high standard.', href: '/projects', title: 'PROJECT 1' },
    { image: '/home-fire-alarm-system-installer-800x533.jpg', stat: '99%', description: 'Mechanical systems design and commissioning', quote: 'From design to commissioning, the team was professional and the systems have been fault-free.', href: '/projects', title: 'PROJECT 2' },
    { image: '/intruder%20alarm%20systems.jpg', stat: '24/7', description: 'Plumbing and building services upgrade', quote: 'We rely on APX MEP for ongoing maintenance and emergency call-outs. Always responsive.', href: '/projects', title: 'PROJECT 3' },
    { image: '/access%20control%20systems.jpg', stat: 'Multi-site', description: 'Multi-site electrical and mechanical integration', quote: 'Having a single MEP partner gave us confidence. The installation exceeded expectations.', href: '/projects', title: 'PROJECT 4' },
    { image: '/home-fire-alarm-system-installer-800x533.jpg', stat: '500+', description: 'Compliance and condition reporting', quote: 'Thorough and clear reporting. We use APX MEP for all our building services compliance.', href: '/projects', title: 'PROJECT 5' },
    { image: '/video%20door%20entry%20systems.jpg', stat: '15', description: 'HVAC and electrical system upgrade', quote: 'Their continued investment in quality and training shows in every project.', href: '/projects', title: 'PROJECT 6' },
    { image: '/cctv%20systems.jpg', stat: '98%', description: 'Full MEP commissioning and handover', quote: 'Commissioning was smooth and documentation was spot-on. No call-backs.', href: '/projects', title: 'PROJECT 7' },
  ], [])

  const scrollProjects = useCallback((dir: 'left' | 'right') => {
    const el = projectsScrollRef.current
    if (!el || !el.firstElementChild) return
    const cardWidth = (el.firstElementChild as HTMLElement).offsetWidth
    const gap = 24
    const step = cardWidth + gap
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' })
  }, [])

  // Projects scroll lock: when section is in view, vertical wheel moves horizontal strip (deltaY → scrollLeft). No internal state; boundary checks each time. Responsive and stable.
  useEffect(() => {
    const section = projectsSectionRef.current
    const strip = projectsScrollRef.current
    if (!section || !strip) return

    // Zone: lock when "Projects" label is near viewport top (~80px). Fallback to section top if label ref missing.
    const inZone = () => {
      const label = projectsLabelRef.current
      if (label) {
        const r = label.getBoundingClientRect()
        return r.top <= 80 && r.bottom > 0
      }
      const rect = section.getBoundingClientRect()
      return rect.top <= 80 && rect.bottom > 200
    }

    const onWheel = (e: WheelEvent) => {
      if (!inZone()) return

      const maxScroll = strip.scrollWidth - strip.clientWidth
      const atStart = strip.scrollLeft <= 5
      const atEnd = maxScroll <= 0 || strip.scrollLeft >= maxScroll - 5

      // Convert vertical scroll to horizontal: use deltaY, scale up so it feels responsive, cap per event to avoid one-flick overshoot
      const scale = 2.2
      let amount = e.deltaY * scale
      amount = Math.sign(amount) * Math.min(400, Math.abs(amount))

      if (e.deltaY > 0) {
        if (atEnd) return // let page scroll down
        e.preventDefault()
        strip.scrollLeft = Math.min(strip.scrollLeft + amount, maxScroll)
      } else {
        if (atStart) return // let page scroll up
        e.preventDefault()
        strip.scrollLeft = Math.max(strip.scrollLeft + amount, 0)
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    return () => window.removeEventListener("wheel", onWheel)
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Facilities Manager, TechCorp",
      text: "APX MEP delivered our office fit-out electrical and HVAC to a high standard. Professional, on time and great ongoing support.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Estates Director, Manufacturing Ltd",
      text: "Outstanding mechanical and electrical installation for our new facility. The team was efficient and everything was commissioned to the highest standards.",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Property Manager, Retail Group",
      text: "Our MEP systems were designed and installed flawlessly. Clear communication throughout and excellent after-sales and maintenance support.",
      rating: 5,
    },
  ]

  const testimonialPrev = useCallback(() => {
    setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  const testimonialNext = useCallback(() => {
    setCurrentTestimonial((p) => (p + 1) % testimonials.length)
  }, [testimonials.length])

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

  // News: buffer fills over 5s, then advances to next article
  useEffect(() => {
    const total = Math.min(newsArticles.length, 3)
    if (total === 0) return
    newsIndexRef.current = 0
    newsProgressRef.current = 0
    setActiveNewsIndex(0)
    setNewsProgress(0)
    const id = setInterval(() => {
      newsProgressRef.current += 0.01
      if (newsProgressRef.current >= 1) {
        newsProgressRef.current = 0
        newsIndexRef.current = (newsIndexRef.current + 1) % total
        setActiveNewsIndex(newsIndexRef.current)
      }
      setNewsProgress(newsProgressRef.current)
    }, 50)
    return () => clearInterval(id)
  }, [newsArticles.length])

  const updateActiveSection = useCallback((sectionId: string) => {
    const sectionIndex = sections.findIndex(section => section.id === sectionId)
    if (sectionIndex !== -1) {
      setActiveSection(sectionIndex)
    }
  }, [sections])

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
  }, [sections, updateActiveSection])

  // Testimonial carousel — pauses while pointer is over the section
  useEffect(() => {
    if (testimonialsPaused) return
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length, testimonialsPaused])

  // Force dark mode styling for form
  useEffect(() => {
    const applyDarkModeStyles = () => {
      const form = document.getElementById('quote-form');
      if (!form) return;

      // Use the same theme detection as header
      const isDarkMode = theme === 'dark';
      
      // Apply proper styling based on theme
      if (isDarkMode) {
        // Form container
        form.style.backgroundColor = '#000000';
        form.style.border = '2px solid #ffffff';
        
        // Title
        const title = form.querySelector('h3');
        if (title) {
          title.style.color = '#ffffff';
        }
        
        // Labels
        const labels = form.querySelectorAll('label');
        labels.forEach((label: any) => {
          label.style.color = '#ffffff';
        });
        
        // Text inputs and textarea
        const textInputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
        textInputs.forEach((input: any) => {
          input.style.backgroundColor = '#000000';
          input.style.border = '2px solid #ffffff';
          input.style.color = '#ffffff';
          input.style.fontSize = '1.0625rem';
          input.style.fontWeight = '600';
          input.style.outline = 'none';
          input.style.boxShadow = 'none';
          input.style.setProperty('--tw-ring-color', 'transparent', 'important');
        });

        const serviceDropdown = form.querySelector('.quote-form-dropdown') as HTMLElement | null;
        if (serviceDropdown) {
          serviceDropdown.style.backgroundColor = '#000000';
          serviceDropdown.style.fontSize = '1.0625rem';
          serviceDropdown.style.fontWeight = '600';
        }

        // Select dropdown - custom styling
        const select = form.querySelector('select');
        if (select) {
          select.style.backgroundColor = '#000000';
          select.style.border = '2px solid #ffffff';
          select.style.color = '#ffffff';
          select.style.outline = 'none';
          select.style.boxShadow = 'none';
          select.style.appearance = 'none';
          select.style.backgroundImage = 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'3\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6,9 12,15 18,9\'%3e%3c/polyline%3e%3c/svg%3e")';
          select.style.backgroundRepeat = 'no-repeat';
          select.style.backgroundPosition = 'right 12px center';
          select.style.backgroundSize = '20px';
          select.style.paddingRight = '50px';
        }
        
        // Preferred contact radios: globals.css (#contact #quote-form)

        // Submit button
        const button = form.querySelector('button');
        if (button) {
          button.style.backgroundColor = '#000000';
          button.style.border = '2px solid #ffffff';
          button.style.color = '#ffffff';
        }
      } else {
        // Light mode - reset all custom styling
        form.style.backgroundColor = '#ffffff';
        form.style.border = '1px solid #000000';
        
        // Title
        const title = form.querySelector('h3');
        if (title) {
          title.style.color = '#000000';
        }
        
        // Labels
        const labels = form.querySelectorAll('label');
        labels.forEach((label: any) => {
          label.style.color = '#000000';
        });
        
        // Text inputs and textarea
        const textInputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
        textInputs.forEach((input: any) => {
          input.style.backgroundColor = '#ffffff';
          input.style.border = '1px solid #000000';
          input.style.color = '#000000';
          input.style.fontSize = '';
          input.style.fontWeight = '';
          input.style.outline = 'none';
          input.style.boxShadow = 'none';
        });

        const serviceDropdownLight = form.querySelector('.quote-form-dropdown') as HTMLElement | null;
        if (serviceDropdownLight) {
          serviceDropdownLight.style.fontSize = '';
          serviceDropdownLight.style.fontWeight = '';
        }

        // Select dropdown - reset to default browser styling
        const select = form.querySelector('select');
        if (select) {
          select.style.backgroundColor = '#ffffff';
          select.style.border = '1px solid #000000';
          select.style.color = '#000000';
          select.style.outline = 'none';
          select.style.boxShadow = 'none';
          select.style.appearance = 'auto'; // Reset to browser default
          select.style.backgroundImage = 'none';
          select.style.backgroundRepeat = 'initial';
          select.style.backgroundPosition = 'initial';
          select.style.backgroundSize = 'initial';
          select.style.paddingRight = 'initial';
        }
        
        // Radio buttons - reset to default browser styling
        const radios = form.querySelectorAll('input[type="radio"]');
        radios.forEach((radio: any) => {
          radio.style.appearance = 'auto'; // Reset to browser default
          radio.style.width = 'initial';
          radio.style.height = 'initial';
          radio.style.border = 'initial';
          radio.style.borderRadius = 'initial';
          radio.style.backgroundColor = 'initial';
          radio.style.outline = 'initial';
          radio.style.boxShadow = 'initial';
          radio.style.cursor = 'initial';
        });
        
        // Submit button
        const button = form.querySelector('button');
        if (button) {
          button.style.backgroundColor = '#ffffff';
          button.style.border = '1px solid #000000';
          button.style.color = '#000000';
        }
      }
    };

    // Apply styles immediately and with delay to ensure form exists
    setTimeout(applyDarkModeStyles, 100);
    setTimeout(applyDarkModeStyles, 500);
    setTimeout(applyDarkModeStyles, 1000);
    
    // Also apply on window load
    window.addEventListener('load', applyDarkModeStyles);
    
    // Manual dark mode toggle for debugging
    window.toggleFormDarkMode = () => {
      const form = document.getElementById('quote-form');
      if (!form) return;
      
      const isCurrentlyDark = form.style.backgroundColor === 'rgb(0, 0, 0)';
      
      if (isCurrentlyDark) {
        // Switch to light mode
        form.style.backgroundColor = '#ffffff';
        form.style.border = '1px solid #000000';
        // ... add all light mode styles
      } else {
        // Switch to dark mode
        form.style.backgroundColor = '#000000';
        form.style.border = '2px solid #ffffff';
        // ... add all dark mode styles
      }
    };
    
    // Watch for theme changes
    const observer = new MutationObserver(applyDarkModeStyles);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [theme]);

  // MEP cards: CodePen exact – set grid columns and data-active, then resync --article-width after layout
  useEffect(() => {
    const list = mepListRef.current
    if (!list) return
    const items = list.querySelectorAll('li')
    const cols = mepCards.map((_, i) => (i === activeMepIndex ? '10fr' : '1fr')).join(' ')
    list.style.setProperty('grid-template-columns', cols)
    const resync = () => {
      const w = Math.max(...[...items].map((el) => (el as HTMLElement).offsetWidth))
      list.style.setProperty('--article-width', String(w))
    }
    requestAnimationFrame(() => requestAnimationFrame(resync))
  }, [activeMepIndex, mepCards.length])

  useEffect(() => {
    const list = mepListRef.current
    if (!list) return
    const items = list.querySelectorAll('li')
    const resync = () => {
      const w = Math.max(...[...items].map((el) => (el as HTMLElement).offsetWidth))
      list.style.setProperty('--article-width', String(w))
    }
    window.addEventListener('resize', resync)
    resync()
    return () => window.removeEventListener('resize', resync)
  }, [])

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isServicesDropdownOpen && !target.closest('.services-dropdown-container')) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesDropdownOpen]);

  const scrollToSection = (sectionId: string) => {
    // Update the active section immediately
    updateActiveSection(sectionId)
    
    const element = document.getElementById(sectionId)
    if (!element) return

    // Hero: scroll to top of page so hero is in view
    if (sectionId === 'hero') {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    // Other sections: center in view
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <>
      <GlobalStyles theme={themeMode} />
      <div className="min-h-screen overflow-x-clip relative z-10">
      
      {/* Hero Section – background image scrolls with this section (not viewport-fixed) */}
      <section id="hero" className="relative h-screen overflow-visible bg-transparent flex flex-col" style={{ background: 'transparent' }}>
        <HeroVideoBackground />
        {/* Content */}
        <div className="container mx-auto px-6 flex-1 flex flex-col justify-start pt-52 pb-40 relative z-20">
          <div className="space-y-4">
            {/* Title + paragraph: white text on hero image */}
            <div className="max-w-2xl">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 text-left transition-opacity duration-1000 font-title text-white ${
                heroAnimation.titleVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                APX MEP delivers mechanical, electrical and building services.
              </h1>
              <p className={`text-base sm:text-lg md:text-xl font-normal mb-4 md:mb-5 text-left tracking-tight transition-opacity duration-1000 max-w-lg text-white ${
                heroAnimation.subtitleVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                We specialise in the design, installation and maintenance of HVAC, electrical systems and plumbing across London and the Home Counties.
              </p>

              {/* Hero CTAs – side by side */}
              <div className={`flex flex-wrap items-center gap-4 sm:gap-6 pt-2 transition-opacity duration-1000 ${
                heroAnimation.subtitleVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <CustomPillButton href="/contact" size="md">
                  Get a free quote
                </CustomPillButton>
                <Link
                  href="/contact"
                  className="text-white font-normal text-base underline underline-offset-4 hover:text-white/90 transition-colors"
                >
                  Question? get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hero accreditations – NSI, BAFE, Constructionline, FIA (public/accreditations mono/White) */}
        <div className="container mx-auto px-6 pb-8 mb-24 sm:mb-32 relative z-10 -mt-16 sm:-mt-20">
          <div className="w-1/2 mx-auto h-px bg-white/25 mb-6" aria-hidden />
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 max-w-6xl mx-auto">
            {[
              { src: '/accreditations%20mono/White/NSI-02.svg', alt: 'NSI Gold' },
              { src: '/accreditations%20mono/White/BAFE-02.svg', alt: 'BAFE' },
              { src: '/accreditations%20mono/White/ConstructionOnline-02.svg', alt: 'Constructionline' },
              { src: '/accreditations%20mono/White/FIA-02.svg', alt: 'FIA' }
            ].map((acc) => (
              <div key={acc.alt} className="flex items-center justify-center h-14 sm:h-16 w-auto max-w-[150px] sm:max-w-[180px]" aria-hidden>
                <img src={acc.src} alt={acc.alt} className="h-full w-auto object-contain opacity-90" />
              </div>
            ))}
          </div>
        </div>
        
      </section>

      {/* Core capabilities – black section blended from hero before Our Story */}
      <section
        id="core-capabilities"
        className="relative bg-black py-20 lg:py-24 overflow-hidden"
      >
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-28 sm:h-36"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.82) 52%, rgba(0,0,0,1) 100%)",
          }}
          aria-hidden
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span
              className="section-label text-white/80 font-bold"
              style={{ fontFamily: "var(--font-menu), sans-serif" }}
            >
              Core capabilities
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mt-3"
              style={{ fontFamily: "var(--font-menu), sans-serif" }}
            >
              What we deliver
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
              From M&amp;E design and build to domestic and commercial installation, testing, solar PV, access, BMS, and fire and security interfaces — APX Mechanical &amp; Electrical supports projects across London and the South East.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-y-14 gap-x-6 md:grid-cols-3 md:gap-x-7 md:gap-y-16 lg:gap-x-8">
            {MEP_CORE_CAPABILITIES.map((cap) => {
              const CapIcon = cap.icon
              return (
                <div key={cap.title} className="flex h-full flex-col items-center">
                  <div
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-black shadow-[0_8px_28px_rgba(0,0,0,0.55)]"
                    aria-hidden
                  >
                    <CapIcon className="h-7 w-7 shrink-0 text-white/90" strokeWidth={1.5} />
                  </div>
                  <article
                    className={`${FS_SERVICE_SHIMMER_CARD} -mt-7 flex w-full min-w-0 flex-1 flex-col px-6 pb-6 pt-11 text-center md:min-h-[20rem] md:px-7 md:pb-7 md:pt-12`}
                  >
                    <h3
                      className="text-lg font-semibold leading-snug text-white md:text-xl"
                      style={{ fontFamily: "var(--font-menu), sans-serif" }}
                    >
                      {cap.title}
                    </h3>
                    <ul className="apx-capability-list mt-6 flex-1 text-center sm:mt-7">
                      {cap.bullets.map((line) => (
                        <li key={line} className="apx-capability-list__item">
                          {line}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex justify-end border-t border-white/10 pt-6 md:mt-8">
                      <CustomPillButton
                        href={cap.href}
                        size="sm"
                        className="pill-btn--corners-sm text-xs font-semibold uppercase tracking-normal [&_span.pill-text]:!font-semibold"
                      >
                        Learn more
                      </CustomPillButton>
                    </div>
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Wrapper so CCTV overlay can sit above both about and services */}
      <div className="relative">
        <AboutIntroSection />

        {/* Services Section – black bg, white text; 3×3 grid; tall cards; feathered image; white border */}
        <section id="services" className="section-spacing relative overflow-visible bg-black" style={{ backgroundColor: '#000000' }}>
        <div className="container mx-auto px-6 lg:px-8">
            <div className="section-content-gap space-y-16 text-white">
            <MepWhatWeOfferSection />
          </div>
        </div>
        </section>
      </div>

      {/* Benefits strip: Expert Installation, 24/7 Maintenance, Quality Assurance — same icon + shimmer card pattern as core capabilities */}
      <section id="services-benefits" className="section-spacing relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-14 gap-x-6 md:grid-cols-3 md:gap-x-7 md:gap-y-16 lg:gap-x-8">
            {SERVICES_BENEFITS.map(({ title, description, Icon, animationDelay }) => (
              <div
                key={title}
                className="services-benefit-card flex h-full flex-col items-center"
                style={{ animationDelay }}
              >
                <div className="services-benefit-icon-badge relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-black shadow-[0_8px_28px_rgba(0,0,0,0.55)]" aria-hidden>
                  <Icon className="h-7 w-7 shrink-0 text-white/90" strokeWidth={1.5} />
                </div>
                <article
                  className={`${FS_SERVICE_SHIMMER_CARD} services-benefit-article -mt-7 flex w-full min-w-0 flex-1 flex-col px-6 pb-6 pt-11 text-center md:px-7 md:pb-7 md:pt-12`}
                >
                  <h3
                    className="services-benefit-title text-lg font-semibold leading-snug text-white md:text-xl"
                    style={{ fontFamily: "var(--font-menu)" }}
                  >
                    {title}
                  </h3>
                  <p className="services-benefit-desc mt-6 text-center sm:mt-7">{description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo marquee – client PNGs from public/Clients, repeated for seamless scroll */}
      <section id="logo-marquee" className="logo-marquee-section py-12 overflow-hidden" aria-label="Trusted by leading brands">
        <div className="logo-marquee-wrapper">
          <div className="logo-marquee">
            <div className="logo-marquee__group">
              {clientLogoPaths.map((src, i) => (
                <img key={`a-${i}`} src={src} alt="" className="logo-marquee__img" aria-hidden />
              ))}
            </div>
            <div className="logo-marquee__group" aria-hidden="true">
              {clientLogoPaths.map((src, i) => (
                <img key={`b-${i}`} src={src} alt="" className="logo-marquee__img" />
              ))}
            </div>
          </div>
          <div className="logo-marquee logo-marquee--reverse">
            <div className="logo-marquee__group">
              {[...clientLogoPaths].reverse().map((src, i) => (
                <img key={`c-${i}`} src={src} alt="" className="logo-marquee__img" aria-hidden />
              ))}
            </div>
            <div className="logo-marquee__group" aria-hidden="true">
              {[...clientLogoPaths].reverse().map((src, i) => (
                <img key={`d-${i}`} src={src} alt="" className="logo-marquee__img" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects – scroll view with glass blur cards; strip bleeds full viewport, offset start; scroll lock: vertical scroll drives horizontal until end */}
      <section ref={projectsSectionRef} id="projects" className="bg-black py-20 lg:py-28 overflow-x-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-14 lg:mb-20">
            <div>
              <span ref={projectsLabelRef} className="section-label text-white/80">Projects</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white font-title leading-tight">
                Built to last — delivered with care.
              </h2>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => scrollProjects('left')}
                className="projects-nav-btn w-12 h-12 rounded-full border border-white bg-transparent text-white flex items-center justify-center transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black"
                aria-label="Previous projects"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() => scrollProjects('right')}
                className="projects-nav-btn w-12 h-12 rounded-full border border-white bg-transparent text-white flex items-center justify-center transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black"
                aria-label="Next projects"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        {/* Full viewport width scroll strip – bleeds off both sides; content offset from left via padding */}
        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <div
            ref={projectsScrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 pl-6 lg:pl-8 pr-6 lg:pr-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {projects.map((p, i) => (
            <Link
              key={i}
              href="/projects"
              className="projects-card group flex-shrink-0 flex flex-col rounded-xl overflow-hidden bg-black"
            >
              <div className="relative aspect-[3/4] min-h-[480px] projects-card__inner">
                {/* Project number – top centre, text only */}
                {/* Project number – top right, same font as titles */}
                {/* Project number – top right, same font as titles */}
                <span className="projects-card-number absolute top-6 right-6 z-10 text-5xl sm:text-6xl font-bold text-white tabular-nums drop-shadow-md" style={{ fontFamily: 'var(--font-title, "Outfit", sans-serif)' }} aria-hidden>{(i + 1).toString().padStart(2, '0')}</span>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
                <div className="projects-card-glass absolute inset-x-0 bottom-0 top-1/2 overflow-hidden p-6 pt-20 pb-5 pr-16 flex flex-col justify-end">
                  {/* Blurred image layer (same as card) – guarantees glass displacement without relying on backdrop-filter */}
                  <div
                    className="projects-card-glass-blur absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${p.image})` }}
                    aria-hidden
                  />
                  <div className="projects-card-glass-overlay absolute inset-0" aria-hidden />
                  <p className="text-xl sm:text-2xl font-bold leading-snug text-white mb-2 relative z-10">{p.title}</p>
                  <p className="text-white/90 text-base leading-relaxed mb-3 relative z-10">{p.description}</p>
                  <p className="text-white/80 text-base italic leading-relaxed mb-4 line-clamp-2 relative z-10">&ldquo;{p.quote}&rdquo;</p>
                  <span className="projects-card-arrow absolute bottom-5 right-6 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white transition-transform duration-200 group-hover:rotate-12" aria-hidden>
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </section>

      {/* News and Articles */}
      <section id="why-mep" className="news-section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="news-section__grid">
            <div className="news-section__left">
              <header className="news-section__header">
                <span className="news-section__label">News and Articles</span>
                <h2 className="news-section__title">Insights and updates</h2>
              </header>
              <nav aria-label="Articles">
                <ul className="news-section__list">
                  {newsArticles.slice(0, 3).map((article, i) => (
                    <li key={article.id} className={`news-section__item ${activeNewsIndex === i ? 'news-section__item--active' : ''}`}>
                      <span className={`news-section__link ${activeNewsIndex === i ? 'news-section__link--active' : ''}`}>
                        {article.title}
                      </span>
                      {activeNewsIndex === i && (
                        <span className="news-section__bar" style={{ width: `${newsProgress * 100}%` }} aria-hidden />
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="news-section__right">
              <div
                className="news-section__image"
                style={{ backgroundImage: `url('${newsArticles[activeNewsIndex]?.image || newsArticles[0].image}')` }}
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us – canted top and bottom */}
      <section id="about" className="section-spacing section-canted-top section-canted-bottom">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-content-gap space-y-16">
            {/* Top Section - Title and Description */}
            <div>
              <span className="section-label section-label--black">Why Choose Us</span>
              <h2 className="text-5xl font-bold text-left font-title section-title-gap leading-tight">Trust, quality, peace of mind.</h2>
              <p className="text-base text-gray-300 leading-relaxed max-w-xl section-intro-gap">
                From NSI-backed quality to Constructionline procurement confidence, we combine certified processes with hands-on delivery. Our teams are known on site for
                innovation, programme discipline and workmanship you can trust on major commercial and industrial projects across London and the Home Counties.
              </p>
            </div>
            
            {/* Benefits cards — icon badge + shimmer panel (same pattern as core capabilities) */}
            <div className="grid grid-cols-1 gap-y-12 gap-x-4 sm:grid-cols-2 sm:gap-x-5 md:grid-cols-3 md:gap-x-5 md:gap-y-14">
              {WHY_CHOOSE_CARDS.map(({ Icon, title, bullets }) => (
                <div key={title} className="flex flex-col items-center">
                  <div
                    className="why-choose-icon-badge relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-black shadow-[0_8px_28px_rgba(0,0,0,0.55)]"
                    aria-hidden
                  >
                    <Icon className="h-7 w-7 shrink-0 text-white/90" strokeWidth={1.5} />
                  </div>
                  <article
                    className="why-choose-card -mt-7 flex w-full min-w-0 flex-col rounded-tl-[1.75rem] rounded-br-[1.75rem] border-2 border-white bg-black px-6 pb-6 pt-11 text-center text-white md:px-7 md:pb-7 md:pt-12"
                  >
                    <h4 className="text-lg font-semibold leading-snug text-white md:text-xl font-title">{title}</h4>
                    <ul className="apx-capability-list mt-6 flex-1 text-center sm:mt-7">
                      {bullets.map((line) => (
                        <li key={line} className="apx-capability-list__item">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              ))}
            </div>
            
            {/* Stats Section – black text forced via data attribute + inline style */}
            <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 stats-section" data-stats-section>
              <div className="stats-card rounded-xl px-8 py-6 text-center animate-stats-in" style={{ animationDelay: '0ms' }}>
                <div className="stats-card-number text-4xl font-bold leading-none" data-stats-text style={{ color: '#000000' }}>
                  <CountUp target={500} suffix="+" duration={2000} />
                </div>
                <div className="stats-card-label text-sm mt-2" data-stats-text style={{ color: '#000000' }}>Projects Completed</div>
              </div>
              <div className="stats-card rounded-xl px-8 py-6 text-center animate-stats-in" style={{ animationDelay: '150ms' }}>
                <div className="stats-card-number text-4xl font-bold leading-none" data-stats-text style={{ color: '#000000' }}>
                  <CountUp target={99} suffix="%" duration={2000} />
                </div>
                <div className="stats-card-label text-sm mt-2" data-stats-text style={{ color: '#000000' }}>Customer Satisfaction</div>
              </div>
              <div className="stats-card rounded-xl px-8 py-6 text-center animate-stats-in" style={{ animationDelay: '300ms' }}>
                <div className="stats-card-number text-4xl font-bold leading-none" data-stats-text style={{ color: '#000000' }}>
                  <CountUp target={8} suffix="+" duration={2000} />
                </div>
                <div className="stats-card-label text-sm mt-2" data-stats-text style={{ color: '#000000' }}>Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations Section – same structure as FS (black bg, card + two columns) */}
      <section id="accreditations" className="section-spacing section-canted-top accreditations-section bg-black">
        <div className="container mx-auto px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left – copy and CTA (no card; sits on section background) */}
            <div className="pt-0 lg:pt-2">
              <h3 className="accreditations-heading text-2xl lg:text-3xl font-bold font-title mb-4 text-white">
                Trusted & Fully Qualified
              </h3>
              <p className="accreditations-text text-white/90 mb-4">
                We maintain independent certification and industry alignment so your mechanical and electrical packages are delivered with clear governance, competent engineers and documentation that stands up to handover and audit.
              </p>
              <p className="accreditations-text text-white/90 mb-6">
                Each accreditation page explains what the body requires, why it matters on your project, and how APX MEP applies those expectations from design intent through commissioning and maintenance.
              </p>
              <CustomPillButton href="/accreditations" size="md">
                View all our accreditations
              </CustomPillButton>
            </div>
            {/* Right – qualifications list (card frame) */}
            <div className="accreditations-card service-card overflow-hidden py-10 lg:py-14 px-8 lg:px-12 relative">
              <span className="glow"></span>
              <div className="relative z-10">
                <span className="section-label text-white/80 mb-4 block">Accreditations</span>
                <h2 className="accreditations-heading text-2xl lg:text-3xl font-bold font-title mb-8 text-white">
                  Qualifications that speak for themselves
                </h2>
                <ul className="space-y-4">
                  {(
                    [
                      { slug: "nsi", label: "NSI Gold — fire & security certification" },
                      { slug: "bafe", label: "BAFE — fire equipment & competence schemes" },
                      { slug: "constructionline", label: "Constructionline — pre-qualified supplier" },
                      { slug: "fia", label: "FIA — fire industry association alignment" },
                    ] as const
                  ).map(({ slug, label }) => (
                    <li key={slug}>
                      <Link
                        href={`/accreditations/${slug}`}
                        className="group flex items-center gap-3 accreditations-text text-white transition-opacity hover:opacity-90"
                      >
                        <CheckCircle className="h-5 w-5 shrink-0 text-white" aria-hidden />
                        <span className="border-b border-transparent group-hover:border-white/40">{label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — full-bleed black, large display type, arrows + fade */}
      <section
        id="testimonials"
        className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-32"
        onMouseEnter={() => setTestimonialsPaused(true)}
        onMouseLeave={() => setTestimonialsPaused(false)}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(255,255,255,0.07),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          aria-hidden
        />
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-12">
            <div className="lg:col-span-5">
              <span className="section-label text-white/70">Testimonials</span>
              <h2
                className="mt-4 font-title text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.92] tracking-tight text-white"
                style={{ fontFamily: "var(--font-menu)" }}
              >
                What our
                <span className="block text-white/90">clients say</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-white/55">
                Don&apos;t just take our word for it — hear from clients about their experience with APX Mechanical &amp;
                Electrical across London and the Home Counties.
              </p>
            </div>

            <div className="relative lg:col-span-7">
              <div className="mb-8 flex flex-wrap items-center gap-2 sm:gap-2.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="white"
                    className="h-8 w-8 shrink-0 stroke-white stroke-[1.25] text-white sm:h-10 sm:w-10 sm:stroke-[1.2]"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    style={{ vectorEffect: "non-scaling-stroke" }}
                    aria-hidden
                  />
                ))}
                <span className="ml-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/40 sm:ml-3">5.0</span>
              </div>

              <div key={currentTestimonial} className="apx-testimonial-fade">
                <blockquote className="apx-testimonials-quote text-2xl font-medium leading-snug text-white/95 sm:text-3xl lg:text-[1.85rem] lg:leading-relaxed xl:text-4xl">
                  <span className="text-white/20">&ldquo;</span>
                  {testimonials[currentTestimonial].text}
                  <span className="text-white/20">&rdquo;</span>
                </blockquote>
                <footer className="mt-10 border-t border-white/10 pt-8">
                  <div className="text-lg font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="mt-1 text-sm text-white/45">{testimonials[currentTestimonial].role}</div>
                </footer>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={testimonialPrev}
                    className="projects-nav-btn w-12 h-12 rounded-full border border-white bg-transparent text-white flex items-center justify-center transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={testimonialNext}
                    className="projects-nav-btn w-12 h-12 rounded-full border border-white bg-transparent text-white flex items-center justify-center transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      role="tab"
                      aria-selected={index === currentTestimonial}
                      aria-label={`Testimonial ${index + 1}`}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? "w-8 bg-white" : "w-2 bg-white/25 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section – black bg, white text */}
      <section id="contact" className="section-spacing relative bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left side - Title and Button */}
            <div className="space-y-8 pt-16 lg:pt-24">
              <span className="section-label text-white/80">Contact</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-title leading-tight text-left text-white">
                Ready to get started?
              </h2>
              
              <div className="space-y-6 max-w-lg">
                <p className="text-base leading-relaxed text-gray-300">
                  As one of the leading security system installers in London and the south east, we are pleased to offer a free survey and report for your property. Our systems are expertly designed in accordance with NSI Gold standards, covering both the domestic and commercial market.
                </p>
                
                <p className="text-base leading-relaxed text-gray-300">
                  Whether you&apos;re looking for security, monitoring, detection or safety, simply contact us for a chat about your requirements. We respond to all enquiries promptly and will provide detailed, competitive quotes tailored to your needs.
              </p>
            </div>
            
              <button
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-3"
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ArrowRight className="h-6 w-6" />
                GET A QUOTE
              </button>
                </div>
            
            {/* Right side - Contact Form (glassmorphic) */}
            <div 
              id="quote-form" 
              className="p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 font-title">Get Your Free Quote</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg"
                      placeholder="Enter your first name"
                    />
                </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div className="relative services-dropdown-container">
                  <label className="block text-sm font-medium mb-2">
                    Service Required *
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className="quote-form-field quote-form-dropdown w-full px-4 py-3 rounded-lg text-left flex justify-between items-center cursor-pointer"
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    >
                      <span>{selectedService || 'Select a service'}</span>
                      <svg 
                        style={{
                          width: '20px',
                          height: '20px',
                          transition: 'transform 0.3s ease',
                          transform: isServicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isServicesDropdownOpen && (
                      <div 
                        className="quote-form-dropdown-menu absolute left-0 right-0 top-full mt-1 z-50 overflow-hidden rounded-lg py-0"
                        style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)' }}
                      >
                        {[
                          { value: 'electrical-systems', label: 'Electrical Systems' },
                          { value: 'mechanical-systems', label: 'Mechanical Systems' },
                          { value: 'plumbing-building-services', label: 'Plumbing & Building Services' },
                          { value: 'maintenance-compliance', label: 'Maintenance & Compliance' },
                          { value: 'design-project-management', label: 'Design & Project Management' },
                          { value: 'condition-reports-testing', label: 'Condition Reports & Testing' },
                          { value: 'other', label: 'Other' }
                        ].map((service) => (
                          <button
                            key={service.value}
                            type="button"
                            className="quote-form-dropdown-item block w-full py-2 px-4 text-left text-sm transition-colors"
                            onClick={() => {
                              setSelectedService(service.label)
                              setIsServicesDropdownOpen(false)
                            }}
                          >
                            {service.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg"
                    placeholder="Please describe your project requirements..."
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex flex-wrap gap-6">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input type="radio" name="contact-method" value="phone" className="mr-0" />
                      Phone Call
                    </label>
                    <label className="flex cursor-pointer items-center gap-2">
                      <input type="radio" name="contact-method" value="email" defaultChecked className="mr-0" />
                      Email
                    </label>
                    <label className="flex cursor-pointer items-center gap-2">
                      <input type="radio" name="contact-method" value="text" className="mr-0" />
                      Text Message
                    </label>
                  </div>
                </div>
                
                <FormSubmitButton onSubmit={async () => {
                  /* Wire your real submit here (e.g. fetch or form action) */
                }}>
                  Send message
                </FormSubmitButton>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
