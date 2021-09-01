/* eslint-disable-next-line */
import { languageStore } from '@alpsbte/shared/stores';
import { deepFind } from '@alpsbte/shared/util';

export type TranslationKey = string[] | string;

export function tr(key: TranslationKey): string {
  return deepFind(languageStore.set, key);
}
