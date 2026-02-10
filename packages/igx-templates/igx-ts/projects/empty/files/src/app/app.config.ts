import { ApplicationConfig, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

const providers: Provider = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes)
];

export const appConfig: ApplicationConfig = { providers };
