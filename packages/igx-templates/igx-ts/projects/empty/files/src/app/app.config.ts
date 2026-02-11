import { ApplicationConfig, EnvironmentProviders, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

const providers: (EnvironmentProviders | Provider)[] = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes)
];

export const appConfig: ApplicationConfig = { providers };
