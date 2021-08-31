import { observable, action, makeAutoObservable } from 'mobx';

export const languages = ['en', 'fr', 'de'] as const;

export type Language = typeof languages[number];

export class LanguageStore {
  @observable language: Language = 'de';

  constructor() {
    makeAutoObservable(this);
  }

  @action setLanguage: (language: Language) => void = (language: Language) => {
    this.language = language;
  };
}

export const languageStore = new LanguageStore();
