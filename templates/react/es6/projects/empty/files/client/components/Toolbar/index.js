import React from 'react';
import { Link } from 'react-router/es6';
import './toolbar.scss';
import data from '../../pages/routesTemplate.js';

var links =[];
for (var i = 0; i < data.length; i++) {
    links.push(
      <Link activeClassName="active" to={data[i].path} key={data[i].text}>
            {data[i].text}
	  </Link>
    )
}

export default () => (
  <nav className="navbar" role="navigation">
      <li className="nav-menu-item-logo"><div>Ignite UI CLI</div></li>
    {links}
  </nav>
);
