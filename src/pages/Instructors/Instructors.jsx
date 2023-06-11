import React, { useEffect, useState } from 'react'

const Instructors = () => {
  const [cartData, setCardData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/instructors')
      .then(res => res.json())
      .then(data => {
        setCardData(data)
        console.log(data)
      })
  }, [])
  return (
    <div className='grid grid-cols-1 pt-8 md:grid-cols-3'>
      {cartData.map(cData => (
        <div className='card w-[400px] border' key={cData._id}>
          <div className='card-body'>{cData.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Instructors
