import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe, NgClass} from '@angular/common';

@Component({
  selector: 'login',
  imports: [
    ReactiveFormsModule,
    NgClass,
    JsonPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form = new FormGroup({
    username: new FormControl("", {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),
    password: new FormControl("", {
      validators: [
        Validators.required,
        Validators.minLength(5)
      ]
    })
  });

  handleLoginSubmit() {
    if(this.form.valid){
      const username = this.form.get('username')!.value;
      const password = this.form.get('password')!.value;
      console.log("Envoie vers le authService pour se login", username, password);
    }
  }
}
