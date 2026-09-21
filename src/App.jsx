import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import Education from './sections/education/Education'
import Experience from './sections/experience/Experience'
import Projects from './sections/projects/Projects'
import Skills from './sections/skills/Skills'
import Contact from './sections/contact/Contact'
import Footer from './components/Footer'
import { ArrowUp, Monitor } from 'lucide-react'

function App(){
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === 'undefined' || window.matchMedia('(min-width: 768px)').matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleViewportChange = (event) => setIsDesktop(event.matches)

    mediaQuery.addEventListener('change', handleViewportChange)

    return () => mediaQuery.removeEventListener('change', handleViewportChange)
  }, [])

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.5 },
    )
    observer.observe(hero)

    return () => observer.disconnect()
  }, [])

  if (!isDesktop) {
    return (
      <main className="grid min-h-[100svh] place-content-center justify-items-center gap-4 bg-[var(--color-bg-dark)] p-8 text-center text-[var(--color-text-light)]">
        <div className="grid size-[4.5rem] place-items-center rounded-full border border-accent/60 text-accent" aria-hidden="true">
          <Monitor size={32} strokeWidth={1.5} />
        </div>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-accent">Under construction</p>
        <h1 className="m-0 max-w-md text-[clamp(2rem,8vw,3.5rem)] leading-none">Switch to desktop view to see portfolio</h1>
        <p className="m-0 max-w-sm leading-relaxed text-text-light/65">
          This portfolio is being tuned for a wider screen. Please revisit on a desktop device.
        </p>
      </main>
    )
  }

  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-6 pt-24">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>

      <button
        type="button"
        onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Back to hero section"
        aria-hidden={isHeroVisible}
        tabIndex={isHeroVisible ? -1 : 0}
        title="Back to hero section"
        className={`fixed bottom-10 right-10 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-dark)] text-[var(--color-bg-light)] shadow-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 dark:focus:ring-offset-[var(--color-bg-dark)] ${isHeroVisible
          ? 'pointer-events-none translate-y-2 opacity-0'
          : 'translate-y-0 opacity-100 hover:-translate-y-1 hover:opacity-90'
          }`}
      >
        <ArrowUp size={22} aria-hidden="true" />
      </button>
    </div>
  )
}
export default App
