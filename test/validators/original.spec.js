import { originalValidator } from "../../src/validators/original";

describe('original validator', () => {
  it('replicates typeof', () => {
    expect(originalValidator.original('')).toBe('string');
    expect(originalValidator.original(1)).toBe('number');
    expect(originalValidator.original(true)).toBe('boolean');

    expect(originalValidator.original({})).toBe('object');
    expect(originalValidator.original(() => {})).toBe('function');

    expect(originalValidator.original(undefined)).toBe('undefined');
  });
});
