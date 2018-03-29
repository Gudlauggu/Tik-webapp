import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'tik-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;
  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private snack: MatSnackBar,
              private router: Router) {
    this.logInForm = fb.group( {
    email: '',
    password: ''
    });
  }

  ngOnInit() {
    this.authService.isAuthenticated()
        .subscribe(authState => console.log(authState),
                   error2 => console.log(error2),
                   () => console.log('complete'));
  }

  login() {
    const loginModel = this.logInForm.value;
    this.authService.login(loginModel.email, loginModel.password)
        .then(() => {
          this.router.navigateByUrl('')
              .then(() =>
                      this.snack.open('You are logged in', '', {
                        duration: 2000
                      }));
        })
        .catch(error => {
          this.snack.open(error.message, '', {
            duration: 5000
          });
        });
  }

}
