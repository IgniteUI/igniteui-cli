import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent';
import NavigationHeader from './components/navigation-header/index';
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
        <NavigationHeader
        routes={routes}>
        </NavigationHeader>
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
