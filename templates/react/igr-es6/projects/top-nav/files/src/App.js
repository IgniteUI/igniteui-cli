import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent';

import routes from './routes.json';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="app">
        <nav>
          <ul>
            {routes.map((route, i) => <li key={i}><NavLink exact to={route.path}>{route.text}</NavLink></li>)}
          </ul>
        </nav>
        <div className="content">
          <Switch>
            {routes.map((route, i) => <Route exact key={i} path={route.path} component={asyncComponent(() =>  import("" + route.componentPath))} />)}
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
