import { propnameOf, nameOf } from './of';

const testObject = {
  someProperty: 'someValue',
} as const;

const testString = 'test' as const;
const testNumber = 666 as const;
const testSymbol = Symbol('test');
const testBoolean = true;

describe('propnameOf', () => {
  it("should return a object's property key as string", () => {
    expect(propnameOf(testObject, (x) => x.someProperty)).toEqual(
      'someProperty'
    );
  });
});

describe('nameOf', () => {
  it("should return a string's name as string", () => {
    expect(nameOf<typeof testString>({ testString })).toEqual('testString');
  });

  it("should return a number's name as string", () => {
    expect(nameOf<typeof testNumber>({ testNumber })).toEqual('testNumber');
  });

  it("should return a boolean's name as string", () => {
    expect(nameOf<typeof testBoolean>({ testBoolean })).toEqual('testBoolean');
  });

  it("should return a symbol's name as string", () => {
    expect(nameOf<typeof testSymbol>({ testSymbol })).toEqual('testSymbol');
  });

  it("should return an object's name as string", () => {
    expect(nameOf<typeof testObject>({ testObject })).toEqual('testObject');
  });
});
