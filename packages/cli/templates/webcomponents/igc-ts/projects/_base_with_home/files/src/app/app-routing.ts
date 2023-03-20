import { Route } from '@vaadin/router';
import './home/home.ts';
import './not-found/not-found.ts';

export const routes: Route[] = [
  { path: '/', component: 'app-home', name: 'Home' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' },
];
