import { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/hero/Hero'
import { ArrowUp } from 'lucide-react'

// everything below the hero is split out of the initial bundle
const About = lazy(() => import('./sections/about/About'))
const Education = lazy(() => import('./sections/education/Education'))
const Experience = lazy(() => import('./sections/experience/Experience'))
const Projects = lazy(() => import('./sections/projects/Projects'))
const Skills = lazy(() => import('./sections/skills/Skills'))
const Contact = lazy(() => import('./sections/contact/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// the browser tries to jump to a #hash before lazy sections exist, so retry once they mount
function ScrollToHash() {
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id && id !== 'top') document.getElementById(id)?.scrollIntoView()
  }, [])

  return null
}

function App(){
  const [isHeroVisible, setIsHeroVisible] = useState(true)

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

  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-5 sm:px-6 pt-16 md:pt-24">
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
          <ScrollToHash />
        </Suspense>
      </main>

      <button
        type="button"
        onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Back to hero section"
        aria-hidden={isHeroVisible}
        tabIndex={isHeroVisible ? -1 : 0}
        title="Back to hero section"
        className={`fixed bottom-5 right-5 md:bottom-10 md:right-10 z-40 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-[var(--color-accent-dark)] text-[var(--color-bg-light)] shadow-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 dark:focus:ring-offset-[var(--color-bg-dark)] ${isHeroVisible
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
