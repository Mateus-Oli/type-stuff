declare module 'type-of' {
  interface TypeOf {
    (value: any): string;

    type: symbol;

    validate(validators: Validators): Validators;

    setUndefined(type: string): string;
    setNull(type: string): string;
  }

  interface TypeOfFactory {
    (validators?: Validators): TypeOf;

    type: symbol;
  }

  type Validators = {
    [type: string]: (value: any) => boolean | string;
  };

  export const typeOf: TypeOf;
  export const typeOfFactory: TypeOfFactory;

  export const constructorValidator: {
    constructor(value: any): string;
  }
  export const functionValidator: {
    lambda(value: any): boolean;
    class(value: any): boolean;
  }
  export const numberValidator: {
    nan(value: any): boolean;
    double(value: any): boolean;
    integer(value: any): boolean;
    infinity(value: any): boolean;
  }
  export const originalValidator: {
    original(value: any): string;
  };
  export const interfaceValidator :{
    monadLike(x: any): boolean,
    functorLike(x: any): boolean,
    eventLike(x: any): boolean,
    promiseLike(x: any): boolean,
    iterableLike(x: any): boolean
  };
}
