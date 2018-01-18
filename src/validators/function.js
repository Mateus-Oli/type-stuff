export const functionValidator = {
  class: x => isClass(x),
  lambda: x => isLambda(x)
};

const isClass = x => isConstructor(x) && !!x.toString().match(/^class/);

const isConstructor = x => isFunction(x) && !!x.prototype;
const isLambda = x => isFunction(x) && !x.prototype;

const isFunction = x => typeof x === 'function';
