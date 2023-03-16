import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoutes = () => {
  const loggedUser = localStorage.getItem("data");
  return loggedUser && Object.keys(loggedUser).length ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes