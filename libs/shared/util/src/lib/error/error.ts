/**
 * @param message The error message that will display on throw
 * @returns never
 */
export function throwError(message?: string): never {
  throw new Error(`AlpsBTE Error: ${message}`);
}
