import { throwError } from './error';

describe('throwError', () => {
  it('should shrow a custom error message', () => {
    expect(throwError('this is a test error')).toThrowError();
  });
});
