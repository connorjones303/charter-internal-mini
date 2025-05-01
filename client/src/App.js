import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import CustomerView from './CustomerView';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ?
              <Navigate to="/dashboard" replace /> :
              <LoginForm onLogin={handleLogin} />
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ?
              <Dashboard logOut={handleLogOut} /> :
              <Navigate to="/" replace />
          }
        />
        <Route
          path="/dashboard/customer"
          element={
            isLoggedIn ?
              <CustomerView logOut={handleLogOut} /> :
              <Navigate to="/" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;