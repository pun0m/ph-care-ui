import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Replace this with your actual authentication logic
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

const PrivateRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;