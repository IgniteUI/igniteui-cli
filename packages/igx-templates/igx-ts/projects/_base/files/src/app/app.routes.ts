import { Routes } from '@angular/router';
import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';

export const routes: Routes = [
  { path: 'error', component: UncaughtError },
  { path: '**', component: NotFound } // must always be last
];
