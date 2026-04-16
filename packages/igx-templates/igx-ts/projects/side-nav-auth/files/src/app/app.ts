import { Component, OnInit, viewChild, ViewEncapsulation, inject } from '@angular/core';
import { NavigationStart, Router, RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import {
  IgxNavigationDrawerComponent,
  IgxLayoutDirective,
  IgxNavDrawerTemplateDirective,
  IgxNavDrawerItemDirective,
  IgxRippleDirective,
  IgxFlexDirective,
  IgxNavbarComponent
} from 'igniteui-angular';
import { filter } from 'rxjs/operators';

import { routes } from './app.routes';
import { LoginBar } from './authentication/login-bar/login-bar';

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
    RouterOutlet]
})
export class App implements OnInit {
  public topNavLinks: {
    path: string,
    name: string
  }[] = [];

  public navdrawer = viewChild.required(IgxNavigationDrawerComponent);

  private router = inject(Router);

  constructor() {
    for (const route of routes) {
      if (route.path && route.data && route.path.indexOf('*') === -1) {
        this.topNavLinks.push({
          name: route.data['text'],
          path: '/' + route.path
        });
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
