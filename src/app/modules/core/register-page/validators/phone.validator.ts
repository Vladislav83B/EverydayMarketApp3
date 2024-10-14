import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[validatePhone]',  
  providers: [
    { provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true }
  ]
})
export class PhoneValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const validPhone = /^\d{10}$/.test(control.value);  
    return validPhone ? null : { invalidPhoneNumber: true };
  }
}