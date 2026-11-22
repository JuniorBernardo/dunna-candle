import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('dunna-theme', theme)
    } catch {
      /* armazenamento indisponível */
    }
  }, [theme])

  const dark = theme === 'dark'
  const Icon = dark ? Sun : Moon
  return (
    <button
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      aria-label={dark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      title={dark ? 'Tema claro' : 'Tema escuro'}
      className="transition-opacity hover:opacity-60"
    >
      <Icon className="size-[18px]" strokeWidth={1.25} />
    </button>
  )
}
