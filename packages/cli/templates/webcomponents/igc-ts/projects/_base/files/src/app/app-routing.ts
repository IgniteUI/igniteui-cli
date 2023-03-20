import { Route } from '@vaadin/router';
import './not-found/not-found.ts';

export const routes: Route[] = [
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' },
];
