import Flicking from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import { AutoPlay } from '@egjs/flicking-plugins'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const TopClasses = ({ horizontal = true }) => {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/classes/top').then(res => {
      const data = res.data
      console.log(data)
      setClasses(data)
    })
  }, [])
  const plugins = [
    new AutoPlay({
      duration: 2000,
      direction: 'NEXT',
      stopOnHover: true
    })
  ]
  return (
    // TODO:change images,
    <div className='w-10/12 mx-auto my-20'>
      <h2 className='text-4xl text-center mb-6'>Top Classes</h2>

      <Flicking plugins={plugins} horizontal={horizontal} circular={true}>
        {classes.map(card => (
          <div
            key={card._id}
            // TODO:change bg animation transition
            className='w-full h-[400px] card hover:bg-base-100 shadow-xl image-full transition transform hover:scale-110 hover:text-white'
          >
            {/* TODO: change card info */}
            <figure>
              <img
                src={card.photo}
                className='w-full h-full object-cover opacity-100'
                alt='Shoes'
              />
            </figure>
            {/* TODO: implement card with instructors image */}
            <div className='card-body mx-auto mt-20 '>
              <h2 className='card-title dark:text-white text-2xl'>
                {card.name}
              </h2>
              <p className='text-xl dark:text-white '>
                Instructor: {card.instructor}
              </p>

              <div className='justify-center transition-opacity duration-300  card-actions'>
                <Link to='/classes' className='btn btn-primary'>
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Flicking>
    </div>
  )
}

export default TopClasses
