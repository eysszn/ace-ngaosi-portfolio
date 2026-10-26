import { useEffect, useRef, useState } from 'react'
import { Check, Copy, MoveUpRight } from 'lucide-react'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import ShinyOutlineText from '../../components/ShinyOutlineText/ShinyOutlineText';

const email = 'azngaosi2004@gmail.com'

const socials = [
  {
    label: 'GitHub',
    description: 'Check out what I\'ve been up to!',
    cta: 'View my GitHub',
    icon: FiGithub,
    href: 'https://github.com/eysszn',
  },
  {
    label: 'LinkedIn',
    description: 'Look at my professional profile!',
    cta: 'Let\'s Connect',
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/alfred-christian-emmanuel-ngaosi/',
  },
  {
    label: 'Facebook',
    description: 'Send me a friend request!',
    cta: 'Add me',
    icon: FaFacebookF,
    href: 'https://www.facebook.com/ace.ngaosi/',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copyTimeout = useRef(null)

  useEffect(() => () => window.clearTimeout(copyTimeout.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.clearTimeout(copyTimeout.current)
      copyTimeout.current = window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard blocked: the address is still visible and selectable
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-[var(--navbar-height)] pt-16 md:pt-24 pb-16 md:pb-24 sm:px-4 md:px-8 lg:px-16 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Invitation + primary channel */}
        <div className="lg:col-span-6">
          <h2 className="font-hero font-black uppercase leading-[0.88] tracking-[-0.03em] text-[clamp(3.25rem,14vw,6rem)] lg:text-[clamp(4rem,6.5vw,6rem)]">
            <span className="block">Reach me</span>
            <ShinyOutlineText text="here!" />
          </h2>

          <p className="mt-8 text-base sm:text-lg text-[var(--color-text-dark)]/70 dark:text-[var(--color-text-light)]/70">
            Come and reach me directly!
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-1 inline-block break-all font-heading font-semibold text-xl sm:text-2xl lg:text-[1.75rem] text-[var(--color-accent)] underline decoration-2 decoration-[var(--color-accent)]/30 underline-offset-[6px] hover:decoration-[var(--color-accent)] transition-colors"
          >
            {email}
          </a>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 bg-[var(--color-accent-dark)] text-[var(--color-bg-light)] text-sm sm:text-base font-semibold px-5 py-3 rounded-lg hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Send an Email
              <MoveUpRight size={16} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 border border-[var(--color-text-dark)]/15 dark:border-[var(--color-text-light)]/15 text-sm sm:text-base font-semibold px-5 py-3 rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              <span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span>
            </button>
          </div>
        </div>

        {/* Other channels: full-row links with a fill sweep on hover/focus */}
        <ul className="lg:col-span-6 border-y border-[var(--color-text-dark)]/10 dark:border-[var(--color-text-light)]/10 divide-y divide-[var(--color-text-dark)]/10 dark:divide-[var(--color-text-light)]/10">
          {socials.map(({ label, description, cta, icon: Icon, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative isolate flex items-center gap-4 sm:gap-5 my-1 -mx-3 sm:-mx-5 px-3 sm:px-5 py-5 sm:py-6 rounded-xl overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-teal-700 [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0)] group-focus-visible:[clip-path:inset(0)] transition-[clip-path] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                />

                <span className="flex-none grid place-items-center size-11 sm:size-12 rounded-full border border-[var(--color-accent)]/40 text-[var(--color-accent)] transition-colors duration-300 group-hover:border-white/40 group-hover:text-white group-focus-visible:border-white/40 group-focus-visible:text-white">
                  <Icon size={20} aria-hidden="true" />
                </span>

                <span className="flex-1 min-w-0">
                  <span className="block font-heading font-semibold text-lg sm:text-xl transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                    {label}
                  </span>
                  <span className="block text-sm text-[var(--color-text-dark)]/70 dark:text-[var(--color-text-light)]/70 transition-colors duration-300 group-hover:text-white/85 group-focus-visible:text-white/85">
                    {description}
                  </span>
                </span>

                <span className="hidden sm:inline text-sm font-semibold text-[var(--color-accent)] transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                  {cta}
                </span>
                <MoveUpRight
                  size={20}
                  aria-hidden="true"
                  className="flex-none text-[var(--color-accent)] transition-[color,translate] duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:text-white"
                />
              </a>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
