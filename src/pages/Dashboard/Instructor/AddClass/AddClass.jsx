import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../../hooks/useAuth'
// import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'
import axios from 'axios'

const AddClass = () => {
  const { user } = useAuth()
  // const [axiosSecure] = useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      status: 'pending',
      enrolled: 0
    }
  })
  const onSubmit = data => {
    console.log(data)
    const {
      className,
      price,
      status,
      enrolled,
      seatAmount,
      instructorName,
      instructorEmail
    } = data
    const newClass = {
      name: className,
      price: parseFloat(price),
      status,
      enrolled,
      seat: parseFloat(seatAmount),
      instructor: instructorName,
      email: instructorEmail
    }
    axios.post('http://localhost:5000/addNew', newClass).then(data => {
      if (data.data.insertedId) {
        reset()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Class added for review',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  return (
    <div className='h-screen mx-auto text-center '>
      <h3 className='mt-6 text-4xl text-orange-400'>Add New Class</h3>

      {/* class form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='p-16 mt-20 space-y-6 border border-red-500 shadow-2xl card'
      >
        <div>
          <div className='rounded-md shadow-sm md:space-x-3 sm:flex'>
            <div className=''>
              <div className='flex rounded-md shadow-sm'>
                <div className='inline-flex items-center px-4 border border-r-0 border-gray-200 min-w-fit rounded-l-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600'>
                  <span className='text-sm text-gray-500 dark:text-gray-400'>
                    Class Name
                  </span>
                </div>

                <input
                  type='text'
                  {...register('className', { required: true })}
                  name='className'
                  className='block w-full px-4 py-3 text-sm border-gray-200 rounded-md rounded-l-none shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                />
              </div>
              {errors.className && (
                <span className='text-red-600'>Class Name is required</span>
              )}
            </div>
            <div>
              <div className='flex rounded-md shadow-sm'>
                <input
                  type='file'
                  name='newClassPhoto'
                  {...register('newClassPhoto', { required: true })}
                  className='block w-full text-sm border border-gray-200 rounded-md shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400'
                />
              </div>
              {errors.newClassPhoto && (
                <span className='text-red-600'>Photo is required</span>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className='rounded-md shadow-sm md:space-x-3 sm:flex'>
            <input
              type='text'
              name='instructorName'
              {...register('instructorName', { required: true })}
              className='block w-full px-4 py-3 text-sm border-gray-200 rounded-md pointer-events-none opacity-70 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
              defaultValue={user.displayName}
              readOnly
            />
            <input
              type='email'
              name='instructorEmail'
              {...register('instructorEmail', { required: true })}
              className='block w-full px-4 py-3 text-sm border-gray-200 rounded-md pointer-events-none opacity-70 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
              defaultValue={user.email}
              readOnly
            />
          </div>
        </div>
        <div>
          <div className='rounded-md shadow-sm md:space-x-3 sm:flex'>
            <div className=''>
              <div className='flex rounded-md shadow-sm'>
                <div className='inline-flex items-center px-4 border border-r-0 border-gray-200 min-w-fit rounded-l-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600'>
                  <span className='text-sm text-gray-500 dark:text-gray-400'>
                    Available Seat
                  </span>
                </div>

                <input
                  type='number'
                  {...register('seatAmount', { required: true })}
                  name='seatAmount'
                  className='block w-full px-4 py-3 text-sm border-gray-200 rounded-md rounded-l-none shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                />
              </div>
              {errors.seatAmount && (
                <span className='text-red-600'>Seat amount is required</span>
              )}
            </div>
            <div>
              <div className='flex rounded-md shadow-sm'>
                <div className='inline-flex items-center px-4 border border-r-0 border-gray-200 min-w-fit rounded-l-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600'>
                  <span className='text-sm text-gray-500 dark:text-gray-400'>
                    Price
                  </span>
                </div>
                <div className='inline-flex items-center px-4 border border-r-0 border-gray-200 min-w-fit bg-gray-50 dark:bg-gray-700 dark:border-gray-600'>
                  <span className='text-sm text-gray-500 dark:text-gray-400'>
                    $
                  </span>
                </div>
                <input
                  type='number'
                  {...register('price', { required: true })}
                  name='price'
                  className='block w-full px-4 py-3 text-sm border-gray-200 rounded-md rounded-l-none shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                />
              </div>
              {errors.price && (
                <span className='text-red-600'>Price is required</span>
              )}
            </div>
          </div>
        </div>
        <input
          type='submit'
          className='inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-gray-800 transition-all border-2 border-gray-900 rounded-md btn hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:text-white dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800'
          value='Add New Class'
        />
      </form>
    </div>
  )
}

export default AddClass
