import { ApplicationConfig, ErrorHandler, Provider, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { GlobalErrorHandlerService } from './error-routing/error/global-error-handler.service';
import { environment } from '../environments/environment';

const providers: Provider[] = [
  provideRouter(routes),
  importProvidersFrom(BrowserModule, HammerModule),
  provideAnimations()
  // provide the HAMMER_GESTURE_CONFIG token
  // to override the default settings of the HammerModule
  // { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
];

if (environment.production) {
  providers.push({
    provide: ErrorHandler,
    useClass: GlobalErrorHandlerService
  });
}

export const appConfig: ApplicationConfig = { providers };
