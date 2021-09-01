/* eslint-disable */
import { languageStore } from '@alpsbte/shared/stores';
import { deepFind, throwError } from '@alpsbte/shared/util';
import { ISet } from './interfaces/set';

export type Divider = '.';
export type ___ = '';

// Limiter is needed because type computations could be very complex or infinite
type Limiter = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...0[]];

type TranslationKeyJoin<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${___ extends P ? ___ : Divider}${P}`
    : never
  : never;

type TranslationPathFactory<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends { [Z in string | number]: any }
  ? {
      [K in keyof T]-?: K extends string | number
        ? T[K] extends { [Y in string | number]: any }
          ? TranslationKeyJoin<K, TranslationPathFactory<T[K], Limiter[D]>>
          :
              | `${K}`
              | TranslationKeyJoin<K, TranslationPathFactory<T[K], Limiter[D]>>
        : never;
    }[keyof T]
  : ___;

export type TranslationPath = TranslationPathFactory<typeof languageStore.set>;

export function tr(key: TranslationPath): string {
  const target = deepFind<ISet>(languageStore.set, key);
  return target;
}
