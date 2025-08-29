import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import { AuthProvider, AuthContext } from './context/AuthContext';

function AppRoutes() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      {/* Login page */}
      <Route
        path="/"
        element={user ? <Navigate to="/home" replace /> : <LoginPage />}
      />

      {/* Home layout route */}
      <Route
        path="/home/*"
        element={user ? <HomePage /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
