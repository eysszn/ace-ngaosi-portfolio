import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    let frameId

    const updateActiveSection = () => {
      frameId = undefined
      const checkpoint = window.innerHeight * 0.35
      const activeSection = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .filter((section) => section.getBoundingClientRect().top <= checkpoint)
        .at(-1)

      setActiveId(activeSection?.id ?? null)
    }

    const handleScroll = () => {
      if (frameId === undefined) {
        frameId = window.requestAnimationFrame(updateActiveSection)
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (frameId !== undefined) window.cancelAnimationFrame(frameId)
    }
  }, [sectionIds])

  return activeId
}