import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;
  const location = useLocation();

  if (!isAuthenticated && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
