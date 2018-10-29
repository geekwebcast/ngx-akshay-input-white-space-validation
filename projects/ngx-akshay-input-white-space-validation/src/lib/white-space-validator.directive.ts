import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, FormControl } from '@angular/forms';

@Directive({
  selector: '[whiteSpaceValidator] [ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: WhiteSpaceValidatorDirective,
      multi: true
    }
  ]
})
export class WhiteSpaceValidatorDirective implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = this.textValidator();
  }
  validate(c: FormControl) {
    return this.validator(c);
  }

  textValidator(): ValidatorFn {
    return (c: FormControl) => {
      let isValid = /^\s+$/.test(c.value);
      if (!isValid) {
        return null;
      } else {
        return {
          whiteSpaceValidator: {
            valid: true
          }
        };
      }
    }
  }
}