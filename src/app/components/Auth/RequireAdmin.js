import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAdmin = ({ children }) => {
  const location = useLocation();
  try {
    const usuario = JSON.parse(localStorage.getItem('usuarioActivo'));
    if (usuario && usuario.rol === 'admin') {
      return children;
    }
  } catch (e) {
    // ignore parse errors
  }
  // not authorized — redirect to login, preserve attempted location
  return <Navigate to="/inicio-sesion" state={{ from: location }} replace />;
};

export default RequireAdmin;
