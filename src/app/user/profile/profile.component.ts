import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/shared/auth.service';
import { MatSnackBar } from '@angular/material';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { Subscription } from 'rxjs/Subscription';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { StorageService } from '../../shared/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tik-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [trigger('imageHover', [
    state('hoveringImage', style({
      opacity: 0.3
    })),
    state('notHoveringImage', style({
      opacity: 1
    })),
    transition('hoveringImage <=> notHoveringImage', animate('200ms ease-in'))
  ])]
})
export class ProfileComponent implements OnInit, OnDestroy {

  profileForm: FormGroup;
  user: User;
  userSub: Subscription;
  isHovering: boolean;
  img: string;
  srcLoaded: boolean;
  validateDelete: boolean;

  constructor(private authService: AuthService,
              private userService: UserService,
              private storageService: StorageService,
              private fb: FormBuilder,
              private snack: MatSnackBar,
              private router: Router) {
    this.profileForm = fb.group( {
      username: ['', [Validators.required, Validators.minLength(4)]],
      firstName: '',
      middleName: '',
      lastName: ''
    });
  }

  ngOnInit() {
    this.userSub = this.userService.getUserWithProfileUrl()
      .subscribe(user => {
        this.user = user;
        if (this.user.img) {
          this.img = user.profileImgUrl;
        } else {
          this.img = '/assets/face.svg';
        }
        this.profileForm.patchValue(user);
      });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  deleteValidation(value: boolean) {
    this.validateDelete = value;
  }

  hovering(isHovering: boolean) {
    this.isHovering = isHovering;
  }

  uploadNewImage(fileList) {
    if (fileList && fileList.length === 1 &&
        ['image/jpeg', 'image/png'].indexOf(fileList.item(0).type) > -1) {
      this.srcLoaded = false;
      const file = fileList.item(0);
      const path = 'profile-images/' + this.user.uid;
      this.storageService.upload(path, file).downloadUrl.subscribe(
        url => {
          this.img = url;
          this.user.img = true;
          this.save();
          this.hovering(false);
        }
      );
    } else {
      console.log('wrong: ' + fileList);
      this.snack.open('You need to drop a single png or jpeg image', null, {
        duration: 4000
      });
      this.hovering(false);
    }
  }

  deleteClicked() {
    // console.log('Delete clicked! ' + this.user.uid);
    this.userService.delete(this.user.uid)
      .then(() => {
        this.router.navigateByUrl('/news-list');
        this.snack.open('User was deleted!', '', {
          duration: 3000,
          panelClass: ('snack-color-success')
        });
        })
      .catch(err => {
        this.snack.open('Something went wrong, please try logging in again', null, {
          duration: 4000,
          panelClass: ('snack-color-failure')
    });
    });

  }


  unchanged(): boolean {
    const model = this.profileForm.value as User;
    return model.username === this.user.username &&
      model.firstName === this.user.firstName &&
      model.middleName === this.user.middleName &&
      model.lastName === this.user.lastName;
  }

  save() {
    const model = this.profileForm.value as User;
    model.uid = this.user.uid;
    if (!this.user.img) {
      model.img = false;
    } else {
      model.img = this.user.img;
    }
    this.userService.update(model)
      .then( () => {
        this.snack.open('User Saved', null, {
        duration: 2000,
          panelClass: ('snack-color-success')
      });
      })
      .catch(err => {this.snack.open('Something went wrong', null, {
        duration: 4000,
        panelClass: ('snack-color-failure')
      });
      });
  }



}
