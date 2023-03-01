import React from 'react'
import { Routes, Route } from 'react-router-dom'



// const Login = React.lazy(() => import('../components/screens/Login'));
// const SignUp = React.lazy(() => import('../components/screens/SignUp/SignUp'))



const MainRoutes = () => {
  return (
    <React.Suspense fallback={<></>}>
      <Routes>
        {/* <Route path='' element={<Login/>}/>,
        <Route path='/login' element={<Login/>}/>,
        <Route path='*' element={<Login/>}/> */}
      </Routes>
    </React.Suspense>
  )
}

export default MainRoutes