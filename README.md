# Type Stuff

[![NPM](https://nodei.co/npm/type-stuff.png)](https://nodei.co/npm/type-stuff/)

[![Build Status](https://travis-ci.org/Mateus-Oli/type-stuff.svg?branch=master)](https://travis-ci.org/Mateus-Oli/type-stuff)
[![Maintainability](https://api.codeclimate.com/v1/badges/e15c4505d289e0b67dc2/maintainability)](https://codeclimate.com/github/Mateus-Oli/type-stuff/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/e15c4505d289e0b67dc2/test_coverage)](https://codeclimate.com/github/Mateus-Oli/type-stuff/test_coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/mateus-oli/type-stuff/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mateus-oli/type-stuff?targetFile=package.json)

[![dependencies](https://david-dm.org/Mateus-Oli/type-stuff.svg)](https://david-dm.org/Mateus-Oli/type-stuff)
[![devDependencies](https://david-dm.org/Mateus-Oli/type-stuff/dev-status.svg)](https://david-dm.org/Mateus-Oli/type-stuff)
[![perrDependencies](https://david-dm.org/Mateus-Oli/type-stuff/peer-status.svg)](https://david-dm.org/Mateus-Oli/type-stuff)

## Install
```bash
$ npm i type-stuff
```

## Basic Usage
```typescript
import { typeOf } from 'type-stuff';

class Constructor {}

typeOf(new Constructor): 'constructor';

typeOf(3): 'integer';
typeOf(3.1): 'double';
typeOf(Infinity): 'infinity';
typeOf(NaN): 'nan';

typeOf(() => ''): 'lambda';
typeOf(Constructor): 'class';
typeOf(function() {}): 'function';

typeOf(null): 'null';
typeOf(undefined): 'undefined';
```

## Change Null and Undefined
```typescript
import { typeOf } from 'type-stuff';

typeOf.setNull('empty');
typeOf.setUndefined('empty');

typeOf(null): 'empty';
typeOf(undefined): 'empty';
```

## Add Validator
```typescript
import { typeOf } from 'type-stuff';

class Constructor {};

typeOf.validate({
  promiseLike(value) { return typeof value.then === 'function'; },
  array(value, typeOf) { return value instanceof Array && `${typeOf(value[0])}[]`; }
});

typeOf({ then() {} }): 'promiseLike';
typeOf([1]): 'integer[]';
```

## Create typeOf
```typescript
import { typeOfFactory } from 'type-stuff';

const typeOf = typeOfFactory({ /* validators */ });

typeOf({}): 'unknown';
```

## Set Symbols
```typescript
import { typeOf, typeOfFactory } from 'type-stuff';

  const factorySymbol = {
    [typeOfFactory.type]: 'factory'
  };
  const functionSymbol = {
    [typeOf.type]: 'function'
  };

  typeOf(factorySymbol): 'factory';
  typeOf(functionSymbol): 'function';
```

## Validators
```typescript
import {
  constructorValidator,
  functionValidator,
  numberValidator,
  originalValidator,
  interfaceValidator
} from 'type-stuff';

class Stuff {}
originalValidator.original(?) === typeof ?;

constructorValidator.constructor(new Stuff): 'stuff';

functionValidator.lambda(() => {}): true;
functionValidator.class(Stuff): true;

numberValidator.interger(1): true;
numberValidator.double(.1): true;
numberValidator.nan(NaN): true;
numberValidator.infinite(Infinity): true;

interfaceValidator.promiseLike({ then() {} }): true;
interfaceValidator.iterableLike({ [Symbol.iteratro]() {} }): true;
interfaceValidator.monadLike({ flatMap() {}, map() {} }): true;
interfaceValidator.functorLike({ map() {} }): true;
interfaceValidator.eventLike({ on() {} } || { addEventListener() {} }): true;
```
