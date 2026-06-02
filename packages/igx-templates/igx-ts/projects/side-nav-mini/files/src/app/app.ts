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

const MINI_BREAKPOINT = 1024;

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
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
  // Start open on wide screens, collapsed (mini) on narrow screens
  public readonly initiallyOpen = window.innerWidth > MINI_BREAKPOINT;
  public topNavLinks: Array<{ path: string; name: string; icon: string }> = [];

  public navdrawer = viewChild.required(IgxNavigationDrawerComponent);

  private router = inject(Router);

  constructor() {
    for (const route of routes) {
      if (route.path && route.data && route.path.indexOf('*') === -1) {
        this.topNavLinks.push({
          name: route.data['text'],
          icon: route.data['icon'] ?? 'radio_button_unchecked',
          path: '/' + route.path
        });
      }
    }
  }

  public ngOnInit(): void {
    this.router.events.pipe(
      filter((x): x is NavigationStart => x instanceof NavigationStart)
    ).subscribe(() => {
      // On small screens the nav stays in mini mode — nothing to close
      if (window.innerWidth <= MINI_BREAKPOINT) {
        return;
      }
    });
  }

  public ngAfterViewInit(): void {
    this.updateDrawerState();
  }

  /** Burger menu toggle — only active on large screens */
  public toggleNav(): void {
    this.navdrawer().toggle();
  }

  @HostListener('window:resize')
  public updateDrawerState(): void {
    const isWide = window.innerWidth > MINI_BREAKPOINT;
    if (!isWide && this.navdrawer().isOpen) {
      // Collapse to mini on small screens
      this.navdrawer().close();
    }
  }
}
