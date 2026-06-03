import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  IgrNavDrawer,
  IgrNavDrawerItem,
  IgrIcon,
  registerIconFromText,
} from 'igniteui-react';
import { routes } from './app-routes';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './app.css';

const icons = [
  {
    name: 'apps',
    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/></svg>',
  },
  {
    name: 'build',
    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>',
  },
  {
    name: 'code',
    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',
  },
  {
    name: 'home',
    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
  },
  {
    name: 'menu',
    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
  },
  {
    name: 'palette',
    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3C7 3 3 6.6 3 11c0 3.3 2.7 6 6 6h1.5c.8 0 1.5.7 1.5 1.5 0 .4-.2.7-.4 1-.2.3-.3.6-.3 1 0 .8.7 1.5 1.5 1.5H13c5 0 9-4 9-9 0-5.5-4-10-10-10zM6.5 11C5.7 11 5 10.3 5 9.5S5.7 8 6.5 8 8 8.7 8 9.5 7.3 11 6.5 11zm3-4C8.7 7 8 6.3 8 5.5S8.7 4 9.5 4s1.5.7 1.5 1.5S10.3 7 9.5 7zm5 0c-.8 0-1.5-.7-1.5-1.5S13.7 4 14.5 4 16 4.7 16 5.5 15.3 7 14.5 7zm3 4c-.8 0-1.5-.7-1.5-1.5S16.7 8 17.5 8 19 8.7 19 9.5 18.3 11 17.5 11z"/></svg>',
  },
];

icons.forEach((icon) => registerIconFromText(icon.name, icon.value, 'material'));

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
      <div className="app__body">
        <IgrNavDrawer className="app__drawer" open={drawerOpen} position="relative">
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
          {navRoutes.map((route: any) => (
            <IgrNavDrawerItem
              key={`mini-${route.path}`}
              slot="mini"
              active={location.pathname === route.path}
              onClick={() => navigate(route.path)}
            >
              <IgrIcon
                slot="icon"
                name={route.icon || 'apps'}
                collection="material"
                style={location.pathname === route.path ? { color: '#0075D2' } : undefined}
              />
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
