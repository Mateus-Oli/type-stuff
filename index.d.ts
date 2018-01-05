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
}
