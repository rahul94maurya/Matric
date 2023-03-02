import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../components/screens/Forgot-password/ForgotPassword";

const Login = React.lazy(() => import("../components/screens/Login/Login"));
const MainRoutes = () => {
  return (
    <React.Suspense>
      <Routes>
        <Route path="" element={<Login />} />,
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />,
        <Route path="*" element={<Login />} />
      </Routes>
    </React.Suspense>
  );
};

export default MainRoutes;
