import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthResponseData, AuthService } from '../services/auth.service';
import { LoggingService } from '../services/logging-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css', '../app.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  submitButtonMessage = 'Login';
  switchButtonMessage = 'Switch to Sign Up';
  form: FormGroup;
  error: string = null;

  constructor(private authService: AuthService,
              private loggingService: LoggingService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const email = '';
    const password = '';

    this.form = new FormGroup({
      'email': new FormControl(email, Validators.required),
      'password': new FormControl(password, [Validators.required, Validators.minLength(6)]),
      }
    );
  }

  onSwitchMode() {
    if (this.isLoginMode === true) {
      this.isLoginMode = false;
      this.submitButtonMessage = 'Sign Up';
      this.switchButtonMessage = 'Switch to Login';
    } else {
      this.isLoginMode = true;
      this.submitButtonMessage = 'Login';
      this.switchButtonMessage = 'Switch to Sign Up';
    }
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;
    if (this.isLoginMode) {
      authObs = this.authService.login(this.form.value['email'], this.form.value['password']);
    } else {
      authObs = this.authService.signUp(this.form.value['email'], this.form.value['password']);
    }

    authObs.subscribe(
      (responseData) => {
        console.log(responseData);
        this.isLoading = false;
        this.error = null;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    this.form.reset();
  }

  onHandleError() {
    this.error = null;
  }
}
