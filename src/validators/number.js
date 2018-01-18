export const numberValidator = {
  nan: x => Number.isNaN(x),

  double: x => isDouble(x),
  integer: x => Number.isInteger(x),

  infinite: x =>isInfinite(x)
};

const isDouble = x => typeof x === 'number' && !Number.isNaN(x) && x !== Math.round(x);
const isInfinite = x => x === Infinity || x === -Infinity;
