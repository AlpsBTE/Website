import { get } from 'object-path';
import type { Path } from 'object-path';

/**
 * @param obj initial object
 * @param path path to the property of obj
 */
/*eslint-disable */
export function deepFind<T extends { [key: string]: any }>(
  obj: T,
  path: Path
): any {
  return get(obj, path);
}
/*eslint-enable */
