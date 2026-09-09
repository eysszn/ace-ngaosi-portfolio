import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useDarkMode } from '../hooks/useDarkMode'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [isDark, setIsDark] = useDarkMode()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 dark:border-white/5 bg-[var(--color-bg-light)]/90 dark:bg-[var(--color-bg-dark)]/90 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Initials */}
        <a href="#top" className="font-[family-name:var(--font-heading)] text-lg font-semibold">
          Ace
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
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
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-sm text-left"
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
        </div>
      )}
    </header>
  )
}