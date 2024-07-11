// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
 const token = sessionStorage.getItem('token');

 if (!token) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
 }

 // If authenticated, render the children components
 return children;
};

export default ProtectedRoute;
