import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { Helmet } from 'react-helmet-async'
import SocialLogin from '../shared/SocialLogin/SocialLogin'

const SignUp = () => {
  const { createUser } = useAuth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
      })
      .catch(error => console.error(error))
  }
  return (
    <section className='bg-white'>
      <Helmet>
        <title>Athlete Academy | Register</title>
      </Helmet>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24'>
          <div className='xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto'>
            <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl'>
              Sign up to Athlete Academy
            </h2>
            <p className='mt-2 text-base text-gray-600'>
              Already have an account?{' '}
              <Link
                to='/login'
                title=''
                className='font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700'
              >
                Login
              </Link>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className='mt-8'>
              <div className='space-y-5'>
                <div>
                  <label className='text-base font-medium text-gray-900'>
                    Full Name{' '}
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      {...register('name', { required: true })}
                      name='name'
                      placeholder='Enter your full name'
                      className='block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                    />
                    {errors.name && (
                      <span className='text-red-600'>Name is required</span>
                    )}
                  </div>
                </div>
                <div>
                  <label className='text-base font-medium text-gray-900'>
                    Photo Url
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      {...register('photo', { required: true })}
                      name='photo'
                      placeholder='Enter your photo url'
                      className='block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                    />
                    {errors.photo && (
                      <span className='text-red-600'>Photo is required</span>
                    )}
                  </div>
                </div>
                <div>
                  <label className='text-base font-medium text-gray-900'>
                    Email address
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='email'
                      {...register('email', { required: true })}
                      name='email'
                      placeholder='Enter email to get started'
                      className='block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                    />
                    {errors.email && (
                      <span className='text-red-600'>Email is required</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className='text-base font-medium text-gray-900'>
                    {' '}
                    Password{' '}
                  </label>
                  <div className='mt-2.5'>
                    {/* TODO: confirm password- */}

                    <input
                      type='password'
                      {...register('password', {
                        required: true,
                        minLength: 6,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                      })}
                      placeholder='Enter your password'
                      className='block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                    />
                    {errors.password?.type === 'required' && (
                      <p className='text-red-600'>Password is required</p>
                    )}
                    {errors.password?.type === 'minLength' && (
                      <p className='text-red-600'>
                        Password minimum 6 characters
                      </p>
                    )}
                    {errors.password?.type === 'pattern' && (
                      <p className='text-red-600'>
                        Your password should have at least: one Uppercase one
                        lower case, one number and one special character.
                      </p>
                    )}
                  </div>
                </div>

                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    name='agree'
                    id='agree'
                    className='w-5 h-5 text-blue-600 bg-white border-gray-200 rounded'
                  />

                  <label className='ml-3 text-sm font-medium text-gray-500'>
                    I agree to Athlete Academy’s
                    <Link
                      to='/terms'
                      title=''
                      className='text-blue-600 hover:text-blue-700 hover:underline'
                    >
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link
                      to='/policy'
                      title=''
                      className='text-blue-600 hover:text-blue-700 hover:underline'
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <div>
                  <input
                    value='Create Account'
                    type='submit'
                    className='inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700'
                  ></input>
                </div>
              </div>
            </form>

            <div className='mt-3 space-y-3'>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8'>
          <div>
            <img
              className='w-full mx-auto'
              src='https://cdn.rareblocks.xyz/collection/celebration/images/signup/1/cards.png'
              alt=''
            />

            <div className='w-full max-w-md mx-auto xl:max-w-xl'>
              <h3 className='text-2xl font-bold text-center text-black'>
                Design your own card
              </h3>
              <p className='leading-relaxed text-center text-gray-500 mt-2.5'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp
