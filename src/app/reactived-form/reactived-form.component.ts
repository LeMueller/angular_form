import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactived-form',
  templateUrl: './reactived-form.component.html',
  styleUrls: ['./reactived-form.component.css']
})
export class ReactivedFormComponent implements OnInit {

  private formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      nickName: new FormControl(),
      emails : new FormArray([
        new FormControl(),
      ]),
      mobile: new FormControl(),
      passwordInfo : new FormGroup({
        password: new FormControl(),
        passwordConfirm: new FormControl(),
      }),
    });
  }

  ngOnInit() {
  }

}
