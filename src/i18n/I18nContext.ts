import { createContext } from 'react'
import type { Language, TranslationSet } from './types'

export interface I18nContextValue {
  language: Language
  set: TranslationSet
  setLanguage: (lang: Language) => void
}

export const I18nContext = createContext<I18nContextValue | null>(null)
