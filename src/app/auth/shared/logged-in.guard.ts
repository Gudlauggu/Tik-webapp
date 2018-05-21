import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router,
              private snack: MatSnackBar) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
               .map(isLoggedIn => {
                 if (isLoggedIn) {
                   // this.router.navigateByUrl('/news-list');
                   this.snack.open('You are already signed in!', null, {
                     duration: 4000,
                     panelClass: ('snack-color-success')
                   });
                 }
                 return !isLoggedIn;
               });
  }
}
