import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollReveal } from './hooks/useScrollReveal'
import { MobileStickyCTA } from './components/MobileStickyCTA'
import { SEOSchema } from './components/SEOSchema'

// SEO Meta Tags
function useSEOHead() {
  useEffect(() => {
    document.title = 'Silikon-Service Dortmann – Premium Silikonfugen Hannover'

    const metaTags = [
      { name: 'description', content: 'Professionelle Silikonfugen und Fugensanierung in Hannover & Umgebung. Fachgerechte Ausführung, hochwertige PCI-Materialien, langlebige Lösungen.' },
      { name: 'keywords', content: 'Silikonfugen Hannover, Fugensanierung, Silikon Service, Silikonfugen erneuern, Bad Dusche, Fliesenleger' },
      { name: 'theme-color', content: '#2D5A8C' },
      { property: 'og:title', content: 'Silikon-Service Dortmann – Premium Silikonfugen Hannover' },
      { property: 'og:description', content: 'Professionelle Silikonfugen und Fugensanierung in Hannover & Umgebung.' },
      { property: 'og:type', content: 'business.business' },
      { property: 'og:url', content: 'https://silikon-service-dortmann.de' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Silikon-Service Dortmann' },
      { name: 'twitter:description', content: 'Professionelle Silikonfugen in Hannover' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'charset', content: 'utf-8' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' }
    ]

    metaTags.forEach(tag => {
      let el = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(tag.property ? 'property' : 'name', tag.property || tag.name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', tag.content)
    })

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://silikon-service-dortmann.de'
  }, [])

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useSEOHead()
  const heroRef = useRef(null)
  const uspRef = useRef(null)
  const servicesRef = useRef(null)
  const beforeAfterRef = useRef(null)
  const qualityRef = useRef(null)
  const processRef = useRef(null)
  const aboutRef = useRef(null)
  const galleryRef = useRef(null)
  const gewerbeRef = useRef(null)
  const ctaRef = useRef(null)
  const contactRef = useRef(null)

  // Hero Animation
  useEffect(() => {
    if (!heroRef.current) return
    gsap.fromTo(
      heroRef.current.querySelectorAll('[data-hero]'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      }
    )
  }, [])

  // Scroll Reveals
  useScrollReveal(uspRef)
  useScrollReveal(servicesRef)
  useScrollReveal(beforeAfterRef)
  useScrollReveal(qualityRef)
  useScrollReveal(processRef)
  useScrollReveal(aboutRef)
  useScrollReveal(galleryRef)
  useScrollReveal(gewerbeRef)
  useScrollReveal(ctaRef)
  useScrollReveal(contactRef)

  // Button Hover Effect
  const handleButtonHover = (e) => {
    gsap.to(e.currentTarget, {
      y: -2,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleButtonHoverOut = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  // Image Hover Effect
  const handleImageHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.02,
      duration: 0.4,
      ease: 'power2.out'
    })
  }

  const handleImageHoverOut = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.4,
      ease: 'power2.out'
    })
  }

  return (
    <div className="min-h-screen bg-off-white">
      {/* SEO Schema */}
      <SEOSchema />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-off-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="container flex items-center justify-between h-20">
          <div className="text-xl font-bold text-primary font-display">
            Silikon-Service
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 items-center text-sm font-medium">
            <a href="#leistungen" className="hover:text-primary transition">Leistungen</a>
            <a href="#galerie" className="hover:text-primary transition">Galerie</a>
            <a href="#uber-uns" className="hover:text-primary transition">Über uns</a>
            <a href="#kontakt" className="hover:text-primary transition">Kontakt</a>
          </div>

          {/* CTA Button */}
          <button
            className="hidden md:block btn btn-primary"
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonHoverOut}
          >
            Angebot anfragen
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-black/5 bg-cream">
            <div className="container py-4 flex flex-col gap-4">
              <a href="#leistungen" className="text-primary hover:font-bold">Leistungen</a>
              <a href="#galerie" className="text-primary hover:font-bold">Galerie</a>
              <a href="#uber-uns" className="text-primary hover:font-bold">Über uns</a>
              <a href="#kontakt" className="text-primary hover:font-bold">Kontakt</a>
              <button
                className="btn btn-primary w-full mt-2"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHoverOut}
              >
                Angebot anfragen
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-24 section-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div>
              <h1 data-hero className="mb-6 leading-tight">
                Perfekte Fugen.<br />
                <span className="text-primary">Perfekter Abschluss.</span>
              </h1>
              <p data-hero className="text-lg text-charcoal mb-8 max-w-md">
                Professionelle Silikonarbeiten für Bad, Dusche, Küche und Wohnbereiche – sauber, präzise und langlebig. Hannover & Umgebung.
              </p>
              <div data-hero className="flex flex-col sm:flex-row gap-4">
                <button
                  className="btn btn-primary"
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonHoverOut}
                >
                  Kostenloses Angebot
                </button>
                <button
                  className="btn btn-secondary"
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonHoverOut}
                >
                  Leistungen entdecken
                </button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div
              data-hero
              className="bg-primary-pale rounded-sm aspect-square flex items-center justify-center min-h-80 overflow-hidden cursor-pointer"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageHoverOut}
            >
              <div className="text-center">
                <p className="text-primary text-sm mb-2">[Hochwertiges Detailbild]</p>
                <p className="text-charcoal text-xs">Makroaufnahme einer perfekt ausgeführten Silikonfuge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section ref={uspRef} className="section section-pale-blue">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 data-reveal className="text-center mb-16">
              Qualifikation. Material. Arbeitsweise.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div data-reveal>
                <h3 className="text-primary mb-4 text-2xl">✓</h3>
                <h4 className="font-semibold mb-3">Fachgerechte Ausführung</h4>
                <p className="text-sm text-charcoal">
                  Jahrelange Erfahrung in der präzisen Ausführung von Silikonfugenarbeiten.
                </p>
              </div>

              <div data-reveal>
                <h3 className="text-primary mb-4 text-2xl">✓</h3>
                <h4 className="font-semibold mb-3">Hochwertige Materialien</h4>
                <p className="text-sm text-charcoal">
                  Ausschließlich PCI-Silikon – Materialien, auf die sich Profis verlassen.
                </p>
              </div>

              <div data-reveal>
                <h3 className="text-primary mb-4 text-2xl">✓</h3>
                <h4 className="font-semibold mb-3">Präzise Verarbeitung</h4>
                <p className="text-sm text-charcoal">
                  Jede Fuge wird mit handwerklicher Präzision und Liebe zum Detail ausgeführt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section ref={servicesRef} id="leistungen" className="section section-light">
        <div className="container">
          <h2 data-reveal className="mb-16">Unsere Leistungen</h2>

          <div className="space-y-8">
            {/* Leistung 1 */}
            <div data-reveal className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-12 border-b border-black/10">
              <div
                className="bg-primary-pale rounded-sm aspect-video flex items-center justify-center overflow-hidden cursor-pointer"
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageHoverOut}
              >
                <p className="text-center text-charcoal text-sm">[Badezimmer-Projekt]</p>
              </div>
              <div>
                <h3 className="text-primary mb-4">Badezimmer & Dusche</h3>
                <p className="text-charcoal mb-4">
                  Silikonfugen an Dusche, Badewanne, Waschbecken, WC, Wand und Boden. Wasserdicht, langlebig, sauber verarbeitet.
                </p>
                <ul className="space-y-2 text-sm text-charcoal">
                  <li>✓ Duschabdichtungen</li>
                  <li>✓ Badewannensilikon</li>
                  <li>✓ Wandabdichtungen</li>
                </ul>
              </div>
            </div>

            {/* Leistung 2 */}
            <div data-reveal className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-12 border-b border-black/10">
              <div
                className="bg-primary-pale rounded-sm aspect-video flex items-center justify-center md:order-last overflow-hidden cursor-pointer"
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageHoverOut}
              >
                <p className="text-center text-charcoal text-sm">[Küchen-Projekt]</p>
              </div>
              <div className="md:order-first">
                <h3 className="text-primary mb-4">Küche</h3>
                <p className="text-charcoal mb-4">
                  Silikonfugen an Arbeitsplatten, Spülen und Fliesenspiegeln. Hygienisch, hitzebeständig und wartbar.
                </p>
                <ul className="space-y-2 text-sm text-charcoal">
                  <li>✓ Arbeitsplattensilikon</li>
                  <li>✓ Spülabdichtungen</li>
                  <li>✓ Fliesenspiegelarbeiten</li>
                </ul>
              </div>
            </div>

            {/* Leistung 3 */}
            <div data-reveal className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div
                className="bg-primary-pale rounded-sm aspect-video flex items-center justify-center overflow-hidden cursor-pointer"
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageHoverOut}
              >
                <p className="text-center text-charcoal text-sm">[Terrasse-Projekt]</p>
              </div>
              <div>
                <h3 className="text-primary mb-4">Weitere Arbeiten</h3>
                <p className="text-charcoal mb-4">
                  Terrassen- und Balkonabdichtungen, Fenster- und Türensanierung, Zementfugenerneuerung.
                </p>
                <ul className="space-y-2 text-sm text-charcoal">
                  <li>✓ Balkonabdichtung</li>
                  <li>✓ Fensterdichtungen</li>
                  <li>✓ Fugenerneuerung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorher/Nachher Section */}
      <section ref={beforeAfterRef} className="section section-cream">
        <div className="container">
          <h2 data-reveal className="text-center mb-8">Der Unterschied liegt im Detail</h2>
          <p data-reveal className="text-center text-charcoal mb-16 max-w-2xl mx-auto">
            Alte, verschmutzte Fugen werden professionell entfernt und durch neue, saubere Silikonfugen ersetzt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              data-reveal
              className="bg-gray-200 rounded-sm aspect-square flex items-center justify-center overflow-hidden cursor-pointer"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageHoverOut}
            >
              <p className="text-center text-charcoal text-sm">[VORHER]</p>
            </div>
            <div
              data-reveal
              className="bg-gray-200 rounded-sm aspect-square flex items-center justify-center overflow-hidden cursor-pointer"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageHoverOut}
            >
              <p className="text-center text-charcoal text-sm">[NACHHER]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualität Section */}
      <section ref={qualityRef} className="section section-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              data-reveal
              className="bg-primary-pale rounded-sm aspect-square flex items-center justify-center overflow-hidden cursor-pointer"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageHoverOut}
            >
              <p className="text-center text-charcoal text-sm">[PCI Material]</p>
            </div>
            <div>
              <h2 data-reveal className="mb-6">Qualität beginnt beim Material</h2>
              <p data-reveal className="text-lg text-charcoal mb-6">
                Ich arbeite ausschließlich mit hochwertigem Silikon von PCI. Ein Material, das sich seit Jahrzehnten bewährt hat und auf das Profis weltweit vertrauen.
              </p>
              <p data-reveal className="text-charcoal mb-8">
                PCI-Silikon bietet nicht nur optimale Verarbeitungseigenschaften, sondern auch Dauerhaftigkeit, Flexibilität und Witterungsbeständigkeit – Eigenschaften, die für hochwertige Silikonfugen unverzichtbar sind.
              </p>
              <p data-reveal className="text-sm text-charcoal italic">
                "Mit dem richtigen Material und der richtigen Verarbeitung entstehen Fugen, die Jahrzehnte halten."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Arbeitsprozess Section */}
      <section ref={processRef} className="section section-pale-blue">
        <div className="container">
          <h2 data-reveal className="text-center mb-16">Von der alten Fuge zur sauberen Lösung</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div data-reveal className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">01</div>
              <h4 className="font-semibold mb-3">Alte Fuge entfernen</h4>
              <p className="text-sm text-charcoal">
                Die alte Silikonfuge wird vollständig und sauber entfernt.
              </p>
            </div>

            <div data-reveal className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">02</div>
              <h4 className="font-semibold mb-3">Untergrund vorbereiten</h4>
              <p className="text-sm text-charcoal">
                Der Untergrund wird sorgfältig gereinigt und vorbereitet.
              </p>
            </div>

            <div data-reveal className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">03</div>
              <h4 className="font-semibold mb-3">Fuge präzise ausführen</h4>
              <p className="text-sm text-charcoal">
                Neue Silikonfuge wird mit handwerklicher Präzision ausgeführt.
              </p>
            </div>

            <div data-reveal className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">04</div>
              <h4 className="font-semibold mb-3">Sauberes Ergebnis</h4>
              <p className="text-sm text-charcoal">
                Saubere, langlebige und wasserdichte Silikonfuge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Über uns Section */}
      <section ref={aboutRef} id="uber-uns" className="section section-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              data-reveal
              className="bg-primary-pale rounded-sm aspect-square flex items-center justify-center overflow-hidden cursor-pointer"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageHoverOut}
            >
              <p className="text-center text-charcoal text-sm">[Foto des Handwerkers]</p>
            </div>
            <div>
              <h2 data-reveal className="mb-6">Handwerk, das man sieht</h2>
              <p data-reveal className="text-lg text-charcoal mb-6">
                Hauptberuflich tätiger Fliesenleger mit langjähriger Erfahrung im Bereich Silikonfugen und Fugensanierung.
              </p>
              <p data-reveal className="text-charcoal mb-6">
                Für mich ist es nicht nur ein Handwerk – es ist eine Passion. Jede Fuge wird so ausgeführt, als wäre es das Projekt in meinem eigenen Zuhause.
              </p>
              <ul className="space-y-3 text-charcoal">
                <li data-reveal className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Persönlich und zuverlässig</span>
                </li>
                <li data-reveal className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Höchste handwerkliche Standards</span>
                </li>
                <li data-reveal className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Langfristige Kundenbeziehungen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Section */}
      <section ref={galleryRef} id="galerie" className="section section-cream">
        <div className="container">
          <h2 data-reveal className="text-center mb-16">Galerie</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                data-reveal
                className="bg-gray-300 rounded-sm aspect-square flex items-center justify-center overflow-hidden cursor-pointer"
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageHoverOut}
              >
                <p className="text-charcoal text-sm">[Projekt {i}]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gewerbekunden Section */}
      <section ref={gewerbeRef} className="section section-light">
        <div className="container">
          <div className="max-w-3xl">
            <h2 data-reveal className="mb-6">Für Fliesenleger- & Bodenlegerbetriebe</h2>
            <p data-reveal className="text-lg text-charcoal mb-8">
              Silikonarbeiten können professionell ausgelagert werden. Ich übernehme alle Arbeiten nach Ihren Vorgaben und Qualitätsstandards.
            </p>

            <div className="space-y-4 mb-8">
              <div data-reveal className="flex gap-4">
                <span className="text-primary font-bold text-lg">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Fachgerechte Ausführung</h4>
                  <p className="text-sm text-charcoal">Nach Ihren Anforderungen und Vorgaben</p>
                </div>
              </div>

              <div data-reveal className="flex gap-4">
                <span className="text-primary font-bold text-lg">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Gleichbleibende Qualität</h4>
                  <p className="text-sm text-charcoal">Verlässlicher Partner für langfristige Zusammenarbeit</p>
                </div>
              </div>

              <div data-reveal className="flex gap-4">
                <span className="text-primary font-bold text-lg">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Flexible Termine</h4>
                  <p className="text-sm text-charcoal">Angepasst an Ihre Projektplanung</p>
                </div>
              </div>
            </div>

            <button
              data-reveal
              className="btn btn-primary"
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonHoverOut}
            >
              Zusammenarbeit anfragen
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section section-pale-blue">
        <div className="container text-center">
          <h2 data-reveal className="mb-6">Eine saubere Fuge<br />macht den Unterschied</h2>
          <p data-reveal className="text-lg text-charcoal mb-12 max-w-2xl mx-auto">
            Sie benötigen neue Silikonfugen oder eine professionelle Fugensanierung?
          </p>
          <button
            data-reveal
            className="btn btn-primary text-lg py-4 px-12"
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonHoverOut}
          >
            Kostenloses Angebot anfragen
          </button>
        </div>
      </section>

      {/* Kontakt Section */}
      <section ref={contactRef} id="kontakt" className="section section-light">
        <div className="container">
          <h2 data-reveal className="text-center mb-16">Kontakt & Anfrage</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Kontaktinfo */}
            <div>
              <h3 data-reveal className="text-primary mb-8">Kontaktieren Sie mich direkt</h3>

              <div className="space-y-6">
                <div data-reveal>
                  <h4 className="font-semibold mb-2">Telefon</h4>
                  <a href="tel:+491517261842" className="text-lg text-primary font-semibold hover:text-primary-light transition">
                    +49 (0)151 72618429
                  </a>
                </div>

                <div data-reveal>
                  <h4 className="font-semibold mb-2">E-Mail</h4>
                  <a href="mailto:service-dortmann@gmx.de" className="text-primary hover:text-primary-light transition">
                    service-dortmann@gmx.de
                  </a>
                </div>

                <div data-reveal>
                  <h4 className="font-semibold mb-2">Arbeitsgebiet</h4>
                  <p className="text-charcoal">
                    Hannover & Umgebung<br />
                    (inkl. Laatzen, Sehnde, Wunstorf)
                  </p>
                </div>

                <p data-reveal className="text-sm text-charcoal italic mt-8">
                  Kostenlos & unverbindlich
                </p>
              </div>
            </div>

            {/* Kontaktformular */}
            <div>
              <h3 data-reveal className="text-primary mb-8">Anfrage senden</h3>
              <form data-reveal className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-black/10 rounded-sm focus:outline-none focus:border-primary transition" />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Telefon oder E-Mail</label>
                  <input type="text" className="w-full px-4 py-3 border border-black/10 rounded-sm focus:outline-none focus:border-primary transition" />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Nachricht</label>
                  <textarea rows="5" className="w-full px-4 py-3 border border-black/10 rounded-sm focus:outline-none focus:border-primary transition resize-none"></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonHoverOut}
                >
                  Anfrage senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-off-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold mb-4">Silikon-Service</h3>
              <p className="text-sm">Professionelle Silikonarbeiten in Hannover & Umgebung</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#leistungen" className="hover:text-primary-light transition">Leistungen</a></li>
                <li><a href="#galerie" className="hover:text-primary-light transition">Galerie</a></li>
                <li><a href="#uber-uns" className="hover:text-primary-light transition">Über uns</a></li>
                <li><a href="#kontakt" className="hover:text-primary-light transition">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <p className="text-sm mb-1">
                <a href="tel:+491517261842" className="hover:text-primary-light transition">+49 (0)151 72618429</a>
              </p>
              <p className="text-sm">
                <a href="mailto:service-dortmann@gmx.de" className="hover:text-primary-light transition">service-dortmann@gmx.de</a>
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#impressum" className="hover:text-primary-light transition">Impressum</a></li>
                <li><a href="#datenschutz" className="hover:text-primary-light transition">Datenschutz</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-sm text-center">
              © 2026 Silikon-Service Dortmann. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA />

      {/* Mobile Bottom Padding */}
      <div className="md:hidden h-20" />
    </div>
  )
}
