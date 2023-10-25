import { Route, Routes } from "react-router-dom";
import NavigationHeader from "../components/navigation-header";
import { routes } from './app-routes';
import "./App.css";

export default function App() {
	const name = "$(name)";

	function createRoutes(config) {
		return config.map((route, i) => (
			<Route key={i} path={route.path} element={route.element}>
				{route.children && createRoutes(route.children)}
			</Route>
		));
	}
	
	return (
			<div className="app">
        <div className="app__name">{name}</div>
          <NavigationHeader routes={routes}></NavigationHeader>
          <div className="content">
            <Routes>
				{createRoutes(routes)}
            </Routes>
          </div>
			</div>
	);
}
