import { get } from 'object-path';
import type { Path } from 'object-path';

/**
 * @param obj initial object
 * @param path path to the property of obj
 */
export function deepFind<T extends { [x: string]: unknown }>(
  obj: T,
  path: Path
): any {
  return get(obj, path);
}
