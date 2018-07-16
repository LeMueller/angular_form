import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  mobileValid:boolean = true;
  mobilePristine:boolean = true;

  createUser(info: any, valid: boolean) {
    console.log(info);
    console.log(valid);
  }

  onMobileInput(form:NgForm) {
    console.log('form: ', form);
    
    if(form) {
      this.mobileValid = form.form.get('mobile').valid;
      this.mobilePristine = form.form.get('mobile').pristine;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
