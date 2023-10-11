import { Route, Routes } from "react-router-dom";
import NavigationHeader from "./components/navigation-header/index";
import { routes } from './routes';
import "./App.css";

export default function App() {
	const name = "$(name)";
	return (
			<div className="app">
        <div className="app__name">{name}</div>
          <NavigationHeader routes={routes}></NavigationHeader>
          <div className="content">
            <Routes>
              {routes.map((route, i) => (
                <Route key={i} path={route.path} element={route.element} />
              ))}
            </Routes>
          </div>
			</div>
	);
}
