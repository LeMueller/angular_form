import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, AbstractControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Logs } from 'selenium-webdriver';

import { mobileValidator, passwordValidator } from '../validators/validators';

@Component({
  selector: 'app-reactived-form',
  templateUrl: './reactived-form.component.html',
  styleUrls: ['./reactived-form.component.css']
})
export class ReactivedFormComponent implements OnInit {

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
      mobile: ['', mobileValidator],
      // formGroup 的校验要加入一个key为validator的object中
      passwordInfo : this.fb.group({
        password: [''],
        passwordConfirm: [''],
      }),
    }, {validator: passwordValidator});
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

    // console.log("nickName valid:", nickNameValid);

    let nickNameErrors:any = this.formModel.get('nickName').errors;
    // console.log('nickName的校验信息: ', JSON.stringify(nickNameErrors));
    

    console.log(this.formModel.value);
    
  }

  ngOnInit() {
  }

}
