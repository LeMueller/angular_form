import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactived-form',
  templateUrl: './reactived-form.component.html',
  styleUrls: ['./reactived-form.component.css']
})
export class ReactivedFormComponent implements OnInit {

  private nickName = new FormControl('Tom');

  private passwordInfo = new FormGroup({
    password: new FormControl(),
    passwordConfirm: new FormControl(),
  });

  private emails = new FormArray([
    new FormControl("a@a.com"),
    new FormControl("b@b.com"),
  ]);

  constructor() { }

  ngOnInit() {
  }

}
