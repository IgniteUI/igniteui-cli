import { Route, Routes } from "react-router-dom";
import { routes } from "./app-routes";

export default function App() {

	function createRoutes(config) {
		return config.map((route, index) => (
			<Route key={index} path={route.path} element={route.element}>
				{route.children && createRoutes(route.children)}
			</Route>
		));
	}

	return (
		<div className="app">
			<div className="content">
				<Routes>
					{createRoutes(routes)}
				</Routes>
			</div>
		</div>
	)
}