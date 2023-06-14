import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const usePending = () => {
  const { data: pendingClasses = [], refetch } = useQuery({
    queryKey: ['pendingClasses'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/pending')
      return res.data
    }
  })
  return [pendingClasses, refetch]
}

export default usePending
