import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  IgrNavbar,
  IgrNavDrawer,
  IgrNavDrawerItem,
  IgrIconButton,
  IgrIcon,
  registerIconFromText,
} from 'igniteui-react';
import { routes } from './app-routes';
import './app.css';

const HOME_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const APPS_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"/></svg>';
const MENU_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3zm0-5h18v-2H3zM3 6v2h18V6z"/></svg>';

registerIconFromText('home', HOME_ICON, 'nav-icons');
registerIconFromText('apps', APPS_ICON, 'nav-icons');
registerIconFromText('menu', MENU_ICON, 'nav-icons');

const MINI_BREAKPOINT = 1024;
const navRoutes = routes.filter((r: any) => r.text);

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(window.innerWidth > MINI_BREAKPOINT);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth <= MINI_BREAKPOINT && drawerOpen) {
        setDrawerOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [drawerOpen]);

  return (
    <div className="app">
      <IgrNavbar className="app-navbar">
        <IgrIconButton className="nav-toggle-btn" slot="start" variant="flat" onClick={() => setDrawerOpen(o => !o)}>
          <IgrIcon name="menu" collection="nav-icons" />
        </IgrIconButton>
        <span>$(name)</span>
      </IgrNavbar>
      <div className="row-layout">
        <IgrNavDrawer open={drawerOpen} position="relative">
          {navRoutes.map((route: any) => (
            <IgrNavDrawerItem
              key={route.path}
              active={location.pathname === route.path}
              onClick={() => navigate(route.path)}
            >
              <IgrIcon slot="icon" name={route.icon ?? 'apps'} collection="nav-icons" />
              <span slot="content">{route.text}</span>
            </IgrNavDrawerItem>
          ))}
          {navRoutes.map((route: any) => (
            <IgrNavDrawerItem
              key={`mini-${route.path}`}
              slot="mini"
              active={location.pathname === route.path}
              onClick={() => navigate(route.path)}
            >
              <IgrIcon slot="icon" name={route.icon ?? 'apps'} collection="nav-icons" />
            </IgrNavDrawerItem>
          ))}
        </IgrNavDrawer>
        <div className="view-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
