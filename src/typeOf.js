const EMPTY = {
  [null]: `${null}`,
  [undefined]: `${undefined}`
};

function getSymbol(typeOf, value = {}) {
  return typeof value[type] === 'function' ? value[type](typeOf) : value[type];
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

const type = Symbol('type');

export const typeOfFactory = validator => {

  const empty = Object.create(EMPTY);
  const validators = [];

  const typeOf = value =>  getEmpty(empty, value) || getSymbol(typeOf, value) || getValidator(validators, value, typeOf) || 'unknown';

  typeOf.type = type;

  typeOf.validate = (validator = {}) => Object.keys(validator).forEach(i => validators.unshift([i, validator[i]])) || validator;

  typeOf.setNull = value => empty[null] = `${value}`;
  typeOf.setUndefined = value => empty[undefined] = `${value}`;

  typeOf.validate(validator);
  return typeOf;
};
