import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/shared/auth.service';
import { MatSnackBar } from '@angular/material';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { Subscription } from 'rxjs/Subscription';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FileService } from '../../file-system/file.service';

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

  constructor(private authService: AuthService,
              private userService: UserService,
              private fileService: FileService,
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

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  hovering(isHovering: boolean) {
    this.isHovering = isHovering;
  }

  changePic(event) {
    if (event.toState === 'hoveringImage') {
      this.img = '../../../../assets/cloud_upload.svg';
    } else {
      this.img = '../../../../assets/mercy.png';
    }
    console.log('animation done', event);
  }

  uploadNewImage(fileList) {
    if (fileList && fileList.length === 1 &&
        ['image/jpeg', 'image/png'].indexOf(fileList.item(0).type) > -1) {
      console.log(fileList.item(0));
      const file = fileList.item(0);
      const path = 'profile-image/' + file.name;
      this.fileService.upload(path, file).downloadUrl.subscribe(
        url => {
          console.log('url', url);
          this.img = url;
        }
      );
    } else {
      console.log('wrong: ' + fileList);
      this.snack.open('You need to drop a single png or jpeg image', null, {
        duration: 4000
      });
    }
  }

  ngOnInit() {
    this.userSub = this.userService.getUser()
      .subscribe(user => {
        this.user = user;
        this.profileForm.patchValue(user);
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
    this.userService.update(model)
      .then( () => console.log('saved'))
      .catch(err => console.log('error', err));
  }

}
