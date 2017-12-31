import { constructorValidator } from "../../src/index";


describe('constructor validator', () => {
  it('gets constructor name with first letter decaptalized', () => {
    expect(constructorValidator.constructor({})).toBe('object');
    expect(constructorValidator.constructor(10)).toBe('number');
    expect(constructorValidator.constructor(/a/)).toBe('regExp');
    expect(constructorValidator.constructor(new (class Custom {}))).toBe('custom');
  });
});
