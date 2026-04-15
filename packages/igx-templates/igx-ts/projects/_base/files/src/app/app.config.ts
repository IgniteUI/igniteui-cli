import { ApplicationConfig, ErrorHandler, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from '@angular/router';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { GlobalErrorHandler } from './error-routing/error/global-error-handler';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(BrowserModule, HammerModule),
    provideAnimations(),
    ...(environment.production ? [{ provide: ErrorHandler, useClass: GlobalErrorHandler }] : [])
  ]
};
