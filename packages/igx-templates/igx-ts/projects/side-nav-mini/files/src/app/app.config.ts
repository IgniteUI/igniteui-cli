import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import {
  IgxNavigationDrawerModule,
  IgxNavbarModule,
  IgxIconModule,
  IgxRippleModule
} from '<%=igxPackage%>';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      IgxNavigationDrawerModule,
      IgxNavbarModule,
      IgxIconModule,
      IgxRippleModule
    ),
    provideAnimations()
  ]
};
