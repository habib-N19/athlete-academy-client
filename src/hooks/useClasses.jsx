import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useClasses = () => {
  const {
    data: classes = [],
    isloading: loading,
    refetch
  } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      // TODO: how to use common axios base url for non protected api end points!!
      const res = await axios.get('http://localhost:5000/classes')
      return res.data
    }
  })
  return <div></div>
}

export default useClasses
