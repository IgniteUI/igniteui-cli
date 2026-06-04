import { Component, HostListener, OnInit, AfterViewInit, viewChild, ViewEncapsulation, inject } from '@angular/core';
import { NavigationStart, Router, RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import {
  IgxNavigationDrawerComponent,
  IgxNavDrawerTemplateDirective,
  IgxNavDrawerMiniTemplateDirective,
  IgxNavDrawerItemDirective,
  IgxRippleDirective,
  IgxNavbarComponent,
  IgxNavbarActionDirective,
  IgxIconComponent,
  IgxIconButtonDirective,
} from 'igniteui-angular';
import { filter } from 'rxjs/operators';

import { routes } from './app.routes';
import { LoginBar } from './authentication/login-bar/login-bar';
import { UserStore } from './authentication/services/user-store';

const MINI_BREAKPOINT = 1024;

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    LoginBar,
    IgxNavigationDrawerComponent,
    IgxNavDrawerTemplateDirective,
    IgxNavDrawerMiniTemplateDirective,
    IgxNavDrawerItemDirective,
    IgxRippleDirective,
    RouterLinkActive,
    RouterLink,
    IgxNavbarComponent,
    IgxNavbarActionDirective,
    IgxIconComponent,
    IgxIconButtonDirective,
    RouterOutlet
  ]
})
export class App implements OnInit, AfterViewInit {
  public appTitle = '<%=name%>';

  private readonly homeNavLinks: { path: string; name: string; icon: string }[] = [
    { name: 'Home', path: '/home', icon: 'home' }
  ];

  private readonly profileNavLinks: { path: string; name: string; icon: string }[] = [
    { name: 'Profile', path: '/auth/profile', icon: 'account_circle' }
  ];

  public get topNavLinks() {
    return this.userStore.currentUser ? this.profileNavLinks : this.homeNavLinks;
  }

  public readonly initiallyOpen = window.innerWidth > MINI_BREAKPOINT;
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
    ).subscribe(() => this.updateDrawerState());
  }

  public ngAfterViewInit(): void {
    this.updateDrawerState();
  }

  public toggleNav(): void {
    this.navdrawer().toggle();
  }

  @HostListener('window:resize')
  public updateDrawerState(): void {
    const isWide = window.innerWidth > MINI_BREAKPOINT;
    if (!isWide && this.navdrawer().isOpen) {
      this.navdrawer().close();
    }
  }
}
