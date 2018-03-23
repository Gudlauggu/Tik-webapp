import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'tik-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  routes = [
    {route: '/', title: 'Home', icon: 'home'},
    {route: '/login', title: 'Login', icon: 'vpn_key'},
  ];

  watcher: Subscription;

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  ngOnInit() {

  }
}
