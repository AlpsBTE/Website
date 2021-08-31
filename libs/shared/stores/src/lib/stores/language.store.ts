import { observable, action, makeAutoObservable } from 'mobx';
import { create, persist } from 'mobx-persist';
import type { Language } from '@alpsbte/shared/language';
import { LanguageEnum } from '@alpsbte/shared/language';
import { IStore } from '../interfaces/store';

export class LanguageStore implements IStore {
  storeKey = 'languageStore';
  @persist @observable language: Language = LanguageEnum.de;

  constructor() {
    makeAutoObservable(this);
  }

  @action setLanguage(language: Language): void {
    this.language = language;
  }
}

const hydrate = create();

export const languageStore = new LanguageStore();

hydrate(languageStore.storeKey, languageStore);
