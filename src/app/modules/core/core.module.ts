import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterPageComponent } from './register-page/register-page.component';
import { PhoneValidatorDirective } from './register-page/validators/phone.validator';  
import { CountryValidatorDirective } from './register-page/validators/country.validator';


@NgModule({
  declarations: [
    RegisterPageComponent,
    PhoneValidatorDirective,
    CountryValidatorDirective, 
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class CoreModule { }