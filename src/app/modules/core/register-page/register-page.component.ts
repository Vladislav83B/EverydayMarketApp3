import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PhoneValidatorDirective } from '../register-page/validators/phone.validator';
import { CountryValidatorDirective } from '../register-page/validators/country.validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  user = {
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    province: '',
    country: '',
    terms: false
  };

  provinces = ['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 'Saskatchewan', 'Nova Scotia', 'Newfoundland and Labrador'];
  countries = ['Canada', 'United States'];

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/products']);
    }
  }
}