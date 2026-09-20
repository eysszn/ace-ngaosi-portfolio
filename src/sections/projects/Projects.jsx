import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import AccordionGallery from '../../components/AccordionGallery/AccordionGallery';

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

  return (
    <section
      id="projects"
      className="flex flex-col justify-center px-8 md:px-16 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader>Projects</SectionHeader>

        <AccordionGallery
          items={projects.map(p => ({ image: p.image, label: p.label }))}
          defaultIndex={1}
          onActiveChange={setActiveIndex}
          height={370}
          expandRatio={0.66}
          accentColor="#5dcaa5"
          overlayColor="#0b1120"
          radius={14}
          gap={10}
        />

        <div className="flex flex-col md:flex-row gap-6 items-start border-t-2 border-[var(--color-accent-dark)] pt-5 mt-5">
          <div className="flex-1">
            <h3 className="font-bold text-base mb-1.5">
              {active.label}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--color-text-dark)]/80 dark:text-[var(--color-text-light)]/80">
              {active.description}
            </p>
          </div>

          <div className="flex-none md:w-[38%] flex flex-col gap-3">
            <div className="flex flex-wrap gap-1.5">
              {active.tech.map(t => (
                <span
                  key={t}
                  className="text-xs text-[var(--color-accent)] border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 rounded px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex">
              <a
                href={active.liveURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[var(--color-accent-dark)] rounded-md px-3.5 py-2 text-xs font-semibold text-[var(--color-bg-light)]"
              >
                <ExternalLink size={13} /> Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}