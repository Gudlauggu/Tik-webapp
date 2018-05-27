import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private snack: MatSnackBar) { }

  canActivate() {
    return this.authService.isAuthenticated()
               .map(isLoggedIn => {
                 if (!isLoggedIn) {
                   this.router.navigateByUrl('login');
                   this.snack.open('You need to login to do that!', null, {
                     duration: 4000,
                     panelClass: ('snack-color-failure')
                   });
                 }
                 return isLoggedIn;
               });
  }

}
