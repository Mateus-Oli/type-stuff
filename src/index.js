import { constructorValidator } from './validators/constructor';
import { functionValidator } from './validators/function';
import { typeOfFactory } from "./typeOf";
import { numberValidator } from './validators/number';
import { promiseValidator } from './validators/promise';
import { iteratorValidator } from './validators/iterator';

const typeOf = typeOfFactory();

typeOf.validate(constructorValidator);
typeOf.validate(numberValidator);
typeOf.validate(functionValidator);
typeOf.validate(iteratorValidator);
typeOf.validate(promiseValidator);

export { typeOf };

export { typeOfFactory };

export { constructorValidator };
export { functionValidator };
export { iteratorValidator };
export { numberValidator };
export { promiseValidator };
