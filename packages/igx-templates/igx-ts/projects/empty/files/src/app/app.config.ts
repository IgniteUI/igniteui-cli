import { ApplicationConfig, EnvironmentProviders, Provider, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// provide the HAMMER_GESTURE_CONFIG token
// to override the default settings of the HammerModule
// { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
const providers: (EnvironmentProviders | Provider)[] = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  importProvidersFrom(BrowserModule, HammerModule),
  provideAnimations()
];

export const appConfig: ApplicationConfig = { providers };
