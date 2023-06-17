import React from 'react'
import useInstructor from '../hooks/useInstructor'
import { useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const [isInstructor, isInstructorLoading] = useInstructor()
  const location = useLocation()
  if (loading || isInstructorLoading) {
    return <progress className='progress w-50'></progress>
  }
  if (user && isInstructor) {
    return children
  }
  return <Navigate to='/' state={{ from: location }} replace></Navigate>
}

export default InstructorRoute
