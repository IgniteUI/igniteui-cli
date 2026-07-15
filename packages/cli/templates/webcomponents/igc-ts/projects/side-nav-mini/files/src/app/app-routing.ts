import { type Route } from '@vaadin/router';
import './home/home.js';
import './not-found/not-found.js';

export interface AppRoute extends Route {
  icon?: string;
}

export const routes: AppRoute[] = [
  { path: '/', component: 'app-home', name: 'Home', icon: 'home' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' },
];
