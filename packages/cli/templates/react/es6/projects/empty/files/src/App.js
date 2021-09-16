import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import asyncComponent from "./hoc/asyncComponent";
import NavigationHeader from "./components/navigation-header/index";
import routes from "./routes.json";
import "./App.css";

import "jquery";
import "jquery-ui";
// TODO: Dynamically add the required global resources ones in the app and not for each component separately
// // // CSS files
// import "@infragistics/ignite-ui-full/en/css/themes/infragistics/infragistics.theme.css";
// import "@infragistics/ignite-ui-full/en/css/structure/infragistics.css";

// // // Ignite UI Required Combined JavaScript Files
// import "@infragistics/ignite-ui-full/en/js/infragistics.core.js";
// import "@infragistics/ignite-ui-full/en/js/infragistics.lob.js";
// import "@infragistics/ignite-ui-full/en/js/infragistics.dv.js";

// Implementation
// Ignite UI Required CSS files TODO: Update styles at the same step as Updating packages
// import "ignite-ui/css/themes/infragistics/infragistics.theme.css";
// import "ignite-ui/css/structure/infragistics.css";
// $(igniteImports) // TODO: Optionally check these dynamically and add based new component adding if needed
// import "ignite-ui/js/infragistics.core-lite";
// import "ignite-ui/js/infragistics.lob-lite.js";
// import "@infragistics/ignite-ui-full/en/js/infragistics.dv.js"; // TODO Maybe just uncomment this if needed?

$(igniteImports);

const name = "igr-es66";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__name">{name}</div>
        <NavigationHeader routes={routes}></NavigationHeader>
        <div className="content">
          <Switch>
            {routes.map((route, i) => (
              <Route
                exact
                key={i}
                path={route.path}
                component={asyncComponent(() =>
                  import("" + route.componentPath)
                )}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// igr-es6 template, where class is used instead of the new functional style
// class App extends Component {
//   name = "igr-es66";
//   render() {
//     return (
//       <Router>
//         <div className="app">
//           <div className="app__name">{this.name}</div>
//           {/* <NavigationHeader routes={routes}></NavigationHeader> */}
//           <div className="content">
//             <Switch>
//               {routes.map((route, i) => (
//                 <Route
//                   exact
//                   key={i}
//                   path={route.path}
//                   component={asyncComponent(() =>
//                     import("" + route.componentPath)
//                   )}
//                 />
//               ))}
//             </Switch>
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
