import { observable, action, makeAutoObservable } from 'mobx';
import type { Language } from '@alpsbte/shared/language';
import { LanguageEnum } from '@alpsbte/shared/language';

export class LanguageStore {
  @observable language: Language = LanguageEnum.de;

  constructor() {
    makeAutoObservable(this);
  }

  @action setLanguage(language: Language): void {
    this.language = language;
  }
}

export const languageStore = new LanguageStore();
