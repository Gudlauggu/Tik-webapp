import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/shared/auth.service';
import { MatSnackBar } from '@angular/material';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'tik-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  user: User;

  constructor(private authService: AuthService,
              private userService: UserService,
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
    this.user = {username: 'Hret', email: 'hsdf@sfd.is', uid: '123'};
    this.userService.getUser()
      .subscribe(user => this.user = user);
  }

  save() {
    const model = this.profileForm.value as User;
    model.uid = this.user.uid;
    this.userService.update(model)
      .then( () => console.log('saved'))
      .catch(err => console.log('error', err));
  }

}
