import React, { useEffect, useState } from 'react'
import TopClasses from '../Home/TopClasses/TopClasses'
import useClasses from '../../hooks/useClasses'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'
import Swal from 'sweetalert2'
import useCart from '../../hooks/useCart'
import { useLocation, useNavigate } from 'react-router-dom'
import useUsers from '../../hooks/useUsers'

const Classes = () => {
  const [classData] = useClasses()
  console.log(classData)
  const [, refetch] = useCart()
  const { user } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  // console.log(classData)
  // {
  //   classData.map(classCard => console.log(classCard))
  // }
  // // if(classes){
  // //   {class.map(className=>console.log(class))}

  // }

  // sending selected item to server and also to save on local storage
  const handleAddToCart = cd => {
    console.log(cd)

    if (user && user.email) {
      const cartItem = {
        email: user.email,
        classId: cd._id,
        name: cd.name,
        price: cd.price,
        seat: cd.seat,
        instructor: cd.instructor
      }
      axios
        .post(
          ' https://sports-summer-camp-server-side-habib-n19.vercel.app/carts',
          cartItem
        )
        .then(res => {
          const data = res.data
          console.log(data)
          if (data.insertedId) {
            refetch()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Class selected.',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    } else {
      navigate('/login', { state: { from: location } })
    }
  }
  return (
    <div className='pt-20 mt-2'>
      <div>
        <h3 className='text-3xl text-center uppercase'>Classes </h3>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 w-11/12 mx-auto'>
          {/* dumb me !! couldn't run a map over an array! because i was using class word! now after one hour i know it is a stored word for js!! */}
          {classData.map(cd => (
            <div
              key={cd._id}
              className={`card w-96 shadow-xl ${
                cd.availableSeats == 0 ? 'bg-red-700' : 'bg-base'
              }
            
            `}
            >
              <figure>
                <img src={cd.photo} alt='Shoes' />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>
                  {cd.name}
                  <div className='badge badge-accent'>NEW</div>
                </h2>
                <p>Instructor: {cd.instructor}</p>
                <div className='card-actions justify-end'>
                  <div className='badge badge-outline text-red-600 py-3'>
                    Available Seat: {cd.availableSeats}
                  </div>
                  <div className='badge badge-outline py-3  font-bold '>
                    Price: ${cd.price}
                  </div>
                </div>
                {cd.availableSeats == 0 && (
                  <button
                    disabled
                    className='btn btn-success hover:btn-accent bottom mt-4'
                  >
                    Select Class
                  </button>
                )}
                {cd.availableSeats !== 0 && (
                  <button
                    onClick={() => {
                      handleAddToCart(cd)
                    }}
                    className='btn btn-success hover:btn-accent bottom mt-4'
                  >
                    Select Class
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Classes
