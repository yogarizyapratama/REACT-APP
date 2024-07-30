import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
  const token = useSelector((state) => state.auth.token);

  return token ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
