import React from 'react'
import { FaCheckCircle, FaClock, FaTimesCircle } from 'react-icons/fa'
import useClasses from '../../../../hooks/useClasses'
import usePending from '../../../../hooks/usePending'
import axios from 'axios'
const ManageClasses = () => {
  const [pendingClasses, refetch] = usePending()
  console.log(pendingClasses)
  const handlePending = cd => {
    console.log(cd)
    const { name, instructor, price, seat, email } = cd
    const newClass = {
      name,
      instructor,
      price,
      seat,
      status: 'approved',
      instructorEmail: email
    }
    axios.post('http://localhost:5000/classes', newClass).then(res => {
      const data = res.data
      console.log(data.insertedId)
      axios.patch(`http://localhost:5000/pending/${cd._id}`).then(res => {
        const data = res.data
        console.log(data)
        refetch()
      })
    })
  }

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
                    {/* <th
                      scope='col'
                      className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase'
                    >
                      Email
                    </th> */}
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
                  {pendingClasses.map(cd => (
                    <tr key={cd._id}>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        <img src={cd.photo} alt='' />
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        {cd.name}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        {cd.instructor}
                      </td>
                      {/* <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        {cd?.Email || 'none'}
                      </td> */}
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        {cd.seat}
                      </td>

                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        ${cd.price}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        {cd.status}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-center text-sm font-medium'>
                        {/* <a className='text-blue-500 hover:text-blue-700' href='#'>
                        Delete
                      </a> */}
                        <div className='inline-flex rounded-md shadow-sm '>
                          <button
                            type='button'
                            title='approved'
                            disabled={cd.status == 'approved'}
                            className='hover:scale-110 py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:rounded focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400'
                          >
                            <FaClock
                              className={
                                cd.status == 'approved'
                                  ? 'text-orange-600'
                                  : 'text-black'
                              }
                            />
                            <small>Approved</small>
                          </button>

                          <button
                            type='button'
                            onClick={() => handlePending(cd)}
                            title='Approve Class?'
                            disabled={cd.status == 'pending'}
                            className='hover:scale-110 py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400'
                          >
                            {cd.status == 'pending' ? (
                              <>
                                {' '}
                                <FaCheckCircle className='text-orange-600'></FaCheckCircle>
                                <small>Approve Class?</small>{' '}
                              </>
                            ) : (
                              <>
                                <FaCheckCircle></FaCheckCircle>
                                <small>Approved Class</small>
                              </>
                            )}
                          </button>

                          <button
                            type='button'
                            title='Denied'
                            className='hover:scale-110 py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400'
                          >
                            <FaTimesCircle />
                            <small>Deny Class</small>
                          </button>
                        </div>
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

export default ManageClasses
