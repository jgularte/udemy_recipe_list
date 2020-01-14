import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {LoggingService} from '../services/logging-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  submitButtonMessage = 'Login';
  switchButtonMessage = 'Switch to Sign Up';
  form: FormGroup;

  constructor(private authService: AuthService,
              private loggingService: LoggingService) {
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

    if (this.isLoginMode) {
      return;
    } else {
      this.authService.signUp(this.form.value['email'], this.form.value['password'])
        .subscribe(
          (responseData) => {
            console.log(responseData);
            setTimeout(() => {
              this.loggingService.info('timing out for spinner');
            }, 1000);
            this.isLoading = false;
          },
          (error) => {
            console.log(error);
            setTimeout(() => {
              this.loggingService.info('timing out for spinner');
            }, 1000);
            this.isLoading = false;
          }
        );
    }

    this.form.reset();
  }
}
