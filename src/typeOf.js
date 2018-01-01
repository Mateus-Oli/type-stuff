const UNKNOWN = 'unknown';

const EMPTY = {
  [null]: UNKNOWN,
  [undefined]: UNKNOWN
};

function getSymbolReturn(symbol, value, args = []) {
  return typeof value[symbol] === 'function' ? value[symbol](...args) : value[symbol];
}

function getTypeSymbol(typeOf, value = {}) {
  const type = getSymbolReturn(typeOf.type, value, [typeOf]) || getSymbolReturn(typeOfFactory.type, value, [typeOf]);
  return type && `${type}`;
}
function getValidator(validators = [], value, typeOf) {
  for (const [type, validator] of validators) {
    const isType = validator(value, typeOf);
    if (isType) {
      return typeof isType === 'string' ? isType : type;
    }
  }
}
function getEmpty(empty, value) {
  if (isEmpty(value)) {
    return empty[value];
  }
}
function isEmpty(value) {
  return value === undefined || value === null;
}

export const typeOfFactory = validator => {

  const empty = Object.create(EMPTY);
  const validators = [];

  const typeOf = value =>  getEmpty(empty, value) || getTypeSymbol(typeOf, value) || getValidator(validators, value, typeOf) || UNKNOWN;

  typeOf.type = Symbol('type');

  typeOf.validate = (validator = {}) => Object.keys(validator).forEach(i => validators.unshift([i, validator[i]])) || validator;

  typeOf.setNull = value => empty[null] = `${value}`;
  typeOf.setUndefined = value => empty[undefined] = `${value}`;

  typeOf.validate(validator);
  return typeOf;
};

typeOfFactory.type = Symbol('type');
