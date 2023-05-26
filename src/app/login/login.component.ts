import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  loginForm = this.formBuilder.group({
    username: "",
    password: ""
  });

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  login(): void {
    const { username, password } = this.loginForm.value;
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(["client-list"]);
    } else {
      alert("Invalid credentials");
    }
  }
}