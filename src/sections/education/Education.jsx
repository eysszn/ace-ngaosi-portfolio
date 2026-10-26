import { Award, Trophy, ExternalLink } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";

const schools = [
  {
    years: '2020 - 2022',
    school: 'University of Baguio - Senior High School',
    program: 'Science, Technology, Engineering, and Mathematics - Engineering Strand',
    awards: [
      { label: 'With Honors', icon: Award },
    ],
  },
  {
    years: '2022 - 2026',
    school: 'Saint Louis University',
    program: 'Bachelor of Science in Information Technology',
    awards: [
      { label: 'Magna Cum Laude', icon: Award },
      {
        label: 'BPI-DOST Innovation Awards Finalist',
        icon: Trophy,
        href: 'https://www.slu.edu.ph/2025/12/15/slu-bsit-students-earn-top-10-spot-at-bpi-dost-innovation-awards-2025-with-environmental-technology-solution/',
      },
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-12 sm:px-4 md:px-8 lg:px-16 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] scroll-mt-[var(--navbar-height)]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader>Education</SectionHeader>

        {/* Left-to-right progression, oldest first */}
        <ol className="grid gap-12 md:grid-cols-2 md:gap-10">
          {schools.map(({ years, school, program, awards }) => (
            <li key={school}>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="flex-none size-[11px] rounded-full bg-[var(--color-accent)]" />
                <span className="text-sm font-semibold tabular-nums text-[var(--color-accent)]">{years}</span>
                <span aria-hidden="true" className="flex-1 h-px bg-[var(--color-text-dark)]/15 dark:bg-[var(--color-text-light)]/15" />
              </div>

              <h3 className="mt-5 font-heading font-semibold text-xl md:text-2xl leading-tight text-balance">
                {/* keep " - " at the end of the first line rather than starting the second */}
                {school.replace(' - ', '\u00a0- ')}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-text-dark)]/70 dark:text-[var(--color-text-light)]/70">
                {program}
              </p>

              <ul className="mt-5 flex flex-col items-start gap-2.5">
                {awards.map(({ label, icon: Icon, href }) => (
                  <li key={label} className="flex items-center gap-2 text-sm font-semibold">
                    <Icon size={16} aria-hidden="true" className="flex-none text-[var(--color-accent)]" />
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-sm underline decoration-[var(--color-accent)]/40 underline-offset-4 hover:decoration-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                      >
                        {label}
                        <ExternalLink size={13} aria-hidden="true" className="flex-none" />
                      </a>
                    ) : (
                      label
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
