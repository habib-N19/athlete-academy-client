import React from 'react'
import useAuth from '../hooks/useAuth'
import useAdmin from '../hooks/useAdmin'
import { Navigate, useLocation } from 'react-router-dom'

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const [admin, isAdminLoading] = useAdmin()
  const location = useLocation()
  if (loading || isAdminLoading) {
    return <progress className='progress w-50'></progress>
  }
  if (user && admin) {
    return children
  }
  return <Navigate to='/' state={{ from: location }} replace></Navigate>
}

export default AdminRoute
