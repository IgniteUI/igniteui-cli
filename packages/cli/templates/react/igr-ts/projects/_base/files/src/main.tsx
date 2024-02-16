import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./app/app-routes";
import App from './app/app';
import 'react-app-polyfill/ie11';

/** Required in IE11 for Charts */
Number.isNaN = Number.isNaN || function(value) {
    return value !== value;
}

const router = createBrowserRouter([
	{
		element: <App />,
		children: [...routes]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
