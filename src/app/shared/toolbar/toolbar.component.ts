import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../auth/shared/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'tik-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isLoggedIn: boolean;
  @Output()
  navToggle = new EventEmitter();

  constructor(private authService: AuthService,
              private router: Router,
              private snack: MatSnackBar) { }


  ngOnInit() {
    this.authService.isAuthenticated()
        .subscribe(isLogged => {
          this.isLoggedIn = isLogged;
        });
  }

  toggleNav() {
    this.navToggle.emit();
  }

  logout() {
    this.authService.logout()
        .then(() => {
          this.router.navigateByUrl('login').then(() =>
            this.snack.open('You Logged out', '', {
              duration: 2000,
              panelClass: ('snack-color-success')
            }));
        })
      .catch(error => {
        this.snack.open(error.message, '', {
          duration: 5000,
          panelClass: ('snack-color-failure')
        });
      });
  }

}
