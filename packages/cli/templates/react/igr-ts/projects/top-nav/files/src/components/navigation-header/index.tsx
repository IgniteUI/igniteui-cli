import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

export default function NavigationHeader({ routes }: any) {
  const initialActiveItem = useMemo(() => {
    const currentRoute = window.location.pathname || '/';
    return routes.findIndex((route: { path: string; }) => route.path === currentRoute);
  }, [routes]);

  const [activeItem, setActiveItem] = useState(initialActiveItem);

  function handleClick(index: any) {
    setActiveItem(index);
  }

  return (
    <nav>
      <ul>
        {routes.map(
          (route: any, i: any) => <li key={i} className={activeItem === i ? 'active' : ''}><Link onClick={() => handleClick(i)} to={route.path}>{route.text}</Link></li>
        )}
      </ul>
    </nav>
  )
}
