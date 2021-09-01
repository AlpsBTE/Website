import { throwError } from './error';

describe('throwError', () => {
  it('should throw a custom error message', () => {
    expect(throwError).toThrow(Error);
  });
});
