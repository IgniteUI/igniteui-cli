import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  IgrNavDrawer,
  IgrNavDrawerItem,
  IgrIcon,
  registerIcon,
} from 'igniteui-react';
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
] as const;

materialIcons.forEach(([name, path]) =>
  registerIcon(name, `https://unpkg.com/material-design-icons@3.0.1/${path}`, 'material')
);

const navRoutes = routes.filter((r: any) => r.text);

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

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
      </header>
      <div className={!drawerOpen ? 'app__body app--mini' : 'app__body'}>
        <IgrNavDrawer className="app__drawer" open position="relative">
          {navRoutes.map((route: any) => (
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
