import React from 'react'
import { FaCheckCircle, FaClock, FaTimesCircle } from 'react-icons/fa'
const ManageClasses = () => {
  return (
    <div>
      manage Classes
      {/* class table */}
      <div className='flex flex-col'>
        <div className='-m-1.5 overflow-x-auto'>
          <div className='p-1.5 min-w-full inline-block align-middle'>
            <div className='border shadow overflow-hidden dark:border-gray-700'>
              <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                <thead className='bg-gray-50 dark:bg-gray-700'>
                  <tr className='divide-x divide-gray-200 dark:divide-gray-700'>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                    >
                      Image
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                    >
                      Class Name
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                    >
                      Instructor
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase'
                    >
                      Seat
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                  <tr>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                      Image
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                      BasketBall
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                      John Wick
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                      john@pistol.com
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                      40
                    </td>

                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                      $ 66
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                      Status
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-center text-sm font-medium'>
                      {/* <a className='text-blue-500 hover:text-blue-700' href='#'>
                        Delete
                      </a> */}
                      <div className='inline-flex rounded-md shadow-sm '>
                        <button
                          type='button'
                          title='Approved'
                          className='hover:scale-110 py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400'
                        >
                          <FaCheckCircle></FaCheckCircle>
                        </button>
                        <button
                          type='button'
                          title='Pending'
                          className='hover:scale-110 py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:rounded focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400'
                        >
                          <FaClock />
                        </button>
                        <button
                          type='button'
                          title='Denied'
                          className='hover:scale-110 py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400'
                        >
                          <FaTimesCircle />
                        </button>
                      </div>
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

export default ManageClasses
