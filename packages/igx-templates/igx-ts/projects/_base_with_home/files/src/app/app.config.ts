import { ApplicationConfig, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

const providers: Provider = [
  provideRouter(routes)
];

export const appConfig: ApplicationConfig = { providers };
