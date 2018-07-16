import { FormControl, FormGroup, FormArray, FormBuilder, AbstractControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


  // 自定义formControl的校验方法
export const mobileValidator: ValidatorFn = (mobile: FormControl): ValidationErrors | null => {
    let value = (mobile.value || '') + '';
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(value);
    // console.log("mobile是否校验通过: " + valid);
    
    return valid ? null : {mobile: true};
  }

  export const mobileAsyncValidator: ValidatorFn = (mobile: FormControl): ValidationErrors | null => {
    let value = (mobile.value || '') + '';
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(value);
    // console.log("mobile是否校验通过: " + valid);
    
    return of(valid? null: {mobile: true}).pipe(delay(5000));
  }


  // 自定义formGroup的校验方法
export const passwordValidator: ValidatorFn = (info: FormGroup): ValidationErrors | null => {
    
    // formGroupName 是passwordInfo
    let password = info.get('passwordInfo').value.password;

    let passwordConfirm = info.get('passwordInfo').value.passwordConfirm;

    let valid:boolean = password === passwordConfirm;
    
    // console.log('password 是否校验通过:', valid);

    return valid ? null : {password: {description: '密码和确认密码不匹配'}};
  }