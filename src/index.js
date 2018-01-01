import { constructorValidator } from './validators/constructor';
import { functionValidator } from './validators/function';
import { typeOfFactory } from "./typeOf";
import { numberValidator } from './validators/number';

const typeOf = typeOfFactory(Object.assign(
  {},
  constructorValidator,
  numberValidator,
  functionValidator
));

export { typeOf };

export { typeOfFactory };

export { constructorValidator };
export { functionValidator };
export { numberValidator };
