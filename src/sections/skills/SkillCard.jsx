export default function SkillCard({ label, icon: Icon, skills, skillIcons }) {
  return (
    <div className="w-full bg-black/5 dark:bg-white/5 rounded-xl p-5 border-2 border-transparent hover:border-[var(--color-accent)] transition-colors duration-300">
      <div className="flex items-center gap-3 mb-3.5">
        <Icon size={20} className="text-[var(--color-accent)]" />
        <span className="font-bold text-xl">{label}</span>
      </div>
      <div className="flex flex-wrap gap-3.5">
        {skills.map(({ name, icon }) => {
          const SkillIcon = skillIcons[icon]
          return (
            <span
              key={name}
              className="group flex items-center justify-between gap-3 text-[14px] bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] rounded px-2.5 py-1.5 cursor-default transition-all duration-200 hover:scale-105 hover:bg-[var(--color-accent-dark)] hover:text-[var(--color-bg-light)]"
            >
              <span>{name}</span>
              {SkillIcon && (
                <SkillIcon
                  size={20}
                  className="transition-colors duration-200 group-hover:text-[var(--color-bg-light)]"
                />
              )}
            </span>
          )
        })}
      </div>
    </div>
  )
}