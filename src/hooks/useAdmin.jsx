import React from 'react'
import useAuth from './useAuth'

const useAdmin = () => {
  const { user } = useAuth()
  return <div></div>
}

export default useAdmin
