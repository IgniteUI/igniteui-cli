import { Outlet } from "react-router-dom";
import { routes } from './app-routes';
import NavigationHeader from "../components/navigation-header";
import "./app.css";

export default function App() {
	const name = "$(name)";
	
	return (
		<div className="app">
			<div className="app__name">{name}</div>
			<NavigationHeader routes={routes}></NavigationHeader>
			<div className="content">
				<Outlet />
			</div>
		</div>
	);
}
