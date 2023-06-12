import React from 'react'
import { GrUserAdmin } from 'react-icons/gr'
import { FaChalkboardTeacher, FaShieldAlt } from 'react-icons/fa'
import useUsers from '../../../../hooks/useUsers'
import axios from 'axios'
import Swal from 'sweetalert2'

const ManageUsers = () => {
  const [users, refetch] = useUsers()

  const handleAdmin = user => {
    console.log(user)
    axios
      .patch(`http://localhost:5000/users/admin/${user._id}`)
      .then(res => {
        const data = res.data
        console.log(data)

        if (data.modifiedCount) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch(error => console.error(error))
  }
  const handleInstructor = user => {
    axios
      .patch(`http://localhost:5000/users/instructor/${user._id}`)
      .then(res => {
        const data = res.data
        console.log(data)

        if (data.modifiedCount) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch(error => console.error(error))
  }
  return (
    <div>
      manage users
      {/* table */}
      <div className='flex flex-col'>
        <div className='-m-1.5 overflow-x-auto'>
          <div className='p-1.5 min-w-full inline-block align-middle'>
            <div className='border overflow-hidden shadow dark:shadow-gray-900 rounded dark:border-gray-700'>
              <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                <thead className='bg-gray-50 dark:bg-gray-700'>
                  <tr className=' text-black dark:text-white '>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium '
                    >
                      #
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                        {index + 1}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        {user.name}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        {user.email}
                      </td>
                      <td className='px-6 py-4 text-blue-500 hover:text-blue-700 whitespace-nowrap text-right text-sm font-medium uppercase'>
                        {user.role}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        {(user.role == 'admin' && (
                          <button
                            disabled
                            className='btn btn-warning hover:btn-secondary mr-3'
                          >
                            <FaShieldAlt></FaShieldAlt>
                            <p>Make Admin</p>
                          </button>
                        )) || (
                          <button
                            onClick={() => handleAdmin(user)}
                            className='btn btn-warning hover:btn-secondary mr-3'
                          >
                            <FaShieldAlt></FaShieldAlt>
                            <p>Make Admin</p>
                          </button>
                        )}
                        {(user.role == 'instructor' && (
                          <button disabled className='btn btn-accent '>
                            <FaChalkboardTeacher></FaChalkboardTeacher>
                            <p>Make Instructor</p>
                          </button>
                        )) || (
                          <button
                            onClick={() => handleInstructor(user)}
                            className='btn btn-accent '
                          >
                            <FaChalkboardTeacher></FaChalkboardTeacher>
                            <p>Make Instructor</p>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
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
