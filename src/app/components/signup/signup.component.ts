import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formValue = {
    name: '',
    email: '',
    password: '',
    phone: ''
  }

  userForm = new FormGroup({
    name : new FormControl(this.formValue.name),
    email : new FormControl(this.formValue.email),
    password : new FormControl(this.formValue.password),
    phone : new FormControl(this.formValue.phone)
  })

  signup(event){

  }

}
