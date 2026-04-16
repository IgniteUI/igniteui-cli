import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavigationHeader({ routes }: any) {
  const location = useLocation();
  const activeItem = useMemo(() => {
    return routes.findIndex((route: { path: string; }) => route.path === location.pathname);
  }, [routes, location.pathname]);

  return (
    <nav>
      <ul>
        {routes.map(
          (route: any, i: any) => <li key={i} className={activeItem === i ? 'active' : ''}><Link to={route.path}>{route.text}</Link></li>
        )}
      </ul>
    </nav>
  )
}
