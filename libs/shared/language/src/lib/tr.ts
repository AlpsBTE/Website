/* eslint-disable-next-line */
import { languageStore } from '@alpsbte/shared/stores';
import { deepFind } from '@alpsbte/shared/util';
import { ISet } from './interfaces/set';

const data = {
  foo: 'foo',
  bar: 'bar',
  layer1: {
    foo: 'foo',
    layer2: {
      foo: 'foo',
      bar: 'bar',
    },
  },
};

type Limiter = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[]
];

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

type TranslationPath = Paths<typeof languageStore.set>;

export type TranslationKey =
  `${keyof typeof languageStore.set}.${keyof typeof languageStore.set.home}`;

export function tr(key: TranslationKey): string {
  return deepFind<ISet>(languageStore.set, key);
}
