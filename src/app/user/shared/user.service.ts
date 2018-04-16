import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import 'rxjs/add/operator/map';
import { AuthService } from '../../auth/shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/first';
import { EmptyObservable} from 'rxjs/observable/EmptyObservable';

@Injectable()
export class UserService {

  constructor(private authService: AuthService,
              private afs: AngularFirestore) { }

  getUser(): Observable<User> {
    return this.authService.getAuthUser()
      .switchMap(authUser => {
        if (!authUser) {
          return new EmptyObservable();
        }
        return this.afs.doc<User>('users/' + authUser.uid).valueChanges()
          .map(dbUser => {
            if (dbUser) {
              authUser.username = dbUser.username;
              authUser.firstName = dbUser.firstName;
              authUser.lastName = dbUser.lastName;
              authUser.middleName = dbUser.middleName;
            }
            return dbUser;
          });
      });
  }

  update(user: User): Promise<any> {
    return this.afs.doc('users/' + user.uid).set(user);
  }
}
