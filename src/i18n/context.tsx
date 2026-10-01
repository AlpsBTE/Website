import { useState, useCallback, useMemo } from 'react'
import type { Language, TranslationSet } from './types'
import { languages } from './types'
import { I18nContext } from './I18nContext'
import en from './translations/en.json'
import de from './translations/de.json'
import fr from './translations/fr.json'
import it from './translations/it.json'

const translations: Record<Language, TranslationSet> = { en, de, fr, it }

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    return languages.includes(saved as Language) ? (saved as Language) : 'en'
  })

  const set = useMemo(() => translations[language], [language])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }, [])

  const value = useMemo(
    () => ({ language, set, setLanguage }),
    [language, set, setLanguage]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
