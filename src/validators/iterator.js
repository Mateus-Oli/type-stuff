export const iteratorValidator = {
  iterator(value) { return isIterator(value); },
  iterable(value) { return isIterable(value); }
};

const isIterable = value => !!value && !isIterator(value) && !!value[Symbol.iterator];
const isIterator = value => !!value && value.constructor === Iterator;

const Iterator = (function*() {})().constructor;
