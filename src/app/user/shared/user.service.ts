import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import 'rxjs/add/operator/map';
import { AuthService } from '../../auth/shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/first';
import { EmptyObservable} from 'rxjs/observable/EmptyObservable';
import { StorageService } from '../../shared/storage/storage.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {

  constructor(private authService: AuthService,
              private storageService: StorageService,
              private afs: AngularFirestore,
              private fireAuth: AngularFireAuth) { }

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
              authUser.img = dbUser.img;
            }
            return authUser;
          });
      });
  }

  getUserWithProfileUrl(): Observable<User> {
    return this.getUser()
      .switchMap(user => {
        if (!user || !user.img) {
          return Observable.create(obs => {
            obs.next(user);
          });
        }
        return this.storageService.downloadUrlProfile(user.uid)
          .map(url => {
            user.profileImgUrl = url;
            return user;
          });
      });
  }

  update(user: User): Promise<any> {
    return this.afs.doc('users/' + user.uid).set(user);
  }

  delete(user: String): Promise<any>  {
    return this.fireAuth.auth
      .currentUser.delete().then(() => {
      console.log('User Deleted');
      this.afs.doc('users/' + user).delete();
    });
  }
}
