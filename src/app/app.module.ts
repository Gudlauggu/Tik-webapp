import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatListModule, MatSidenavModule } from '@angular/material';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MarginIconComponent } from './shared/margin-icon/margin-icon.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    AuthModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
