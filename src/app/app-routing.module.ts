import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserModule } from './user/user.module';
import { CategoryListComponent } from './news/category-list/category-list.component';
import { CategoryDetailsComponent } from './news/category-details/category-details.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'news', component:  NewsDetailsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'category', component: CategoryListComponent },
  { path: 'category-detail', component: CategoryDetailsComponent }

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
