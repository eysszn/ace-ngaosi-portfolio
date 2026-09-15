import SectionHeader from "../../components/SectionHeader"

const experiences = [
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
      className="py-24 px-8 md:px-16 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]"
    >
      <div>
        <SectionHeader>Experience</SectionHeader>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => {
            const flipped = i % 2 === 1
            return (
              <div
                key={exp.company}
                className={`flex flex-col rounded-xl overflow-hidden 
                  ${flipped ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
              >
                {/* Company Info Panel */}
                <div
                  className={`flex-none md:w-[30%] bg-black/5 dark:bg-white/5 p-6 flex flex-col justify-center 
                    ${flipped ? 'md:text-right' : ''
                    }`}
                >
                  <p className="text-xs font-semibold text-[var(--color-accent)] mb-2">
                    {exp.dates}
                  </p>
                  <p className="font-bold text-base mb-1">
                    {exp.role}
                  </p>
                  <p className="text-xs text-[var(--color-text-dark)]/60 dark: text-[var(--color-text-dark)]/60 dark:text-[var(--color-text-light)]/60">
                    {exp.company}
                  </p>
                  <p className="text-xs text-[var(--color-text-dark)]/60 dark: text-[var(--color-text-dark)]/60 dark:text-[var(--color-text-light)]/60 mt-0.5">
                    {exp.location}
                  </p>
                </div>

                {/* Bullet Points Panel */}
                <div className="flex-1 min-w-0 bg-black/[0.02] dark:bg-white/[0.02] p-6 flex flex-col justify-center">
                  <ul className="list-disc pl-4 space-y-2.5 text-sm leading-relaxed">
                    {exp.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}