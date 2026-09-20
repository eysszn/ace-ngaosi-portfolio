import { Mail, MoveUpRight } from 'lucide-react'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import SectionHeader from '../../components/SectionHeader';

const contacts = [
  {
    label: 'GitHub',
    description: 'Check out what I\'ve been up to!',
    cta: 'View my GitHub',
    icon: FiGithub,
    href: 'https://github.com/eysszn',
    external: true,
  },
  {
    label: 'Email',
    description: 'Come and reach me directly!',
    cta: 'Send an Email',
    icon: Mail,
    href: 'mailto:azngaosi2004@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    description: 'Look at my professional profile!',
    cta: 'Let\'s Connect',
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/alfred-christian-emmanuel-ngaosi/',
    external: true,
  },
  {
    label: 'Facebook',
    description: 'Send me a friend request!',
    cta: 'Add me',
    icon: FaFacebookF,
    href: 'https://www.facebook.com/ace.ngaosi/',
    external: true,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-8 md:px-16 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader>Contact</SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map(({ label, description, cta, icon: Icon, href, external }) => (
            <div
              key={label}
              className="relative bg-black/5 dark:bg-white/5 rounded-xl p-8 min-h-56 flex flex-col justify-end"
            >
              <Icon size={38} className="absolute top-8 right-8 text-[var(--color-accent)]" />
              
              <div className="mb-2 pr-12">
                <span className="font-bold text-xl">{label}</span>
              </div>


              <p className="text-sm text-var(--color-text-dark)]/70 dark:text-var(--color-text-light)]/70 mb-4">
                {description}
              </p>

              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-center gap-2 w-fit bg-[var(--color-accent-dark)] text-[var(--color-bg-light)] text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                {cta}
                <MoveUpRight size={16}/>
              </a>
            </div>
          ))}

        </div>
      </div>

    </section>
  )
}