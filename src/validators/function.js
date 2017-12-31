export const functionValidator = {
  class(value) { return isClass(value); },
  lambda(value) { return isLambda(value); },

  async(value) { return isAsync(value); },
  generator(value) { return isGenerator(value); }
};


let GeneratorFunction = (function*() {}).constructor;
let AsyncFunction = (async function() {}).constructor;

GeneratorFunction = GeneratorFunction !== Function ? GeneratorFunction : undefined;
AsyncFunction = AsyncFunction !== Function ? AsyncFunction : undefined;

const isClass = value => isConstructor(value) && !!value.toString().match(/^class/);

const isConstructor = value => isFunction(value) && !!value.prototype;
const isLambda = value => isFunction(value) && !value.prototype;

const isGenerator = value => !!GeneratorFunction && value instanceof GeneratorFunction;
const isAsync = value => !!AsyncFunction && value instanceof AsyncFunction;

const isFunction = value => typeof value === 'function';
