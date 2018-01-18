export const constructorValidator = {
  constructor: x => x.constructor.name.replace(/^[A-Z]/, first => first.toLowerCase())
};
