/* eslint-disable */

/**
 * @param obj object you want to get a propname of
 * @param selector callback with the initial object as argument.
 * @returns string of keyof the selector return value
 */
export function propnameOf<T extends { [x: string]: unknown }>(
  obj: T,
  selector: (x: { [K in keyof T]: keyof T }) => keyof T
): keyof T {
  const keyRecord = Object.keys(obj).reduce((res, key) => {
    const typedKey = key as keyof T;
    res[typedKey] = typedKey;
    return res;
  }, {} as Record<keyof T, keyof T>);
  return selector(keyRecord);
}

/**
 * @param elmt variable you want to the receive the name of as an OBJECT!
 *
 * Example:
 *
 * const testVariable = "test";
 * nameOf<typeof testVariable>({ testVariable }); -> "testVariable"
 * @returns The variable's name as string
 */
export function nameOf<T extends any>(elmt: {
  [variableName: string]: T;
}): string {
  return Object.keys(elmt)[0];
}
