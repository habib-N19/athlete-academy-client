import React from 'react'
import useCart from '../../../../hooks/useCart'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const SelectedClasses = () => {
  const [cart, refetch] = useCart()

  // delete from cart
  const handleDelete = id => {
    console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        // TODO: have to figure out how to use axios here!! tried but getting 404 error, most probably having async await issues!!
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch()
              Swal.fire('Deleted!', 'Course has been deleted.', 'success')
            }
          })
      }
    })
  }
  return (
    <div className='mt-20'>
      <div className='flex flex-col'>
        <div className='-m-1.5 overflow-x-auto'>
          <div className='p-1.5 min-w-full inline-block align-middle'>
            <div className='border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900'>
              <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                <caption className='my-6 font-bold dark:text-white uppercase'>
                  Selected Classes
                </caption>
                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                  {cart.map(ctItem => (
                    <tr
                      key={ctItem._id}
                      className='hover:bg-gray-100 dark:hover:bg-gray-700'
                    >
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                        {ctItem.name}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        Available Seat: {ctItem.seat}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        Price: $ {ctItem.price}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                        <Link
                          className='btn btn-outline'
                          to='/dashboard/payClass'
                        >
                          Buy Course
                        </Link>
                      </td>

                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        <button
                          onClick={() => handleDelete(ctItem._id)}
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

export default SelectedClasses
