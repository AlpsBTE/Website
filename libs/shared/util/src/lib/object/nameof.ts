/* eslint-disable */
export function nameof<T>(
  obj: T,
  expression: (x: { [P in keyof T]: () => string }) => () => string
): string {
  const res: { [P in keyof T]: () => string } = {} as {
    [P in keyof T]: () => string;
  };

  Object.keys(obj).map((k) => (res[k] = () => k));

  return expression(res)();
}
