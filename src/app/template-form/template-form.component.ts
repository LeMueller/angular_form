import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  createUser(info: any) {
    console.log(info);
    
  }

  constructor() { }

  ngOnInit() {
  }

}
