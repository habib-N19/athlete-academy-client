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
        <div className='grid grid-cols-1 md:grid-cols-4'>
          <div className='grid grid-cols-1 col-span-3 gap-4 md:grid-cols-3 w-11/12 mx-auto'>
            {/* dumb me !! couldn't run a map over an array! because i was using class word! now after one hour i know it is a stored word for js!! */}
            {classData.map(cd => (
              <div
                className='border shadow-xl h-[600px] rounded transition transform hover:scale-105'
                key={cd._id}
              >
                <div className='flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
                  {/* <img
                    className='w-full h-auto rounded-t-xl'
                    src={cd.classPhoto}
                    alt='Image Description'
                  /> */}
                  <div className='p-4 md:p-5'>
                    <h3 className='text-lg font-bold text-gray-800 dark:text-white'>
                      {cd.name}
                    </h3>
                    <p className='mt-1 text-gray-800 dark:text-gray-400'>
                      {cd.instructor}
                    </p>
                    <div className='flex justify-between'>
                      <p className='mt-5 text-lg font-semibold text-gray-500 dark:text-gray-500'>
                        Price: ${cd.Price}
                      </p>
                      <p className='mt-5 text-lg font-semibold text-gray-500 dark:text-gray-500'>
                        Available Seat: {cd.seat}
                      </p>
                    </div>
                    {/* TODO:make this button private */}
                    {cd.seat == 0 && (
                      <button
                        disabled
                        className='btn btn-success hover:btn-accent bottom mt-4'
                      >
                        Select Class
                      </button>
                    )}
                    {cd.seat !== 0 && (
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
