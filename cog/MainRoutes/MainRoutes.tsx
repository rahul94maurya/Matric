import React from 'react'
import { Route, Routes } from 'react-router-dom'

// const SignUp = React.lazy(() => import('../components/screens/Login/Login'))
const MainRoutes = () => {
  return (
        <React.Suspense>
            <Routes>
                {/* <Route path='' element={<Login/>}/>,
                <Route path='/login' element={<Login/>}/>,
                <Route path='*' element={<Login/>}/> */}
            </Routes>
        </React.Suspense>
  )
}

export default MainRoutes