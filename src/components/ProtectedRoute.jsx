import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, role: allowedRole }) => {
  const { role } = useContext(AuthContext);

  if (!role) {
    return <Navigate to="/" />;
  }

  if (role !== allowedRole) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;