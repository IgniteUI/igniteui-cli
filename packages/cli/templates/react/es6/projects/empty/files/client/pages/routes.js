import React from 'react';
import { Router, browserHistory } from 'react-router/es6';
import App from 'containers/App';
//import { default as createdRoutes } from './routesComponent';
import data from './routesTemplate.js';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}
function loadRoute(cb) {
  return (module) => cb(null, module.default);
}
var p = [];
for (var i = 0; i < data.length; i++) {
    var element = data[i];
    var folder = element["folder"];
   
     
   var currentObj = { 
      "path": element["path"],
      "folder": element["folder"],
      "getComponent":  function(location, cb) {
        //It's possible to pass a partial expression to import() - https://webpack.js.org/guides/migrating/#dynamic-expressions
        //D.P. Must have intial path for dynamic load to work and must match file as there's no extra compilation
        System.import(`./${this.folder}`).then((module) => {
          cb(null, module.default);
        })
        .catch(errorLoading);
      }
    };
  
    p.push(currentObj);
}


//console.log("Created routes: " + createdRoutes);
const routes = {
  component: App,
  childRoutes: p
};
//console.log(" App :" + routes.component +" Created routes: " + routes.childRoutes);
//console.log([
 // { path: '/', getComponent(location, cb) { System.import('pages/Home').then(loadRoute(cb)).catch(errorLoading); } },
 // { path: '/numericeditor', getComponent(location, cb) { System.import('pages/NumericEditor').then(loadRoute(cb)).catch(errorLoading); } },
//  { path: '/combo', getComponent(location, cb) { System.import('pages/Combo').then(loadRoute(cb)).catch(errorLoading); } }
//]);
//console.log(p);
//console.log(routes.childRoutes[2]);
export default () => <Router history={browserHistory} routes={routes} />;
