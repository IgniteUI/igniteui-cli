import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './app/app';
import { routes } from "./app/app-routes";
import 'react-app-polyfill/ie11';
import 'igniteui-webcomponents/themes/light/material.css';

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
