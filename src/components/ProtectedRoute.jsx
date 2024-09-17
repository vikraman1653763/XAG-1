// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth.js'; // Import authentication utility

const ProtectedRoute = ({ element: Component }) => {
  return isAuthenticated() ? <Component /> : <Navigate to="/Login" />;
};

export default ProtectedRoute;
