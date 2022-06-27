import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

function PrivateRoute() {
  const authenticated = useAppSelector((state) => state.loginReducer.isAuthenticated);
  return authenticated ? <Outlet /> : <Navigate to="login" />;
}

export default PrivateRoute;
