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
    <div className='grid grid-cols-1 md:grid-cols-3 pt-24'>
      {cartData.map(cData => (
        <div className='card w-[400px] border' key={cData._id}>
          <div className='card-body'>
            <h3>Instructor Name: {cData.name}</h3>
            <p>Num of class: {cData.number_of_classes_taken}</p>
            <img src='' alt='' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Instructors
