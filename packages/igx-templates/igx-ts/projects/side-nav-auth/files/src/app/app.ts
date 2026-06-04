import { Component, OnInit, viewChild, ViewEncapsulation, inject } from '@angular/core';
import { NavigationStart, Router, RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import {
  IgxNavigationDrawerComponent,
  IgxLayoutDirective,
  IgxNavDrawerTemplateDirective,
  IgxNavDrawerItemDirective,
  IgxRippleDirective,
  IgxFlexDirective,
  IgxNavbarComponent,
  IgxIconComponent,
} from 'igniteui-angular';
import { filter } from 'rxjs/operators';

import { routes } from './app.routes';
import { LoginBar } from './authentication/login-bar/login-bar';
import { UserStore } from './authentication/services/user-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    LoginBar,
    IgxLayoutDirective,
    IgxNavigationDrawerComponent,
    IgxNavDrawerTemplateDirective,
    IgxNavDrawerItemDirective,
    IgxRippleDirective,
    RouterLinkActive,
    RouterLink,
    IgxFlexDirective,
    IgxNavbarComponent,
    IgxIconComponent,
    RouterOutlet]
})
export class App implements OnInit {
  public appTitle = '<%=name%>';

  private readonly homeNavLinks: {
    path: string,
    name: string,
    icon: string
  }[] = [
    {
      name: 'Home',
      path: '/home',
      icon: 'home'
    }
  ];

  private readonly profileNavLinks: {
    path: string,
    name: string,
    icon: string
  }[] = [
    {
      name: 'Profile',
      path: '/auth/profile',
      icon: 'account_circle'
    }
  ];

  public get topNavLinks() {
    return this.userStore.currentUser ? this.profileNavLinks : this.homeNavLinks;
  }

  public navdrawer = viewChild.required(IgxNavigationDrawerComponent);

  public userStore = inject(UserStore);
  private router = inject(Router);

  constructor() {
    for (const route of routes) {
      if (route.path && route.data && route.path.indexOf('*') === -1) {
        this.homeNavLinks[0] = {
          name: route.data['text'],
          path: '/' + route.path,
          icon: route.data['icon'] || 'home'
        };
      }
    }
  }

  public ngOnInit(): void {
    this.router.events.pipe(
      filter((x): x is NavigationStart => x instanceof NavigationStart)
    )
      .subscribe((event: NavigationStart) => {
        if (event.url !== '/' && !this.navdrawer().pin) {
          // Close drawer when selecting a view on mobile (unpinned)
          this.navdrawer().close();
        }
      });
  }
}
