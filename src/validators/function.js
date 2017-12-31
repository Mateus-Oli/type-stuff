export const functionValidator = {
  class(value) { return isClass(value); },
  lambda(value) { return isLambda(value); },

  async(value) { return isAsync(value); },
  generator(value) { return isGenerator(value); }
};

const isClass = value => isConstructor(value) && !!value.toString().match(/^class/);

const isConstructor = value => isFunction(value) && !!value.prototype;
const isLambda = value => isFunction(value) && !value.prototype;

const isGenerator = value => isFunction(value) && value.constructor === GeneratorFunction;
const isAsync = value => isFunction(value) && value.constructor === AsyncFunction;

const isFunction = value => typeof value === 'function';

const AsyncFunction = (async function() {}).constructor;
const GeneratorFunction = (function*() {}).constructor;
