import { observable, action, makeAutoObservable } from 'mobx';
import { create, persist } from 'mobx-persist';
import type { ISet, Language } from '@alpsbte/shared/language';
import { fetchTestdata } from '@alpsbte/shared/language';
import { LanguageEnum } from '@alpsbte/shared/language';
import { IStore } from '../interfaces/store';

export class LanguageStore implements IStore {
  storeKey = 'languageStore' as const;
  @persist @observable language: Language = LanguageEnum.de;
  @observable set?: ISet;

  constructor() {
    makeAutoObservable(this);
    (async () => (this.set = await this.fetchSet(this.language)))();
  }

  @action async fetchSet(language: Language): Promise<ISet> {
    return <ISet>await fetchTestdata(language);
  }

  @action setLanguage(language: Language): void {
    this.language = language;
  }
}

const hydrate = create({ storage: localStorage });

export const languageStore = new LanguageStore();

hydrate<LanguageStore>(languageStore.storeKey, languageStore);
