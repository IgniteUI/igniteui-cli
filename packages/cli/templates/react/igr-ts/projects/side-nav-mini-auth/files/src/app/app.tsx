import { useState, useEffect, useMemo } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  IgrNavDrawer,
  IgrNavDrawerItem,
  IgrIcon,
  registerIcon,
} from 'igniteui-react';
import { AuthProvider, useAuth } from './authentication/AuthContext';
import { LoginBar } from './authentication/components/LoginBar';
import { routes } from './app-routes';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './app.css';

const materialIcons = [
  ['home', 'action/svg/production/ic_home_24px.svg'],
  ['menu', 'navigation/svg/production/ic_menu_24px.svg'],
  ['apps', 'navigation/svg/production/ic_apps_24px.svg'],
  ['code', 'action/svg/production/ic_code_24px.svg'],
  ['build', 'action/svg/production/ic_build_24px.svg'],
  ['palette', 'image/svg/production/ic_palette_24px.svg'],
  ['account_circle', 'action/svg/production/ic_account_circle_24px.svg'],
  ['lock', 'action/svg/production/ic_lock_24px.svg'],
  ['assignment_ind', 'action/svg/production/ic_assignment_ind_24px.svg'],
] as const;

materialIcons.forEach(([name, path]) =>
  registerIcon(name, `https://unpkg.com/material-design-icons@3.0.1/${path}`, 'material')
);

function AppContent() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();

  const navRoutes = useMemo(() => routes.filter((r) => {
    if (!r.text) return false;
    if ((r as any).requiresAuth && !currentUser) return false;
    return true;
  }), [currentUser]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1025px)');
    const update = () => setDrawerOpen(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div className="app">
      <header className="app__navbar">
        <button
          className="app__menu-button"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setDrawerOpen(o => !o)}
        >
          <IgrIcon name="menu" collection="material" />
        </button>
        <h1 className="app__title">$(name)</h1>
        <div className="app__navbar-spacer" />
        <LoginBar />
      </header>
      <div className={!drawerOpen ? 'app__body app--mini' : 'app__body'}>
        <IgrNavDrawer className="app__drawer" open position="relative">
          {navRoutes.map((route) => (
            <IgrNavDrawerItem
              key={route.path}
              active={location.pathname === route.path}
              onClick={() => navigate(route.path)}
            >
              <IgrIcon
                slot="icon"
                name={route.icon || 'apps'}
                collection="material"
                style={location.pathname === route.path ? { color: '#0075D2' } : undefined}
              />
              <span slot="content">{route.text}</span>
            </IgrNavDrawerItem>
          ))}
        </IgrNavDrawer>
        <div className="app__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
