import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
					(route, i) => <li key={i} className={state.activeItem === i ? 'active' : ''}><NavLink onClick={() => handleClick(i)} exact to={route.path}>{route.text}</NavLink></li>
				)}
			</ul>
		</nav>
	)
}