import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
import { NgFor } from '@angular/common';

import { routes } from './app.routes';
import { LoginBar } from './authentication/login-bar/login-bar';
import { ExternalAuth } from './authentication/services/external-auth';

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
    NgFor,
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

  @ViewChild(IgxNavigationDrawerComponent, { static: true })
  public navdrawer!: IgxNavigationDrawerComponent;

  constructor(private router: Router, private externalAuthService: ExternalAuth) {
    for (const route of routes) {
      if (route.path && route.data && route.path.indexOf('*') === -1) {
        this.topNavLinks.push({
          name: route.data['text'],
          path: '/' + route.path
        });
      }
    }

    /**
     * To register a social login, un-comment one or more of the following and add your service provider Client ID.
     * See https://github.com/IgniteUI/igniteui-cli/wiki/Angular-Authentication-Project-Template#add-a-third-party-social-provider
     */
    // this.externalAuthService.addGoogle();

    // this.externalAuthService.addMicrosoft();

    // this.externalAuthService.addFacebook('<CLIENT_ID>');
  }

  public ngOnInit(): void {
    this.router.events.pipe(
      filter((x): x is NavigationStart => x instanceof NavigationStart)
    )
      .subscribe((event: NavigationStart) => {
        if (event.url !== '/' && !this.navdrawer.pin) {
          // Close drawer when selecting a view on mobile (unpinned)
          this.navdrawer.close();
        }
      });
  }
}
