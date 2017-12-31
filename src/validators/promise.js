export const promiseValidator = {
  promiseLike(value) { return isPromiseLike(value); }
};

const isPromiseLike = value => !!value && typeof value.then === 'function' && !(value instanceof Promise);
