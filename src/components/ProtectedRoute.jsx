import React from "react";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("userCredentials"));
  return isAuthenticated ? <Outlet /> : <Navigate to="/Login" replace />;
};
