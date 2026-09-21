import { useEffect, useState } from 'react'
import { Sun, Moon, Spade } from 'lucide-react'
import { useDarkMode } from '../hooks/useDarkMode'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
const sectionIds = links.map((link) => link.href.slice(1))

export default function Navbar() {
  const [isDark, setIsDark] = useDarkMode()
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    if (activeId) {
      window.history.replaceState(null, '', `#${activeId}`)
    }
  }, [activeId])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', href)
    }
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 dark:border-white/5 bg-[var(--color-bg-light)]/90 dark:bg-[var(--color-bg-dark)]/90 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-[family-name:var(--font-heading)] flex items-center gap-1.5 text-2xl font-bold text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]">
          Ace
          <Spade
            size={26}
            fill="currentColor"
            className="text-[var(--color-accent-dark)] dark:text-[var(--color-accent)]"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? 'location' : undefined}
                className={`text-sm transition-colors ${isActive
                  ? 'text-[var(--color-accent)] font-semibold underline underline-offset-4'
                  : 'text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] hover:text-[var(--color-accent)]'
                  }`}
              >
                {link.label}
              </a>
            )
          })}
          {/* TO DO: FIX LIGHT MODE VARIATION  */}

          {/* <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun /> : <Moon />}
          </button> */}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {links.map((link) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? 'location' : undefined}
                className={`text-sm transition-colors ${isActive
                  ? 'text-[var(--color-accent)] font-semibold'
                  : 'text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] hover:text-[var(--color-accent)]'
                  }`}
              >
                {link.label}
              </a>
            )
          })}
          <button onClick={() => setIsDark(!isDark)} className="text-sm text-left">
            {isDark ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      )}
    </header>
  )
}