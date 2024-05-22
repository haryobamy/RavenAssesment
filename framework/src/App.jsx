import { useEffect } from 'react';
import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import { Suspensed } from './component/ErrorBoundary/Suspense';
import Auth from './page/Login';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window)
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: 0,
      });
  }, [location.pathname]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspensed>
            <Dashboard />
          </Suspensed>
        }
      />
      <Route
        path="/login"
        element={
          <Suspensed>
            <Auth />
          </Suspensed>
        }
      />
      <Route path="*" element={<Navigate to="/auth" />} />{' '}
    </Routes>
  );
}

export default App;
