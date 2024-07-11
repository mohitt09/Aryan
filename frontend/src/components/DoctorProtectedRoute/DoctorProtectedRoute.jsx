// src/components/DoctorProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const DoctorProtectedRoute = ({ children }) => {
 const docToken = sessionStorage.getItem('docToken');

 if (!docToken) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />; // Adjust the path as necessary
 }

 // If authenticated, render the children components
 return children;
};

export default DoctorProtectedRoute;