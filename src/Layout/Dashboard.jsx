import React from 'react'
import {
  FaHome,
  FaCheckCircle,
  FaCog,
  FaUsersCog,
  FaPlusCircle
} from 'react-icons/fa'
import { AiOutlineUser, AiFillStar } from 'react-icons/ai'
// import { RiUserGroupLine } from 'react-icons/ri'
import { NavLink, Outlet } from 'react-router-dom'
import useAdmin from '../hooks/useAdmin'
import useInstructor from '../hooks/useInstructor'

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  return (
    <div className=' flex w-full'>
      <div className='flex mt-20 ml-6 h-min sticky'>
        <div className='flex flex-col p-1 transition bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 '>
          {/* TODO: tweak the nav size height  */}
          <nav className='flex flex-col space-x-2 '>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'active dark:bg-gray-800 dark:text-gray-400'
                  : 'default hover:text-gray-700 hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
              }
            >
              <FaHome></FaHome> Home
            </NavLink>
            {isAdmin ? (
              <>
                <NavLink
                  to='/dashboard/manageClasses'
                  className={({ isActive }) =>
                    isActive
                      ? 'active dark:bg-gray-800 dark:text-gray-400'
                      : 'default hover:text-gray-700 hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
                  }
                >
                  <FaCog /> Manage Classes
                </NavLink>
                <NavLink
                  to='/dashboard/manageUsers'
                  className={({ isActive }) =>
                    isActive
                      ? 'active dark:bg-gray-800 dark:text-gray-400'
                      : 'default hover:text-gray-700 hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
                  }
                >
                  <FaUsersCog></FaUsersCog> Manage Users
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to='/dashboard/selectedClasses'
                  className={({ isActive }) =>
                    isActive
                      ? 'active dark:bg-gray-800 dark:text-gray-400'
                      : 'default hover:text-gray-700 hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
                  }
                >
                  <FaCheckCircle></FaCheckCircle> My Selected Classes
                </NavLink>
                <NavLink
                  to='/dashboard/enrolled'
                  className={({ isActive }) =>
                    isActive
                      ? 'active dark:bg-gray-800 dark:text-gray-400'
                      : 'default hover:text-gray-700 hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
                  }
                >
                  <AiFillStar /> Enrolled Classes
                </NavLink>
              </>
            )}
            {isInstructor && (
              <>
                <NavLink
                  to='/dashboard/myClasses'
                  className={({ isActive }) =>
                    isActive
                      ? 'active dark:bg-gray-800 dark:text-gray-400'
                      : 'default hover:text-gray-700 hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
                  }
                >
                  <AiOutlineUser /> My Classes
                </NavLink>
                <NavLink
                  to='/dashboard/addClass'
                  className={({ isActive }) =>
                    isActive
                      ? 'active dark:bg-gray-800 dark:text-gray-400'
                      : 'default hover:text-gray-700 hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
                  }
                >
                  <FaPlusCircle /> Add Class
                </NavLink>
              </>
            )}
          </nav>
        </div>
      </div>
      <div className='mx-auto  '>
        <Outlet></Outlet>
      </div>
      {/* 2 */}
    </div>
  )
}

export default Dashboard
