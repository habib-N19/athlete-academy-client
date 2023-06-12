import React from 'react'
import { Link } from 'react-router-dom'

const MyClasses = () => {
  // TODO: use Axios
  // TODO:use react query
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
                  <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                      Class Name
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                      Available Seat: 45
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                      Price: 40
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                      Status: Pending
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
