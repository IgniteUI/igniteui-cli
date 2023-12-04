import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationStart, Router, RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import {
  IgxNavigationDrawerComponent,
  IgxLayoutDirective,
  IgxNavDrawerTemplateDirective,
  IgxNavDrawerItemDirective,
  IgxRippleDirective,
  IgxFlexDirective,
  IgxNavbarComponent,
} from 'igniteui-angular';
import { filter } from 'rxjs/operators';
import { NgFor } from '@angular/common';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
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
    RouterOutlet
  ]
})
export class AppComponent implements OnInit {
  public topNavLinks: {
    path: string,
    name: string
  }[] = [];

  @ViewChild(IgxNavigationDrawerComponent, { static: true })
  public navdrawer!: IgxNavigationDrawerComponent;

  constructor(private router: Router) {
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
        if (event.url !== '/' && !this.navdrawer.pin) {
          // Close drawer when selecting a view on mobile (unpinned)
          this.navdrawer.close();
        }
      });
  }
}
