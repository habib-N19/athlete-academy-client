import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'

const MyClasses = () => {
  const { user } = useAuth()
  const [classes, setClasses] = useState([])
  // TODO: use Axios
  // TODO:use react query
  // const[]
  useEffect(() => {
    axios
      .get(
        `https://sports-summer-camp-server-side-habib-n19.vercel.app/instructors/classes/${user.email}`
      )
      .then(res => {
        const data = res.data
        console.log(data)
        setClasses(data)
      })
  }, [classes])
  const handleUpdate = id => {
    console.log(id)
  }
  const handleDelete = id => {
    console.log(id)
  }

  return (
    <div className='h-screen mt-20'>
      {/* table data */}
      <div className='flex flex-col'>
        <div className='-m-1.5 overflow-x-auto'>
          <div className='p-1.5 min-w-full inline-block align-middle'>
            <div className='border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900'>
              <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                <caption className='my-6 font-bold dark:text-white uppercase'>
                  My Classes
                </caption>
                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                  {classes.map(c => (
                    <tr
                      key={c._id}
                      className='hover:bg-gray-100 dark:hover:bg-gray-700'
                    >
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                        Class Name :{c.name}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        Available Seat: {c.seat}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        Price: {c.price}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        Status: {c.status}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        Total Enrolled: 30
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        {/* TODO: make modal to update */}
                        <Link
                          // to={`/dashboard/myClasses/updateClass/${_id}`}
                          to='/dashboard/myClasses/updateClass'
                          className='text-blue-500 hover:text-blue-700'
                          // handleUpdate={handleUpdate}
                        >
                          Update
                        </Link>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        <button
                          onClick={() => handleDelete(_id)}
                          className='text-blue-500 hover:text-blue-700'
                        >
                          Delete
                        </button>
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

export default MyClasses
