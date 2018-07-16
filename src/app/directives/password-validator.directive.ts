import { Directive } from '@angular/core';
import { passwordValidatorTemlate } from '../validators/validators';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[password]',
  providers: [{provide: NG_VALIDATORS, useValue: passwordValidatorTemlate, multi: true}]  
})
export class PasswordValidatorDirective {

  constructor() { }

}
