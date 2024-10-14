import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[validateCountry]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CountryValidatorDirective, multi: true }
  ]
})
export class CountryValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const validCountry = control.value === 'Canada'; 
    return validCountry ? null : { invalidCountry: true };
  }
}