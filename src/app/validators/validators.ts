import { FormControl, FormGroup, FormArray, FormBuilder, AbstractControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


  // 自定义formControl的校验方法
export const mobileValidator: ValidatorFn = (mobile: FormControl): ValidationErrors | null => {
    let value = (mobile.value || '') + '';
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(value);
    console.log("mobile是否校验通过: " + valid);

    return valid ? null : {mobile: true};
}

export const mobileAsyncValidator: ValidatorFn = (mobile: FormControl): ValidationErrors | null => {
    let value = (mobile.value || '') + '';
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(value);
    // console.log("mobile是否校验通过: " + valid);

    return of(valid? null: {mobile: true}).pipe(delay(5000));
}

export const passwordValidatorReactived: ValidatorFn = (info: FormGroup): ValidationErrors | null => {

    let password;
    let passwordConfirm;
    let valid:boolean = false;
    
    // formGroupName 是passwordInfo
    if(info.get('passwordInfo')) {
        password = info.get('passwordInfo').value.password;

        passwordConfirm = info.get('passwordInfo').value.passwordConfirm;

    }
    
    if(password != null && passwordConfirm != null) {
        valid= password === passwordConfirm;
    }
    
    console.log('password 是否校验通过:', valid);

    return valid ? null : {password: {description: '密码和确认密码不匹配'}};
  }


  // 自定义formGroup的校验方法
export const passwordValidatorTemlate: ValidatorFn = (info: FormGroup): ValidationErrors | null => {
   
    console.log('info: ', info);
    
    
    // formGroupName 是passwordInfo
    let password = info.value.password;

    let passwordConfirm = info.value.passwordConfirm;

    let valid = false;

    console.log('password: ', password);
    console.log('passwordConfirm: ', passwordConfirm);
    

    if(password != null && passwordConfirm != null) {
        valid = password === passwordConfirm;
    }
    
    console.log('password 是否校验通过:', valid);

    return valid ? null : {password: {description: '密码和确认密码不匹配'}};
  }