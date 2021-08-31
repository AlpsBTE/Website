export enum LanguageEnum {
  de = 'de',
  en = 'en',
  fr = 'fr',
}

export type Language = keyof typeof LanguageEnum;