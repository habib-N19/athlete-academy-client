import { useQuery } from '@tanstack/react-query'
import React from 'react'

const useAllClass = () => {
  const {
    data: allClass = [],
    isloading: loading,
    refetch
  } = useQuery({
    queryKey: ['allClass'],
    queryFn: async () => {
      // TODO: how to use common axios base url for non protected api end points!!
      const res = await fetch('http://localhost:5000/classes/all')
      // console.log(res)
      return res.json()
    }
  })
  return [allClass, loading, refetch]
}

export default useAllClass
