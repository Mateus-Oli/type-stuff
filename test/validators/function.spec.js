import { functionValidator } from "../../src/validators/function";

describe('function validator', () => {
  it('check lambda', () => {
    /* Works only with true lambdas */

    // expect(functionValidator.lambda(() => 3)).toBe(true);

    expect(functionValidator.lambda(async () => 3)).toBe(false);
    expect(functionValidator.lambda(function() {})).toBe(false);
    expect(functionValidator.lambda(function*() {})).toBe(false);
    expect(functionValidator.lambda(class {})).toBe(false);

    expect(functionValidator.lambda({})).toBe(false);
    expect(functionValidator.lambda()).toBe(false);
  });

  it('check class', () => {
    /* Works only with true classes */

    // expect(functionValidator.class(class {})).toBe(true);

    expect(functionValidator.class(() => 3)).toBe(false);
    expect(functionValidator.class(async () => 3)).toBe(false);
    expect(functionValidator.class(function() {})).toBe(false);
    expect(functionValidator.class(function*() {})).toBe(false);

    expect(functionValidator.class({})).toBe(false);
    expect(functionValidator.class()).toBe(false);
  });

  it.skip('check async', () => {
    /* Works only with true async functions */

    expect(functionValidator.async(async () => 3)).toBe(true);

    expect(functionValidator.async(class {})).toBe(true);
    expect(functionValidator.async(() => 3)).toBe(false);
    expect(functionValidator.async(function() {})).toBe(false);
    expect(functionValidator.async(function*() {})).toBe(false);

    expect(functionValidator.async({})).toBe(false);
    expect(functionValidator.async()).toBe(false);
  });


  it('check generator', () => {

    expect(functionValidator.generator(function*() {})).toBe(true);

    expect(functionValidator.generator(class {})).toBe(false);
    expect(functionValidator.generator(() => 3)).toBe(false);
    expect(functionValidator.generator(async () => 3)).toBe(false);
    expect(functionValidator.generator(function() {})).toBe(false);

    expect(functionValidator.generator({})).toBe(false);
    expect(functionValidator.generator()).toBe(false);
  });
});
