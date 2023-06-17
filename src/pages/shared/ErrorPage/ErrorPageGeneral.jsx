import React from 'react'
import { Link } from 'react-router-dom'
import svg from '.././../../assets/errorpage.svg'
const ErrorPageGeneral = () => {
  return (
    <div className='flex w-11/12 mx-auto justify-center items-center mt-20'>
      <div className='w-1/2'>
        <img src={svg} alt='' />
      </div>
      <div className='w-1/2 space-y-5'>
        <h2 className='text-xl'>Oops....!</h2>
        <h2 className='text-2xl'>404 Not found!! Go back to</h2>
        <Link to='/' className='text-xl btn btn-primary'>
          Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPageGeneral
