import { type Route } from '@vaadin/router';
import { UserStore } from './authentication/services/userStore.js';
import './home/home.js';
import './not-found/not-found.js';
import './profile/profile.js';
import './redirect/redirect-google.js';
import './redirect/redirect-microsoft.js';
import './redirect/redirect-facebook.js';

export interface AppRoute extends Route {
  icon?: string;
  requiresAuth?: boolean;
}

function authGuard(_context: any, commands: any) {
  if (!UserStore.getUser()) {
    return commands.redirect('/');
  }
  return undefined;
}

export const routes: AppRoute[] = [
  { path: '/', component: 'app-home', name: 'Home', icon: 'home' },
  {
    path: '/auth/profile',
    component: 'app-profile',
    name: 'Profile',
    icon: 'account_circle',
    requiresAuth: true,
    action: authGuard,
  },
  { path: '/auth/redirect-google', component: 'app-redirect-google' },
  { path: '/auth/redirect-microsoft', component: 'app-redirect-microsoft' },
  { path: '/auth/redirect-facebook', component: 'app-redirect-facebook' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' },
];
