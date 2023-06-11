import React, { useEffect, useState } from 'react'
import TopClasses from '../Home/TopClasses/TopClasses'

const Classes = () => {
  const [cardData, setCardData] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/classes')
      .then(res => res.json())
      .then(data => {
        setCardData(data.slice(0, 6))
        console.log(data)
      })
  }, [])
  return (
    <div className='pt-20 mt-2'>
      <div>
        <h3 className='text-3xl text-center uppercase'>Classes </h3>
        <div className='grid grid-cols-1 md:grid-cols-4'>
          <div className='grid grid-cols-1 col-span-3 gap-3 md:grid-cols-3'>
            {cardData.map(cdta => (
              <div className='border shadow-xl card' key={cdta._id}>
                <div className='card-body'>
                  <h2>{cdta.Name}</h2>
                  <p>{cdta.Instructor}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='invisible overflow-hidden align-middle border md:visible md:col-span-1'>
            <TopClasses horizontal={false}></TopClasses>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classes
