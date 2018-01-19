import { typeOfFactory } from "../src/typeOf";

describe('typeOf', () => {
  it('creates typeOf function', () => {
    const typeOf = typeOfFactory();
    expect(typeOf).toBeInstanceOf(Function);
  });

  it('creates typeOf methods and symbol', () => {
    const typeOf = typeOfFactory();

    expect(typeOf.validate).toBeInstanceOf(Function);
    expect(typeOf.setNull).toBeInstanceOf(Function);
    expect(typeOf.setUndefined).toBeInstanceOf(Function);

    expect(typeof typeOf.type).toBe('symbol');
  });

  it('get null and undefined default types', () => {
    const typeOf = typeOfFactory();

    expect(typeOf()).toBe('unknown');
    expect(typeOf(null)).toBe('unknown');
  });

  it('get null and undefined updated types', () => {
    const typeOf = typeOfFactory();

    typeOf.setUndefined('empty');
    typeOf.setNull('empty2');

    expect(typeOf()).toBe('empty');
    expect(typeOf(null)).toBe('empty2');
  });

  it('returns unknown on unknown types', () => {
    const typeOf = typeOfFactory();

    expect(typeOf({})).toBe('unknown');
  });

  it('executes symbol with typeOf argument', () => {
    const typeOf = typeOfFactory();

    typeOf({
      [typeOf.type]: t => expect(t).toBe(typeOf)
    });

    typeOf({
      [typeOfFactory.type]: t => expect(t).toBe(typeOf)
    });
  });

  it('get type from typeOf symbol', () => {
    const typeOf = typeOfFactory();

    const valueType = {
      [typeOf.type]: 'asValue'
    };
    const functionType = {
      [typeOf.type]() { return  'asFunction'; }
    };

    expect(typeOf(valueType)).toBe('asValue');
    expect(typeOf(functionType)).toBe('asFunction');
    expect(typeOfFactory()(valueType)).toBe('unknown');
  });

  it('get type from typeOfFactory symbol', () => {

    const valueType = {
      [typeOfFactory.type]: 'asValue'
    };
    const functionType = {
      [typeOfFactory.type]() { return  'asFunction'; }
    };

    expect(typeOfFactory()(valueType)).toBe('asValue');
    expect(typeOfFactory()(functionType)).toBe('asFunction');
  });

  it('executes validators with right parameters', () => {
    const typeOf = typeOfFactory();

    typeOf.validate({
      validator(value, fn) {
        expect(value).toBe(10);
        expect(fn).toBe(typeOf);
      }
    });

    typeOf(10);
  });

  it('uses validator name as result', () => {
    const typeOf = typeOfFactory();

    typeOf.validate({
      validator(value) { return value === 10; }
    });

    expect(typeOf(10)).toBe('validator');
    expect(typeOf(20)).toBe('unknown');
  });

  it('uses validator return when it is string', () => {
    const typeOf = typeOfFactory();

    typeOf.validate({
      validator(value) { return value === 'test' && 'return'; }
    });

    expect(typeOf('test')).toBe('return');
  });

  it('executes validator on reverse order', () => {
    const typeOf = typeOfFactory();

    typeOf.validate({
      first(){ return true; },
      second() { return true; }
    });

    expect(typeOf(1)).toBe('second');

    typeOf.validate({
      third() { return true; }
    });

    expect(typeOf(2)).toBe('third');
  });

  it('Accepts validators on factory', () => {
    const typeOf = typeOfFactory({
      validator() { return true; }
    });

    expect(typeOf(11)).toBe('validator');
  });

  it('validate first typeOf symbol then typeOfFactory symbol then validator', () => {
    const typeOf = typeOfFactory({
      validator() { return true; }
    });

    const value = {
      [typeOf.type]: 'typeOf',
      [typeOfFactory.type]: 'typeOfFactory'
    };

    expect(typeOf(value)).toBe('typeOf');

    delete value[typeOf.type];
    expect(typeOf(value)).toBe('typeOfFactory');

    delete value[typeOfFactory.type];
    expect(typeOf(value)).toBe('validator');
  });
});
