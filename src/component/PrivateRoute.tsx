import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import getToken from '../config/constants/getToken';

function PrivateRoute() {
  const token = getToken();
  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
