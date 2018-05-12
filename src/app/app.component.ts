import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { AuthService } from './auth/shared/auth.service';

@Component({
  selector: 'tik-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  routes = [
    {route: '/', title: 'Home', icon: 'home'},
    {route: '/news', title: 'News', icon: 'library_books'},
    {route: '/category', title: 'Categories', icon: 'list'},
    {route: '/category-detail', title: 'Category Detail', icon: 'list'},
    {route: '/login', title: 'Login', icon: 'vpn_key'},
    {route: '/signup', title: 'Signup', icon: 'person_add'},
    {route: '/profile', title: 'Profile', icon: 'account_circle'},


  ];

  navBarOpen = true;
  mode = 'side';
  watcher: Subscription;

  constructor(media: ObservableMedia,
              private authService: AuthService) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs') {
        this.loadMobileContent();
      } else {
        this.loadDashBoardContent();
      }
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  toggleNav() {
    this.navBarOpen = !this.navBarOpen;
  }

  ngOnInit() {
    this.authService.isAuthenticated().subscribe(isLoggedIn => {
      this.navBarOpen = isLoggedIn;
    });
  }

  loadMobileContent() {
    this.navBarOpen = false;
    this.mode = 'over';
  }

  loadDashBoardContent() {
    this.navBarOpen = true;
    this.mode = 'side';

  }
}
