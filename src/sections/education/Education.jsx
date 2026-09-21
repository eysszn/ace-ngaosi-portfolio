import { Award, Trophy, ExternalLink } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";

export default function Education() {
  return (
    <section id="education" className="py-12 px-8 md:px-16 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] scroll-mt-[var(--navbar-height)]">
      {/* Main Div */}
      <div>
        <SectionHeader>Education</SectionHeader>
        {/* Education Cards Div */}
        <div className="relative flex flex-col md:flex-row justify-between items-stretch gap-10 md:gap-6">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[15px] left-[7%] right-[7%] h-0.5 bg-[var(--color-accent-dark)]" />

          {/* Senior High Card */}
          <div className="relative flex-1 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[var(--color-accent-dark)] flex items-center justify-center z-10 mb-6" />

            <div className="w-full h-48 bg-black/5 dark:bg-white/5 rounded-xl p-6 flex flex-col items-center text-center">
              <p className="text-xs font-semibold text-[var(--color-text-dark)]/60 dark:text-[var(--color-text-light)]/60 mb-1.5">
                2020 - 2022
              </p>
              <p className="font-bold text-base mb-1 text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]">
                University of Baguio - Senior High School
              </p>
              <p className="text-xs text-[var(--color-text-dark)]/60 dark:text-[var(--color-text-light)]/60 mb-4">
                Science, Technology, Engineering, and Mathematics - Engineering Strand
              </p>

              {/* Award in Senior High */}
              <div className="mt-auto inline-flex items-center gap-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/40 rounded-md px-2.5 py-1.5">
                <Award size={13} className="text-[var(--color-accent)]" />
                <span className="text-xs font-semibold text-[var(--color-accent)]">With Honors</span>
              </div>
            </div>
          </div>

          {/* College Card */}
          <div className="relative flex-1 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[var(--color-accent-dark)] flex items-center justify-center z-10 mb-6" />

            <div className="w-full h-48 bg-black/5 dark:bg-white/5 rounded-xl p-6 flex flex-col items-center text-center">
              <p className="text-xs font-semibold text-[var(--color-text-dark)]/60 dark:text-[var(--color-text-light)]/60 mb-1.5">
                2022 - 2026
              </p>
              <p className="font-bold text-base mb-1 text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]">
                Saint Louis University
              </p>
              <p className="text-xs text-[var(--color-text-dark)]/60 dark:text-[var(--color-text-light)]/60 mb-4">
                Bachelor of Science in Information Technology
              </p>

              {/* Awards in College */}
              <div className="mt-auto flex flex-col items-center gap-2">
                <div className="inline-flex items-center gap-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/40 rounded-md px-2.5 py-1.5">
                  <Award size={13} className="text-[var(--color-accent)]" />
                  <span className="text-xs font-semibold text-[var(--color-accent)]">Magna Cum Laude</span>
                </div>
                <a
                  href="https://www.slu.edu.ph/2025/12/15/slu-bsit-students-earn-top-10-spot-at-bpi-dost-innovation-awards-2025-with-environmental-technology-solution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[var(--color-accent-dark)] rounded-md px-2.5 py-1.5 hover:opacity-90 transition-opacity"
                >
                  <Trophy size={13} className="text-[var(--color-bg-light)]"/>
                  <span className="text-xs font-semibold text-[var(--color-bg-light)]">
                    BPI-DOST Innovation Awards Finalist
                  </span>
                  <span className="w-px h-3 bg-[var(--color-bg-light)]/40" />
                  <span className="text-xs font-semibold text-[var(--color-bg-light)] flex items-center gap-1">
                    <ExternalLink size={11}/>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}