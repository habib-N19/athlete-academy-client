import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useUsers = () => {
  const {
    data: user = [],
    isLoading: loading,
    refetch
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios.get(
        ' https://sports-summer-camp-server-side-habib-n19.vercel.app/users'
      )
      return res.data
    }
  })
  return [user, refetch]
}

export default useUsers
