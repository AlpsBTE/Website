/* eslint-disable */
import { languageStore } from '@alpsbte/shared/stores';
import { deepFind, throwError } from '@alpsbte/shared/util';
import { ISet } from './interfaces/set';

export type Divider = '.';
export type ___ = '';
export type Limit = 10;

// Limiter is needed because type computations could be very complex or infinite
type Limiter = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...0[]];

type TranslationKeyJoin<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${___ extends P ? ___ : Divider}${P}`
    : never
  : never;

type TranslationPathFactory<T, D extends number = Limit> = [D] extends [never]
  ? never
  : T extends { [Z in string | number]: any }
  ? {
      [K in keyof T]-?: K extends string | number
        ? T[K] extends { [Y in string | number]: T[Y] } // not sure if T[Y] is bulletproof
          ? TranslationKeyJoin<K, TranslationPathFactory<T[K], Limiter[D]>>
          :
              | `${K}`
              | TranslationKeyJoin<K, TranslationPathFactory<T[K], Limiter[D]>>
        : never;
    }[keyof T]
  : ___;

export type TranslationPath = TranslationPathFactory<typeof languageStore.set>;

/**
 * @param key (union) all possible language set endpoint-only! paths (this prevents react object render errors)
 * @returns corresponding value on language set at key path argument
 */
export function tr(key: TranslationPath): string {
  return deepFind<ISet>(languageStore.set, key);
}
