import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './app/app';
import { routes } from "./app/app-routes";
import 'react-app-polyfill/ie11';

const basename = import.meta.env.VITE_BASENAME || '/';

/** Required in IE11 for Charts */
Number.isNaN = Number.isNaN || function(value) {
  return value !== value;
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [...routes]
  }
],
{
  basename: basename
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
