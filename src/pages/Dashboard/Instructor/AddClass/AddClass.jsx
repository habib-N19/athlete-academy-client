import React from 'react'

const AddClass = () => {
  return (
    <div className='h-screen mx-auto text-center '>
      <h3 className='mt-6 text-4xl text-orange-400'>Add New Class</h3>

      {/* class form */}
      <form className='p-16 mt-20 space-y-6 border border-red-500 shadow-2xl card'>
        <div>
          <div className='rounded-md shadow-sm sm:flex '>
            <span className='inline-flex items-center w-full px-4 py-3 -mt-px -ml-px text-sm text-gray-500 border border-gray-200 min-w-fit bg-gray-50 first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400'>
              Class Name
            </span>
            <input
              type='text'
              className='relative block w-full px-4 py-3 -mt-px -ml-px text-sm border-gray-200 rounded-lg shadow-sm md:mr-3 pr-11 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
            />

            <label htmlFor='file-input' className='sr-only'>
              Choose Image
            </label>
            <input
              type='file'
              name='file-input'
              id='file-input'
              className='block w-full text-sm border border-gray-200 rounded-md shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400'
            />
          </div>
        </div>
        <div>
          <div className='rounded-md shadow-sm md:space-x-3 sm:flex'>
            <input
              type='text'
              class='opacity-70 pointer-events-none py-3 px-4 block w-full bg-gray-50 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
              defaultValue='Instructors Name'
              disabled
              readOnly
            />
            <input
              type='text'
              class='opacity-70 pointer-events-none py-3 px-4 block w-full bg-gray-50 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
              defaultValue='Instructors Email'
              disabled
              readonly
            />
          </div>
        </div>
        <div>
          <div className='rounded-md shadow-sm md:space-x-3 sm:flex'>
            <div className=''>
              <label for='hs-leading-multiple-add-on' class='sr-only'>
                Multiple add-on
              </label>
              <div class='flex rounded-md shadow-sm'>
                <div class='px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600'>
                  <span class='text-sm text-gray-500 dark:text-gray-400'>
                    Available Seat
                  </span>
                </div>

                <input
                  type='number'
                  id='hs-leading-multiple-add-on'
                  name='inline-add-on'
                  class='py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md rounded-l-none text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                />
              </div>
            </div>
            <div>
              <label for='hs-leading-multiple-add-on' class='sr-only'>
                Multiple add-on
              </label>
              <div class='flex rounded-md shadow-sm'>
                <div class='px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600'>
                  <span class='text-sm text-gray-500 dark:text-gray-400'>
                    Price
                  </span>
                </div>
                <div class='px-4 inline-flex items-center min-w-fit border border-r-0 border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600'>
                  <span class='text-sm text-gray-500 dark:text-gray-400'>
                    $
                  </span>
                </div>
                <input
                  type='number'
                  id='hs-leading-multiple-add-on'
                  name='inline-add-on'
                  class='py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md rounded-l-none text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddClass
