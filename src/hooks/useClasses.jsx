import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useClasses = () => {
  const {
    data: classData = [],
    isloading: loading,
    refetch
  } = useQuery({
    queryKey: ['classData'],
    queryFn: async () => {
      // TODO: how to use common axios base url for non protected api end points!!
      const res = await fetch(
        'https://sports-summer-camp-server-side-habib-n19.vercel.app/classes'
      )
      // console.log(res)
      return res.json()
    }
  })
  return [classData, loading, refetch]
}

export default useClasses
