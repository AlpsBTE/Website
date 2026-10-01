import type en from './translations/en.json'

export type TranslationSet = typeof en

export const languages = ['de', 'en', 'fr', 'it'] as const
export type Language = (typeof languages)[number]

export const languageLabels: Record<Language, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
}

// Recursive dot-path type for translation keys

type DepthCounter = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

type TranslationPathFactory<T, D extends number = 5> = [D] extends [never]
  ? never
  : T extends object
    ? T extends readonly unknown[]
      ? never
      : {
          [K in keyof T]-?: K extends string | number
            ? T[K] extends object
              ? T[K] extends readonly unknown[]
                ? K
                : K | `${K}.${TranslationPathFactory<T[K], DepthCounter[D]>}`
              : K
            : never
        }[keyof T]
    : never

export type TranslationPath = TranslationPathFactory<TranslationSet>
