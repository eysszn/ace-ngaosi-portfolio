import { Mail, Database, MoveUpRight } from 'lucide-react'
import { SiGithub, SiReact, SiJavascript, SiExpress, SiFigma } from 'react-icons/si'
import { FaLinkedin } from "react-icons/fa"
import SectionHeader from '../../components/SectionHeader'

const socials = [
  { icon: SiGithub, label: 'GitHub', href: 'https://github.com/eysszn', external: true },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/alfred-christian-emmanuel-ngaosi/', external: true },
  { icon: Mail, label: 'Email', href: 'mailto:azngaosi2004@gmail.com', external: false },
]

const tools = [
  { icon: SiReact, label: 'React' },
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiExpress, label: 'Express.js' },
  { icon: Database, label: 'Databases' },
  { icon: SiFigma, label: 'Figma' },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-12 md:py-24 sm:px-4 md:px-8 lg:px-16 scroll-mt-[var(--navbar-height)] bg-bg-light dark:bg-bg-dark text-text-dark dark:text-text-light"
    >
      <div className="max-w-6xl mx-auto">
        {/* stays pinned under the navbar until the section ends (sticky is bounded by this wrapper's parent);
            padding keeps the header's bottom margin inside the opaque background; ::after fades text scrolling under it */}
        <div className="sticky top-[calc(var(--navbar-height)-8px)] z-10 -mt-4 pt-4 pb-px bg-bg-light dark:bg-bg-dark after:absolute after:inset-x-0 after:top-full after:h-6 after:pointer-events-none after:bg-linear-to-b after:from-bg-light dark:after:from-bg-dark after:to-transparent">
          <SectionHeader>About Me!</SectionHeader>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">

          {/* Photo: slanted right edge and a slanted bar beneath, echoing the hero */}
          {/* on desktop the photo pins just below the pinned title (14.25rem ≈ navbar + title + its fade) */}
          <figure className="relative lg:col-span-5 w-full max-w-sm sm:max-w-md lg:max-w-none lg:sticky lg:top-[14.25rem]">
            <div className="aspect-4/5 lg:aspect-auto lg:h-[min(28rem,calc(100vh-16rem))] overflow-hidden [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]">
              <img
                src="/about-grad-photo.jpg"
                alt="Ace Ngaosi in his graduation toga"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-3 left-0 w-2/3 h-3 bg-accent-bright [clip-path:polygon(0_0,100%_0,calc(100%-0.75rem)_100%,0_100%)]"
            />
          </figure>

          {/* Story */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-5 max-w-[65ch]">
              <p className="text-lg sm:text-xl leading-relaxed text-text-dark dark:text-text-light">
                Hey there! I'm Alfred Christian Emmanuel Ngaosi, but most people call me Ace. I'm an IT graduate based in Baguio City, driven by genuine curiosity about how things work behind the scenes — whether that's a React frontend, a database schema, or a machine learning model working to predict the future. I build software that solves real-world problems, and I care as much about the process as the outcome: clean documentation, thoughtful architecture, and experiences that users actually enjoy.
              </p>
              <p className="text-base leading-relaxed text-text-dark/80 dark:text-text-light/80">
                <strong className="font-semibold text-accent">I've always chased consistency over sudden bursts of brilliance:</strong> steady effort, incremental improvement, and showing up day after day. That mindset shapes how I approach every project I take on, from the first line of code to the final touches.
              </p>
              <p className="text-base leading-relaxed text-text-dark/80 dark:text-text-light/80">
                Outside the industry, I'm usually losing myself in music or a good game, or spending time with the people who matter most to me. If you'd like to start a conversation, feel free to reach out!
              </p>
            </div>

            {/* Toolkit */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <h3 className="flex-none font-heading font-semibold text-sm">Toolkit</h3>
              <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                {tools.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm text-text-dark/80 dark:text-text-light/80">
                    <Icon size={16} aria-hidden="true" className="flex-none text-accent" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resume and socials */}
            <div className="mt-8 pt-8 border-t border-text-dark/10 dark:border-text-light/10 flex flex-wrap items-center gap-4">
              <a
                href="https://drive.google.com/file/d/1HF5VzlRnfh4uu-MX_1GV0vidvorRhH9O/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Check out my Resume!
                <MoveUpRight size={16} aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
              </a>

              <span aria-hidden="true" className="hidden sm:block w-px h-6 bg-text-dark/20 dark:bg-text-light/20" />

              <ul className="flex gap-2.5">
                {socials.map(({ icon: Icon, label, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      title={label}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-text-dark dark:text-text-light hover:bg-black/10 dark:hover:bg-white/10 hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <Icon size={17} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
