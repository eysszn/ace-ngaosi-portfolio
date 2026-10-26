import { useEffect, useRef, useState } from 'react'
import { Sun, Moon, Spade, Menu, X } from 'lucide-react'
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

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]'

export default function Navbar() {
  const [isDark, setIsDark] = useDarkMode()
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (activeId) {
      window.history.replaceState(null, '', `#${activeId}`)
    }
  }, [activeId])

  // Escape closes the mobile menu and hands focus back to its button
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

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
      {/* side padding matches the hero so the logo lines up with the name below it */}
      <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4">
        <a href="#top" className={`font-[family-name:var(--font-heading)] flex items-center gap-1.5 rounded-sm text-2xl font-bold text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] ${focusRing}`}>
          Ace
          <Spade
            size={26}
            fill="currentColor"
            aria-hidden="true"
            className="text-[var(--color-accent-dark)] dark:text-[var(--color-accent)]"
          />
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? 'location' : undefined}
                className={`group relative py-1 rounded-sm text-sm font-medium transition-colors ${focusRing} ${isActive
                  ? 'text-[var(--color-accent)]'
                  : 'text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] hover:text-[var(--color-accent)]'
                  }`}
              >
                {link.label}
                {/* the section headers' slanted bar marks the current section; hover previews it */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-1 h-[3px] origin-left bg-[var(--color-accent-bright)] [clip-path:polygon(3px_0,100%_0,calc(100%-3px)_100%,0_100%)] transition-[scale,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${isActive
                    ? 'scale-x-100'
                    : 'scale-x-0 opacity-50 group-hover:scale-x-100'
                    }`}
                />
              </a>
            )
          })}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`w-9 h-9 flex items-center justify-center rounded-full text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${focusRing}`}
          >
            {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
          </button>
        </div>

        <button
          ref={menuButtonRef}
          className={`md:hidden -mr-2 w-10 h-10 flex items-center justify-center rounded-full text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${focusRing}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden flex flex-col px-6 sm:px-10 pb-4 border-t border-black/5 dark:border-white/5">
          {links.map((link) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? 'location' : undefined}
                className={`py-3 rounded-sm text-base transition-colors ${focusRing} ${isActive
                  ? 'text-[var(--color-accent)] font-semibold'
                  : 'text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] hover:text-[var(--color-accent)]'
                  }`}
              >
                {link.label}
              </a>
            )
          })}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`mt-1 pt-4 border-t border-black/5 dark:border-white/5 flex items-center gap-2 rounded-sm text-base text-left text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] ${focusRing}`}
          >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            {isDark ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      )}
    </header>
  )
}
