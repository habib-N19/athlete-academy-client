import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex w-full outline'>
      <div class='flex outline-dashed'>
        <div class='flex flex-col bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600'>
          <nav class='flex flex-col space-x-2'>
            <NavLink
              to='/dashboard/selectedClasses'
              className={({ isActive }) =>
                isActive
                  ? 'active dark:bg-gray-800 dark:text-gray-400'
                  : 'default hover:text-gray-700 hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
              }
            >
              My Selected Classes
            </NavLink>
            <NavLink
              to='/dashboard/enrolled'
              className={({ isActive }) =>
                isActive
                  ? 'active dark:bg-gray-800 dark:text-gray-400'
                  : 'default hover:text-gray-700 hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
              }
            >
              Enrolled Classes
            </NavLink>
            <NavLink
              to='/dashboard/addClass'
              className={({ isActive }) =>
                isActive
                  ? 'active dark:bg-gray-800 dark:text-gray-400'
                  : 'default hover:text-gray-700 hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
              }
            >
              Add Class
            </NavLink>
            <NavLink
              to='/dashboard/manageUsers'
              className={({ isActive }) =>
                isActive
                  ? 'active dark:bg-gray-800 dark:text-gray-400'
                  : 'default hover:text-gray-700 hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
              }
            >
              manageUsers
            </NavLink>
            <NavLink
              to='/dashboard/manageClasses'
              className={({ isActive }) =>
                isActive
                  ? 'active dark:bg-gray-800 dark:text-gray-400'
                  : 'default hover:text-gray-700 hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
              }
            >
              manageClasses
            </NavLink>
          </nav>
        </div>
      </div>
      <div className='mx-auto'>
        <Outlet></Outlet>
      </div>
      {/* 2 */}
    </div>
  )
}

export default Dashboard
