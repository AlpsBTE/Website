import { observable, action, makeAutoObservable } from 'mobx';
import { Language, LanguageEnum } from '../language/index';

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
