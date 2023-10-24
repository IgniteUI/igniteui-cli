import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './app/App';
import 'react-app-polyfill/ie11';

/** Required in IE11 for Charts */
Number.isNaN = Number.isNaN || function(value) {
    return value !== value;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
