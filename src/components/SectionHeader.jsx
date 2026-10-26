import { useEffect, useRef, useState } from 'react'

export default function SectionHeader({ children }) {
  const ref = useRef(null)
  // without IntersectionObserver, show the bar straight away
  const [revealed, setRevealed] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    // draw the bar each time the header comes into view...
    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true)
      },
      { rootMargin: '0px 0px -15% 0px' },
    )
    // ...and reset it only once the header is fully off-screen, so it never vanishes while visible
    const resetObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setRevealed(false)
    })
    revealObserver.observe(el)
    resetObserver.observe(el)

    return () => {
      revealObserver.disconnect()
      resetObserver.disconnect()
    }
  }, [])

  return (
    <div ref={ref} className="flex items-end gap-4 sm:gap-6 mb-8 md:mb-12">
      <h2 className="flex-none font-hero font-black uppercase leading-none tracking-[-0.02em] text-[clamp(2.25rem,9vw,4.5rem)] text-[var(--color-bg-dark)] dark:text-[var(--color-bg-light)]">
        {children}
      </h2>

      {/* the hero's slanted bar, drawn in whenever the header scrolls into view;
          the reset has no transition so the bar never visibly retracts */}
      <span
        aria-hidden="true"
        className={`flex-1 min-w-10 h-2 sm:h-2.5 mb-[0.35rem] sm:mb-2 ${revealed ? '[clip-path:inset(0)] transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none' : '[clip-path:inset(0_100%_0_0)]'}`}
      >
        <span className="block h-full bg-[var(--color-accent-bright)] [clip-path:polygon(0.5rem_0,100%_0,calc(100%-0.5rem)_100%,0_100%)]" />
      </span>
    </div>
  )
}
