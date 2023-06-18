import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import useCart from '../../../hooks/useCart'
import { IoMdSunny, IoMdMoon } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'
import useAdmin from '../../../hooks/useAdmin'
import useInstructor from '../../../hooks/useInstructor'

const NavBar = () => {
  const [theme, setTheme] = useState(true)
  const { user, logOut } = useAuth()
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  const [cart] = useCart()
  console.log(cart.length)
  console.log(cart)

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.error(error))
  }
  const handleThemeToggle = () => {
    setTheme(!theme)
  }
  useEffect(() => {
    document
      .querySelector('html')
      .setAttribute('data-theme', theme ? 'dark' : 'light')
  }, [theme])
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
      {user && (
        <>
          {!isAdmin && !isInstructor && (
            <li>
              <Link to='/dashboard/selectedClasses'>
                <FaShoppingCart /> Cart {cart.length}
              </Link>
            </li>
          )}
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </>
      )}
    </>
  )

  return (
    // TODO: fixing false margin
    <div className='z-10 top-0 left-0 right-0 fixed navbar bg-base-100'>
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
                {/* issue:1- can not resolve async operation to update the display image when logging with email and pass */}
                <img
                  src={user.photoURL}
                  className='w-full rounded-full'
                  alt='profile_img'
                />
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
        {theme ? (
          <button className='px-4 mr-2' onClick={handleThemeToggle}>
            <IoMdSunny></IoMdSunny>
          </button>
        ) : (
          <button className='px-4 mr-2' onClick={handleThemeToggle}>
            <IoMdMoon></IoMdMoon>
          </button>
        )}
      </div>
    </div>
  )
}

export default NavBar
