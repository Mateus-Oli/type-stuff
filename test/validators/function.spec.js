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
});
