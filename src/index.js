import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import App from './App';

import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./errors management/ErrorBoundary";
import Fallback from './errors management/Fallback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary FallbackComponent={Fallback}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

