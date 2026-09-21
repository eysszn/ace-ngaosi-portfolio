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
import { ArrowUp } from 'lucide-react'

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
