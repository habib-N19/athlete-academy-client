import React, { useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const { user, logOut } = useAuth()
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.error(error))
  }
  const navBarItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/instructors'>Instructors</Link>
      </li>
      <li>
        <Link to='/classes'>Classes</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
    </>
  )

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
          >
            {navBarItems}
          </ul>
        </div>
        <Link to='/' className='text-xl normal-case btn btn-ghost'>
          Athlete Academy
        </Link>
      </div>
      <div className='hidden navbar-center md:flex'>
        <ul className='px-1 menu menu-horizontal'>{navBarItems}</ul>
      </div>
      <div className='navbar-end'>
        {user && (
          <div className='dropdown dropdown-end'>
            <label
              tabIndex={0}
              className='btn btn-ghost btn-circle avatar] mr-4'
            >
              <div className='w-[40px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <img src={user.photoURL} className='w-full rounded-full' />
              </div>
            </label>
            <ul
              tabIndex={0}
              className='p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 md:hidden'
            >
              <li>
                <button onClick={handleLogOut} className='btn btn-secondary '>
                  LogOut
                </button>
              </li>
            </ul>
          </div>
        )}
        {user ? (
          <>
            {/* TODO:explore react button */}
            <button onClick={handleLogOut} className='hidden btn md:flex'>
              LogOut
            </button>
          </>
        ) : (
          <li>
            <Link className='sm:flex' to='/login'>
              Login
            </Link>
          </li>
        )}
      </div>
    </div>
  )
}

export default NavBar
