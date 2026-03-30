import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AUTH_ROUTES } from './authentication';
import { AUTH_BASE_PATH } from './authentication/services/external-auth-configs';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home, data: { text: 'Home' } },
  { path: AUTH_BASE_PATH, children: AUTH_ROUTES }
];
