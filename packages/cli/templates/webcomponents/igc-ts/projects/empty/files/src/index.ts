import { Commands, Context, Route, Router } from '@vaadin/router';
import './app/home/home.component';

export const routes: Route[] = [
  { path: '/', component: 'lit-home', name: 'Home' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'lit-not-found' },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);