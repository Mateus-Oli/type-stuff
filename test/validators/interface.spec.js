import { interfaceValidator, can } from "../../src/validators/interface";

describe('interface validator', () => {
  it('checks method implementation', () => {

    expect(can({ method: f => f() })('method')).toBe(true);

    expect(can({ method: true })('method')).toBe(false);
    expect(can({})('method')).toBe(false);
    expect(can()('method')).toBe(false);
  });

  it('checks event interface', () => {
    expect(interfaceValidator.eventLike({ on: f => f() })).toBe(true);
    expect(interfaceValidator.eventLike({ addEventListener: f => f() })).toBe(true);

    expect(interfaceValidator.eventLike({})).toBe(false);
  });

  it('checks promise interface', () => {
    expect(interfaceValidator.promiseLike({ then: f => f() })).toBe(true);
    expect(interfaceValidator.promiseLike({})).toBe(false);
  });

  it('checks iterable interface', () => {
    expect(interfaceValidator.iterableLike({ [Symbol.iterator]: f => f() })).toBe(true);
    expect(interfaceValidator.iterableLike({})).toBe(false);
  });

  it('checks functor interface', () => {
    expect(interfaceValidator.functorLike({ map: f => f() })).toBe(true);
    expect(interfaceValidator.functorLike({})).toBe(false);
  });

  it('checks monad interface', () => {
    expect(interfaceValidator.monadLike({ map: f => f(), flatMap: f => f() })).toBe(true);

    expect(interfaceValidator.monadLike({ map: f => f() })).toBe(false);
    expect(interfaceValidator.monadLike({ flatMap: f => f() })).toBe(false);
    expect(interfaceValidator.monadLike({})).toBe(false);
  });
});
