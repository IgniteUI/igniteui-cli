import { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  IgrIcon,
  IgrNavDrawer,
  IgrNavDrawerItem,
  registerIcon,
} from "igniteui-react";
import { AuthProvider, useAuth } from "./authentication/AuthContext";
import { LoginBar } from "./authentication/components/LoginBar";
import { routes } from "./app-routes";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./app.css";

const materialIcons = [
  ['home', 'action/svg/production/ic_home_24px.svg'],
  ['menu', 'navigation/svg/production/ic_menu_24px.svg'],
  ['apps', 'navigation/svg/production/ic_apps_24px.svg'],
  ['code', 'action/svg/production/ic_code_24px.svg'],
  ['build', 'action/svg/production/ic_build_24px.svg'],
  ['palette', 'image/svg/production/ic_palette_24px.svg'],
] as const;

materialIcons.forEach(([name, path]) =>
  registerIcon(name, `https://unpkg.com/material-design-icons@3.0.1/${path}`, "material")
);

function AppContent() {
  const name = "$(name)";
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [drawerPosition, setDrawerPosition] = useState<"relative" | "start">("relative");

  const visibleRoutes = useMemo(() => {
    return routes.filter((route) => {
      if (!route.path || !route.text) return false;
      if ((route as any).requiresAuth && !currentUser) return false;
      return true;
    });
  }, [currentUser]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1025px)");
    const updateDrawerState = () => {
      setDrawerOpen(mediaQuery.matches);
      setDrawerPosition(mediaQuery.matches ? "relative" : "start");
    };

    updateDrawerState();
    mediaQuery.addEventListener("change", updateDrawerState);

    return () => mediaQuery.removeEventListener("change", updateDrawerState);
  }, []);

  const handleRouteClick = (path: string) => {
    navigate(path);

    if (window.matchMedia("(max-width: 1024px)").matches) {
      setDrawerOpen(false);
    }
  };

  return (
    <div className="app">
      <header className="app__navbar">
        <button
          className="app__menu-button"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setDrawerOpen((open) => !open)}
        >
          <IgrIcon name="menu" collection="material" />
        </button>
        <h1 className="app__title">{name}</h1>
        <div className="app__navbar-spacer" />
        <LoginBar />
      </header>
      <div className="app__body">
        <IgrNavDrawer
          className="app__drawer"
          open={drawerOpen}
          position={drawerPosition}
        >
          {visibleRoutes.map((route) => (
            <IgrNavDrawerItem
              key={route.path}
              active={location.pathname === route.path}
              onClick={() => handleRouteClick(route.path)}
            >
              <IgrIcon
                slot="icon"
                name={route.icon || "home"}
                collection="material"
                style={{
                  color: location.pathname === route.path ? "#0075D2" : undefined,
                }}
              />
              <span slot="content">{route.text}</span>
            </IgrNavDrawerItem>
          ))}
        </IgrNavDrawer>
        <main className="content">
          <Outlet />
        </main>
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
