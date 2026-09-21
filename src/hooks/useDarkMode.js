import { useRef, useState, useLayoutEffect } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const transitionTimeout = useRef(null)

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

    root.classList.add('theme-transition')
    root.classList.toggle('dark', nextValue)

    if (transitionTimeout.current) {
      window.clearTimeout(transitionTimeout.current)
    }

    transitionTimeout.current = window.setTimeout(() => {
      root.classList.remove('theme-transition')
      transitionTimeout.current = null
    }, 250)

    setIsDark(nextValue)
  }

  return [isDark, setTheme]
}