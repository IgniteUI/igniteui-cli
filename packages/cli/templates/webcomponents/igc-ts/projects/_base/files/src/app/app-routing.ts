import { Route } from '@vaadin/router';
import './not-found/not-found.js';

export const routes: Route[] = [
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' },
];
