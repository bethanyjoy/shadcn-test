"use client"

import { useEffect } from "react"

export function ThemeScript() {
  useEffect(() => {
    const script = document.createElement("script")
    script.innerHTML = `
      (function() {
        try {
          const theme = localStorage.getItem('ui-theme') || 'system'
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
          const finalTheme = theme === 'system' ? systemTheme : theme
          
          document.documentElement.classList.add(finalTheme)
        } catch (e) {
          // Fallback to system preference if localStorage is not available
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
          document.documentElement.classList.add(systemTheme)
        }
      })()
    `
    script.setAttribute("data-theme-script", "")
    document.head.appendChild(script)

    return () => {
      const existingScript = document.querySelector('[data-theme-script]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null
} 