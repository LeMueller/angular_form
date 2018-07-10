import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Logs } from 'selenium-webdriver';

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
    this.formModel = this.fb.group({
      nickName: ['xxxx'],
      emails : this.fb.array([
        [''],
      ]),
      mobile: [''],
      passwordInfo : this.fb.group({
        password: [''],
        passwordConfirm: [''],
      }),
    });
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
    console.log(this.formModel.value);
    
  }

  ngOnInit() {
  }

}
