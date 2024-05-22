import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ErrorBoundaryFallback from './component/ErrorBoundary/ErrorBoundaryFallback.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/*"
      element={<App />}
      errorElement={<ErrorBoundaryFallback />}
    />
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />{' '}
  </React.StrictMode>
);
