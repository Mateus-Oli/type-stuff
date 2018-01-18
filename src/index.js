import { constructorValidator } from './validators/constructor';
import { functionValidator } from './validators/function';
import { typeOfFactory } from "./typeOf";
import { numberValidator } from './validators/number';
import { originalValidator } from './validators/original';
import { interfaceValidator } from './validators/interface';

const typeOf = typeOfFactory(Object.assign(
  {},
  constructorValidator,
  numberValidator,
  functionValidator
));

typeOf.setNull(null);
typeOf.setUndefined(undefined);

export { typeOf };
export { typeOfFactory };

export { interfaceValidator };
export { constructorValidator };
export { functionValidator };
export { numberValidator };
export { originalValidator };
