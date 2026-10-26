import SectionHeader from "../../components/SectionHeader"

const experiences = [
  {
    dates: 'Oct 2026 - Present',
    role: 'Web Developer',
    company: 'Cre8tive Sync',
    location: 'Remote',
    bullets: [
      'Build and update React frontend features for the company\'s web application, translating requirements into maintainable UI components.',
      'Improve the portfolio section of the company website, showcasing projects to prospective clients to support client conversion.',
    ],
  },
  {
    dates: 'Jan 2026 - May 2026',
    role: 'Software Engineering Intern',
    company: 'Elinnov Technologies, Inc.',
    location: 'Makati City, Metro Manila',
    bullets: [
      'Engineered full-stack features across the full software development life cycle for 2 internal company projects - a job application system and a WordPress Careers Site - using AI-assisted coding tools within an Agile environment, enabling the project\'s launch to production and streamlining the HR team\'s applicant screening process.',
      'Developed backend-integrated solutions using Google Cloud APIs, PDF processing, and AI-powered automation and data analysis, while improving the UI/UX design, maintaining databases, and optimizing application forms for a better applicant experience.',
      'Conducted comprehensive testing using Playwright, collaborated with the Quality Assurance Team to improve application quality and performance, and contributed to thorough project documentation throughout the development lifecycle.',
    ],
  },
  {
    dates: 'Oct 2024 - Dec 2025',
    role: 'IT Committee',
    company: 'Saint Louis University - Commission on Elections',
    location: 'Baguio City, Benguet',
    bullets: [
      'Collaborated with a tean of developer to maintain the SLU-COMELEC web application.',
      'Improved functionality and user experience for the election platform.',
    ]
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-12 md:py-24 sm:px-4 md:px-8 lg:px-16 scroll-mt-[var(--navbar-height)] bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader>Experience</SectionHeader>

        <ol>
          {experiences.map((exp, i) => {
            const current = exp.dates.endsWith('Present')
            return (
              <li key={exp.company} className="relative grid gap-4 md:grid-cols-12 md:gap-10 pl-8 md:pl-12 pb-12 md:pb-16 last:pb-0">
                {/* Rail segment down to the next node; the last role ends the line */}
                {i < experiences.length - 1 && (
                  <span aria-hidden="true" className="absolute left-[5px] top-2 -bottom-2 w-px bg-[var(--color-text-dark)]/15 dark:bg-[var(--color-text-light)]/15" />
                )}

                {/* Node: filled and pulsing for the current role, hollow for past ones */}
                <span aria-hidden="true" className="absolute left-0 top-2 size-[11px]">
                  {current && (
                    <span className="absolute inset-0 rounded-full bg-[var(--color-accent)] animate-ping [animation-duration:2s] motion-reduce:animate-none" />
                  )}
                  <span className={`absolute inset-0 rounded-full border-2 border-[var(--color-accent)] ${current ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)]'}`} />
                </span>

                <div className="md:col-span-5">
                  <h3 className="font-heading font-semibold text-xl md:text-2xl leading-tight">
                    {exp.role}
                  </h3>
                  <p className="mt-1.5 font-medium">
                    {exp.company}
                  </p>
                  <p className="mt-3 flex flex-col sm:flex-row sm:flex-wrap gap-x-2 gap-y-1 text-sm text-[var(--color-text-dark)]/70 dark:text-[var(--color-text-light)]/70">
                    <span className="font-semibold tabular-nums text-[var(--color-accent)]">{exp.dates}</span>
                    <span aria-hidden="true" className="hidden sm:inline">·</span>
                    <span>{exp.location}</span>
                  </p>
                </div>

                <ul className="md:col-span-7 list-disc pl-4 space-y-3 text-[15px] leading-relaxed marker:text-[var(--color-accent)] text-[var(--color-text-dark)]/85 dark:text-[var(--color-text-light)]/85">
                  {exp.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
