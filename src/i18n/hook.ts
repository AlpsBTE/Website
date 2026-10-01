import { useContext } from 'react'
import { I18nContext } from './I18nContext'
import type { TranslationPath } from './types'
import { getByPath } from './utils'

export function useTranslation() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useTranslation must be used inside I18nProvider')

  const { language, set, setLanguage } = ctx

  const t = (path: TranslationPath): unknown => {
    return getByPath(set as Record<string, unknown>, path)
  }

  return { t, language, setLanguage }
}
