import { useState, useLayoutEffect } from "react";
import { flushSync } from "react-dom";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    // dark by default; light only if the visitor picked it
    return localStorage.getItem('theme') !== 'light'
  })

  useLayoutEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const setTheme = (nextTheme) => {
    const nextValue = typeof nextTheme === 'function' ? nextTheme(isDark) : nextTheme
    const root = document.documentElement

    // swap everything in a single frame so no element changes ahead of the others
    const swap = () => {
      root.classList.toggle('dark', nextValue)
      flushSync(() => setIsDark(nextValue))
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (document.startViewTransition && !reduceMotion) {
      // the browser cross-fades a snapshot of the old page into the new one
      document.startViewTransition(swap)
      return
    }

    // fallback: switch instantly with per-element transitions paused
    root.classList.add('theme-switching')
    swap()
    root.getBoundingClientRect() // commit the new styles before transitions resume
    requestAnimationFrame(() => root.classList.remove('theme-switching'))
  }

  return [isDark, setTheme]
}
