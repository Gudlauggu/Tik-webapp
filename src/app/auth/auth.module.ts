import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from './shared/auth.service';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    RouterModule
  ],
  declarations: [LoginComponent, SignupComponent],
  providers: [AuthService]
})
export class AuthModule { }
