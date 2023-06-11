import React, { useEffect, useState } from 'react'

import Flicking from '@egjs/react-flicking'
import { AutoPlay, Perspective } from '@egjs/flicking-plugins'
import '@egjs/react-flicking/dist/flicking.css'
const Instructors = () => {
  const [data, setData] = useState([])
  const plugins = [
    new Perspective({ rotate: 0.5 }),
    new AutoPlay({
      duration: 800,
      direction: 'NEXT',
      stopOnHover: true
    })
  ]
  useEffect(() => {
    fetch('http://localhost:5000/instructors')
      .then(res => res.json())
      .then(data => {
        setData(data.slice(0, 6))
        console.log(data)
      })
  }, [])
  return (
    <div>
      {/* TODO:customize the card, adding card info,  */}
      All the instructors
      <Flicking circular={true} plugins={plugins}>
        {data.map(cardData => (
          <div
            className='card-panel w-[400px] h-[300px] bg-white flex items-center justify-center text-black text-4xl'
            key={cardData._id}
          >
            {cardData.name}
          </div>
        ))}
      </Flicking>
      ;
    </div>
  )
}

export default Instructors
