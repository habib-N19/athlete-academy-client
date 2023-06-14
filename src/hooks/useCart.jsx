import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from './useAuth'
import axios from 'axios'

const useCart = () => {
  const { user, loading } = useAuth()
  const { data: cart = [], refetch } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axios.get(
        ` https://sports-summer-camp-server-side-habib-n19.vercel.app/carts?email=${user?.email}`
      )

      return response.data
    }
  })

  return [cart, refetch]
}

export default useCart
