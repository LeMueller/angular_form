import { Directive } from '@angular/core';
import { passwordValidator } from '../validators/validators';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[password]',
  providers: [{provide: NG_VALIDATORS, useValue: passwordValidator, multi: true}]  
})
export class PasswordValidatorDirective {

  constructor() { }

}
