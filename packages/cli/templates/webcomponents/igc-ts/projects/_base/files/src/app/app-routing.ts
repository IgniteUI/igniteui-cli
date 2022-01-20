import {
  Route,
  Router,
} from '@vaadin/router';
import './home/home.component';

export const routes: Route[] = [
  { path: '/', component: 'app-home', name: 'Home' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' },
];

const outlet = document.getElementsByTagName('router-outlet')[0];
export const router = new Router(outlet);
router.setRoutes(routes);
