import Home from './home/home';
import Profile from './authentication/pages/Profile';
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
    icon: 'apps',
    requiresAuth: true
  }
];
