/*eslint-disable */
import { observable, action, makeAutoObservable, toJS } from 'mobx';
import { create, persist } from 'mobx-persist';
import type { ISet, Language } from '@alpsbte/shared/language';
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

  constructor() {
    makeAutoObservable(this);
    (async () => (this._set = await this.fetchSet(this.language)))();
  }

  @action async fetchSet(language: Language): Promise<ISet> {
    return await fetchTestdata(language);
  }

  @action setLanguage(language: Language): void {
    this.language = language;
    (async () => (this._set = await fetchTestdata(language)))();
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