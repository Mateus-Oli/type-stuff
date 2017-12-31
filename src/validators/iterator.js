export const iteratorValidator = {
  iterator(value) { return isIterator(value); },
  iterable(value) { return isIterable(value); }
};

let Iterator = function*() {}().constructor;

const isIterable = value => !!value && !isIterator(value) && typeof Symbol !== 'undefined' && !!value[Symbol.iterator];
const isIterator = value => !!Iterator && value instanceof Iterator;

