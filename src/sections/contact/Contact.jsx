import { Mail } from 'lucide-react'
import { SiGithub, } from 'react-icons/si'
import { FaLinkedin } from "react-icons/fa";
import SectionHeader from '../../components/SectionHeader';

const links = [
  {
    label: 'GitHub',
    handle: '@eysszn',
    icon: SiGithub,
    href: 'https://github.com/eysszn',
    external: true,
  },
  {
    label: 'Email',
    handle: 'azngaosi2004@gmail.com',
    icon: Mail,
    href: 'mailto:azngaosi2004@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    handle: 'Alfred Christian Emmanuel Ngaosi',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/alfred-christian-emmanuel-ngaosi/',
    external: true,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-8 md:px-16 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center">
          <SectionHeader>Contact</SectionHeader>
        </div>

        <p className="text-sm text-[var(--color-text-dark)]/70 dark:text-[var(--color-text-light)]/70 mb-10 max-w-md mx-auto">
          Open to entry-level software developer roles — feel free to reach out through any of these.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {links.map(({ label, handle, icon: Icon, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center gap-2.5 bg-black/5 dark:bg-white/5 rounded-xl p-6 border border-transparent hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-[var(--color-accent)]/10 group-hover:bg-[var(--color-accent-dark)] flex items-center justify-center transition-colors">
                <Icon
                  size={19}
                  className="text-[var(--color-accent)] group-hover:text-[var(--color-bg-light)] transition-colors"
                />
              </div>
              <span className="font-bold text-sm">{label}</span>
              <span className="text-xs text-[var(--color-text-dark)]/60 dark:text-[var(--color-text-light)]/60">
                {handle}{external && ' ↗'}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}