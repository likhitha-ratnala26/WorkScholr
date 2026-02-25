import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, role: allowedRole }) => {
  const { currentUser } = useContext(AuthContext);

  // Not logged in
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  // Wrong role
  if (currentUser.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;