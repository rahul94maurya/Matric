import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../components/screens/Forgot-password/ForgotPassword";


const Login = React.lazy(() => import('../components/screens/Login/Login'))
const SignUp = React.lazy(() => import('../components/screens/SignUp/SignUp'))
const MainRoutes = () => {
  return (
        <React.Suspense>
            <Routes>
                <Route path='' element={<Login/>}/>,
                <Route path='/login' element={<Login/>}/>,
                <Route path='/signup' element={<SignUp/>}/>,
                 <Route path="/forgot-password" element={<ForgotPassword />} />,
                <Route path='*' element={<Login/>}/>
            </Routes>
        </React.Suspense>
  )
}
 
export default MainRoutes

