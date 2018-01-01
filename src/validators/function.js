export const functionValidator = {
  class(value) { return isClass(value); },
  lambda(value) { return isLambda(value); }
};

const isClass = value => isConstructor(value) && !!value.toString().match(/^class/);

const isConstructor = value => isFunction(value) && !!value.prototype;
const isLambda = value => isFunction(value) && !value.prototype;

const isFunction = value => typeof value === 'function';
