import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'
import useAuth from './AuthHook'

const PrivateRoute = () => {
 const {isLoggedIn,statusCheck} = useAuth()
 if(statusCheck) return <h1 className=' text-4xl text-center'>loading...</h1>
 return isLoggedIn ? <Outlet/> : <Navigate to={'/login'}/>
}

export default PrivateRoute
