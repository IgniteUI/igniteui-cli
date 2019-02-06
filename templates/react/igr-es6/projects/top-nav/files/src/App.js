import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent';
import RouterNav from './router/index';
import routes from './routes.json';
import './App.css';


class App extends Component {

	name = "$(name)";
  render() {
    return (
      <Router>
      <div className="app">
	  <div className="app__name">
        {this.name}
        </div>
        <RouterNav
        routes={routes}>
        </RouterNav>
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
