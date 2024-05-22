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
import { Provider } from 'react-redux';
import { store } from './constant/redux/store.js';

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
    <Provider store={store}>
      <RouterProvider router={router} />{' '}
    </Provider>
  </React.StrictMode>
);
