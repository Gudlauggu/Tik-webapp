import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';
import { User } from '../../user/shared/user';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  constructor(private fireAuth: AngularFireAuth) {
    this.user = this.fireAuth.authState;
  }

  login(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password);
  }

  logout(): Promise<any> {
    return this.fireAuth.auth.signOut();
  }

  loginWithFacebook() {
    return this.fireAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  signup(user: User): Promise<any> {
    return this.fireAuth.auth
               .createUserAndRetrieveDataWithEmailAndPassword(
                 user.email,
                 user.password
               );
  }

  delete() {

  }

  isAuthenticated(): Observable<boolean> {
    return this.fireAuth.authState
               .map(authstate => {
                 return authstate !== null;
               });
  }

  getAuthUser(): Observable<User> {
    return this.fireAuth.authState
      .map(authState => {
        if (!authState) {
          return null;
        }
        return {email: authState.email, uid: authState.uid};
      });
  }

}
