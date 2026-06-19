import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AUTH_ROUTES } from './authentication';
import { AUTH_BASE_PATH } from './authentication/services/external-auth-configs';
import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home, data: { text: 'Home', icon: 'home' } },
  { path: AUTH_BASE_PATH, children: AUTH_ROUTES },
  { path: 'error', component: UncaughtError },
  { path: '**', component: NotFound }
];
