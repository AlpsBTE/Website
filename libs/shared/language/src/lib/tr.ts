/* eslint-disable */
import { languageStore } from '@alpsbte/shared/stores';
import { deepFind } from '@alpsbte/shared/util';
import { ISet } from './interfaces/set';

// Limiter is needed because type computations could be very complex or infinite
type Limiter = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...0[]];

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, Paths<T[K], Limiter[D]>>
        : never;
    }[keyof T]
  : '';

export type TranslationPath = Paths<typeof languageStore.set>;

export function tr(key: TranslationPath): string {
  const target = deepFind<ISet>(languageStore.set, key);
  if (typeof target === 'object')
    throw new Error(
      'Please only use endpoints since object cannot be rendered'
    );
  return target;
}
