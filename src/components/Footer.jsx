import { Spade } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="px-8 md:px-16 py-4 bg-[var(--color-bg-dark)] border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-sm text-[var(--color-text-light)]/60">
          © {new Date().getFullYear()} Alfred Christian Emmanuel Ngaosi
        </span>

        <span className="flex items-center gap-1.5 font-[family-name:var(--font-heading)] font-semibold text-lg text-[var(--color-text-light)]">
          Ace
          <Spade
            size={20}
            fill="currentColor"
            className="text-[var(--color-accent-dark)] dark:text-[var(--color-accent)]"
          />
        </span>
      </div>
    </footer>
  )
}