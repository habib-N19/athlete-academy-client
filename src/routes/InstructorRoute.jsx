import React from 'react'
import useInstructor from '../hooks/useInstructor'
import { useLocation } from 'react-router-dom'

const InstructorRoute = () => {
  const { user, loading } = useAuth()
  const [instructor, isInstructorLoading] = useInstructor()
  const location = useLocation()
  if (loading || isInstructorLoading) {
    return <progress className='progress w-50'></progress>
  }
  if (user && instructor) {
    return children
  }
  return <Navigate to='/' state={{ from: location }} replace></Navigate>
}

export default InstructorRoute
