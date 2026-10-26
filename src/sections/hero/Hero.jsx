import { ArrowDown, ArrowDownRight, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import ShinyOutlineText from '../../components/ShinyOutlineText/ShinyOutlineText';

const facts = [
  { icon: MapPin, text: 'Baguio City, Philippines' },
  { icon: Briefcase, text: 'Web Developer at Cre8tive Sync' },
  { icon: GraduationCap, text: 'BSIT, Magna Cum Laude' },
]

export default function Hero() {
  return (
    <section id="hero" className="hero-section lg:min-h-screen pt-16 lg:pt-18 relative flex flex-col lg:flex-row w-full overflow-hidden">
      <div
        className="hidden lg:block absolute top-0 z-20 h-2"
        style={{
          left: '20%',
          width: '100%',
          top: '11%',
          background: 'var(--color-accent-bright)',
          clipPath: 'polygon(2% 0, 100% 0, 88% 100%, 0% 100%)'
        }}
      />
      <div
        className="hidden lg:block absolute bottom-0 z-20 h-16"
        style={{
          left: '0%',
          width: '65%',
          background: 'var(--color-accent-bright)',
          clipPath: 'polygon(0 0, 88% 0, 82% 100%, 0% 100%)'
        }}
      />

      {/* Left panel*/}
      <div className="relative lg:flex-[0_0_65%] bg-bg-light dark:bg-bg-dark flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-14 pb-12 sm:py-16 lg:py-20">
        <h1 className="font-hero flex flex-col font-black text-[clamp(3.75rem,20vw,9rem)] lg:text-[clamp(7rem,11vw,10rem)] leading-[0.85] uppercase tracking-tighter">
          <ShinyOutlineText text="Ace" />
          <ShinyOutlineText text="Ngaosi" />
        </h1>
        <p className="mt-2 ml-1 sm:ml-2 font-semibold text-accent text-xl sm:text-2xl lg:text-3xl">
          Aspiring Software Engineer
        </p>

        {/* CTAs: the slanted primary echoes the hero's angled bars */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-5 mt-10 lg:mt-12">
          <a
            href="#about"
            className="group relative isolate inline-flex items-center gap-3 px-8 sm:px-10 py-4 text-base sm:text-lg font-bold text-[var(--color-bg-light)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-teal-700 [clip-path:polygon(14px_0,100%_0,calc(100%-14px)_100%,0_100%)] transition-colors duration-300 group-hover:bg-teal-800"
            />
            Get to know me!
            <ArrowDown size={20} aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-y-0.5 motion-reduce:transition-none" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-sm text-base sm:text-lg font-semibold text-[var(--color-accent)] underline decoration-2 decoration-[var(--color-accent)]/30 underline-offset-[6px] hover:decoration-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          >
            Reach me here!
            <ArrowDownRight size={20} aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:translate-y-0.5 motion-reduce:transition-none" />
          </a>
        </div>

        {/* Quick facts, each drawn from the sections below */}
        <ul className="mt-10 pt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--color-text-dark)]/10 dark:border-[var(--color-text-light)]/10 text-sm text-[var(--color-text-dark)]/70 dark:text-[var(--color-text-light)]/70">
          {facts.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2">
              <Icon size={16} aria-hidden="true" className="flex-none text-[var(--color-accent)]" />
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* Photo: laptops and desktops only. The <source> hands smaller screens a blank 1px gif
          so phones and tablets skip downloading the full photo */}
      <picture className="hidden lg:block relative lg:flex-[0_0_35%] lg:min-h-screen hero-photo">
        <source media="(max-width: 1023px)" srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
        <img src="/hero-photo.jpg" alt="Ace Ngaosi" className="object-top" fetchPriority="high" decoding="async" />
      </picture>
    </section>
  )
}