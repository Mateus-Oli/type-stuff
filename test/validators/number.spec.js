import { numberValidator } from "../../src/validators/number";

describe('number validator', () => {

  it('check nan', () => {

    expect(numberValidator.nan(NaN)).toBe(true);

    expect(numberValidator.nan(1)).toBe(false);
    expect(numberValidator.nan(-1)).toBe(false);
    expect(numberValidator.nan(.1)).toBe(false);
    expect(numberValidator.nan(-.1)).toBe(false);
    expect(numberValidator.nan(Infinity)).toBe(false);
    expect(numberValidator.nan(-Infinity)).toBe(false);

    expect(numberValidator.nan({})).toBe(false);
    expect(numberValidator.nan('1')).toBe(false);
    expect(numberValidator.nan()).toBe(false);
  });

  it('check double', () => {

    expect(numberValidator.double(.1)).toBe(true);
    expect(numberValidator.double(-.1)).toBe(true);

    expect(numberValidator.double(NaN)).toBe(false);
    expect(numberValidator.double(1)).toBe(false);
    expect(numberValidator.double(-1)).toBe(false);
    expect(numberValidator.double(Infinity)).toBe(false);
    expect(numberValidator.double(-Infinity)).toBe(false);

    expect(numberValidator.double({})).toBe(false);
    expect(numberValidator.double('1')).toBe(false);
    expect(numberValidator.double()).toBe(false);
  });

  it('check integer', () => {

    expect(numberValidator.integer(1)).toBe(true);
    expect(numberValidator.integer(-1)).toBe(true);

    expect(numberValidator.integer(.1)).toBe(false);
    expect(numberValidator.integer(-.1)).toBe(false);
    expect(numberValidator.integer(NaN)).toBe(false);
    expect(numberValidator.integer(Infinity)).toBe(false);
    expect(numberValidator.integer(-Infinity)).toBe(false);

    expect(numberValidator.integer({})).toBe(false);
    expect(numberValidator.integer('1')).toBe(false);
    expect(numberValidator.integer()).toBe(false);
  });

  it('check infinity', () => {

    expect(numberValidator.infinite(Infinity)).toBe(true);
    expect(numberValidator.infinite(-Infinity)).toBe(true);

    expect(numberValidator.infinite(.1)).toBe(false);
    expect(numberValidator.infinite(-.1)).toBe(false);
    expect(numberValidator.infinite(NaN)).toBe(false);
    expect(numberValidator.infinite(1)).toBe(false);
    expect(numberValidator.infinite(-1)).toBe(false);

    expect(numberValidator.infinite({})).toBe(false);
    expect(numberValidator.infinite('1')).toBe(false);
    expect(numberValidator.infinite()).toBe(false);
  });
});
