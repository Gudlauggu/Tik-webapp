import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserModule } from './user/user.module';
import { NewsListComponent } from './news/news-list/news-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'news', component: NewsListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthModule,
    UserModule
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
