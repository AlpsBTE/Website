/* eslint-disable*/
export enum LanguageEnum {
  de = 'de',
  en = 'en',
  fr = 'fr',
}

export type Language = keyof typeof LanguageEnum;

export const languages = Object.keys(LanguageEnum);
/* eslint-enable */
