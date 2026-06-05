import { type Route } from '@vaadin/router';
import { UserStore } from './authentication/services/userStore.js';
import './home/home.js';
import './not-found/not-found.js';
import './profile/profile.js';

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
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' },
];
