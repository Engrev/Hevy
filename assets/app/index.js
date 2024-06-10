import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
//import reportWebVitals from './reportWebVitals';
var root = ReactDOM.createRoot(document.getElementById('app'));
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));