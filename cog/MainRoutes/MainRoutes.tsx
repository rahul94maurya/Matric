import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Reporting from "../components/screens/Reporting/Reporting";
import MainContainer from "./MainContainer";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";


const Login = React.lazy(() => import("../components/screens/Login/Login"));
const SignUp = React.lazy(() => import("../components/screens/SignUp/SignUp"));
const ForgotPassword = React.lazy(() => import("../components/screens/Forgot-password/ForgotPassword"));
const Dashboard = React.lazy(() => import('../components/screens/Dashboard/Dashboard'))
const AddEditTeams = React.lazy(() => import('../components/screens/AddEditTeams/AddEditTeams'))


const MainRoutes = () => {
  return (
    <React.Suspense>
      <Routes>
        {/** Public Routes */}
        {/** Wrap all public Route under PublicRoutes element */}
        <Route path="" element={<PublicRoutes />}>
          <Route path="" element={<Login />} />,
          <Route path="/signup" element={<SignUp />} />,
          <Route path="/forgot-password" element={<ForgotPassword />} />,
          <Route path="*" element={<Login />} />
        </Route>


        {/** Protected Routes */}
        {/** Wrap all authenticated Route under ProtectedRoutes element */}
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<MainContainer />}>
            <Route path="/" element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addEditTeams" element={<AddEditTeams />} />
            <Route path="reporting" element={<Reporting />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default MainRoutes;
