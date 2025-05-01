import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import CustomerToolPage from './CustomerToolPage';
import { useLoginContext } from './AppContextProvider';

export default function AppRoutes() {
  const { isLoggedIn } = useLoginContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ?
              <Navigate to="/dashboard" replace /> :
              <LoginForm />
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ?
              <Dashboard /> :
              <Navigate to="/" replace />
          }
        />
        <Route
          path="/customer_tool"
          element={
            isLoggedIn ?
              <CustomerToolPage /> :
              <Navigate to="/" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}