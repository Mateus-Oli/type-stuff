export interface TypeOf {
  (value: any): string;

  type: symbol;

  validate(validators: Validators): Validators;

  setUndefined(type: string): string;
  setNull(type: string): string;
}

export function typeOfFactory(validators?: Validators): TypeOf;

type Validators = {
  [type: string]: (value: any) => boolean | string;
};
