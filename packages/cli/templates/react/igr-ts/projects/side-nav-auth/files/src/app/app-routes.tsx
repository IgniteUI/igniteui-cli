import Home from './home/home';
import Profile from './authentication/pages/Profile';
import RedirectGoogle from './authentication/pages/RedirectGoogle';
import RedirectMicrosoft from './authentication/pages/RedirectMicrosoft';
import RedirectFacebook from './authentication/pages/RedirectFacebook';
import { AuthGuard } from './authentication/AuthGuard';

export const routes = [
  { path: '/', element: <Home />, text: 'Home', icon: 'home' },
  {
    path: '/auth/profile',
    element: (
      <AuthGuard>
        <Profile />
      </AuthGuard>
    ),
    text: 'Profile',
    icon: 'account_circle',
    requiresAuth: true
  },
  { path: '/auth/redirect-google', element: <RedirectGoogle /> },
  { path: '/auth/redirect-microsoft', element: <RedirectMicrosoft /> },
  { path: '/auth/redirect-facebook', element: <RedirectFacebook /> },
];
