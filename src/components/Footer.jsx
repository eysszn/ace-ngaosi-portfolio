import { MapPin, Spade } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="sm:px-4 md:px-8 lg:px-16 border-t border-[var(--color-text-dark)]/10 dark:border-[var(--color-text-light)]/10">
      <div className="relative max-w-6xl mx-auto py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* the section headers' slanted bar, sitting on the footer rule */}
        <span
          aria-hidden="true"
          className="absolute -top-[3px] left-0 w-20 h-[5px] bg-[var(--color-accent-bright)] [clip-path:polygon(4px_0,100%_0,calc(100%-4px)_100%,0_100%)]"
        />

        <div className="flex flex-col gap-1.5">
          <a
            href="#top"
            className="w-fit flex items-center gap-1.5 rounded-sm font-[family-name:var(--font-heading)] font-bold text-xl text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          >
            Ace
            <Spade
              size={20}
              fill="currentColor"
              aria-hidden="true"
              className="text-[var(--color-accent-dark)] dark:text-[var(--color-accent)]"
            />
          </a>
          <span className="text-sm text-[var(--color-text-dark)]/60 dark:text-[var(--color-text-light)]/60">
            © {new Date().getFullYear()} Alfred Christian Emmanuel Ngaosi
          </span>
        </div>

        <span className="flex items-center gap-2 text-sm text-[var(--color-text-dark)]/60 dark:text-[var(--color-text-light)]/60">
          <MapPin size={16} aria-hidden="true" className="flex-none text-[var(--color-accent)]" />
          Baguio City, Philippines
        </span>
      </div>
    </footer>
  )
}
