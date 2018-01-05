# typeOf

## Basic Usage
```typescript
import { typeOf } from 'type-of';

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
import { typeOf } from 'type-of';

typeOf.setNull('empty');
typeOf.setUndefined('empty');

typeOf(null): 'empty';
typeOf(undefined): 'empty';
```

## Add Validator
```typescript
import { typeOf } from 'type-of';

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
import { typeOfFactory } from 'type-of';

const typeOf = typeOfFactory({ /* validators */ });

typeOf({}): 'unknown';
```

## Set Symbols
```typescript
import { typeOf, typeOfFactory } from 'type-of';

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
import { constructorValidator, functionValidator, numberValidator, originalValidator } from 'type-of';
```
