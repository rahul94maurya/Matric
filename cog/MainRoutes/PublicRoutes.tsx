import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = () => {
  const loggedUser = localStorage.getItem("data")
  // console.log("publicRoutes",loggedUser)
  return loggedUser && Object.keys(loggedUser).length ? <Navigate to="/dashboard" /> : <Outlet />

}

export default PublicRoutes