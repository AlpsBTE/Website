import { deepFind } from './deepFind';

describe('deepFind', () => {
  it("should return an object's nested value at a given path", () => {
    const testObject = {
      foo: 'foo',
      bar: {
        data: {
          result: 'targetFound',
        },
      },
    };
    expect(deepFind(testObject, 'bar.data.result')).toEqual('targetFound');
  });
});
