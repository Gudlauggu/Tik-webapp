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
import { LoggedInGuard } from './auth/shared/logged-in.guard';
import { AuthGuard } from './auth/shared/auth-guard.service';
import { WriteComponent } from './news/write/write.component';
import { NewsListComponent } from './news/news-list/news-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [LoggedInGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
   { path: 'news/:id', component:  NewsDetailsComponent},
  // { path: '', redirectTo: '/category', pathMatch: 'full'},
  { path: 'category', component: CategoryListComponent },
  { path: 'category-detail/:id', component: CategoryDetailsComponent },
   { path: 'news-list', component:  NewsListComponent},
  { path: 'write', component: WriteComponent, canActivate: [AuthGuard] }

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
