import { promiseValidator } from "../../src/validators/promise";


describe('promise validator', () => {
  it('check promiseLike', () => {

    expect(promiseValidator.promiseLike({ then() {} })).toBe(true);

    expect(promiseValidator.promiseLike(new Promise(resolve => resolve()))).toBe(false);

    expect(promiseValidator.promiseLike({})).toBe(false);
    expect(promiseValidator.promiseLike()).toBe(false);
  });
});
