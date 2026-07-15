import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import {
  IgxNavigationDrawerModule,
  IgxNavbarModule,
  IgxLayoutModule,
  IgxRippleModule
} from '<%=igxPackage%>';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      IgxLayoutModule,
      IgxNavbarModule,
      IgxNavigationDrawerModule,
      IgxRippleModule
    ),
    provideAnimations()
  ]
};
