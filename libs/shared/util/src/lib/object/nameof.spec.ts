import { nameof } from './nameof';

describe('nameof', () => {
  it("should return a object' property key as string", () => {
    const testObj = {
      someProperty: 'someValue',
    };
    expect(nameof(testObj, (x) => x.someProperty)).toEqual('someProperty');
  });
});
