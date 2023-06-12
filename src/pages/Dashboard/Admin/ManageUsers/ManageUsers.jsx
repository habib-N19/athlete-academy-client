import React from 'react'
import { GrUserAdmin } from 'react-icons/gr'
import { FaChalkboardTeacher, FaShieldAlt } from 'react-icons/fa'

const ManageUsers = () => {
  return (
    <div>
      manage users
      {/* table */}
      <div class='flex flex-col'>
        <div class='-m-1.5 overflow-x-auto'>
          <div class='p-1.5 min-w-full inline-block align-middle'>
            <div class='border overflow-hidden shadow dark:shadow-gray-900 rounded dark:border-gray-700'>
              <table class='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                <thead class='bg-gray-50 dark:bg-gray-700'>
                  <tr className=' text-black dark:text-white '>
                    <th
                      scope='col'
                      class='px-6 py-3 text-left text-xs font-medium '
                    >
                      #
                    </th>
                    <th
                      scope='col'
                      class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
                  <tr>
                    <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                      1
                    </td>
                    <td class='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                      John Lake
                    </td>
                    <td class='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                      lake@pukur.com
                    </td>
                    <td class='px-6 py-4 text-blue-500 hover:text-blue-700 whitespace-nowrap text-right text-sm font-medium'>
                      User
                    </td>
                    <td class='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                      <button className='btn btn-warning mr-3'>
                        <FaShieldAlt></FaShieldAlt>
                        <p>Make Admin</p>
                      </button>
                      <button className='btn btn-accent '>
                        <FaChalkboardTeacher></FaChalkboardTeacher>
                        <p>Make Instructor</p>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageUsers
