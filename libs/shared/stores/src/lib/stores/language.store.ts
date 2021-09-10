/*eslint-disable */
import { observable, action, makeAutoObservable, toJS } from 'mobx';
import { create, persist } from 'mobx-persist';
import { languages } from '@alpsbte/shared/language';
import type { Language, ISet } from '@alpsbte/shared/language';
import { fetchTestdata } from '@alpsbte/shared/language';
import { LanguageEnum } from '@alpsbte/shared/language';
import { IStore } from '../interfaces/store';
import { createInstance, WEBSQL } from 'localforage';
import 'reflect-metadata';

export class LanguageStore implements IStore {
  storeKey = 'languageStore' as const;
  @persist @observable language: Language = LanguageEnum.en;
  @observable private _set!: ISet;
  get set(): ISet {
    return toJS(this._set);
  }
  set set(value: ISet) {
    this.set = value;
  }

  @observable isSelectOpened: boolean = false;

  constructor() {
    makeAutoObservable(this);
    (async () => (this._set = await this.fetchSet(this.language)))();
  }

  @action async fetchSet(language: Language): Promise<ISet> {
    return await fetchTestdata(language);
  }

  @action setLanguage(language: Language): void {
    this.language = language;
    (async () => (this._set = await this.fetchSet(language)))();
    const end = window.location.href.split('/').slice(4).join('/');
    window.history.pushState(
      null,
      '',
      languages.includes(end ?? '')
        ? languageStore.language
        : `${languageStore.language}/${end}`
    );
  }

  @action setIsSelectedOpened(value: boolean): void {
    this.isSelectOpened = value;
  }
}

const hydrate = create({
  storage: createInstance({
    storeName: 'languageStore',
    driver: WEBSQL,
  }),
});

export const languageStore = new LanguageStore();

hydrate<LanguageStore>(languageStore.storeKey, languageStore);
