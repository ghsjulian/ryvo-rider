import React from 'react'
import { Navigate,useNavigate ,Outlet} from 'react-router-dom'

const AuthProvider = () => {
  const isAuth = true
  
  return isAuth ? <Outlet /> : <Navigate to="/login" replace/>
}

export default AuthProvider