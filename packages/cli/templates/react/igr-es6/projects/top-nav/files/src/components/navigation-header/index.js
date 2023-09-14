import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationHeader extends Component {
	state = {
		activeItem: null
	}

	handleClick(index) {
		this.setState({
			activeItem: index
		})
	}

	componentWillMount() {
		let currentRoute = window.location.href.split(window.location.origin)[1];
		if (!currentRoute) {
			currentRoute = '/'
		}
		const activeItem = this.props.routes.findIndex((route) => route.path === currentRoute);
		this.setState({
			activeItem
		});
	}

	render() {
		return (
			<nav>
				<ul>
					{this.props.routes.map(
						(route, i) => <li key={i} className={this.state.activeItem === i ? 'active' : ''}><NavLink onClick={() => this.handleClick(i)} exact to={route.path}>{route.text}</NavLink></li>
					)}
				</ul>
			</nav>
		)
	}
} 