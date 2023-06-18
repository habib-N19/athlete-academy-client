import React from 'react'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useInstructor = () => {
  // `http://localhost:5000/users/instructor/${user?.email}`
  const { user } = useAuth()
  //   const [axiosSecure] = useAxiosSecure()
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ['isInstructor', user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/users/instructor/${user?.email}`
      )
      return res.data.instructor
    }
  })
  return [isInstructor, isInstructorLoading]
}
export default useInstructor
