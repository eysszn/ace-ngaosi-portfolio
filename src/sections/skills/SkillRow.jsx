export default function SkillRow({ label, icon: Icon, skills, skillIcons }) {
  return (
    <li className="group grid gap-4 md:grid-cols-12 md:gap-8 py-6 md:py-8 border-b border-[var(--color-text-dark)]/10 dark:border-[var(--color-text-light)]/10">
      <div className="md:col-span-4 flex items-center gap-3 self-start">
        <Icon size={20} aria-hidden="true" className="flex-none text-[var(--color-accent)]" />
        <h3 className="font-heading font-semibold text-xl md:text-2xl transition-colors duration-300 group-hover:text-[var(--color-accent)]">
          {label}
        </h3>
      </div>

      <ul className="md:col-span-8 flex flex-wrap gap-x-6 gap-y-3 md:gap-x-8 md:gap-y-4">
        {skills.map(({ name, icon }, i) => {
          const SkillIcon = skillIcons[icon]
          return (
            <li key={name} className="flex items-center gap-2.5 text-base">
              {SkillIcon && (
                // icons light up left to right when the row is hovered
                <SkillIcon
                  size={20}
                  aria-hidden="true"
                  style={{ transitionDelay: `${i * 40}ms` }}
                  className="flex-none text-[var(--color-text-dark)]/45 dark:text-[var(--color-text-light)]/45 transition-colors duration-300 group-hover:text-[var(--color-accent)] motion-reduce:transition-none"
                />
              )}
              <span>{name}</span>
            </li>
          )
        })}
      </ul>
    </li>
  )
}
