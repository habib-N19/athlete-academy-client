import React from 'react'
import useAuth from './useAuth'
// import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useAdmin = () => {
  const { user } = useAuth()
  //   const [axiosSecure] = useAxiosSecure()
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://sports-summer-camp-server-side-habib-n19.vercel.app/users/admin/${user?.email}`
      )
      return res.data.admin
    }
  })
  return [isAdmin, isAdminLoading]
}

export default useAdmin
