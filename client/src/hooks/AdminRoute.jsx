import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'
import useAuth from './AuthHook'

const AdminRoute = () => {
 const {isLoggedIn,statusCheck,user} = useAuth()
 if(statusCheck) return <h1 className=' text-4xl text-center'>loading...</h1>
 return isLoggedIn && user.isAdmin ? <Outlet/> : <Navigate to={'/'}/>
}

export default AdminRoute