import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import AccordionGallery from '../../components/AccordionGallery/AccordionGallery';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const projects = [
  {
    label: 'HydroHub Admin',
    image: '/projects/hydrohub-admin.png',
    description: 'The admin module for HydroHub where forecasting data and website traffic can be seen and managed.',
    tech: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Python', 'MySQL'],
    liveURL: 'https://hydrohub-admin.onrender.com/',
  },
  {
    label: 'HydroHub',
    image: '/projects/hydrohub.png',
    description: 'A web application with an interactive map to view historical and forecasted water balance levels in the Cordillera Administrative Region made for DENR-CAR. Once updated water balance data is ready, the team\'s trained XGBoost model will re-generate forecasted data.',
    tech: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'Leaflet', 'Tailwind CSS', 'MySQL'],
    liveURL: 'https://hydrohub.cordimap.site/',
  },
  {
    label: 'Aeiluminate',
    image: '/projects/aeiluminate.png',
    description: 'A social media web application made for the alumni of Saint Louis University.',
    tech: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Python', 'MySQL'],
    liveURL: 'https://aeiluminate.vercel.app/login',
  },
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(1);
  const active = projects[activeIndex]
  const isPhone = useMediaQuery('(max-width: 639px)')
  const isTablet = useMediaQuery('(max-width: 1023px)')

  return (
    <section
      id="projects"
      className="scroll-mt-[var(--navbar-height)] py-12 md:py-24 sm:px-4 md:px-8 lg:px-16 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeader>Projects</SectionHeader>

        {/* stacked panels on phones so the screenshots stay readable; remount on switch */}
        <AccordionGallery
          key={isPhone ? 'vertical' : 'horizontal'}
          items={projects.map(p => ({ image: p.image, label: p.label }))}
          defaultIndex={activeIndex}
          onActiveChange={setActiveIndex}
          orientation={isPhone ? 'vertical' : 'horizontal'}
          height={isPhone ? 260 : isTablet ? 320 : 370}
          expandRatio={0.66}
          accentColor="#14b8a6"
          overlayColor="#0b1120"
          radius={14}
          gap={10}
        />

        {/* Details for the selected project: hairline + slanted bar like the footer, announced on change */}
        <div className="relative mt-8 pt-8 border-t border-[var(--color-text-dark)]/10 dark:border-[var(--color-text-light)]/10">
          <span
            aria-hidden="true"
            className="absolute -top-[3px] left-0 w-20 h-[5px] bg-[var(--color-accent-bright)] [clip-path:polygon(4px_0,100%_0,calc(100%-4px)_100%,0_100%)]"
          />

          <div
            key={activeIndex}
            aria-live="polite"
            className="grid gap-6 md:grid-cols-12 md:gap-10 motion-safe:animate-[project-swap_350ms_cubic-bezier(0.16,1,0.3,1)]"
          >
            <div className="md:col-span-7">
              <h3 className="font-heading font-semibold text-2xl md:text-3xl leading-tight">
                {active.label}
              </h3>
              <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-[var(--color-text-dark)]/80 dark:text-[var(--color-text-light)]/80">
                {active.description}
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col gap-5">
              <ul className="flex flex-wrap gap-1.5" aria-label="Built with">
                {active.tech.map(t => (
                  <li
                    key={t}
                    className="text-xs text-[var(--color-accent)] border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 rounded px-2 py-1"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <a
                href={active.liveURL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-fit inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 rounded-lg px-5 py-3 text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Live Site
                <span className="sr-only">for {active.label} (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
