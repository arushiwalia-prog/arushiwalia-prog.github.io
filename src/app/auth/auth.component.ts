import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, AuthResponseData } from './Auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  LoginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email : new FormControl('', Validators.email),
      password : new FormControl('', Validators.required)
    });
  }

  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  OnSubmit() {
    if (!this.LoginForm.valid) {
      return;
    }
    this.isLoading = true;
    let AuthObs: Observable<AuthResponseData>;
    const email = this.LoginForm.value.email;
    const password = this.LoginForm.value.password;
    if (this.isLoginMode) {
      AuthObs = this.authService.login(email, password);
    } else {
      AuthObs = this.authService.signUp(email, password);
    }

    AuthObs.subscribe(resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      }, errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      });
      
    this.LoginForm.reset();
  }
}
