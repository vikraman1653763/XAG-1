// components/ProtectedRoute.js
<<<<<<< HEAD
import React ,{useEffect}from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../auth.js'; // Import authentication utility

const ProtectedRoute = ({ element: Component }) => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); 
    } })
=======
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth.js'; // Import authentication utility

const ProtectedRoute = ({ element: Component }) => {
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
  return isAuthenticated() ? <Component /> : <Navigate to="/Login" />;
};

export default ProtectedRoute;
