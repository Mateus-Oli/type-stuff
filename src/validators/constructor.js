export const constructorValidator = {
  constructor(value) { return value.constructor.name.replace(/^[A-Z]/, value => value.toLowerCase()); }
};
