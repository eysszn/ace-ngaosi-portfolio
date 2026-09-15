export default function SectionHeader({ children }) {
  return (
    <div className="flex items-center gap-5 mb-10">
      <div className="flex-none bg-[var(--color-accent-dark)] rounded-lg px-8 py-3">
        <span className="font-[family-name:var(--font-heading)] font-bold text-2xl md:text-3xl text-[var(--color-bg-light)] tracking-wide">
          {children}
        </span>
      </div>
      <div className="flex-1 h-1.5 bg-[var(--color-accent-dark)] rounded-full" />
    </div>
  )
}