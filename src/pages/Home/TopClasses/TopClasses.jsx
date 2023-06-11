import Flicking from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import { AutoPlay } from '@egjs/flicking-plugins'
import React, { useEffect, useState } from 'react'
import image from '../../../../../pics/1.jpg'
const TopClasses = () => {
  const [cardData, setCardData] = useState([])
  const plugins = [
    new AutoPlay({
      duration: 800,
      direction: 'NEXT',
      stopOnHover: true
    })
  ]
//   TODO:use axios and react query here
  useEffect(() => {
    fetch('http://localhost:5000/classes')
      .then(res => res.json())
      .then(data => {
        setCardData(data)
        console.log(data)
      })
  }, [])
  return (
    // TODO:change images, 
    <div className='w-10/12 mx-auto my-20 bg-emerald-200'>
      <h2 className='text-4xl text-center'>Top Classes</h2>

      <Flicking plugins={plugins} circular={true}>
        {cardData.map(card => (
          <div
            key={card._id}
            // TODO:change bg animation transition
            className='w-[400px] h-[200px] mx-6 my-20 card hover:bg-base-100 shadow-xl image-full transition transform hover:scale-110 hover:text-white'
          >
            {/* TODO: change card info */}
            <figure>
                
              <img src={image} className='w-full' alt='Shoes' />
            </figure>
            {/* TODO: implement card with instructors image */}
            <div className='card-body '>
              <h2 className='card-title'>{card.Name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='justify-end transition-opacity duration-300 opacity-0 card-actions hover:opacity-100'>
                <button className=' btn btn-primary'>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </Flicking>
    </div>
  )
}

export default TopClasses
