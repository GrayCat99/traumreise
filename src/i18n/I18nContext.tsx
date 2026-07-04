import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Lang } from '../types'
import { STRINGS, type Strings } from './strings'

const STORAGE_KEY = 'traumreise.lang'

function detectInitialLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'de' || stored === 'en' || stored === 'es') return stored
  return 'de'
}

interface I18nContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  s: Strings
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectInitialLang)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  return <I18nContext.Provider value={{ lang, setLang, s: STRINGS[lang] }}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider')
  return ctx
}
