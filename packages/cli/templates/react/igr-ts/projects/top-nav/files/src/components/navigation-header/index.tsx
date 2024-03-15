import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavigationHeader({ routes }) {
  const [state, setState] = useState({ activeItem: null });

  function handleClick(index) {
    setState({ activeItem: index });
  }

  useEffect(() => {
    let currentRoute = window.location.href.split(window.location.origin)[1];
    if (!currentRoute) {
      currentRoute = '/'
    }
    const activeItem = routes.findIndex((route) => route.path === currentRoute);
    setState({ activeItem });
  }, [routes]);

  return (
    <nav>
      <ul>
        {routes.map(
          (route, i) => <li key={i} className={state.activeItem === i ? 'active' : ''}><Link onClick={() => handleClick(i)} to={route.path}>{route.text}</Link></li>
        )}
      </ul>
    </nav>
  )
}
