import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const DashBoardErrorPage = () => {
  const location = useLocation()
  // console.log(location);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-[url('../../../assets/error.png')]">
      <div className='col-span-1 md:col-span-2'>
        <h3>Oops... You don't have permission to :{location.pathname} </h3>
        <p>Please Go To Home Page</p>
        <Link to='/' className='btn btn-primary'>
          HOME
        </Link>
      </div>
      <div className='col-span-1'></div>
    </div>
  )
}

export default DashBoardErrorPage
