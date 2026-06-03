import { type Route } from '@vaadin/router';
import './home/home.js';
import './not-found/not-found.js';

export const routes: Array<Route & { name?: string; icon?: string }> = [
  { path: '/', component: 'app-home', name: 'Home', icon: 'home' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' },
];
