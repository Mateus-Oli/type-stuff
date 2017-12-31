import { iteratorValidator } from "../../src/validators/iterator";

describe('iterator validator', () => {
  it('check iterator', () => {

    expect(iteratorValidator.iterator(function*() {}())).toBe(true);

    expect(iteratorValidator.iterator({ *[Symbol.iterator]() {} })).toBe(false);

    expect(iteratorValidator.iterator({})).toBe(false);
    expect(iteratorValidator.iterator()).toBe(false);
  });

  it('check iteratable', () => {

    expect(iteratorValidator.iterable({ *[Symbol.iterator]() {} })).toBe(true);

    expect(iteratorValidator.iterable(function*() {}())).toBe(false);

    expect(iteratorValidator.iterable({})).toBe(false);
    expect(iteratorValidator.iterable()).toBe(false);
  });
});
