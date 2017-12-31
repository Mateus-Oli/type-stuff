export const numberValidator = {
  nan(value) { return Number.isNaN(value); },

  double(value) { return isDouble(value); },
  integer(value) { return Number.isInteger(value); },

  infinite(value) { return isInfinite(value); }
};

const isDouble = value => typeof value === 'number' && !Number.isNaN(value) && value !== Math.round(value);
const isInfinite = value => value === Infinity || value === -Infinity;
