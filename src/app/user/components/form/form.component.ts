import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit{
    userForm:FormGroup
     
  constructor(fb:FormBuilder) {
    this.userForm = fb.group({
      email: [''],
      name: [''],
      bio: [''],
      active: ['']
    })
  }
  ngOnInit(): void {
  }
  submit() {
    const user = this.userForm.value as User
  }

}
