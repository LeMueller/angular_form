import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, AbstractControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-reactived-form',
  templateUrl: './reactived-form.component.html',
  styleUrls: ['./reactived-form.component.css']
})
export class ReactivedFormComponent implements OnInit {

  // 自定义formControl的校验方法
  mobileValidator(mobile: FormControl): any {
    let value = (mobile.value || '') + '';
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(value);
    console.log("mobile是否校验通过: " + valid);
    
    return valid ? null : {mobile: true};
  }

  // 自定义formGroup的校验方法
  passwordValidator: ValidatorFn = (info: FormGroup): ValidationErrors | null => {
    
    // formGroupName 是passwordInfo
    let password = info.get('passwordInfo').value.password;

    let passwordConfirm = info.get('passwordInfo').value.passwordConfirm;

    let valid:boolean = password === passwordConfirm;
    
    console.log('password 是否校验通过:', valid);

    return valid ? null : {password:true};
  }

  // private xxx: FormControl;

  private formModel: FormGroup;

  // Use FormBuilder to refactor the data
  private fb: FormBuilder = new FormBuilder();

  constructor() {

    // 内置校验器
    // Validators.

    this.formModel = this.fb.group({
      // 添加内置校验器
      nickName: ['xxxx', [Validators.required, Validators.minLength(6)]],
      emails : this.fb.array([
        [''],
      ]),
      // formControl 的校验直接加在数组后面就可以
      mobile: ['', this.mobileValidator],
      // formGroup 的校验要加入一个key为validator的object中
      passwordInfo : this.fb.group({
        password: [''],
        passwordConfirm: [''],
      }),
    }, {validator: this.passwordValidator});
  }

  // constructor() {
  //   this.formModel = new FormGroup({
  //     nickName: new FormControl(),
  //     emails : new FormArray([
  //       new FormControl(),
  //     ]),
  //     mobile: new FormControl(),
  //     passwordInfo : new FormGroup({
  //       password: new FormControl(),
  //       passwordConfirm: new FormControl(),
  //     }),
  //   });
  // }

  addEmail() {
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
    
  }

  createUser() {

    // 获得校验结果
    let nickNameValid:boolean = this.formModel.get('nickName').valid;

    console.log("nickName valid:", nickNameValid);

    let nickNameErrors:any = this.formModel.get('nickName').errors;
    console.log('nickName的校验信息: ', JSON.stringify(nickNameErrors));
    

    console.log(this.formModel.value);
    
  }

  ngOnInit() {
  }

}
